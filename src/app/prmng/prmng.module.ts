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
    CheckboxModule,
    ListboxModule,
    MultiSelectModule,
    InputSwitchModule,
    SelectButtonModule,
    PaginatorModule,
    TriStateCheckboxModule,
} from 'primeng/primeng'
import { ConfirmationService } from 'primeng/components/common/confirmationservice';

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
        CheckboxModule,
        ListboxModule,
        MultiSelectModule,
        InputSwitchModule,
        SelectButtonModule,
        PaginatorModule,
        TriStateCheckboxModule,
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
        CheckboxModule,
        ListboxModule,
        MultiSelectModule,
        InputSwitchModule,
        SelectButtonModule,
        PaginatorModule,
        TriStateCheckboxModule,
    ],
    providers: [
        ConfirmationService,
    ]
})
export class PrmngModule { }
