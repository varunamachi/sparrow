import { UserCreateComponent } from './user-create/user-create.component';
import { AuthInterceptor } from './auth.interceptor';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthGuard, SuperGuard, AdminGuard, NormalGuard } from './guards';
import { BasicModule } from './../basic/basic.module';
import { PrmngModule } from './../prmng/prmng.module';
import { AuthService } from './auth.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { SecurityService } from './security.service';
import { PasswordChangeComponent } from './password-change/password-change.component';
import { PasswordComponent } from './password/password.component';

@NgModule({
    imports: [
        CommonModule,
        PrmngModule,
        FormsModule,
        BasicModule
    ],
    exports: [
        LoginComponent,
        UserCreateComponent,
    ],
    declarations: [
        LoginComponent,
        UserCreateComponent,
        PasswordChangeComponent,
        PasswordComponent,
    ],
    providers: [
        {
            provide: HTTP_INTERCEPTORS,
            useClass: AuthInterceptor,
            multi: true,
        },
        AuthService,
        AuthGuard,
        SuperGuard,
        AdminGuard,
        NormalGuard,
        SecurityService
    ]
})
export class SecurityModule { }
