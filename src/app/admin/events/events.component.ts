import { FilteredTableComponent } from './../../basic/filtered-table/filtered-table.component';
import { Filter, FilterSpec, FilterType, PaginateEvent, DateRange, FilterEvent, ColSpec, ColType } from './../../basic/basic.model';
import { SEvent } from './../admin.model';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ObjectDetailService } from '../../basic/object-detail.service';

@Component({
    selector: 'app-events',
    templateUrl: './events.component.html',
    styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {

    @ViewChild(FilteredTableComponent) ftable: FilteredTableComponent;

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

    constructor(private objSrv: ObjectDetailService) { }

    ngOnInit() { }

    showEventDetail(event: SEvent) {
        this.objSrv.show(event);
    }
}
