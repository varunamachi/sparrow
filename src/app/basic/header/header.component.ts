import { AuthService } from '../../security/auth.service';
import {
    Component,
    OnInit,
    Input,
    Output,
    EventEmitter
} from '@angular/core';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

    @Output("onTrigger") trigger = new EventEmitter

    constructor(public auth: AuthService) { }

    ngOnInit() {
    }

    onToggled() {
        this.trigger.emit();
    }

    isIn() {
        console.log(this.auth.isLoggedIn());
        return this.auth.isLoggedIn();
    }

}
