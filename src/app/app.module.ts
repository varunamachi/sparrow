import { SecurityModule } from './security/security.module';
import { BasicModule } from './basic/basic.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'
import { JwtModule } from '@auth0/angular-jwt';


import { AppComponent } from './app.component';

import { PrmngModule } from "./prmng/prmng.module";


@NgModule({
    declarations: [
        AppComponent,
    ],
    imports: [
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
                // whitelistedDomains: ['localhost:3001']
            }
        })
    ],
    providers: [
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
