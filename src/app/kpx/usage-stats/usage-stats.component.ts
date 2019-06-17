import { Component, OnInit } from '@angular/core';
import { UsageStat, StatType } from '../../basic/basic.model';
import { KpxService } from '../kpx.service';
import { MessageService } from 'primeng/components/common/messageservice';
import { MsgService } from '../../basic/msg.service';

@Component({
  selector: 'app-usage-stats',
  templateUrl: './usage-stats.component.html',
  styleUrls: ['./usage-stats.component.css']
})
export class UsageStatsComponent implements OnInit {

  stats: UsageStat[] = [];

  constructor(
    private kpxSrv: KpxService,
    private msgSrv: MsgService) { }

  ngOnInit() {
    this.load()
  }

  getChartType(statType: StatType) {
    if (statType === StatType.Range) {
      return "bar";
    }
    return 'doughnut';
  }

  load() {
    this.kpxSrv.getStats().subscribe(
      (stats: UsageStat[]) => {
        this.stats = stats;
      }, err => {
        this.msgSrv.showError('Failed to fetch stats from server')
      });
  }

}
