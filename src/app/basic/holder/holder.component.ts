import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-holder',
    templateUrl: './holder.component.html',
    styleUrls: ['./holder.component.css']
})
export class HolderComponent implements OnInit {

    @Input('name') name = '';

    @Input('collapsible') collapsible = true;

    @Input('collapsed') collapsed = false;

    @Input('showNegator') showNegator = true;

    @Input('negate') negate = false;

    @Output('negateChange') negateChange = new EventEmitter();

    @Output('onReset') onReset = new EventEmitter();

    constructor() { }

    ngOnInit() {
    }
}
