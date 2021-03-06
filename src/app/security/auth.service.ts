import 'rxjs/add/operator/map'

import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Router} from '@angular/router';
import {Observable} from 'rxjs/Observable';

import {Result} from '../basic/basic.model';
import {purl} from '../basic/url.util';

import {AuthLevel, Credential, User} from './security.model';

interface LoginResult {
  token: string;
  user: User;
}

export interface PingResult {
  userID: string;
  userName: string;
  userType: string;
  valid: boolean;
  role: AuthLevel;
}

@Injectable()
export class AuthService {
  user: User = null;

  constructor(private http: HttpClient, private router: Router) {
    const usrStr = localStorage.getItem('user');
    if (usrStr) {
      this.user = <User>JSON.parse(usrStr);
    }
  }

  login(creds: Credential) {
    const url = purl('login')
    return this.http.post(url, creds)
        .map(
            (resp: Result<LoginResult>) => {
              const lr = resp.data;
              localStorage.setItem('token', lr.token);
              localStorage.setItem('user', JSON.stringify(lr.user));
              this.user = lr.user;
            },
        )
  }

  isLoggedIn(): boolean {
    // checck token expiry
    this.user = JSON.parse(localStorage.getItem('user'));
    const loggedIn = this.user != null;
    return loggedIn;
    // return true;
  }

  logout() {
    this.user = null;
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    this.router.navigate(['/']);
  }

  isSuperUser(): boolean {
    if (this.user) {
      return this.user.auth === 0;
    }
    return false;
  }

  isAdminUser(): boolean {
    if (this.user) {
      return this.user.auth <= 1;
    }
    return false;
  }

  isNormalUser(): boolean {
    if (this.user) {
      return this.user.auth <= 2;
    }
    return false;
  }

  isMonitorUser(): boolean {
    if (this.user) {
      return this.user.auth <= 3;
    }
    return false;
  }

  isPublicUser(): boolean {
    if (this.user) {
      return this.user.auth <= 4;
    }
    return false;
  }

  ping(): Observable<PingResult> {
    const url = purl('ping');
    return this.http.get(url).map((res: Result<PingResult>) => {
      return res.data;
    })
  }
}
