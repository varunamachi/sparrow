import {
    ColSpec,
    FilterSpec,
    ItemGetter,
    ItemCountGetter,
    PaginateEvent,
    Filter,
    FilterEvent
} from './../basic.model';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-filtered-table',
    templateUrl: './filtered-table.component.html',
    styleUrls: ['./filtered-table.component.css']
})
export class FilteredTableComponent implements OnInit {

    @Input('colspec') colspec: ColSpec[] = [];

    @Input('fspec') fspec: FilterSpec[] = [];

    @Input('itemGetter') itemGetter: ItemGetter = null;

    @Input('itemCoungGetter') itemCntGetter: ItemCountGetter = null;

    @Input('filter') filter = new Filter();

    @Input('selectionMode') selectionMode: string = 'multiple';

    @Input('selection') selection: any = null;

    @Input('key') key = '_id';

    @Output('selectionChange') selectionChange = new EventEmitter();

    items: any[] = [];

    showFilter = true;

    total = 0;

    perPage = 20;

    constructor() { }

    ngOnInit() {
        this.refresh(0, true);
    }

    paginate(pe: PaginateEvent) {
        this.refresh(pe.first, false)
    }

    filterChanged(event: FilterEvent) {
        this.filter = event.filter;
        this.refresh(0, true)
    }

    refresh(from: number, count = false) {
        if (count) {
            if (this.itemCntGetter && this.itemGetter) {

            }
        } else {
            if (this.itemGetter) {

            }
        }
    }

    onSelect() {
        this.selectionChange.emit(this.selection);
    }
}
