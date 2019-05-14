import { Component, OnInit, ViewChild } from '@angular/core';
import { FilterType, ColSpec, ColType, FilterSpec } from '../../basic/basic.model';
import { FilteredTableComponent } from '../../basic/filtered-table/filtered-table.component';
import { ObjectDetailService } from '../../basic/object-detail.service';

@Component({
  selector: 'app-devices',
  templateUrl: './devices.component.html',
  styleUrls: ['./devices.component.css']
})
export class DevicesComponent implements OnInit {

  readonly FSPEC: FilterSpec[] = [
    {
      name: 'Device ID',
      field: 'deviceID',
      type: FilterType.Prop,
    },
    {
      name: 'OS Version',
      field: 'osVersion',
      type: FilterType.Prop,
    },
    {
      name: 'Hardware',
      field: 'hardware',
      type: FilterType.Prop,
    },
  ];

  // deviceID
  // os
  // osVersion
  // hardware
  // appVersion
  // isDevice
  // lastLogin
  // loginCount
  // subscriptions

  readonly COLSPEC: ColSpec[] = [
    {
      title: 'Device ID',
      field: 'deviceID',
      type: ColType.Value,
      width: '18%',
    },
    {
      title: 'OS Version',
      field: 'osVersion',
      type: ColType.Value,
      width: '10%',
    },
    {
      title: 'Hardware',
      field: 'hardware',
      type: ColType.Value,
      width: '15%',
    },
    {
      title: 'Is Device',
      field: 'isDevice',
      type: ColType.Boolean,
      width: '5%',
    },
    {
      title: 'Last Login',
      field: 'lastLogin',
      type: ColType.Date,
      width: '15%',
    },
    {
      title: '# Launches',
      field: 'loginCount',
      type: ColType.Value,
      width: '15%',
    },
    {
      title: 'Actions',
      type: ColType.Ops,
      width: '10%',
      actions: [
        {
          icon: 'fa-info',
          toolTip: 'Show details',
          action: (obj: any) => {
            this.objSrv.show(obj);
          }
        },
      ]
    },
  ];

  @ViewChild(FilteredTableComponent) ftable: FilteredTableComponent;

  dataType = "clients"

  showFilter = true;

  constructor(private objSrv: ObjectDetailService) {

  }

  ngOnInit() {
    // this.kpxSrv.getCommodityColNames().subscribe(
    //   (objs: Object[]) => {
    //     const items: SelectItem[] = [];
    //     objs.forEach((obj: Object) => {
    //       items.push({
    //         label: obj['colName'],
    //         value: obj['colName'],
    //       })
    //     })
    //     this.commodities = items;
    //   },
    //   err => {
    //     this.msgSrv.showError('Prices', 'Failed to fetch cmt col names');
    //   }
    // )
  }


}
