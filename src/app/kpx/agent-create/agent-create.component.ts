import { AgentPlatform } from './../kpx.model';
import { AuthService } from './../../security/auth.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { SecurityService } from '../../security/security.service';

@Component({
    selector: 'app-agent-create',
    templateUrl: './agent-create.component.html',
    styleUrls: ['./agent-create.component.css']
})
export class AgentCreateComponent implements OnInit {

    @Output('done') done = new EventEmitter();

    readonly PLATFORMS = [
        { label: 'Android', value: AgentPlatform.Android },
        { label: 'IOS', value: AgentPlatform.IOS },
        { label: 'Linux', value: AgentPlatform.Linux },
        { label: 'Windows', value: AgentPlatform.Windows },
        { label: 'OSX', value: AgentPlatform.OSX },
    ];

    fm: FormGroup

    constructor(
        private authSrv: AuthService,
        private secSrv: SecurityService,
        private fb: FormBuilder) {
        this.fm = fb.group({
            'name': ['', Validators.required],
            'platform': [0],
            'desc': ['', Validators.required],
            'owner': [null, Validators.required],
            'ownerEmail': [null, Validators.required],
        });
    }

    ngOnInit() {
        // this.secSrv.
    }

    onCreate(f: FormGroup) {
        this.done.emit({
            name: f.value.name,
            type: f.value.type,
            desc: f.value.desc,
            owner: f.value.owner,
            ownerEmail: f.value.ownerEmail,
        })
        // this.form.reset();
    }
}
