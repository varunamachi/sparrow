import { SidebarComponent } from './sidebar/sidebar.component';
import { HeaderComponent } from './header/header.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrmngModule } from '../prmng/prmng.module';
import { NotFoundComponent } from './not-found/not-found.component';

@NgModule({
    imports: [
        CommonModule,
        PrmngModule
    ],
    exports: [
        HeaderComponent,
        SidebarComponent,
        NotFoundComponent,
    ],
    declarations: [
        HeaderComponent,
        SidebarComponent,
        NotFoundComponent,
    ]
})
export class BasicModule { }
