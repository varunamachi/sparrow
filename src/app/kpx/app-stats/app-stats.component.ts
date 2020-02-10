import {Component, OnInit} from '@angular/core';
import {SelectItem} from 'primeng/primeng';

import {StatType} from '../../basic/basic.model';
import {MsgService} from '../../basic/msg.service';
import {RecentStat} from '../kpx.model';
import {KpxService} from '../kpx.service';

interface Info {
  name: string;
  id: string;
}

@Component({
  selector: 'app-app-stats',
  templateUrl: './app-stats.component.html',
  styleUrls: ['./app-stats.component.css']
})
export class AppStatsComponent implements OnInit {
  RECENT_INFO: Info[] = [
    {name: 'Devices', id: 'devices'},
    {name: 'Launches', id: 'launches'},
    {name: 'New Users', id: 'newUsers'},
    {name: 'Errors', id: 'errors'},
  ];



  CHARTS: SelectItem[] = [
    {label: 'Devices', value: 'devices'},
    {label: 'Launches', value: 'launches'},
    {label: 'New Users', value: 'newUsers'},
    {label: 'Errors', value: 'errors'},
  ];

  DAYS: SelectItem[] = [
    {label: '15 Days', value: 15},
    {label: '30 Days', value: 30},
    {label: '60 Days', value: 60},
    {label: '90 Days', value: 90},
  ];

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
    this.kpxSrv.getRecentStats().subscribe(
        (stats: RecentStat) => {
          this.stats = stats;
        },
        err => {this.msgSrv.showError('Failed to fetch stats from server')},
    );
  }

  loadStats(id: string) {}
}
