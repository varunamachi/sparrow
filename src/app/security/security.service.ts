import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from './security.model';
import { purl } from '../basic/url.util';

@Injectable()
export class SecurityService {

    constructor(private http: HttpClient) { }

    registerUser(user: User, password: string): Observable<Object> {
        const url = purl("uman/user/self")
        return this.http.post(url, {"user": user, "password": password});
    }

}
