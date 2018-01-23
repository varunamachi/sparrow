import { Filter, FilterDesc, FilterType, PaginateEvent, DateRange } from './../../basic/basic.model';
import { SEvent, EventList, EventFilterModel } from './../admin.model';
import { MsgService } from './../../basic/msg.service';
import { AdminService } from './../admin.service';
import { FormatService } from './../../basic/format.service';
import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';

@Component({
    selector: 'app-events',
    templateUrl: './events.component.html',
    styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {

    readonly ENTRIES_PER_PAGE = 25;

    readonly PAGE_SHOWN = 5;

    from = 0;

    total = 0;

    showFilter = true;

    events: SEvent[] = [];

    filter = new Filter();

    filterDesc: FilterDesc[] = []

    constructor(
        public fmtSrv: FormatService,
        private adminSrv: AdminService,
        private msgSrv: MsgService) {

    }

    ngOnInit() {
        this.refresh();
        this.populateFilters()
    }

    refresh() {
        // const to = this.from + this.ENTRIES_PER_PAGE;
        this.adminSrv.getEvents(this.from,
            this.ENTRIES_PER_PAGE,
            this.filter).subscribe(
            (el: EventList) => {
                this.events = el.data;
                console.log(el.total);
                this.total = el.total;
            },
            err => {
                //@TODO check what error!
                this.msgSrv.showError('Failed to fetch events from server');
            }
        )
    }

    paginate(event: PaginateEvent) {
        this.from = event.first;
        this.refresh();
    }

    populateFilters() {
        this.adminSrv.getEventFilterModel().subscribe(
            (res: EventFilterModel) => {
                this.filterDesc = [
                    {
                        name: 'Event',
                        type: FilterType.Value,
                        data: res.eventTypes,
                    },
                    {
                        name: 'Users',
                        type: FilterType.Value,
                        data: res.userIDs,
                    },
                    {
                        name: 'Date Range',
                        type: FilterType.DateRange,
                        data: {
                            from: new Date(),
                            to: moment().toDate(),
                        }
                    }
                ]
            }
        )
    }
    // paginate(event: PaginateEvent) {

    //     const last = event.first + event.rows;
    //     const to = this.from + this.FETCH_COUNT;
    //     console.log(event.first, last, this.from, to);
    //     if(last < to && event.first > this.from) {
    //         this.shown = this.events.slice(event.first, last)
    //     } else if(last >= to) {
    //         console.log('one');
    //         this.from = this.from + this.FETCH_COUNT;
    //         this.refresh();
    //     } else if(event.first <= this.from) {
    //         console.log('two');
    //         this.from = this.from - this.FETCH_COUNT;
    //         this.refresh()
    //     }
    // }
}
