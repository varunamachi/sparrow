import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
import { SysStat, CPUStats } from '../admin.model';
import { AdminService } from '../admin.service';
import { MsgService } from '../../basic/msg.service';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {

  systemStats: SysStat;

  cpuUsage: number[] = [];

  memoryUsage: number[] = [];



  repeat = false;

  readonly numItems = 20;

  labels = Array.from(Array(this.numItems).keys());

  cpuChart = {}

  memChart = {};

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
          suggestedMax: 100,
          fontColor: 'white',
          beginAtZero: true,
        },
      }]
    }
  }

  constructor(private adminSrv: AdminService,
    private messageSrv: MsgService) { }

  ngOnInit() {
    this.loadRepeated();
  }

  loadRepeated() {
    console.log(this.repeat);
    if (!this.repeat) {
      return;
    }
    setTimeout(() => {
      this.load()
      this.loadRepeated();
    }, 2000);
  }

  load() {
    this.adminSrv.getSysStats().subscribe(
      (stats: SysStat) => {
        // this.systemStats = stats;
        this.cpuUsage.push(Math.ceil(stats.cpuStats.combinedUsage));
        if (this.cpuUsage.length > 10) {
          this.cpuUsage.shift();
        }
        this.cpuChart = {
          labels: this.labels,
          datasets: [
            {
              label: 'CPU Usage',
              data: this.cpuUsage,
              backgroundColor: '#AA448855',
            }
          ]
        };
      }),
      (err: any) => {
        this.messageSrv.showError('Failed to retrieve server information'
          + err);
      }
  }

  repeatChanged() {
    if (this.repeat) {
      this.loadRepeated();
    }
  }
}
