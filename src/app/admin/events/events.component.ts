import { Filter } from './../../basic/basic.model';
import { SEvent } from './../admin.model';
import { MsgService } from './../../basic/msg.service';
import { AdminService } from './../admin.service';
import { FormatService } from './../../basic/format.service';
import { Component, OnInit } from '@angular/core';


@Component({
    selector: 'app-events',
    templateUrl: './events.component.html',
    styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {

    readonly ENTRIES_PER_PAGE = 20;

    events: SEvent[] = []

    from = 0;

    to = this.ENTRIES_PER_PAGE;

    filter = new Filter();

    constructor(
        public fmtSrv: FormatService,
        private adminSrv: AdminService,
        private msgSrv: MsgService) {

    }

    ngOnInit() {
        this.refresh();
    }

    refresh() {
        this.adminSrv.getEvents(this.from, this.to, this.filter).subscribe(
            (events: SEvent[]) => {
                this.events = events;
            },
            err => {
                //@TODO check what error!
                this.msgSrv.showError('Failed to fetch events from server');
            }
        )
    }

}
