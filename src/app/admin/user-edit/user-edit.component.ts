import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { SecurityService } from 'src/app/security/security.service';
import { MsgService } from 'src/app/basic/msg.service';
import { User, AuthLevel } from 'src/app/security/security.model';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {

  readonly AUTH_LEVELS_ITEMS = [
    // { label: "Super", value: 0 },
    { label: "Normal", value: 2 },
    { label: "Admin", value: 1 },
    { label: "Monitor", value: 3 },
    { label: "Outsider", value: 4 },
  ];

  password = '';

  confirm = '';

  working = false;

  @Output("onFinished") onFinished = new EventEmitter()

  constructor(private secSrv: SecurityService, private msgSrv: MsgService) {

  }

  ngOnInit() {
  }

  updateUser(f: any) {
    const user = <User>f.value;
    if (!user.auth) {
      user.auth = AuthLevel.Normal;
    }
    //update user
  }

}
