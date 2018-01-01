import { HttpClient } from '@angular/common/http';
import { User } from './../security/security.model';
import { Observable } from 'rxjs/Observable';
import { AuthService } from './../security/auth.service';
import { Injectable } from '@angular/core';
import { nurl, murl } from '../basic/url.util';
import { Result } from '../basic/basic.model';

@Injectable()
export class AdminService {

    constructor(private http: HttpClient,
        private auth: AuthService) {

    }

    getUsers(from, limit: number): Observable<User[]> {
        const url = murl('uman/user') + '?offset='+from+'&limit='+limit;
        return this.http.get(url, ).map(
            (resp: Result) => {
                if (resp.ok) {
                    return <User[]>resp.data;
                }
                return new Array<User>();
            }
        )
    }
}
