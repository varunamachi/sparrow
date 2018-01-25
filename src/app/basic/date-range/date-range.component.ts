import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import * as moment from 'moment'

@Component({
    selector: 'app-date-range',
    templateUrl: './date-range.component.html',
    styleUrls: ['./date-range.component.css']
})
export class DateRangeComponent implements OnInit {

    @Input('from') from = moment('1990-01-01', 'YYYY-MM-DD').toDate();

    @Input('to') to = moment().toDate();

    // @Output('from_valueChange') fromChanged = new EventEmitter();

    // @Output('to_valueChange') toChanged = new EventEmitter();

    @Input('max') max = moment().toDate();

    @Input('min') min = this.from;

    @Output("onChange") onChange = new EventEmitter();

    constructor() { }

    ngOnInit() {
    }

    changed() {
        this.onChange.emit({ from: this.from, to: this.to });
    }
}
