import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'app-filter-page',
    templateUrl: './filter-page.component.html',
    styleUrls: ['./filter-page.component.css']
})
export class FilterPageComponent implements OnInit {
    @Input('filterVisible') filterVisible = true;

    constructor() { }

    ngOnInit() {
    }

}
