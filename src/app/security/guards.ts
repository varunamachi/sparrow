import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { CanActivate, Router } from '@angular/router'

@Injectable()
export class AuthGuard implements CanActivate {
    constructor(private auth: AuthService) {

    }

    canActivate(): boolean {
        if (!this.auth.isLoggedIn()) {
            this.auth.logout();
            return false;
        }
        return true;
    }
}

@Injectable()
export class SuperGuard implements CanActivate {
    constructor(private auth: AuthService) { }

    canActivate(): boolean {
        return this.auth.isSuperUser();
    }
}

@Injectable()
export class AdminGuard implements CanActivate {
    constructor(private auth: AuthService) { }

    canActivate(): boolean {
        return this.auth.isAdminUser();
    }
}

@Injectable()
export class NormalGuard implements CanActivate {
    constructor(private auth: AuthService) { }

    canActivate(): boolean {
        return this.auth.isNormalUser();
    }
}

@Injectable()
export class MonitorGuard implements CanActivate {
    constructor(private auth: AuthService) { }

    canActivate(): boolean {
        return this.auth.isMonitorUser();
    }
}
