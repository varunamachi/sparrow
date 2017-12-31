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
    ],
    exports: [
        ButtonModule,
        GrowlModule,
        MessagesModule,
        MessageModule,
        MenuModule,
        PanelMenuModule,
        InputTextModule,
    ],
})
export class PrmngModule { }
