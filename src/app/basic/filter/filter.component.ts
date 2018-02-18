import { FilterDesc, FilterType, Filter, ArrayMatcher, DateRange } from './../basic.model';
import {
    Component,
    OnInit,
    Input,
    Output,
    EventEmitter,
    OnChanges,
    SimpleChanges,
} from '@angular/core';
import { SelectItem } from 'primeng/components/common/selectitem';
import * as moment from 'moment'

@Component({
    selector: 'app-filter',
    templateUrl: './filter.component.html',
    styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {

    @Input("desc") desc: FilterDesc[] = [];

    @Input("filter") filter: Filter = new Filter();

    @Output("onChange") onChange = new EventEmitter();

    constructor() { }

    ngOnInit() {
    }

    toSelectItems(arr: any[]): SelectItem[] {
        const items: SelectItem[] = [];
        arr.forEach((item: any) => {
            if(item.label !== undefined && item.value !== undefined) {
                items.push({ label: item.label, value: item.value })
            } else {
                items.push({ label: item, value: item })
            }
        })
        return items;
    }

    valueChanged(field: string, values: string[]) {
        // this.filter.fields.set(field, values);
        this.filter.fields[field] = values;
        this.onChange.emit(this.filter);
    }

    matcherChanged(field: string, matchAll: boolean, values: string[]) {
        // this.filter.lists.set(field, <ArrayMatcher>{
        //     matchAll: matchAll,
        //     tags: values
        // });
        this.filter.lists[field] = <ArrayMatcher>{
            matchAll: matchAll,
            tags: values
        };
        this.onChange.emit(this.filter);
    }

    dateRangeChanged(field: string, dateRange: DateRange) {
        // this.filter.dates.set(field, dateRange);
        console.log(dateRange);
        this.filter.dates[field] = dateRange;
        this.onChange.emit(this.filter);
    }

    booleanChanged(field: string, value: any) {
        if (value === null) {
            delete this.filter.boolFields[field];
        } else {
            this.filter.boolFields[field] = value;
        }
        this.onChange.emit(this.filter);
    }
}
