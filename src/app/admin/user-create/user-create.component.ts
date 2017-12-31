import { Component, OnInit } from '@angular/core';
import { User } from '../../security/security.model';

@Component({
    selector: 'app-user-create',
    templateUrl: './user-create.component.html',
    styleUrls: ['./user-create.component.css']
})
export class UserCreateComponent implements OnInit {

    password = '';

    confirm = '';

    constructor() { }

    ngOnInit() {
    }

    createUser(f: any) {
        const user = <User> f.value;
    }

}
