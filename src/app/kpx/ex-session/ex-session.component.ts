import { Component, OnInit, ViewChild } from '@angular/core';
import { FilterSpec, FilterType, ColSpec, ColType } from '../../basic/basic.model';
import { FilteredTableComponent } from '../../basic/filtered-table/filtered-table.component';
import { BasicService } from '../../basic/basic.service';
import { ObjectDetailService } from '../../basic/object-detail.service';
import { MsgService } from '../../basic/msg.service';
import { KpxService } from '../kpx.service';
import { ConfirmationService } from 'primeng/primeng';

@Component({
  selector: 'app-ex-session',
  templateUrl: './ex-session.component.html',
  styleUrls: ['./ex-session.component.css']
})
export class ExSessionComponent implements OnInit {

  dataType = 'exs_sessions';

  readonly FSPEC: FilterSpec[] = [
    {
      name: 'Type',
      field: 'type',
      type: FilterType.Prop,
    },
    {
      name: 'Started By',
      field: 'startedBy',
      type: FilterType.Prop,
    },
    {
      name: 'Status',
      field: 'status',
      type: FilterType.Prop,
    },
  ];

  readonly COLSPEC: ColSpec[] = [
    {
      title: 'Type',
      field: 'type',
      type: ColType.Value,
      width: '18%',
    },
    {
      title: 'Started By',
      field: 'startedBy',
      type: ColType.Value,
      width: '17%',
    },
    {
      title: 'Started At',
      field: 'startedAt',
      type: ColType.Date,
      width: '20%',
    },
    {
      title: 'Finished At',
      field: 'endedAt',
      type: ColType.Date,
      width: '20%',
    },
    {
      title: 'Status',
      field: 'status',
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

  showFilter = true;

  showCreateDialog = false;

  secret: string;

  showSecret: boolean;

  constructor(
    private genSrv: BasicService,
    private objSrv: ObjectDetailService,
    private msgSrv: MsgService,
    private kpxSrv: KpxService,
    private confirmSrv: ConfirmationService) {

  }

  ngOnInit() {
  }

}
