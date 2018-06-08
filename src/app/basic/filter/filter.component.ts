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

}
