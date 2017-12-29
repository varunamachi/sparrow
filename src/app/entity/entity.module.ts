import { PrmngModule } from './../prmng/prmng.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EntityListComponent } from './entity-list/entity-list.component';
import { EntityMonitorComponent } from './entity-monitor/entity-monitor.component';
import { EntityConfigureComponent } from './entity-configure/entity-configure.component';
import { BasicModule } from '../basic/basic.module';

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
    ]
})
export class EntityModule { }
