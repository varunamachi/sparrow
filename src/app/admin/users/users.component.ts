import { Filter, PaginateEvent } from './../../basic/basic.model';
import { FormatService } from './../../basic/format.service';
import { AdminService } from './../admin.service';
import { Component, OnInit } from '@angular/core';
import { User, AuthLevel } from '../../security/security.model';
import { MsgService } from '../../basic/msg.service';
import { UserList } from '../admin.model';
import { SecurityService } from '../../security/security.service';
import { ConfirmationService } from 'primeng/components/common/confirmationservice';

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
        private msgSrv: MsgService,
        private secSrv: SecurityService,
        private confirmSrv: ConfirmationService) { }

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

    deleteUser(user: User) {
        this.confirmSrv.confirm({
            message: 'Do you really want to delete selected user?',
            header: 'Delete User ' + user.firstName + ' ' + user.lastName,
            icon: 'fa fa-question-circle',
            accept: () => {
                this.secSrv.deleteUser(user.id).subscribe(
                    (res: any) => {
                        this.msgSrv.showSuccess('User deletion successful');
                        this.refresh()
                    },
                    err => {
                        this.msgSrv.showError('Failed to delete user');
                    }
                )
            }
        })

    }

    onUserCreationDone() {
        this.showCreateUserDialog = false;
        this.refresh();
    }

}
