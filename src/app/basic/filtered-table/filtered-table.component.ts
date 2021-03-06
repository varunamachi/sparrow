import {Component, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';

import {ColSpec, CountList, Filter, FilterEvent, FilterSpec, ItemCountGetter, ItemGetter, PaginateEvent} from './../basic.model';
import {BasicService} from './../basic.service';
import {FilterComponent} from './../filter/filter.component';
import {MsgService} from './../msg.service';

@Component({
  selector: 'app-filtered-table',
  templateUrl: './filtered-table.component.html',
  styleUrls: ['./filtered-table.component.css']
})
export class FilteredTableComponent implements OnInit {
  @ViewChild(FilterComponent) filterComp: FilterComponent;

  @Input('colspec') colspec: ColSpec[] = [];

  @Input('fspec') fspec: FilterSpec[] = [];

  @Input('itemGetter') itemGetter: ItemGetter = null;

  @Input('itemCoungGetter') itemCntGetter: ItemCountGetter = null;

  @Input('filter') filter = new Filter();

  @Input('selectionMode') selectionMode: string = 'multiple';

  @Input('selection') selection: any = null;

  @Input('sortField') sortField = '';

  @Input('key') key = '_id';

  @Input('showFilter') showFilter = true;

  @Output('selectionChange') selectionChange = new EventEmitter();

  @Input('perPage') perPage = 20;

  @Input('dataType')
  set dataType(dt: string) {
    this._dataType = dt;
    this.refresh(0, true);
    // this.filterComp.loadValues();
  }

  _dataType = '';

  items: any[] = [];

  total = 0;

  constructor(private genSrv: BasicService, private msgSrv: MsgService) {}

  ngOnInit() {
    // this.refresh();
  }

  paginate(pe: PaginateEvent) {
    this.refresh(pe.first, false)
  }

  filterChanged(filter: Filter) {
    this.refresh()
  }

  refresh(from: number = 0, count = true) {
    if (!this.itemGetter) {
      if (count) {
        this.genSrv
            .getItemsWithCount(
                this._dataType, from, this.perPage, this.filter, this.sortField)
            .subscribe(
                (res: CountList) => {
                  this.total = res.total;
                  this.items = res.data;
                },
                err => {
                  this.msgSrv.showError('Failed to fetch data & count');
                });
      } else {
        this.genSrv
            .getItems(
                this._dataType, from, this.perPage, this.filter, this.sortField)
            .subscribe(
                (res: any[]) => {
                  this.items = res;
                },
                err => {
                  this.msgSrv.showError('Failed to fetch data & count');
                });
      }
    } else {
      if (count) {
        this.itemCntGetter(this.filter)
            .flatMap((res: number) => {
              this.total = res;
              return this.itemGetter(from, this.perPage, this.filter);
            })
            .subscribe(
                (res: any[]) => {
                  this.items = res;
                },
                err => {
                  this.msgSrv.showError('Failed to fetch data & count');
                });
      } else {
        this.itemGetter(from, this.perPage, this.filter)
            .subscribe(
                (res: any[]) => {
                  this.items = res;
                },
                err => {
                  this.msgSrv.showError('Failed to fetch data & count');
                });
      }
    }
  }

  onSelect() {
    this.selectionChange.emit(this.selection);
  }

  refreshAll() {
    this.refresh();
    this.filterComp.loadValues();
  }
}
