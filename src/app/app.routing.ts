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


export const routes = [
    {
        path: 'login',
        component: LoginComponent,
    },
    {
        path: 'home',
        component: NotFoundComponent,
    },
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full',
    },
    {
        path: '**',
        component: NotFoundComponent,
    },

]

// export let routes = RouterModule.forRoot(r);
