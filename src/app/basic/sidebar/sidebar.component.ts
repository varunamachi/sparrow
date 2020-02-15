import {Component, OnInit} from '@angular/core';
import {MenuItem} from 'primeng/components/common/menuitem';

import {AuthService} from './../../security/auth.service';
import {AuthLevel} from './../../security/security.model';

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
      label: 'KMV Proxy',
      icon: 'fa-space-shuttle',
      level: AuthLevel.Admin,
      expanded: true,
      items: new Array<AuthMenuItem>(),
      candidates:
          [
            {
              label: 'App Stats',
              icon: 'fa fa-line-chart',
              level: AuthLevel.Admin,
              routerLink: ['home']
            },
            {
              label: 'Clients',
              icon: 'fa fa-mobile',
              level: AuthLevel.Admin,
              routerLink: ['/kpx/clients']
            },
            {
              label: 'Extraction Sessions',
              icon: 'fa fa-clock-o',
              level: AuthLevel.Admin,
              routerLink: ['/kpx/exs']
            },
            {
              label: 'Commodities',
              icon: 'fa fa-truck',
              level: AuthLevel.Admin,
              routerLink: ['/kpx/cmt']
            },
            {
              label: 'Markets',
              icon: 'fa fa-map-marker',
              level: AuthLevel.Admin,
              routerLink: ['/kpx/mkt']
            },
            {
              label: 'Prices',
              icon: 'fa fa-money',
              level: AuthLevel.Admin,
              routerLink: ['/kpx/prices']
            },
            // {
            //   label: 'Usage Stats',
            //   icon: 'fa fa-line-chart',
            //   level: AuthLevel.Admin,
            //   routerLink: ['/kpx/usage']
            // },
            {
              label: 'Notices',
              icon: 'fa fa-flag',
              level: AuthLevel.Admin,
              routerLink: ['/kpx/notices']
            },
            // {
            //     label: 'Agent List',
            //     icon: 'fa-list-ul',
            //     level: AuthLevel.Admin,
            //     routerLink: ['/kpx/agents']
            // },
          ],
    },
    {
      label: 'Admin',
      icon: 'fa-shield',
      level: AuthLevel.Admin,
      expanded: true,
      items: new Array<AuthMenuItem>(),
      candidates:
          [
            {
              label: 'Users',
              icon: 'fa-users',
              level: AuthLevel.Admin,
              routerLink: ['/admin/users'],
            },
            {
              label: 'Client Errors',
              icon: 'fa-bug',
              level: AuthLevel.Admin,
              routerLink: ['/admin/error'],
            },
            {
              label: 'Events',
              icon: 'fa-gears',
              level: AuthLevel.Admin,
              routerLink: ['/admin/events'],
            },
            {
              label: 'Server',
              icon: 'fa-server',
              level: AuthLevel.Admin,
              routerLink: ['/admin/server'],
            },
          ],
    },
    {
      label: 'Entities',
      icon: 'fa-cubes',
      level: AuthLevel.Monitor,
      expanded: false,
      items: new Array<AuthMenuItem>(),
      candidates:
          [
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
      label: 'God Mode',
      icon: 'fa-sun-o',
      level: AuthLevel.Super,
      expanded: false,
      items: new Array<AuthMenuItem>(),
      candidates:
          [
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

  constructor(private auth: AuthService) {}

  ngOnInit() {
    const refined = [];
    this.ROOTS.forEach((root: AuthMenuItem) => {
      if (this.auth.user.auth <= root.level) {
        refined.push(root);
        this.refine(root)
      }
    });
    this.items = refined;
  }

  refine(parent: AuthMenuItem) {
    parent.candidates.forEach((child: AuthMenuItem) => {
      if (this.auth.user.auth <= child.level) {
        (<AuthMenuItem[]>parent.items).push(child);
        if (child.candidates && child.candidates.length > 0) {
          this.refine(child);
        }
      }
    })
  }
}
