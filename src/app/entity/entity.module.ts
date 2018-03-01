import { PrmngModule } from './../prmng/prmng.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EntityListComponent } from './entity-list/entity-list.component';
import { EntityMonitorComponent } from './entity-monitor/entity-monitor.component';
import { EntityConfigureComponent } from './entity-configure/entity-configure.component';
import { BasicModule } from '../basic/basic.module';
import { EntityCreateComponent } from './entity-create/entity-create.component';

@NgModule({
    imports: [
        CommonModule,
        PrmngModule,
        BasicModule,
    ],
    exports: [
        EntityListComponent,
        EntityMonitorComponent,
        EntityConfigureComponent,
    ],
    declarations: [
        EntityListComponent,
        EntityMonitorComponent,
        EntityConfigureComponent,
        EntityCreateComponent,
    ]
})
export class EntityModule { }
