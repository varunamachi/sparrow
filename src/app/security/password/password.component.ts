import {
    Component,
    OnInit,
    Input
} from '@angular/core';
import { PasswordSetMode } from '../security.model';

@Component({
    selector: 'app-password',
    templateUrl: './password.component.html',
    styleUrls: ['./password.component.css']
})
export class PasswordComponent implements OnInit {

    @Input('mode') mode: PasswordSetMode = PasswordSetMode.Reset;

    @Input('userID') userID = '';

    constructor() { }

    ngOnInit() {
    }

}
