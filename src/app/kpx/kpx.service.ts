import { Result } from './../basic/basic.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Agent } from './kpx.model';
import { Injectable } from '@angular/core';
import { aurl } from '../basic/url.util';

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
}
