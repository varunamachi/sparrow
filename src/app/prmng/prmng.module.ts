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
    TreeModule,
    ToggleButtonModule,
    ChipsModule,
    TooltipModule,
    InputMaskModule,

} from 'primeng/primeng'
import {
    TableModule,
} from 'primeng/table'
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
        ToggleButtonModule,
        ChipsModule,
        TableModule,
        TooltipModule,
        TreeModule,
        InputMaskModule,
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
        ToggleButtonModule,
        ChipsModule,
        TableModule,
        TooltipModule,
        TreeModule,
        InputMaskModule,
    ],
    providers: [
        ConfirmationService,
    ]
})
export class PrmngModule { }
