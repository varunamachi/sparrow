import { Observable } from 'rxjs/Observable';
import { SelectItem } from 'primeng/components/common/selectitem';
import {
    FilterSpec,
    Filter,
    FilterType,
    Matcher,
    DateRange,
    Result
} from './basic.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { murl } from './url.util';

import * as moment from 'moment';

@Injectable()
export class FilterService {

    constructor(private http: HttpClient) { }

    fill(fs: FilterSpec[], ft: Filter): Filter {
        for (let fspec of fs) {
            switch (fspec.type) {
                case FilterType.Array:
                    if (!ft.lists[fspec.field]) {
                        ft.lists[fspec.field] = new Matcher();
                    }
                    break;
                case FilterType.Search:
                    if (!ft.searches[fspec.field]) {
                        ft.searches[fspec.field] = new Matcher();
                    }
                    break;
                case FilterType.Boolean:
                    if (!ft.boolFields[fspec.field]) {
                        ft.boolFields[fspec.field] = null;
                    }
                    break;
                case FilterType.DateRange:
                    if (!ft.dates[fspec.field]) {
                        ft.dates[fspec.field] = {
                            from: new Date(0),
                            to: new Date(),
                        }
                    }
                    break;
                case FilterType.Prop:
                    if (!ft.props[fspec.field]) {
                        ft.props[fspec.field] = [];
                    }
                    break;
                case FilterType.Constant:
                    ft[fspec.type] = fspec.fixedVal;
            }
        }
        return ft;
    }

    transformVals(fs: FilterSpec[], values: Object): Object {
        const vals = new Object();
        for (let fspec of fs) {
            switch (fspec.type) {
                case FilterType.Array:
                case FilterType.Prop:
                    vals[fspec.field] = this.toSelectItems(values[fspec.field]);
                    break;
                case FilterType.Static:
                    vals[fspec.field] = fspec.staticVals;
                    break;
                case FilterType.DateRange:
                    vals[fspec.field] = this.toDateRange(values[fspec.field]);
                    break;
                default:
                    vals[fspec.field] = values[fspec.field];
            }
        }
        return vals;
    }

    toSelectItems(arr: string[]): SelectItem[] {
        const items: SelectItem[] = [];
        if (arr) {
            arr.forEach((item: string) => {
                items.push({
                    label: '' + item,
                    value: item
                });
            })
        }
        return items;
    }

    toDateRange(obj: Object): DateRange {
        return {
            from: moment(obj['from']).toDate(),
            to: moment(obj['to']).toDate(),
        }
    }

    getFilterValues(dtype: string, fspec: FilterSpec[]): Observable<Object> {
        const url = murl('gen', dtype, 'fspec') + '?fspec=' +
            JSON.stringify(fspec);
        return this.http.get(url).map((res: Result<Object>) => {
            return res.data;
        });
    }
}