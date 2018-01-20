import { FilterDesc, FilterType } from './../basic.model';
import {
    Component,
    OnInit,
    Input,
    Output,
    EventEmitter,
    OnChanges,
} from '@angular/core';
import { SelectItem } from 'primeng/components/common/selectitem';

@Component({
    selector: 'app-filter',
    templateUrl: './filter.component.html',
    styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit, OnChanges {

    @Input("desc") desc: FilterDesc[] = [];

    @Output("changed") changed = new EventEmitter();

    constructor() { }

    ngOnInit() {
    }

    ngOnChanges() {

    }

    toSelectItems(arr: string[]): SelectItem[] {
        const items: SelectItem[] = [];
        arr.forEach((str: string) => {
            items.push({ label: str, value: str })
        })
        return items;
    }
}
