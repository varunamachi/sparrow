import { Component, OnInit, ViewChild } from '@angular/core';
import { FilterType, ColSpec, ColType, FilterSpec } from '../../basic/basic.model';
import { FilteredTableComponent } from '../../basic/filtered-table/filtered-table.component';
import { ObjectDetailService } from '../../basic/object-detail.service';

@Component({
  selector: 'app-notice',
  templateUrl: './notice.component.html',
  styleUrls: ['./notice.component.css']
})
export class NoticeComponent implements OnInit {

  readonly FSPEC: FilterSpec[] = [
    {
      name: 'Severity',
      field: 'type',
      type: FilterType.Static,
      staticVals: [
        { label: "Critical", value: "Critical" },
        { label: "Warning", value: "Warning" },
        { label: "Information", value: "Information" },
      ]
    },
    {
      name: 'Done?',
      field: 'done',
      type: FilterType.Boolean,
    },
  ];

  readonly COLSPEC: ColSpec[] = [
    {
      title: 'Severity',
      field: 'type',
      type: ColType.Value,
      width: '15%',
    },
    {
      title: 'Done?',
      field: 'done',
      type: ColType.Value,
      width: '10%',
    },
    {
      title: 'Msg - English',
      field: 'messageEn',
      type: ColType.Value,
      width: '30%',
    },
    {
      title: 'Msg - Kannada',
      field: 'messageKn',
      type: ColType.Boolean,
      width: '30%',
    },
    {
      title: 'Ops',
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
        {
          icon: 'fa-trash',
          toolTip: 'Delete',
          action: (obj: any) => {
            // this.objSrv.show(obj);
          }
        },
      ]
    },
  ];

  @ViewChild(FilteredTableComponent) ftable: FilteredTableComponent;

  dataType = "notices"

  showFilter = false;

  constructor(private objSrv: ObjectDetailService) {

  }

  ngOnInit() {
  }

}
