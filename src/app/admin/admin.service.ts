import { Filter } from './../basic/basic.model';
import { HttpClient } from '@angular/common/http';
import { User } from './../security/security.model';
import { Observable } from 'rxjs/Observable';
import { AuthService } from './../security/auth.service';
import { Injectable } from '@angular/core';
import { nurl, murl, aurl, murlx, aurlx } from '../basic/url.util';
import { Result } from '../basic/basic.model';
import { SEvent, EventList, UserList, EventFilterModel, SysStat, CPUStats } from './admin.model';

@Injectable()
export class AdminService {

  constructor(private http: HttpClient,
    private auth: AuthService) {

  }

  getUsers(
    from: number,
    limit: number,
    filter: Filter): Observable<UserList> {
    const url = murlx(from, limit, filter, 'uman/user');
    return this.http.get(url).map(
      (resp: Result<UserList>) => {
        if (resp.ok) {
          return resp.data;
        }
        return { total: 0, data: [] };
      }
    )
  }

  getEvents(
    offset: number,
    limit: number,
    filter: Filter): Observable<EventList> {
    const url = aurlx(offset, limit, filter, 'event');
    return this.http.get(url).map(
      (resp: Result<EventList>) => {
        if (resp.ok) {
          return resp.data;
        }
        return { total: 0, data: [] };
      }
    )
  }

  getSysStats() {
    const url = aurl('system/stats')
    return this.http.get(url).map((resp: Result<SysStat>) => {
      return resp.data;
    })

  }

  getSysInfo() {
    const url = aurl('system/info')
    return this.http.get(url).map((resp: Result<CPUStats>) => {
      return resp.data;
    })
  }


}
