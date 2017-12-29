import { BasicModule } from './../basic/basic.module';
import { PrmngModule } from './../prmng/prmng.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './users/users.component';
import { EventsComponent } from './events/events.component';

@NgModule({
    imports: [
        CommonModule,
        PrmngModule,
        BasicModule,
    ],
    exports: [
        UsersComponent,
        EventsComponent,
    ],
    declarations: [
        UsersComponent,
        EventsComponent,
    ]
})
export class AdminModule { }
