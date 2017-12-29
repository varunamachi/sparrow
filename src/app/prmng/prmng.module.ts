import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
    ButtonModule,
    GrowlModule,
    MessagesModule,
    MessageModule,
    MenuModule,
    PanelMenuModule,
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
    ],
    exports: [
        ButtonModule,
        GrowlModule,
        MessagesModule,
        MessageModule,
        MenuModule,
        PanelMenuModule,
    ],
})
export class PrmngModule { }
