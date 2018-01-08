import { SecurityService } from './../security.service';
import { MsgService } from './../../basic/msg.service';
import { Component, OnInit, Input } from '@angular/core';
import { User } from '../../security/security.model';

@Component({
    selector: 'app-user-create',
    templateUrl: './user-create.component.html',
    styleUrls: ['./user-create.component.css']
})
export class UserCreateComponent implements OnInit {

    readonly AUTH_LEVELS_ITEMS = [
        // { label: "Super", value: 0 },
        { label: "Admin", value: 1 },
        { label: "Normal", value: 2 },
        { label: "Monitor", value: 3 },
        { label: "Outsider", value: 4 },
    ];

    password = '';

    confirm = '';

    @Input("admin") admin = false;

    constructor(private secSrv: SecurityService,
        private msgSrv: MsgService) {

    }

    ngOnInit() {
    }

    passwordValid(): boolean {
        return this.password !== '' && this.password === this.confirm;
    }

    createUser(f: any) {
        const user = <User>f.value;
        if (this.password == this.confirm) {


        } else {
            this.msgSrv.showError("Passwords don't match")
        }
    }

    checkAvailability(f: any) {

    }

}
