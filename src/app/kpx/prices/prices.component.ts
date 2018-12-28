import { Component, OnInit, ViewChild } from '@angular/core';
import { FilterSpec, FilterType, ColSpec, ColType } from '../../basic/basic.model';
import { FilteredTableComponent } from '../../basic/filtered-table/filtered-table.component';
import { BasicService } from '../../basic/basic.service';
import { ObjectDetailService } from '../../basic/object-detail.service';
import { MsgService } from '../../basic/msg.service';
import { KpxService } from '../kpx.service';
import { ConfirmationService } from 'primeng/primeng';

@Component({
  selector: 'app-prices',
  templateUrl: './prices.component.html',
  styleUrls: ['./prices.component.css']
})
export class PricesComponent implements OnInit {

  dataType = 'ARECANUT';

  readonly FSPEC: FilterSpec[] = [
    {
      name: 'Market',
      field: 'marketName',
      type: FilterType.Prop,
    },
    {
      name: 'Month',
      field: 'month',
      type: FilterType.Prop,
    },
  ];

  readonly COLSPEC: ColSpec[] = [
    {
      title: 'Name',
      field: 'commodityName',
      type: ColType.Value,
      width: '18%',
    },
    {
      title: 'Market',
      field: 'marketName',
      type: ColType.Value,
      width: '17%',
    },
    {
      title: 'Price On',
      field: 'date',
      type: ColType.Date,
      width: '20%',
    },
    {
      title: 'Created At',
      field: 'createdAt',
      type: ColType.Date,
      width: '20%',
    },
    {
      title: 'Updated At',
      field: 'updatedAt',
      type: ColType.Date,
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
