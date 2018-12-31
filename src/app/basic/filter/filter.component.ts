import { MsgService } from './../msg.service';
import { FilterService } from './../filter.service';
import {
    FilterSpec,
    Filter,
} from './../basic.model';
import {
    Component,
    OnInit,
    Input,
    Output,
    EventEmitter,
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

    // _field = '';

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

    values = new Object();

    _dataType = '';

    @Input('dataType')
    set dataType(dt: string) {
        this._dataType = dt;
        this.loadValues();
    }

    @Output('filterChange') filterChange = new EventEmitter();

    // @Output('filterChange') onChanged = new EventEmitter();

    constructor(private fserve: FilterService,
        private msgSrv: MsgService) {

    }

    ngOnInit() {
    }

    changed(field: string) {
        this.loadValues(field);
        this.filterChange.emit(this._filter);
    }

    loadValues(field = '') {
        const filter = this._filter ? this._filter : null;
        this.fserve.getFilterValuesX(
            this._dataType,
            field,
            this._spec,
            filter).subscribe(
                (vals: Object) => {
                    this.values = this.fserve.transformValsX(
                        field,
                        this._spec,
                        this.values,
                        vals);

                },
                err => {
                    this.msgSrv.showError('Failed to retrieve filter values');
                }
            );
    }
}
