import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-verify-account',
    templateUrl: './verify-account.component.html',
    styleUrls: ['./verify-account.component.css']
})
export class VerifyAccountComponent implements OnInit {
    verifyID = '';

    userID = '';

    constructor() { }

    ngOnInit() {
        const url = new URL(window.location.href);
        this.verifyID = url.searchParams.get('verifyID');
        this.userID = url.searchParams.get('userID');
    }

}
