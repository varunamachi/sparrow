import { AgentListComponent } from './kpx/agent-list/agent-list.component';
import { LoginComponent } from './security/login/login.component';
import {
    AuthGuard,
    SuperGuard,
    AdminGuard,
    NormalGuard,
    MonitorGuard,
} from './security/guards';
import { RouterModule } from "@angular/router";
import { NotFoundComponent } from './basic/not-found/not-found.component';
import { HomeComponent } from './home/home.component';
import { EntityListComponent } from './entity/entity-list/entity-list.component';
import { EntityMonitorComponent } from './entity/entity-monitor/entity-monitor.component';
import { EntityConfigureComponent } from './entity/entity-configure/entity-configure.component';
import { UsersComponent } from './admin/users/users.component';
import { EventsComponent } from './admin/events/events.component';
import { SettingsComponent } from './super/settings/settings.component';
import { DebugComponent } from './super/debug/debug.component';
import { PasswordComponent } from './security/password/password.component';
import { VerifyAccountComponent } from './security/verify-account/verify-account.component';


export const routes = [
    {
        path: '',
        component: LoginComponent,
    },
    {
        path: 'verfiy',
        component: VerifyAccountComponent,
    },
    {
        path: 'home',
        component: HomeComponent,
        canActivate: [AuthGuard],
    },

    //*** entity
    {
        path: 'entity/list',
        component: EntityListComponent,
        canActivate: [AuthGuard],
    },
    {
        path: 'entity/monitor',
        component: EntityMonitorComponent,
        canActivate: [AuthGuard],
    },
    {
        path: 'entity/configure',
        component: EntityConfigureComponent,
        canActivate: [AuthGuard, NormalGuard],
    },

    //*** entity
    {
        path: 'agent/list',
        component: AgentListComponent,
        canActivate: [AuthGuard, AdminGuard],
    },
    // {
    //     path: 'agent/monitor',
    //     component: EntityMonitorComponent,
    //     canActivate: [AuthGuard],
    // },
    // {
    //     path: 'agent/configure',
    //     component: EntityConfigureComponent,
    //     canActivate: [AuthGuard, NormalGuard],
    // },

    //*** admin
    {
        path: 'admin/users',
        component: UsersComponent,
        canActivate: [AuthGuard, AdminGuard],
    },
    {
        path: 'admin/events',
        component: EventsComponent,
        canActivate: [AuthGuard, AdminGuard],
    },

    //*** super
    {
        path: 'super/settings',
        component: SettingsComponent,
        canActivate: [AuthGuard, SuperGuard],
    },
    {
        path: 'super/debug',
        component: DebugComponent,
        canActivate: [AuthGuard, SuperGuard],
    },
    {
        path: '**',
        component: NotFoundComponent,
    },

]
