import { Filter, FilterSpec, FilterType, PaginateEvent, DateRange, FilterEvent, ColSpec, ColType } from './../../basic/basic.model';
import { SEvent, EventList, EventFilterModel } from './../admin.model';
import { MsgService } from './../../basic/msg.service';
import { AdminService } from './../admin.service';
import { FormatService } from './../../basic/format.service';
import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
import { ObjectDetailService } from '../../basic/object-detail.service';

@Component({
    selector: 'app-events',
    templateUrl: './events.component.html',
    styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {

    readonly FSPEC: FilterSpec[] = [
        {
            name: 'Event',
            field: 'op',
            type: FilterType.Prop,
        },
        {
            name: 'Users',
            field: 'userName',
            type: FilterType.Prop,
        },
        {
            name: 'Date Range',
            field: 'time',
            type: FilterType.DateRange,
        },
        {
            name: 'Is Success',
            field: 'success',
            type: FilterType.Boolean,
        },
        // {
        //     name: 'Tags',
        //     field: 'tags',
        //     type: FilterType.Array,
        // },
        {
            name: 'Search',
            field: 'search',
            type: FilterType.Search,
        },
    ];

    readonly COLSPEC: ColSpec[] = [
        {
            title: 'Operation',
            field: 'op',
            type: ColType.Value,
            width: '35%',
        },
        {
            title: 'User',
            type: ColType.Custom,
            width: '30%',
            valueGetter: (event: SEvent) => {
                return event.userName ? event.userName : event.userID;
            }
        },
        {
            title: 'Success?',
            field: 'success',
            type: ColType.Boolean,
            width: '10%',
        },
        {
            title: 'Time',
            field: 'time',
            type: ColType.Date,
            width: '30%',
        },
        {
            title: 'Ops ',
            type: ColType.Ops,
            width: '5%',
            actions: [
                {
                    icon: 'fa-info',
                    toolTip: 'Show event details',
                    action: (event: SEvent) => {
                        this.objSrv.show(event);
                    }
                }
            ]
        }
    ]

    readonly ENTRIES_PER_PAGE = 25;

    readonly PAGE_SHOWN = 5;

    from = 0;

    total = 0;

    showFilter = true;

    events: SEvent[] = [];

    filter = new Filter();

    filterDesc: FilterSpec[] = []

    constructor(
        public fmtSrv: FormatService,
        private adminSrv: AdminService,
        private msgSrv: MsgService,
        private objSrv: ObjectDetailService) {

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
        // this.adminSrv.getEventFilterModel().subscribe(
        //     (res: EventFilterModel) => {
        //         this.filterDesc = [
        //             {
        //                 name: 'Event',
        //                 field: 'op',
        //                 type: FilterType.Value,
        //                 data: res.eventTypes,
        //             },
        //             {
        //                 name: 'Users',
        //                 field: 'userName',
        //                 type: FilterType.Value,
        //                 data: res.userNames,
        //             },
        //             {
        //                 name: 'Date Range',
        //                 field: 'time',
        //                 type: FilterType.DateRange,
        //                 data: {
        //                     from: new Date(),
        //                     to: moment().toDate(),
        //                 }
        //             },
        //             {
        //                 name: 'Is Success',
        //                 field: 'success',
        //                 type: FilterType.Boolean,
        //             },
        // {
        //     name: 'Tag',
        //     field: 'tag',
        //     type: FilterType.Array,
        //     data: [
        //         'one',
        //         'two',
        //         'three',
        //     ]
        // },
        // {
        //     name: 'Search',
        //     field: 'search',
        //     type: FilterType.Array,
        //     data: [
        //         'k',
        //         'l',
        //         'm',
        //     ]
        // },
        // ]
        // }
        // )
    }

    filterChanged(fe: FilterEvent) {
        this.from = 0;
        this.filter = fe.filter;
        this.refresh();
    }

    showEventDetail(event: SEvent) {
        this.objSrv.show(event);
    }
}
