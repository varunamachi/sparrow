import { Result } from './../basic/basic.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Agent, Notice } from './kpx.model';
import { Injectable } from '@angular/core';
import { aurl, murl } from '../basic/url.util';

@Injectable()
export class KpxService {

  constructor(private http: HttpClient) { }

  generateSecret(agent: Agent): Observable<string> {
    const url = aurl('entity/secret');
    return this.http.post(url, agent).map(
      (res: Result<string>) => {
        return res.data;
      });
  }

  getCommodityColNames(): Observable<Object[]> {
    const url = murl("cmtColNames")
    return this.http.get(url).map((res: Result<Object[]>) => {
      return res.data;
    });
  }

  createNotice(notice: Notice): Observable<boolean> {
    const url = aurl("notice");
    return this.http.post(url, notice).map((res: Result<void>) => {
      return res.ok;
    });
  }

  markNoticeAsDone(id: string): Observable<boolean> {
    const url = aurl("notice", id);
    return this.http.put(url, null).map((res: Result<void>) => {
      return res.ok;
    })
  }

  deleteNotice(id: string): Observable<boolean> {
    const url = aurl("notice", id);
    return this.http.delete(url).map((res: Result<void>) => {
      return res.ok;
    })
  }
}
