import {Component, OnInit} from '@angular/core';

import {StatType} from '../../basic/basic.model';
import {MsgService} from '../../basic/msg.service';
import {RecentStat} from '../kpx.model';
import {KpxService} from '../kpx.service';

@Component({
  selector: 'app-app-stats',
  templateUrl: './app-stats.component.html',
  styleUrls: ['./app-stats.component.css']
})
export class AppStatsComponent implements OnInit {
  stats: RecentStat;

  constructor(private kpxSrv: KpxService, private msgSrv: MsgService) {}

  ngOnInit() {
    this.load()
  }

  getChartType(statType: StatType) {
    if (statType === StatType.Range) {
      return 'line';
    }
    return 'doughnut';
  }

  load() {
    this.kpxSrv.getRecentStats().subscribe((stats: RecentStat) => {
      this.stats = stats;
    }, err => {this.msgSrv.showError('Failed to fetch stats from server')});
  }
}
