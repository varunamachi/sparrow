import { ColSpec } from './../basic.model';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

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

    @Output('selectionChange') selectionChange = new EventEmitter();

    constructor() { }

    ngOnInit() {
    }

    onSelect() {
        this.selectionChange.emit(this.selection);
    }

}