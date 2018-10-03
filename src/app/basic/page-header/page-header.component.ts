import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'app-page-header',
    templateUrl: './page-header.component.html',
    styleUrls: ['./page-header.component.css']
})
export class PageHeaderComponent implements OnInit {

    @Input('pageName') pageName;

    @Input('placeholder') placeholder = false;

    @Input('icon') icon = 'fa fa-paper-plane'

    constructor() { }

    ngOnInit() {
    }

}
