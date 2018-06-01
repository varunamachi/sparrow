import { FilterSpec, Filter, FilterType, ArrayMatcher, DateRange } from './basic.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class FilterService {

    constructor(private http: HttpClient) { }

    fill(fs: FilterSpec[], ft: Filter): Filter {
        for (let fspec of fs) {
            switch (fspec.type) {
                case FilterType.Array:
                    if (!ft[fspec.field]) {
                        ft[fspec.field] = new ArrayMatcher();
                    }
                    break;
                case FilterType.Boolean:
                    if (!ft[fspec.field]) {
                        ft[fspec.field] = null;
                    }
                    break;
                case FilterType.DateRange:
                    ft[fspec.field] = {
                        from: new Date(0),
                        to: new Date(),
                    }
                    break;
                case FilterType.Value:
                    ft[fspec.field] = [];
                    break;
            }
        }
        return ft;
    }

    makeFilter(fs: FilterSpec[], values: Object): Object {
        const vals = new Object();
        for (let fspec of fs) {
            switch (fspec.type) {
                case FilterType.Array:
                    break;
                case FilterType.Boolean:
                    break;
                case FilterType.DateRange:
                    break;
                case FilterType.Value:
            }
        }
        return vals;
    }
}
