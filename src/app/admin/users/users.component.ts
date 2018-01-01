import { FormatService } from './../../basic/format.service';
import { AdminService } from './../admin.service';
import { Component, OnInit } from '@angular/core';
import { User, AuthLevel } from '../../security/security.model';
import { MsgService } from '../../basic/msg.service';

@Component({
    selector: 'app-users',
    templateUrl: './users.component.html',
    styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

    users: User[] = [];

    constructor(private adminSrv: AdminService,
        public fmtSrv: FormatService,
        private msgSrv: MsgService) { }

    ngOnInit() {
        this.adminSrv.getUsers(0, 20).subscribe(
            (users: User[]) => {
                this.users = users;
            },
            err => {
                this.msgSrv.showError('Failed to featch user information',
                'Error! - Manage Users');
            }
        )
    }

}
