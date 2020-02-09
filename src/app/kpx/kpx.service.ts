import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';

import {aurl, murl, purl} from '../basic/url.util';

import {Result, StatContainer, UsageStat} from './../basic/basic.model';
import {Agent, Notice, RecentStat} from './kpx.model';

@Injectable()
export class KpxService {
  constructor(private http: HttpClient) {}

  generateSecret(agent: Agent): Observable<string> {
    const url = aurl('entity/secret');
    return this.http.post(url, agent).map((res: Result<string>) => {
      return res.data;
    });
  }

  getCommodityColNames(): Observable<Object[]> {
    const url = murl('cmtColNames')
    return this.http.get(url).map((res: Result<Object[]>) => {
      return res.data;
    });
  }

  createNotice(notice: Notice): Observable<boolean> {
    const url = aurl('notice');
    return this.http.post(url, notice).map((res: Result<void>) => {
      return res.ok;
    });
  }

  markNoticeAsDone(id: string): Observable<boolean> {
    const url = aurl('notice', id);
    return this.http.put(url, null).map((res: Result<void>) => {
      return res.ok;
    })
  }

  deleteNotice(id: string): Observable<boolean> {
    const url = aurl('notice', id);
    return this.http.delete(url).map((res: Result<void>) => {
      return res.ok;
    })
  }

  getStats(): Observable<StatContainer> {
    const url = aurl('stats/app');
    return this.http.get(url).map((res: Result<StatContainer>) => {
      return res.data;
    });
  }

  recalAndGetStats(): Observable<StatContainer> {
    const url = aurl('stats/app/new');
    return this.http.post(url, null).map((res: Result<StatContainer>) => {
      return res.data;
    });
  }

  getRecentStats(): Observable<RecentStat> {
    const url = aurl('stats/recent');
    return this.http.get(url).map((res: Result<RecentStat>) => {
      return res.data;
    });
  }
}
