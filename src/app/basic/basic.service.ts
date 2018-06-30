import { Observable } from 'rxjs/Observable';
import { FilterSpec, Result, Filter, CountList } from './basic.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { murlx, murl, nurl } from './url.util';

@Injectable()
export class BasicService {

    constructor(private http: HttpClient) { }

    getFilterValues(dtype: string, fspec: FilterSpec): Observable<Object> {
        const url = murl('gen/:dataType/fspec');
        return this.http.get(url).map((res: Result<Object>) => {
            return res.data;
        });
    }

    getItems(dataType: string,
        offset: number,
        limit: number,
        filter: Filter,
        sortField: string): Observable<any[]> {
        const url = murlx(offset, limit, filter, 'gen', dataType, 'list') +
            "&sortField=" + sortField;
        return this.http.get(url).map((res: Result<any>) => {
            return res.data;
        });
    }

    getItemsWithCount(dataType: string,
        offset: number,
        limit: number,
        filter: Filter,
        sortField: string): Observable<CountList> {
        const url = murlx(offset, limit, filter, 'gen', dataType) +
            "&sortField=" + sortField;
        return this.http.get(url).map((res: Result<CountList>) => {
            return res.data;
        });
    }

    getCount(dataType: string, filter: Filter): Observable<number> {
        const url = murlx(null, null, filter, 'gen', dataType);
        return this.http.get(url).map((res: Result<number>) => {
            return res.data;
        });
    }

    createItem(dataType: string, data: any): Observable<void> {
        console.log(data);
        const url = nurl('gen', dataType);
        return this.http.post(url, data).map((res: Result<void>) => {});
    }

    updateItem(dataType: string, data: any): Observable<void> {
        const url = nurl('gen', dataType);
        return this.http.put(url, data).map((res: Result<void>) => {});
    }

    deleteItem(dataType: string, id: string): Observable<void> {
        const url = nurl('gen', dataType, id);
        return this.http.delete(url).map((res) =>{});
    }

}
