import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../security/auth.service';

@Component({
    selector: 'app-main',
    templateUrl: './main.component.html',
    styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

    sidebarShown = true;

    constructor(public auth: AuthService,
        private router: Router) {

    }

    ngOnInit() {
        if (!this.auth.isLoggedIn()) {
            this.router.navigate(['/']);
        }
    }

    onHeaderTrigger() {
        this.sidebarShown = !this.sidebarShown;
    }

}
