import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

import {ColAction, ColSpec} from './../basic.model';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  @Input('specs') specs: ColSpec[] = [];

  @Input('items') items: any[] = [];

  @Input('selectionMode') selectionMode: string = 'multiple';

  @Input('selection') selection: any;

  @Input('key') key = '_id';

  @Input('fixedHeight') fixedHeight = null;

  @Output('selectionChange') selectionChange = new EventEmitter();

  @Input('rowsPerPage') rowsPerPage = 0;

  constructor() {}

  ngOnInit() {}

  onSelect() {
    this.selectionChange.emit(this.selection);
  }

  numProps(obj: Object) {
    return Object.keys(obj).length
  }
}
