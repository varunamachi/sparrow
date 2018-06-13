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
import { ObjectDialogComponent } from './object-dialog/object-dialog.component';
import { BasicService } from './basic.service';
import { FilterService } from './filter.service';
import { HolderComponent } from './holder/holder.component';
import { TableComponent } from './table/table.component';
import { ButtonComponent } from './button/button.component'


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
        ButtonComponent,
        TableComponent,
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
        HolderComponent,
        TableComponent,
        ButtonComponent,
    ],
    providers: [
        MsgService,
        FormatService,
        ObjectDetailService,
        BasicService,
        FilterService,
    ]
})
export class BasicModule { }
