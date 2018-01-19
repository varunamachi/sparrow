import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
    ButtonModule,
    GrowlModule,
    MessagesModule,
    MessageModule,
    MenuModule,
    PanelMenuModule,
    InputTextModule,
    CalendarModule,
    DropdownModule,
    DataTableModule,
    DialogModule,
    ConfirmDialogModule,
    PanelModule,
} from 'primeng/primeng'

@NgModule({
    imports: [
        CommonModule,
        ButtonModule,
        GrowlModule,
        MessagesModule,
        MessageModule,
        MenuModule,
        PanelMenuModule,
        InputTextModule,
        CalendarModule,
        DropdownModule,
        DataTableModule,
        DialogModule,
        ConfirmDialogModule,
        PanelModule,
    ],
    exports: [
        ButtonModule,
        GrowlModule,
        MessagesModule,
        MessageModule,
        MenuModule,
        PanelMenuModule,
        InputTextModule,
        CalendarModule,
        DropdownModule,
        DataTableModule,
        DialogModule,
        ConfirmDialogModule,
        PanelModule,
    ],
})
export class PrmngModule { }
