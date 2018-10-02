import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BasicModule } from './../basic/basic.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrmngModule } from '../prmng/prmng.module';
import { AgentListComponent } from './agent-list/agent-list.component';
import { AgentCreateComponent } from './agent-create/agent-create.component';

@NgModule({
    imports: [
        CommonModule,
        PrmngModule,
        BasicModule,
        FormsModule,
        ReactiveFormsModule,
    ],
    declarations: [
        AgentListComponent,
        AgentCreateComponent
    ]
})
export class KpxModule { }
