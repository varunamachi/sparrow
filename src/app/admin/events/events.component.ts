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
        // this.refresh();
        // this.populateFilters()
    }

    showEventDetail(event: SEvent) {
        this.objSrv.show(event);
    }
}
