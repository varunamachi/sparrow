import { Component, OnInit, Input, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-button',
    templateUrl: './button.component.html',
    styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {

    @Input('icon') icon = '';

    @Input('label') label = '';

    @Input('height') height = '16px';

    @Input('onClick') onClick = new EventEmitter();

    constructor() { }

    ngOnInit() {
    }

}
