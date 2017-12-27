import { HttpClient } from '@angular/common/http';
import { User, AuthLevel, Credential } from './security.model';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'
import { purl } from '../basic/url.util';
import { Result } from '../basic/basic.model';

interface LoginResult {
    token: string;
    user: User;
}

@Injectable()
export class AuthService {

    user: User = null;

    constructor(private http: HttpClient) {
        const usrStr = localStorage.getItem('user');
        if(usrStr) {
            this.user = <User> JSON.parse(usrStr);
        }
    }

    login(creds: Credential) {
        const url = purl('login')
        return this.http.post(url, creds).map(
            (resp: Result) => {
                console.log(resp);
                const lr = <LoginResult> resp.data;
                localStorage.setItem('token', lr.token);
                localStorage.setItem("user", JSON.stringify(lr.user));
                this.user = lr.user;
            },
        )
    }

    isLoggedIn(): boolean {
        //check token for expiry??
        const loggedIn = this.user != null;
        return loggedIn;
        // return true;
    }

}
