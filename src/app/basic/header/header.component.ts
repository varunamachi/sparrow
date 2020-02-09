import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Router} from '@angular/router';
import {MenuItem} from 'primeng/components/common/menuitem';

import {AuthService} from '../../security/auth.service';
import {MsgService} from '../msg.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  items: MenuItem[] = [];

  @Output('onTrigger')
  trigger = new EventEmitter

  constructor(
      public auth: AuthService, private msgSrv: MsgService,
      private router: Router) {
  }

  ngOnInit() {
    this.items = [
      {
        label: 'Change Password',
        icon: 'fa-key',
        command: (event) => {
          this.msgSrv.showWarning('Operation not yet implemented');
        }
      },
      {
        label: 'Profile',
        icon: 'fa-user',
        command: (event) => {
          this.msgSrv.showWarning('Operation not yet implemented');
        }
      },
      {
        label: 'Logout',
        icon: 'fa-sign-out',
        command: (event) => {
          this.auth.logout();
        }
      },
    ];
  }

  onToggled() {
    this.trigger.emit();
  }

  isIn() {
    return this.auth.isLoggedIn();
  }

  userName() {
    if (this.auth.user && this.auth.user.firstName.length > 0) {
      return this.auth.user.firstName + ' ' + this.auth.user.lastName;
    } else if (this.auth.user) {
      return this.auth.user.id;
      ;
    }
    return 'Unknown User';
  }

  logoClick() {
    this.router.navigate(['/home']);
  }
}
