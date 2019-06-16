import { Component, OnInit, Input } from '@angular/core';
import { UsageStat, ColSpec } from '../basic.model';
import { BasicService } from '../basic.service';

@Component({
  selector: 'app-chart-table',
  templateUrl: './chart-table.component.html',
  styleUrls: ['./chart-table.component.css']
})
export class ChartTableComponent implements OnInit {

  readonly colSpec: ColSpec[] = [];

  @Input('stat') stat: UsageStat;

  @Input('chartType') chartType = 'doughnut';

  chartModel = {};

  constructor(private basicSrv: BasicService) { }

  ngOnInit() {
    this.chartModel = this.basicSrv.transformToChartModel(this.stat);
  }

}
