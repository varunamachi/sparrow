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
import { FilterComponent } from './filter/filter.component';
import { DateRangeComponent } from './date-range/date-range.component';
import { MainComponent } from './main/main.component';
import { ObjectComponent } from './object/object.component';
import { TreeModule } from 'primeng/primeng';
import {ObjectDetailService} from './object-detail.service';
import { ObjectDialogComponent } from './object-dialog/object-dialog.component'


@NgModule({
    imports: [
        CommonModule,
        PrmngModule,
        TreeModule
    ],
    exports: [
        HeaderComponent,
        SidebarComponent,
        NotFoundComponent,
        MsgComponent,
        PageHeaderComponent,
        FilterPageComponent,
        FilterComponent,
        DateRangeComponent,
        MainComponent,
        ObjectComponent,
        ObjectDialogComponent,
    ],
    declarations: [
        HeaderComponent,
        SidebarComponent,
        NotFoundComponent,
        MsgComponent,
        PageHeaderComponent,
        FilterPageComponent,
        FilterComponent,
        DateRangeComponent,
        MainComponent,
        ObjectComponent,
        ObjectDialogComponent,
    ],
    providers: [
        MsgService,
        FormatService,
        ObjectDetailService,
    ]
})
export class BasicModule { }
