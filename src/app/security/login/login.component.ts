import { AuthService } from './../auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

    public userID = '';

    public password = '';

    constructor(private auth: AuthService) { }

    ngOnInit() {
    }

    login() {
        const cred = {
            userID: this.userID,
            password: this.password,
        }
        this.auth.login(cred).subscribe(
            (resp: any) => {
                window.alert('logged in');
            },
            err => {
                window.alert(err);
            }
        )
    }

}
