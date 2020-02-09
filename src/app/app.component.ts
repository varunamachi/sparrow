import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

import {AuthService, PingResult} from './security/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  path = window.location.pathname;



  constructor(public auth: AuthService, private router: Router) {}

  ngOnInit() {
    this.auth.ping().subscribe((pRes: PingResult) => {
      if (!pRes.valid) {
        this.auth.logout();
      }
    })
  }
}
