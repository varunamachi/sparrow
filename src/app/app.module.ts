import { RouterModule } from '@angular/router/';
import { BrowserModule } from '@angular/platform-browser';
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

@NgModule({
    declarations: [
        AppComponent,
    ],
    imports: [
        RouterModule.forRoot(routes),
        BrowserModule,
        PrmngModule,
        HttpClientModule,
        BasicModule,
        SecurityModule,
        JwtModule.forRoot({
            config: {
                tokenGetter: () => {
                    return localStorage.getItem('token');
                },
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
