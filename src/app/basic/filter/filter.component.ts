import { FilterDesc, FilterType, Filter, ArrayMatcher } from './../basic.model';
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
export class FilterComponent implements OnInit, OnChanges {

    @Input("desc") desc: FilterDesc[] = [];

    @Output("filter") changed = new EventEmitter();

    @Input("filter") filter: Filter;

    constructor() { }

    ngOnInit() {
    }

    ngOnChanges(changes: SimpleChanges) {
        if (changes["desc"]) {
            this.desc.forEach((desc: FilterDesc) => {
                switch (desc.type) {
                    case FilterType.Value:
                        this.filter.fields[desc.field] = '';
                        break;
                    case FilterType.Array:
                        this.filter.lists[desc.name] = {
                            matchAll: true,
                            tags: [],
                        }
                        break;
                    case FilterType.DateRange:
                        this.filter.dates[desc.name] = {
                            from: moment('1980-01-01', 'YYYY-MM-DD').toDate(),
                            to: moment().toDate()
                        }
                        break;
                }
            })
        }
    }

    toSelectItems(arr: string[]): SelectItem[] {
        const items: SelectItem[] = [];
        arr.forEach((str: string) => {
            items.push({ label: str, value: str })
        })
        return items;
    }
}
