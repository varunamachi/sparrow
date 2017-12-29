import { BasicModule } from './../basic/basic.module';
import { PrmngModule } from './../prmng/prmng.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SettingsComponent } from './settings/settings.component';
import { DebugComponent } from './debug/debug.component';

@NgModule({
    imports: [
        CommonModule,
        PrmngModule,
        BasicModule,
    ],
    exports:[
        SettingsComponent,
        DebugComponent,
    ],
    declarations: [
        SettingsComponent,
        DebugComponent,
    ]
})
export class SuperModule { }
