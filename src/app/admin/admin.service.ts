import { Filter } from './../basic/basic.model';
import { HttpClient } from '@angular/common/http';
import { User } from './../security/security.model';
import { Observable } from 'rxjs/Observable';
import { AuthService } from './../security/auth.service';
import { Injectable } from '@angular/core';
import { nurl, murl, aurl } from '../basic/url.util';
import { Result } from '../basic/basic.model';
import { SEvent, EventList, UserList, EventFilterModel } from './admin.model';

@Injectable()
export class AdminService {

    constructor(private http: HttpClient,
        private auth: AuthService) {

    }

    getUsers(
        from: number,
        limit: number,
        filter: Filter): Observable<UserList> {
        const url = murl('uman/user') + '?offset=' + from + '&limit=' + limit
            + "&filter=" + JSON.stringify(filter);
        return this.http.get(url).map(
            (resp: Result) => {
                if (resp.ok) {
                    return <UserList>resp.data;
                }
                return { total: 0, data: [] };
            }
        )
    }

    getEvents(
        offset: number,
        limit: number,
        filter: Filter): Observable<EventList> {
        const url = aurl('admin/event') +
            '?offset=' +
            offset +
            '&limit=' +
            limit +
            "&filter=" + JSON.stringify(filter);
        return this.http.get(url).map(
            (resp: Result) => {
                if (resp.ok) {
                    return <EventList>resp.data;
                }
                return { total: 0, data: [] };
            }
        )
    }

    getEventFilterModel(): Observable<EventFilterModel> {
        const url = aurl('admin/event/filterModel')
        return this.http.get(url).map(
            (resp: Result) => {
                if (resp.ok) {
                    return <EventFilterModel>resp.data;
                }
                return { userNames: [], eventTypes: [] };
            })
    }
}
