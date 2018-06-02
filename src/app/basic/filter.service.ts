import { SelectItem } from 'primeng/components/common/selectitem';
import {
    FilterSpec,
    Filter,
    FilterType,
    Matcher,
    DateRange
} from './basic.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class FilterService {

    constructor(private http: HttpClient) { }

    fill(fs: FilterSpec[], ft: Filter): Filter {
        for (let fspec of fs) {
            switch (fspec.type) {
                case FilterType.Array:
                case FilterType.Search:
                    if (!ft[fspec.field]) {
                        ft[fspec.field] = new Matcher();
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
                case FilterType.Value:
                    vals[fspec.field] = this.toSelectItems(values[fspec.field]);
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
        arr.forEach((item: string) => {
            items.push({
                label: item,
                value: item
            });
        })
        return items;
    }

    toDateRange(obj: Object): DateRange {
        return {
            from: JSON.parse(obj['from']),
            to: JSON.parse(obj['to']),
        }
    }
}
