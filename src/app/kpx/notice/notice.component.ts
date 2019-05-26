import { MsgService } from '../../basic/msg.service';
import { KpxService } from './../kpx.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FilterType, ColSpec, ColType, FilterSpec } from '../../basic/basic.model';
import { FilteredTableComponent } from '../../basic/filtered-table/filtered-table.component';
import { ObjectDetailService } from '../../basic/object-detail.service';
import { Notice } from '../kpx.model';
import { ValueTransformer } from '@angular/compiler/src/util';
import { ConfirmationService } from 'primeng/primeng';

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
      type: FilterType.Prop,
      // type: FilterType.Static,
      // staticVals: [
      //   { label: "Critical", value: "Critical" },
      //   { label: "Warning", value: "Warning" },
      //   { label: "Information", value: "Information" },
      // ]
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
      type: ColType.Boolean,
      width: '5%',
    },
    {
      title: 'Version',
      field: 'versionLimit',
      type: ColType.Value,
      width: '5%',
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
      type: ColType.Value,
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
          icon: 'fa-check',
          toolTip: 'Mark as done',
          disabled: (obj: Notice) => {
            return obj.done;
          },
          action: (obj: any) => {
            this.markAsDone(obj);
          }
        },
        {
          icon: 'fa-trash',
          toolTip: 'Delete notice',
          action: (obj: any) => {
            this.delete(obj);
          }
        },
      ]
    },
  ];

  @ViewChild(FilteredTableComponent) ftable: FilteredTableComponent;

  dataType = "notices"

  showFilter = false;

  showCreateDialog = false;

  constructor(
    private objSrv: ObjectDetailService,
    private kpx: KpxService,
    private msgSrv: MsgService,
    private confirmSrv: ConfirmationService) {

  }

  ngOnInit() {
  }

  onCreateDone() {
    this.showCreateDialog = false;
    this.ftable.refresh();
  }

  markAsDone(obj: Notice) {
    this.kpx.markNoticeAsDone(obj._id).subscribe(
      res => {
        this.msgSrv.showSuccess('Notice marked as done');
        this.ftable.refresh();
      },
      err => {
        this.msgSrv.showError('Failed to mark notice as done');
      }
    );
  }

  delete(obj: Notice) {
    this.confirmSrv.confirm({
      message: "Do you really want to delete this notice?",
      accept: () => {
        this.kpx.deleteNotice(obj._id).subscribe(
          res => {
            this.msgSrv.showSuccess('Notice deleted');
            this.ftable.refresh();
          },
          err => {
            this.msgSrv.showError('Failed to mark notice as done');
          }
        );
      },
      reject: () => this.showCreateDialog = false,
    })
  }
}
