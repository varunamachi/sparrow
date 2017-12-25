import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
    ButtonModule,
} from 'primeng/primeng'

@NgModule({
    imports: [
        CommonModule,
        ButtonModule,
    ],
    exports: [
        ButtonModule,

    ],
})
export class PrmngModule { }
