import { Component, OnInit, Input } from '@angular/core';
import { UsageStat, ColSpec, ColType, StatType, LabelType, StatPoint } from '../basic.model';
import { BasicService } from '../basic.service';
import * as moment from 'moment';
import { SelectItem } from 'primeng/primeng';

@Component({
  selector: 'app-chart-table',
  templateUrl: './chart-table.component.html',
  styleUrls: ['./chart-table.component.css']
})
export class ChartTableComponent implements OnInit {

  readonly colSpec: ColSpec[] = [
    {
      title: 'Label',
      field: 'label',
      type: ColType.Custom,
      width: '48%',
      valueGetter: (val: StatPoint): string => {
        if (!this.stat) {
          return '';
        }
        if (this.stat.labelType === LabelType.Str
          || this.stat.labelType === LabelType.Number) {
          return val.label
        }
        if (this.stat.labelType == LabelType.Month) {
          return moment(val.label).format('DD MMMM YYYY')
        }
        return moment(val.label).format('DD MMMM YYYY - HH:mm:ss')
      }
    },
    {
      title: 'Count',
      field: 'count',
      type: ColType.Value,
      width: '48%',
    },
  ];

  @Input('stat') stat: UsageStat;

  @Input('chartType') chartType = 'doughnut';

  readonly TAB_CHART: SelectItem[] = [
    { label: '', value: 'chart', icon: 'fa fa-line-chart' },
    { label: "", value: 'table', icon: 'fa fa-table' },
  ];

  selected = 'chart';

  chartModel = {};

  options = {
    animation: {
      duration: 0,
    },
    legend: {
      display: false,
    },
    elements: {
      arc: {
        borderWidth: 0,
      },
    },
    title: {
      display: false,
    },
    scales: {
      xAxes: [{
        display: true,
        ticks: {
          fontColor: 'white',
        }
      }],
      yAxes: [{
        display: true,
        ticks: {
          fontColor: 'white',
          beginAtZero: true,
        },
      }]
    }
  }
  constructor(private basicSrv: BasicService) { }

  ngOnInit() {
    if (this.stat.type === StatType.Parts) {
      this.options.scales.xAxes[0].display = false;
      this.options.scales.yAxes[0].display = false;
    }
    this.chartModel = this.basicSrv.transformToChartModel(this.stat);
  }
}
