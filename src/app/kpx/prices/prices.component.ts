import { Component, OnInit, ViewChild } from '@angular/core';
import { FilterSpec, FilterType, ColSpec, ColType, Filter } from '../../basic/basic.model';
import { FilteredTableComponent } from '../../basic/filtered-table/filtered-table.component';
import { BasicService } from '../../basic/basic.service';
import { ObjectDetailService } from '../../basic/object-detail.service';
import { MsgService } from '../../basic/msg.service';
import { KpxService } from '../kpx.service';
import { ConfirmationService, SelectItem } from 'primeng/primeng';

@Component({
  selector: 'app-prices',
  templateUrl: './prices.component.html',
  styleUrls: ['./prices.component.css']
})
export class PricesComponent implements OnInit {

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
      title: '# Stats',
      field: 'statsEn',
      type: ColType.MapLength,
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

  commodities: SelectItem[] = [];

  dataType = 'ARECANUT';

  constructor(
    private genSrv: BasicService,
    private objSrv: ObjectDetailService,
    private msgSrv: MsgService,
    private kpxSrv: KpxService,
    private confirmSrv: ConfirmationService) {

  }

  ngOnInit() {
    this.kpxSrv.getCommodityColNames().subscribe(
      (objs: Object[]) => {
        const items: SelectItem[] = [];
        objs.forEach((obj: Object) => {
          items.push({
            label: obj['colName'],
            value: obj['colName'],
          })
        })
        this.commodities = items;
      },
      err => {
        this.msgSrv.showError('Prices', 'Failed to fetch cmt col names');
      }
    )
  }

  // onCommodityChange(value: string) {
  //   this.dataType = value;
  //   this.ftable.refresh(0, true);
  // }

}
