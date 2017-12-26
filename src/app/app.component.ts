import { Component, OnInit } from '@angular/core';
import { AuthService } from './security/auth.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

    sidebarShown = true;

    constructor(public auth: AuthService) {

    }

    ngOnInit() {

    }

    onHeaderTrigger() {
        this.sidebarShown = !this.sidebarShown;
    }


}
