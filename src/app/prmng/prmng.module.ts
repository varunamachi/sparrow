import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {ConfirmationService} from 'primeng/components/common/confirmationservice';
import {ButtonModule, CalendarModule, CardModule, ChartModule, CheckboxModule, ChipsModule, ConfirmDialogModule, DataTableModule, DialogModule, DropdownModule, GrowlModule, InputMaskModule, InputSwitchModule, InputTextModule, ListboxModule, MenuModule, MessageModule, MessagesModule, MultiSelectModule, PaginatorModule, PanelMenuModule, PanelModule, SelectButtonModule, SpinnerModule, TabViewModule, ToggleButtonModule, TooltipModule, TreeModule, TriStateCheckboxModule} from 'primeng/primeng';
import {TableModule} from 'primeng/table';

@NgModule({
  imports: [
    CommonModule,        ButtonModule,      GrowlModule,
    MessagesModule,      MessageModule,     MenuModule,
    PanelMenuModule,     InputTextModule,   CalendarModule,
    DropdownModule,      DataTableModule,   DialogModule,
    ConfirmDialogModule, PanelModule,       CheckboxModule,
    ListboxModule,       MultiSelectModule, InputSwitchModule,
    SelectButtonModule,  PaginatorModule,   TriStateCheckboxModule,
    ToggleButtonModule,  ChipsModule,       TableModule,
    TooltipModule,       TreeModule,        InputMaskModule,
    SpinnerModule,       ChartModule,       TabViewModule,
    SelectButtonModule,  CardModule
  ],
  exports: [
    ButtonModule,       GrowlModule,
    MessagesModule,     MessageModule,
    MenuModule,         PanelMenuModule,
    InputTextModule,    CalendarModule,
    DropdownModule,     DataTableModule,
    DialogModule,       ConfirmDialogModule,
    PanelModule,        CheckboxModule,
    ListboxModule,      MultiSelectModule,
    InputSwitchModule,  SelectButtonModule,
    PaginatorModule,    TriStateCheckboxModule,
    ToggleButtonModule, ChipsModule,
    TableModule,        TooltipModule,
    TreeModule,         InputMaskModule,
    SpinnerModule,      ChartModule,
    TabViewModule,      SelectButtonModule,
    CardModule
  ],
  providers: [ConfirmationService]
})
export class PrmngModule {
}
