import { Message } from 'primeng/components/common/message';
import { Router } from '@angular/router';
import { AuthService, PingResult } from './../auth.service';
import { Component, OnInit } from '@angular/core';
import { MsgService } from '../../basic/msg.service';
import {
    HttpInterceptor,
    HttpRequest,
    HttpHandler,
    HttpEvent,
    HttpErrorResponse,
} from '@angular/common/http'

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

    public userID = '';

    public password = '';

    public registerVisible = false;

    constructor(
        public router: Router,
        private auth: AuthService,
        private msgSrv: MsgService) { }

    ngOnInit() {

    }

    login() {
        const cred = {
            userID: this.userID,
            password: this.password,
        }
        this.auth.login(cred).subscribe(
            (resp: any) => {
                // this.msgSrv.showSuccess('Login succcess!');
                this.router.navigate(['/home']);
            },
            error => {
                if (error instanceof HttpErrorResponse) {
                    const herr = <HttpErrorResponse>error;
                    if (herr.status == 401) {
                        this.msgSrv.showError(
                            'Invalid credentials provided',
                            'Authentication failed!');
                    } else {
                        this.msgSrv.showError(
                            'Unknown error occured',
                            'Authentication failed!');
                    }
                }
            }
        );
    }

    onKeyEvent(event: KeyboardEvent) {
        if (event.charCode === 13) {
            this.login()
        }
    }

    showRegisterDialog() {
        this.registerVisible = true;
    }

}
