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
            if (!val || !this.usageStat) {
              return '';
            }
            if (this.usageStat.labelType === LabelType.Str ||
                this.usageStat.labelType === LabelType.Number) {
              return val.label
            }
            if (this.usageStat.labelType == LabelType.Month) {
              return moment(val.label).format('DD MMMM YYYY')
            }
            if (this.usageStat.labelType == LabelType.Day) {
              return moment(val.label).format('DD MMMM')
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

  usageStat: UsageStat = {
    labelType: LabelType.Str,
    name: '',
    type: StatType.Single,
    values: [],
  };

  values: StatPoint[] = [];

  @Input('stat')
  set stat(stat: UsageStat) {
    if (stat) {
      console.log(stat);
      this.usageStat = stat;
      this.chartModel = this.basicSrv.transformToChartModel(stat);
      this.values = stat.values.reverse();
      console.log(this.values);
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
