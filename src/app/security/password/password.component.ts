import {
    Component,
    OnInit,
    Input,
    Output,
    EventEmitter,
} from '@angular/core';
import { PasswordSetMode } from '../security.model';
import { MsgService } from '../../basic/msg.service';
import { SecurityService } from '../security.service';

@Component({
    selector: 'app-password',
    templateUrl: './password.component.html',
    styleUrls: ['./password.component.css']
})
export class PasswordComponent implements OnInit {

    @Input('mode') mode: PasswordSetMode = PasswordSetMode.Reset;

    @Input('userID') userID = '';

    @Output('onSubmit') onSubmit = new EventEmitter();

    constructor(
        private msgSrv: MsgService) {

    }

    ngOnInit() {
    }

    onFormSubmit(f: any) {
        this.onSubmit.emit({
            userID: this.userID,
            data: f.value,
        });
    }

    passwordValid(f: any) {
        console.log(f);
        return f.value.password === f.value.confirm;
    }

}