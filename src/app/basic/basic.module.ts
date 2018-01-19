import { SidebarComponent } from './sidebar/sidebar.component';
import { HeaderComponent } from './header/header.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrmngModule } from '../prmng/prmng.module';
import { NotFoundComponent } from './not-found/not-found.component';
import { MsgService } from './msg.service';
import { MsgComponent } from './msg/msg.component';
import { PageHeaderComponent } from './page-header/page-header.component';
import { FormatService } from './format.service';
import { FilterPageComponent } from './filter-page/filter-page.component';


@NgModule({
    imports: [
        CommonModule,
        PrmngModule,
    ],
    exports: [
        HeaderComponent,
        SidebarComponent,
        NotFoundComponent,
        MsgComponent,
        PageHeaderComponent,
        FilterPageComponent,
    ],
    declarations: [
        HeaderComponent,
        SidebarComponent,
        NotFoundComponent,
        MsgComponent,
        PageHeaderComponent,
        FilterPageComponent,
    ],
    providers: [
        MsgService,
        FormatService
    ]
})
export class BasicModule { }
