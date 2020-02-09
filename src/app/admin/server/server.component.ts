import {Component, OnDestroy, OnInit} from '@angular/core';
import * as moment from 'moment';
import {SelectItem} from 'primeng/primeng';

import {BasicService} from '../../basic/basic.service';
import {MsgService} from '../../basic/msg.service';
import {CPUStats, DiskInfo, MemoryStats, SysInfo, SysStat} from '../admin.model';
import {AdminService} from '../admin.service';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit, OnDestroy {
  readonly numItems = 20;

  readonly defaultRepeatMS = 5000;

  systemStats: SysStat;

  cpuUsage: number[] = [0];

  memoryUsage: number[] = [0];

  cpuAll: number[][] = [];

  repeat = false;

  repeatMs = this.defaultRepeatMS;


  labels = Array.from(Array(this.numItems).keys());

  cpuChart = {}

  memChart = {};

  disks: Object[] = [];

  repeatOpts: SelectItem[] = [
    {label: '1 second', value: 1000},
    {label: '5 seconds', value: 5000},
    {label: '10 seconds', value: 10000},
    {label: '30 seconds', value: 1000 * 30},
    {label: '1 Minute', value: 1000 * 60},
  ]

  cpuOpts = {
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

  memOpts = {
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
          suggestedMax: 1000,
          fontColor: 'white',
          beginAtZero: true,
        },
      }]
    }
  }

  pieOpts = {
    animation: {
      duration: 0,
    },
    legend: {display: true, position: 'left', labels: {fontColor: 'white'}},
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
        display: false,
      }],
      yAxes: [{
        display: false,
      }]
    }
  }


  constructor(
      private adminSrv: AdminService, private messageSrv: MsgService,
      private basicSrv: BasicService) {}

  ngOnInit() {
    this.repeat = this.adminSrv.getServerStatRefreshState();
    const repeatMs = this.adminSrv.getServerStatRefreshRate();
    this.repeatMs = repeatMs ? repeatMs : this.defaultRepeatMS;

    this.adminSrv.getSysInfo().subscribe(
        (sysInfo: SysInfo) => {
          this.handleDiskInfo(sysInfo.diskInfo);
          if (this.repeat) {
            this.loadRepeated();
          }
        },
        err => {
          this.messageSrv.showError('Failed to retrieve disk information');
        });
  }

  ngOnDestroy(): void {
    this.adminSrv.setServerStatRefreshState(this.repeat, this.repeatMs);
    this.repeat = false;
  }

  loadRepeated() {
    if (!this.repeat) {
      return;
    }
    setTimeout(() => {
      this.load();
      this.loadRepeated();
    }, this.repeatMs);
  }

  load() {
    this.adminSrv.getSysStats().subscribe((stats: SysStat) => {
      this.handleCPUUsageInfo(stats.cpuStats);
      this.handleMemoryInfo(stats.memoryStats);
    }),
        (err: any) => {
          this.messageSrv.showError(
              'Failed to retrieve server information' + err);
        }
  }

  repeatChanged() {
    if (this.repeat) {
      this.loadRepeated();
    } else {
      this.cpuUsage = [0];
      this.memoryUsage = [0];
    }
  }

  handleCPUUsageInfo(usage: CPUStats) {
    this.cpuUsage.push(Math.ceil(usage.combinedUsage));
    if (this.cpuUsage.length > this.numItems) {
      this.cpuUsage.shift();
    }
    this.cpuChart = {
      labels: this.labels,
      datasets: [{
        label: 'CPU Usage',
        data: this.cpuUsage,
        backgroundColor: '#e3d21490',
      }]
    };
  }

  handleMemoryInfo(usage: MemoryStats) {
    this.memoryUsage.push(this.toMB(usage.used));
    if (this.memoryUsage.length > this.numItems) {
      this.memoryUsage.shift();
    }
    this.memOpts.scales.yAxes[0].ticks.suggestedMax = this.toMB(usage.total);
    this.memChart = {
      labels: this.labels,
      datasets: [{
        label: 'Mem Usage',
        data: this.memoryUsage,
        backgroundColor: '#e3d21490',
      }]
    };
  }

  handleDiskInfo(disks: DiskInfo[]) {
    disks.forEach((d: DiskInfo) => {
      const model = {
        name: d.path,
        labels: ['Used in GBs', 'Free in GBs'],
        datasets: [{
          label: d.path,
          data: [this.toGB(d.used), this.toGB(d.free)],
          backgroundColor: ['red', 'green'],
        }]
      };
      this.disks.push(model);
    })
  }

  toGB(bytes: number): number {
    return Math.ceil(bytes / 1024 / 1024 / 1024);
  }

  toMB(bytes: number): number {
    return Math.ceil(bytes / 1024 / 1024);
  }
}
