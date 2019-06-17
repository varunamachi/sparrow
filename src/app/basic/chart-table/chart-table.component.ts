import { Component, OnInit, Input } from '@angular/core';
import { UsageStat, ColSpec, ColType, StatType } from '../basic.model';
import { BasicService } from '../basic.service';

@Component({
  selector: 'app-chart-table',
  templateUrl: './chart-table.component.html',
  styleUrls: ['./chart-table.component.css']
})
export class ChartTableComponent implements OnInit {

  readonly colSpec: ColSpec[] = [
    {
      title: 'Name',
      field: 'name',
      type: ColType.Value,
      width: '48%',
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

  chartModel = {};

  options = {


    segmentShowStroke: false,
    legend: {
      display: false,
      labels: {
        fontColor: 'white',
      },
      elements: {
        arc: {
          borderWidth: 0,
        },
      },
      backgroundColor: 'white',
      scales: {
        xAxes: [{
          ticks: {
            fontColor: "white", // this here
          },
        }],
        yAxes: [{
          ticks: {
            fontColor: "white", // this here
          },
        }],
      }
    }
  }
  constructor(private basicSrv: BasicService) { }

  ngOnInit() {
    this.chartModel = this.basicSrv.transformToChartModel(this.stat);
  }

}
