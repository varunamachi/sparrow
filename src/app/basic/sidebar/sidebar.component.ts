import { AuthService } from './../../security/auth.service';
import { AuthLevel } from './../../security/security.model';
import { MenuItem } from 'primeng/components/common/menuitem';
import { Component, OnInit } from '@angular/core';

interface AuthMenuItem extends MenuItem {
    level: AuthLevel;
    candidates?: Array<AuthMenuItem>;
}

@Component({
    selector: 'app-sidebar',
    templateUrl: './sidebar.component.html',
    styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

    readonly ROOTS: AuthMenuItem[] = [
        {
            label: 'Entities',
            icon: 'fa-cubes',
            level: AuthLevel.Monitor,
            expanded: true,
            items: new Array<AuthMenuItem>(),
            candidates: [
                {
                    label: 'List',
                    icon: 'fa-list-ul',
                    level: AuthLevel.Monitor,
                    routerLink: ['/entity/list']
                },
                {
                    label: 'Monitor',
                    icon: 'fa-eye',
                    level: AuthLevel.Monitor,
                    routerLink: ['/entity/monitor'],
                },
                {
                    label: 'Configure',
                    icon: 'fa-gears',
                    level: AuthLevel.Normal,
                    routerLink: ['/entity/configure'],
                },
            ],
        },
        {
            label: 'KMV Proxy',
            icon: 'fa-space-shuttle',
            level: AuthLevel.Admin,
            expanded: true,
            items: new Array<AuthMenuItem>(),
            candidates: [
                {
                    label: 'Agent List',
                    icon: 'fa-list-ul',
                    level: AuthLevel.Admin,
                    routerLink: ['/agent/list']
                },
            ],
        },
        {
            label: 'Admin',
            icon: 'fa-shield',
            level: AuthLevel.Admin,
            expanded: true,
            items: new Array<AuthMenuItem>(),
            candidates: [
                {
                    label: 'Users',
                    icon: 'fa-users',
                    level: AuthLevel.Admin,
                    routerLink: ['/admin/users'],
                },
                {
                    label: 'Events',
                    icon: 'fa-gears',
                    level: AuthLevel.Admin,
                    routerLink: ['/admin/events'],
                },
            ],
        },
        {
            label: 'God Mode',
            icon: 'fa-sun-o',
            level: AuthLevel.Super,
            expanded: true,
            items: new Array<AuthMenuItem>(),
            candidates: [
                {
                    label: 'Settings',
                    icon: 'fa-wrench',
                    level: AuthLevel.Admin,
                    routerLink: ['/super/settings'],
                },
                {
                    label: 'Debug',
                    icon: 'fa-bug',
                    level: AuthLevel.Admin,
                    routerLink: ['/super/debug'],
                },
            ],
        },
    ];

    items: MenuItem[] = [];

    constructor(private auth: AuthService) { }

    ngOnInit() {
        const refined = [];
        this.ROOTS.forEach((root: AuthMenuItem) => {
            if(this.auth.user.auth <= root.level) {
                refined.push(root);
                this.refine(root)
            }
        })
        this.items = refined;
    }

    refine(parent: AuthMenuItem) {
        parent.candidates.forEach((child: AuthMenuItem) => {
            if(this.auth.user.auth <= child.level) {
                (<AuthMenuItem[]>parent.items).push(child);
                if(child.candidates && child.candidates.length > 0) {
                    this.refine(child);
                }
            }
        })
    }
}
