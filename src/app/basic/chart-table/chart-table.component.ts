import {Component, Input, OnInit} from '@angular/core';
import * as moment from 'moment';
import {SelectItem} from 'primeng/primeng';

import {ColSpec, ColType, LabelType, StatPoint, StatType, UsageStat} from '../basic.model';
import {BasicService} from '../basic.service';

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
      valueGetter: (val: StatPoint):
          string => {
            if (!this.stat) {
              return '';
            }
            if (this.stat.labelType === LabelType.Str ||
                this.stat.labelType === LabelType.Number) {
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

  usageStat: UsageStat;

  @Input('stat')
  set stat(stat: UsageStat) {
    if (stat) {
      this.usageStat = stat;
      this.chartModel = this.basicSrv.transformToChartModel(stat);
    }
  }

  @Input('chartType') chartType = 'doughnut';

  readonly TAB_CHART: SelectItem[] = [
    {label: '', value: 'chart', icon: 'fa fa-line-chart'},
    {label: '', value: 'table', icon: 'fa fa-table'},
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
  };
  constructor(private basicSrv: BasicService) {}

  ngOnInit() {
    if (this.stat && this.stat.type === StatType.Parts) {
      this.options.scales.xAxes[0].display = false;
      this.options.scales.yAxes[0].display = false;
    }
  }
}
