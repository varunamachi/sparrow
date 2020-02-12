import {Component, OnInit} from '@angular/core';
import {SelectItem} from 'primeng/primeng';

import {StatType, UsageStat} from '../../basic/basic.model';
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
  chartStat: UsageStat;
  chartID: string = 'devices';
  days: number = 30;
  loading = false;


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
    this.kpxSrv.getRecentStats()
        .flatMap((stats: RecentStat) => {
          this.stats = stats;
          return this.kpxSrv.getSingleStat(this.chartID, this.days);
        })
        .subscribe(
            (singleStat: UsageStat) => {
              this.chartStat = singleStat;
            },
            err => {this.msgSrv.showError('Failed to load recent stats')},
        );
  }

  loadChart() {
    this.loading = true;
    this.kpxSrv.getSingleStat(this.chartID, this.days)
        .subscribe(
            (singleStat: UsageStat) => {
              this.chartStat = singleStat;
              this.loading = false;
            },
            err => {
              this.loading = false;
              this.msgSrv.showError(
                  'Failed to load charts for ' + this.chartID);
            },
        );
  }
}
