import { ColSpec } from './../basic.model';
import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'app-table',
    templateUrl: './table.component.html',
    styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

    @Input('specs') specs: ColSpec[] = [];

    @Input('items') items: any[] = [];

    constructor() { }

    ngOnInit() {
    }

}
