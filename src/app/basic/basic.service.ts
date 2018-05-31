import { Observable } from 'rxjs/Observable';
import { FilterSpec, FilterVals, Result } from './basic.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { murlx, murl } from './url.util';

@Injectable()
export class BasicService {

    constructor(private http: HttpClient) { }

    getFilterValues(dtype: string, fspec: FilterSpec): Observable<FilterVals> {
        const url = murl('gen/:dataType/fspec');
        return this.http.get(url).map((res: Result<FilterVals>) => {
            return res.data;
        });
    }



}
