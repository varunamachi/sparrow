import { SidebarComponent } from './sidebar/sidebar.component';
import { HeaderComponent } from './header/header.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
    imports: [
        CommonModule
    ],
    exports: [
        HeaderComponent,
        SidebarComponent,
    ],
    declarations: [
        HeaderComponent,
        SidebarComponent,
    ]
})
export class BasicModule { }
