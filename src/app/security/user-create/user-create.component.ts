import {
    Component,
    OnInit,
    Input,
    Output,
    EventEmitter
} from '@angular/core';
import { AuthLevel } from './../security.model';
import { SecurityService } from './../security.service';
import { MsgService } from './../../basic/msg.service';
import { User, UserCreateMode } from '../../security/security.model';

@Component({
    selector: 'app-user-create',
    templateUrl: './user-create.component.html',
    styleUrls: ['./user-create.component.css']
})
export class UserCreateComponent implements OnInit {

    readonly AUTH_LEVELS_ITEMS = [
        // { label: "Super", value: 0 },
        { label: "Normal", value: 2 },
        { label: "Admin", value: 1 },
        { label: "Monitor", value: 3 },
        { label: "Outsider", value: 4 },
    ];

    password = '';

    confirm = '';

    working = false;

    @Input("mode") mode: UserCreateMode = UserCreateMode.Create;

    @Output("onFinished") onFinished = new EventEmitter()

    constructor(private secSrv: SecurityService,
        private msgSrv: MsgService) {

    }

    ngOnInit() {
    }

    passwordValid(): boolean {
        return this.password !== '' && this.password === this.confirm;
    }

    registerUser(f: any) {
        const user = <User>f.value;
        if (!user.auth) {
            user.auth = AuthLevel.Normal;
        }
        if (this.password == this.confirm) {
            this.working = true;
            this.secSrv.registerUser(user, this.password).subscribe(
                res => {
                    this.working = false;
                    this.msgSrv.showSuccess('Registration successful, please'
                    + ' confirm the EMail');
                    this.onFinished.emit({ result: true, user: user });
                },
                err => {
                    this.working = false;
                    this.msgSrv.showError('Registration failed');
                    this.onFinished.emit({ result: false, user: user });
                });

        } else {
            this.msgSrv.showError('Passwords don\'t match');
        }

    }

    createUser(f: any) {
        const user = <User>f.value;
        if (!user.auth) {
            user.auth = AuthLevel.Normal;
        }
        this.working = true;
        this.secSrv.createUser(user).subscribe(
            res => {
                this.working = false;
                this.msgSrv.showSuccess('Creation successful. '
                + 'account will be active once user confirms EMail');
                this.onFinished.emit({ result: true, user: user });
            },
            err => {
                this.working = false;
                this.msgSrv.showError('User creation failed');
                this.onFinished.emit({ result: false, user: user });
            });

    }

}
