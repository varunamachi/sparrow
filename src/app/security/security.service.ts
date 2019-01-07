import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from './security.model';
import { purl, murl, aurl, murlx } from '../basic/url.util';
import { Result } from '../basic/basic.model';

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

    createPassword(
        verID: string,
        userID: string,
        password: string): Observable<Object> {
        const url = purl('uman/user/verify', userID, verID);
        return this.http.post(url, {
            'password': password,
        })
    }

    createUser(user: User): Observable<Object> {
        const url = aurl('uman/user');
        return this.http.post(url, user);
    }

    deleteUser(userID: string): Observable<Object> {
        const url = aurl('uman/user', userID);
        return this.http.delete(url);
    }

    userSelfUpdate(user: User): Observable<boolean> {
        const url = murl('uman/user/', user.id);
        return this.http.put(url, user).map((res: Result<boolean>) => {
            return res.data;
        })
    }
    
    userAdminUpdate(user: User): Observable<boolean> {
        const url = aurl('uman/user/full');
        return this.http.put(url, user).map((res: Result<boolean>) => {
            return res.data;
        })
    }
}
