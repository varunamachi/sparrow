import { Component, OnInit } from '@angular/core';
import { UsageStat, StatType, StatContainer } from '../../basic/basic.model';
import { KpxService } from '../kpx.service';
import { MessageService } from 'primeng/components/common/messageservice';
import { MsgService } from '../../basic/msg.service';
import { ConfirmationService } from 'primeng/primeng';

@Component({
  selector: 'app-usage-stats',
  templateUrl: './usage-stats.component.html',
  styleUrls: ['./usage-stats.component.css']
})
export class UsageStatsComponent implements OnInit {

  stats: StatContainer = null;

  constructor(
    private kpxSrv: KpxService,
    private msgSrv: MsgService,
    private confirmSrv: ConfirmationService) { }

  ngOnInit() {
    this.load()
  }

  getChartType(statType: StatType) {
    if (statType === StatType.Range) {
      return "line";
    }
    return 'doughnut';
  }

  load() {
    this.kpxSrv.getStats().subscribe(
      (stats: StatContainer) => {
        this.stats = stats;
      }, err => {
        this.msgSrv.showError('Failed to fetch stats from server')
      });
  }

  recalcReload() {
    this.confirmSrv.confirm({
      message: "Recalculating statistics is a computationally intensive \
          operation! Do you really want to continue?",
      accept: () => {
        this.kpxSrv.recalAndGetStats().subscribe(
          (stats: StatContainer) => {
            this.stats = stats;
          }, err => {
            this.msgSrv.showError(
              'Failed to fetch recalculated stats from server');
          }
        );
      }
    });
  }

}
