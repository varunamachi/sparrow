import { PrmngModule } from './../prmng/prmng.module';
import { AuthService } from './auth.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';

@NgModule({
    imports: [
        CommonModule,
        PrmngModule,
        FormsModule
    ],
    exports: [
        LoginComponent,
    ],
    declarations: [
        LoginComponent,
    ],
    providers: [
        AuthService,
    ]
})
export class SecurityModule { }
