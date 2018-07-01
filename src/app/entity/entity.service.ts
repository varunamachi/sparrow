import { Observable } from 'rxjs/Observable';
import { Entity } from './entity.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { nurl } from '../basic/url.util';
import { Result } from '../basic/basic.model';

@Injectable()
export class EntityService {

    constructor(private http: HttpClient) { }

    generateSecret(entity: Entity): Observable<string> {
        const url = nurl('entity/secret');
        return this.http.post(url, entity).map(
            (res: Result<string>) => {
                return res.data;
            });
    }

}
