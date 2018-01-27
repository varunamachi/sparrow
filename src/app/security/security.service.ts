import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from './security.model';
import { purl, murl } from '../basic/url.util';

@Injectable()
export class SecurityService {

    constructor(private http: HttpClient) { }

    registerUser(user: User, password: string): Observable<Object> {
        const url = purl('uman/user/self')
        return this.http.post(url, { 'user': user, 'password': password });
    }

    resetPassword(
        oldPassword: string,
        newPassword: string): Observable<Object> {
        const url = murl('uman/user/password');
        return this.http.put(url, {
            'oldPassword': oldPassword,
            'newPassword': newPassword,
        })
    }

    createPassword(reqID: string, userID: string, password: string) {

    }
}
