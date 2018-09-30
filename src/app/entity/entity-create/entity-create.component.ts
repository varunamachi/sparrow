import { AuthService } from './../../security/auth.service';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
    selector: 'app-entity-create',
    templateUrl: './entity-create.component.html',
    styleUrls: ['./entity-create.component.css']
})
export class EntityCreateComponent implements OnInit {

    @Output('done') done = new EventEmitter();

    fm: FormGroup

    constructor(
        private authSrv: AuthService,
        private fb: FormBuilder) {
        this.fm = fb.group({
            'name': ['', Validators.required],
            'type': ['linux', Validators.required],
            'location': ['', Validators.required],
        });
    }

    ngOnInit() {
    }

    onCreate(f: FormGroup) {
        this.done.emit({
            name: f.value.name,
            type: f.value.type,
            location: f.value.location,
            ownerID: this.authSrv.user.id,
            ownerName: this.authSrv.user.fullName,
        })
        // this.form.reset();
    }

}
