import {Component, OnInit, ViewChild} from '@angular/core';

import {ColSpec, ColType, FilterSpec, FilterType} from '../../basic/basic.model';
import {FilteredTableComponent} from '../../basic/filtered-table/filtered-table.component';
import {ObjectDetailService} from '../../basic/object-detail.service';

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
      type: FilterType.Search,
    },
    {
      name: 'Manufacturer',
      field: 'manufacturer',
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
    {
      name: 'Is Device',
      field: 'isDevice',
      type: FilterType.Boolean,
    },
    {
      name: 'App Version',
      field: 'appVersion',
      type: FilterType.Prop,
    },
  ];

  readonly COLSPEC: ColSpec[] = [
    {
      title: 'Device ID',
      field: 'deviceID',
      type: ColType.Value,
      width: '14%',
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
      width: '10%',
    },
    {
      title: 'Last Login',
      field: 'lastLogin',
      type: ColType.Date,
      width: '15%',
    },
    {
      title: '#Launches',
      field: 'loginCount',
      type: ColType.Value,
      width: '10%',
    },
    {
      title: '#Subs',
      field: 'subscriptions',
      type: ColType.ArrayLength,
      width: '10%',
    },
    {
      title: 'Actions',
      type: ColType.Ops,
      width: '10%',
      actions:
          [
            {
              icon: 'fa-info',
              toolTip: 'Show details',
              action:
                  (obj: any) => {
                    this.objSrv.show(obj);
                  }
            },
          ]
    },
  ];

  @ViewChild(FilteredTableComponent) ftable: FilteredTableComponent;

  dataType = 'clients'

  showFilter = true;

  constructor(private objSrv: ObjectDetailService) {}

  ngOnInit() {}
}
