import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
    selector: 'app-entity-create',
    templateUrl: './entity-create.component.html',
    styleUrls: ['./entity-create.component.css']
})
export class EntityCreateComponent implements OnInit {

    form: FormGroup

    constructor(private fb: FormBuilder) {
        this.form = fb.group({
            'name': ['', Validators.required],
            'type': ['linux', Validators.required],
            'location': ['', Validators.required],
        });
    }

    ngOnInit() {
    }

}
