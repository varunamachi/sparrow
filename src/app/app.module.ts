import { AuthService } from './auth.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'
import { JwtModule } from '@auth0/angular-jwt';


import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HeaderComponent } from './header/header.component';

import { PrmngModule } from "./prmng/prmng.module";
import { LoginComponent } from './login/login.component';


@NgModule({
    declarations: [
        AppComponent,
        SidebarComponent,
        HeaderComponent,
        LoginComponent
    ],
    imports: [
        BrowserModule,
        PrmngModule,
        HttpClientModule,
        JwtModule.forRoot({
            config: {
                tokenGetter: () => {
                    return localStorage.getItem('token');
                },
                // whitelistedDomains: ['localhost:3001']
            }
        })
    ],
    providers: [
        AuthService,
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
