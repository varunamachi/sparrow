import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'app-holder',
    templateUrl: './holder.component.html',
    styleUrls: ['./holder.component.css']
})
export class HolderComponent implements OnInit {

    @Input('name') name = '';

    @Input('collapsible') collapsible = true;

    @Input('collapsed') collapsed = false;

    constructor() { }

    ngOnInit() {
    }
}
