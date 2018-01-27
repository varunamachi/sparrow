import { Filter, PaginateEvent } from './../../basic/basic.model';
import { FormatService } from './../../basic/format.service';
import { AdminService } from './../admin.service';
import { Component, OnInit } from '@angular/core';
import { User, AuthLevel } from '../../security/security.model';
import { MsgService } from '../../basic/msg.service';
import { UserList } from '../admin.model';

@Component({
    selector: 'app-users',
    templateUrl: './users.component.html',
    styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

    users: User[] = [];

    readonly ENTRIES_PER_PAGE = 25;

    readonly PAGE_SHOWN = 5;

    from = 0;

    total = 0;

    showFilter = true;

    filter = new Filter();

    showCreateUserDialog = false;

    constructor(private adminSrv: AdminService,
        public fmtSrv: FormatService,
        private msgSrv: MsgService) { }

    ngOnInit() {
        this.refresh();
    }

    refresh() {
        this.adminSrv.getUsers(
            this.from,
            this.ENTRIES_PER_PAGE,
            this.filter).subscribe(
            (ul: UserList) => {
                this.users = ul.data;
                this.total = ul.total;
            },
            err => {
                this.msgSrv.showError('Failed to featch user information',
                    'Error! - Manage Users');
            })
    }

    paginate(event: PaginateEvent) {
        this.from = event.first;
        this.refresh();
    }

}
