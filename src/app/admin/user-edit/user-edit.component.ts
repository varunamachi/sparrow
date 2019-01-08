import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { SecurityService } from '../../security/security.service';
import { MsgService } from '../../basic/msg.service';
import { User, AuthLevel } from '../../security/security.model';

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

  @Input() mode = 'self';

  @Input() user: User = null;

  @Output() onFinished = new EventEmitter()

  constructor(
    private secSrv: SecurityService,
    private msgSrv: MsgService) {

  }

  ngOnInit() {
  }

  updateUser(f: any) {
    const user = <User>f.value;
    const func = this.mode === 'self' ? this.secSrv.updateProfile
      : this.secSrv.updateUser;
    func(user).subscribe(
      () => this.msgSrv.showSuccess('Successfuly updated user'),
      err => this.msgSrv.showError('Failed to udpate user')
    );
  }

}
