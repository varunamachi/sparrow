import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
import { SysStat } from '../admin.model';
import { AdminService } from '../admin.service';
import { MsgService } from '../../basic/msg.service';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {

  systemStats: SysStat;

  constructor(private adminSrv: AdminService,
    private messageSrv: MsgService) { }

  ngOnInit() {
    this.load();
  }

  load() {
    this.adminSrv.getServerStats().subscribe(
      (stats: SysStat) => {
        this.systemStats = stats;
      }),
      err => {
        this.messageSrv.showError('Failed to retrieve server information');
      }
  }

}
