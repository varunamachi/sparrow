import { BasicModule } from './../basic/basic.module';
import { PrmngModule } from './../prmng/prmng.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './users/users.component';
import { EventsComponent } from './events/events.component';
import { UserCreateComponent } from './user-create/user-create.component';
import { FormsModule } from '@angular/forms';

@NgModule({
    imports: [
        CommonModule,
        PrmngModule,
        BasicModule,
        FormsModule
    ],
    exports: [
        UsersComponent,
        EventsComponent,
        UserCreateComponent,
    ],
    declarations: [
        UsersComponent,
        EventsComponent,
        UserCreateComponent,
    ]
})
export class AdminModule { }
