import { FilteredTableComponent } from './../../basic/filtered-table/filtered-table.component';
import { ObjectDetailService } from './../../basic/object-detail.service';
import { FilterSpec,
         FilterType,
         ColSpec,
         ColType } from './../../basic/basic.model';
import { FormatService } from './../../basic/format.service';
import { AdminService } from './../admin.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { User, AuthLevel, UserStatus } from '../../security/security.model';
import { MsgService } from '../../basic/msg.service';
import { SecurityService } from '../../security/security.service';
import { ConfirmationService } from 'primeng/components/common/confirmationservice';
import { AuthService } from '../../security/auth.service';

@Component({
    selector: 'app-users',
    templateUrl: './users.component.html',
    styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

    readonly FSPEC: FilterSpec[] = [
        {
            name: 'Name',
            field: 'fullName',
            type: FilterType.Prop,
        },
        {
            name: 'Role',
            field: 'auth',
            type: FilterType.Static,
            staticVals: [
                { value: AuthLevel.Super, label: 'Super' },
                { value: AuthLevel.Admin, label: 'Admin' },
                { value: AuthLevel.Normal, label: 'Normal' },
                { value: AuthLevel.Monitor, label: 'Monitor' },
                { value: AuthLevel.Outsider, label: 'Outsider' },
            ]
        },
        {
            name: 'Created',
            field: 'created',
            type: FilterType.DateRange,
        },
        {
            name: 'Modified',
            field: 'modified',
            type: FilterType.DateRange,
        },
    ];

    readonly COLSPEC: ColSpec[] = [
        {
            title: 'First Name',
            field: 'firstName',
            type: ColType.Value,
            width: '20%',
        },
        {
            title: 'Last Name',
            field: 'lastName',
            type: ColType.Value,
            width: '20%',
        },
        {
            title: 'Role',
            type: ColType.Custom,
            valueGetter: (item: User) => {
                switch(item.auth) {
                    case AuthLevel.Super: return 'Super';
                    case AuthLevel.Admin: return 'Admin';
                    case AuthLevel.Normal: return 'Normal';
                    case AuthLevel.Monitor: return 'Monitor';
                    case AuthLevel.Outsider: return 'Outsider';
                }
            },
            width: '15%',
        },
        {
            title: 'Status',
            field: 'state',
            type: ColType.Value,
            width: '15%',
        },
        {
            title: 'Created On',
            field: 'created',
            type: ColType.Date,
            width: '30%',
        },
        {
            title: 'Actions',
            type: ColType.Ops,
            width: '10%',
            actions: [
                {
                    icon: 'fa-trash',
                    toolTip: 'Delete user',
                    action: (user: User) => { this.deleteUser(user); },
                },
                {
                    icon: 'fa-info',
                    toolTip: 'Show user details',
                    action: (user: User) => {
                        this.objSrv.show(user);
                    }
                }
            ]
        },
    ]

    @ViewChild(FilteredTableComponent) ftable: FilteredTableComponent;

    showFilter = true;

    showCreateUserDialog = false;

    constructor(
        public auth: AuthService,
        private adminSrv: AdminService,
        public fmtSrv: FormatService,
        private msgSrv: MsgService,
        private secSrv: SecurityService,
        private confirmSrv: ConfirmationService,
        private objSrv: ObjectDetailService) { }

    ngOnInit() {
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
                        this.ftable.refresh();
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
        this.ftable.refreshAll();
    }

    showUserDetails(user: User) {
        this.objSrv.show(user);
    }

}
