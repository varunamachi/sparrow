import { HttpClient } from '@angular/common/http';
import { User, AuthLevel, Credential } from './security.model';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { purl } from './cmn/url.util';
import { Result } from './cmn/cmn.model';

@Injectable()
export class AuthService {

    user: User = null;

    constructor(private http: HttpClient) { }

    login(creds: Credential) {
        const url = purl('login')
        return this.http.post(url, creds).subscribe(
            (resp: Result) => {
                //Get the token and user
                //Store the user, also assign
            },
            err => {
                //do simething here...
            }
        )
    }

    isLoggedIn(): boolean {
        //check token for expiry??
        // const loggedIn = this.user != null;
        //Debug
        const loggedIn = true;
        return loggedIn;
    }

}
