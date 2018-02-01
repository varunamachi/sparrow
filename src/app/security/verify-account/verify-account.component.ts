import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SecurityService } from '../security.service';
import { MessageService } from 'primeng/components/common/messageservice';
import { MsgService } from '../../basic/msg.service';

@Component({
    selector: 'app-verify-account',
    templateUrl: './verify-account.component.html',
    styleUrls: ['./verify-account.component.css']
})
export class VerifyAccountComponent implements OnInit {
    verifyID = '';

    userID = '';

    constructor(
        private secSrv: SecurityService,
        private msgSrv: MsgService,
        private router: Router) {

    }

    ngOnInit() {
        const url = new URL(window.location.href);
        this.verifyID = url.searchParams.get('verifyID');
        this.userID = url.searchParams.get('userID');
    }

    verify(event) {
        this.secSrv.createPassword(
            this.verifyID, this.userID, event.data.password).subscribe(
            (res: any) => {
                this.msgSrv.showSuccess("User successfuly veryfied")
                this.router.navigate(['/']);
            },
            err => {
                this.msgSrv.showSuccess("Failed to verify user")
            });
    }

}
