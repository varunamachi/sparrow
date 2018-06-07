import { FilterService } from './../filter.service';
import {
    FilterSpec,
    FilterType,
    Filter,
    Matcher,
    DateRange,
} from './../basic.model';
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

    _spec: FilterSpec[] = [];

    _filter: Filter = new Filter();

    @Input("spec")
    set spec(s: FilterSpec[]) {
        if (s && this._filter) {
            this._spec = s;
            this._filter = this.fserve.fill(this._spec, this._filter);
        }
    }

    @Input("filter")
    set filter(f: Filter) {
        if (f && this._spec) {
            this._filter = this.fserve.fill(this._spec, f);
        }
    }

    @Input('values') values = new Object();

    @Output('filterChange') filterChange = new EventEmitter();

    @Output("onChange") onChange = new EventEmitter();

    constructor(private fserve: FilterService) {

    }

    ngOnInit() {
    }

    changed(field: string) {

    }

    // valueChanged(field: string, values: string[]) {
    //     // this.filter.fields.set(field, values);
    //     this._filter.fields[field] = values;
    //     this.onChange.emit(this._filter);
    // }

    // matcherChanged(field: string, matchAll: boolean, values: string[]) {
    //     // this.filter.lists.set(field, <ArrayMatcher>{
    //     //     matchAll: matchAll,
    //     //     tags: values
    //     // });
    //     this._filter.lists[field] = <Matcher>{
    //         matchAll: matchAll,
    //         fields: values
    //     };
    //     this.onChange.emit(this._filter);
    // }

    // dateRangeChanged(field: string, dateRange: DateRange) {
    //     // this.filter.dates.set(field, dateRange);
    //     console.log(dateRange);
    //     this._filter.dates[field] = dateRange;
    //     this.onChange.emit(this._filter);
    // }

    // booleanChanged(field: string, value: any) {
    //     if (value === null) {
    //         delete this._filter.boolFields[field];
    //     } else {
    //         this._filter.boolFields[field] = value;
    //     }
    //     this.onChange.emit(this._filter);
    // }
}
