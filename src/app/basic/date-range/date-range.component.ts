import { DateRange } from './../basic.model';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import * as moment from 'moment'

@Component({
    selector: 'app-date-range',
    templateUrl: './date-range.component.html',
    styleUrls: ['./date-range.component.css']
})
export class DateRangeComponent implements OnInit {

    // @Input('from') from = moment('1990-01-01', 'YYYY-MM-DD').toDate();

    // @Input('to') to = moment().toDate();

    @Input( 'range' ) range = {
        from: moment(0).toDate(),
        to: moment().add(1, 'days').toDate(),
    };

    @Output('rangeChange') rangeChange = new EventEmitter();

    @Input('max') max = moment().add(1, 'days').toDate();

    @Input('min') min = moment(0).toDate();

    constructor() { }

    ngOnInit() {
    }

    changed() {
        this.rangeChange.emit({ from: this.range.from, to: this.range.to });
    }
}
