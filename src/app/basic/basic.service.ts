import { Observable } from 'rxjs/Observable';
import { FilterSpec, Result } from './basic.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { murlx, murl } from './url.util';

@Injectable()
export class BasicService {

    constructor(private http: HttpClient) { }

    getFilterValues(dtype: string, fspec: FilterSpec): Observable<Object> {
        const url = murl('gen/:dataType/fspec');
        return this.http.get(url).map((res: Result<Object>) => {
            return res.data;
        });
    }



}
