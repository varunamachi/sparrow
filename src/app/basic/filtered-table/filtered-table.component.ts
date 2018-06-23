import { MsgService } from './../msg.service';
import { BasicService } from './../basic.service';
import {
    ColSpec,
    FilterSpec,
    ItemGetter,
    ItemCountGetter,
    PaginateEvent,
    Filter,
    FilterEvent,
    CountList
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

    @Input('dataType') dataType = '';

    @Input('key') key = '_id';

    @Output('selectionChange') selectionChange = new EventEmitter();

    items: any[] = [];

    showFilter = true;

    total = 0;

    perPage = 20;

    constructor(private genSrv: BasicService,
        private msgSrv: MsgService) { }

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
        if (this.dataType) {
            if (count) {
                this.genSrv.getItemsWithCount(this.dataType,
                    from,
                    this.perPage,
                    this.filter).subscribe((res: CountList) => {
                        this.total = res.totalCount;
                        this.items = res.data;

                    }, err => {
                        this.msgSrv.showError('Failed to fetch data & count');
                    });
            } else {
                this.genSrv.getItems(this.dataType,
                    from,
                    this.perPage,
                    this.filter).subscribe((res: any[]) => {
                        this.items = res;
                    }, err => {
                        this.msgSrv.showError('Failed to fetch data & count');
                    });
            }
        } else {
            if (count) {
                this.itemCntGetter(this.filter).flatMap((res: number) => {
                    this.total = res;
                    return this.itemGetter(from, this.perPage, this.filter);
                }).subscribe((res: any[]) => {
                    this.items = res;
                }, err => {
                    this.msgSrv.showError('Failed to fetch data & count');
                });
            } else {
                this.itemGetter(from, this.perPage, this.filter).subscribe(
                    (res: any[]) => {
                        this.items = res;
                    }, err => {
                        this.msgSrv.showError('Failed to fetch data & count');
                    });
            }
        }
    }

    onSelect() {
        this.selectionChange.emit(this.selection);
    }
}
