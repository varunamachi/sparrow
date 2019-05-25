import { KpxService } from './kpx.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BasicModule } from './../basic/basic.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrmngModule } from '../prmng/prmng.module';
import { AgentListComponent } from './agent-list/agent-list.component';
import { AgentCreateComponent } from './agent-create/agent-create.component';
import { ExSessionComponent } from './ex-session/ex-session.component';
import { CmtComponent } from './cmt/cmt.component';
import { MktComponent } from './mkt/mkt.component';
import { PricesComponent } from './prices/prices.component';
import { DevicesComponent } from './devices/devices.component';
import { NoticeComponent } from './notice/notice.component';
import { NoticeCreateComponent } from './notice-create/notice-create.component';

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
        AgentCreateComponent,
        ExSessionComponent,
        CmtComponent,
        MktComponent,
        PricesComponent,
        DevicesComponent,
        NoticeComponent,
        NoticeCreateComponent,
    ],
    providers: [
        KpxService,
    ]
})
export class KpxModule { }
