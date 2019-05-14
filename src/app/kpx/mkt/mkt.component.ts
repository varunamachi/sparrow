import { Component, OnInit, ViewChild } from '@angular/core';
import { FilterSpec, FilterType, ColSpec, ColType } from '../../basic/basic.model';
import { FilteredTableComponent } from '../../basic/filtered-table/filtered-table.component';
import { ObjectDetailService } from '../../basic/object-detail.service';

@Component({
  selector: 'app-mkt',
  templateUrl: './mkt.component.html',
  styleUrls: ['./mkt.component.css']
})
export class MktComponent implements OnInit {

  dataType = 'markets';

  readonly COLSPEC: ColSpec[] = [
    {
      title: 'Code',
      field: 'code',
      type: ColType.Value,
      width: "20%",
    },
    {
      title: 'Name',
      field: 'name',
      type: ColType.Value,
      width: "20%",
    },
    {
      title: 'Name (Kn)',
      field: 'nameKn',
      type: ColType.Value,
      width: "20%",
    },
    // {
    //   title: '# Markets',
    //   field: 'markets',
    //   type: ColType.ArrayLength,
    //   width: "20%",
    // },
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

  readonly FSPEC: FilterSpec[] = [
    {
      name: 'Name',
      field: 'name',
      type: FilterType.Prop,
    },
    {
      name: 'Kannada Name',
      field: 'nameKn',
      type: FilterType.Prop,
    },
  ]

  @ViewChild(FilteredTableComponent) ftable: FilteredTableComponent;

  showFilter = true;

  showCreateDialog = false;

  secret: string;

  showSecret: boolean;

  constructor(private objSrv: ObjectDetailService) {

  }

  ngOnInit() {
  }

}
