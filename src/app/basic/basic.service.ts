import { Observable } from 'rxjs/Observable';
import { FilterSpec, Result, Filter, CountList, StatPoint, UsageStat, StatType, LabelType } from './basic.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { murlx, murl, nurl } from './url.util';
import * as moment from 'moment';

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
        const url = nurl('gen', dataType);
        return this.http.post(url, data).map((res: Result<void>) => { });
    }

    updateItem(dataType: string, data: any): Observable<void> {
        const url = nurl('gen', dataType);
        return this.http.put(url, data).map((res: Result<void>) => { });
    }

    deleteItem(dataType: string, id: string): Observable<void> {
        const url = nurl('gen', dataType, id);
        return this.http.delete(url).map((res) => { });
    }

    transformToChartModel(sts: UsageStat): any {
        const model = {
            labels: [],
            datasets: [
                {
                    label: 'default',
                    data: [],
                    backgroundColor: [],
                }
            ]
        };
        let index = 0;
        let others = 0;
        const total = sts.values.length > 20 ? 21 : sts.values.length;
        sts.values.forEach((st: StatPoint) => {
            if (sts.type === StatType.Parts
                && index > 20) {
                others += st.count;
            } else {
                model.labels.push(this.toLabelString(st.label, sts.labelType));
                model.datasets[0].data.push(st.count);
                model.datasets[0].backgroundColor.push(
                    this.rainbow(total, index));
            }
            index++;
        });
        if (others != 0) {
            model.labels.push('Others');
            model.datasets[0].data.push(others);
            model.datasets[0].backgroundColor.push(
                'white');
        }
        if (sts.type === StatType.Range) {
            model.datasets[0]['fill'] = false;
            model.datasets[0]['borderColor'] = 'white';
        }
        return model;
    }

    rainbow(numOfSteps: number, step: number): string {
        let r: number, g: number, b: number;
        var h = step / numOfSteps;
        var i = ~~(h * 6);
        var f = h * 6 - i;
        var q = 1 - f;
        switch (i % 6) {
            case 0: r = 1; g = f; b = 0; break;
            case 1: r = q; g = 1; b = 0; break;
            case 2: r = 0; g = 1; b = f; break;
            case 3: r = 0; g = q; b = 1; break;
            case 4: r = f; g = 0; b = 1; break;
            case 5: r = 1; g = 0; b = q; break;
        }
        const c = "#" + ("00" + (~ ~(r * 255)).toString(16)).slice(-2)
            + ("00" + (~ ~(g * 255)).toString(16)).slice(-2)
            + ("00" + (~ ~(b * 255)).toString(16)).slice(-2)
            + "A0";
        return (c);
    }

    toLabelString(label: any, type: LabelType): string {
        if (type === LabelType.Day) {
            return moment(label).format("MMM-DD");
        } else if (type === LabelType.Month) {
            return moment(label).format("YY/MMM");
        } else if (type === LabelType.Year) {
            return moment(label).format("YYYY");
        } else if (type === LabelType.Number) {
            return '' + label;
        }
        return label;
    }
}

