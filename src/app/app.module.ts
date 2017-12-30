import { SuperModule } from './super/super.module';
import { AdminModule } from './admin/admin.module';
import { EntityModule } from './entity/entity.module';
import { RouterModule } from '@angular/router/';
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'
import { JwtModule } from '@auth0/angular-jwt';
import { Router } from '@angular/router'
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpModule } from '@angular/http'

import { AppComponent } from './app.component';
import { PrmngModule } from "./prmng/prmng.module";
import { SecurityModule } from './security/security.module';
import { BasicModule } from './basic/basic.module';
import { AuthInterceptor } from './security/auth.interceptor';
import { routes } from './app.routing';
import { HomeComponent } from './home/home.component';

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        RouterModule.forRoot(routes),
        PrmngModule,
        HttpClientModule,
        BasicModule,
        SecurityModule,
        EntityModule,
        AdminModule,
        SuperModule,
        JwtModule.forRoot({
            config: {
                tokenGetter: tokenGetter,
            }
        })
    ],
    providers: [
        {
            provide: HTTP_INTERCEPTORS,
            useClass: AuthInterceptor,
            multi: true,
        }
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }


export function tokenGetter() {
    return localStorage.getItem('token');
}
