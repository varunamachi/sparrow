import { SecurityModule } from './../security/security.module';
import { BasicModule } from './../basic/basic.module';
import { PrmngModule } from './../prmng/prmng.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './users/users.component';
import { EventsComponent } from './events/events.component';
import { FormsModule } from '@angular/forms';
import { AdminService } from './admin.service';
import { UserEditComponent } from './user-edit/user-edit.component';

@NgModule({
    imports: [
        CommonModule,
        PrmngModule,
        BasicModule,
        FormsModule,
        SecurityModule,
    ],
    exports: [
        UsersComponent,
        EventsComponent,
    ],
    declarations: [
        UsersComponent,
        EventsComponent,
        UserEditComponent,
    ],
    providers: [AdminService]
})
export class AdminModule { }
