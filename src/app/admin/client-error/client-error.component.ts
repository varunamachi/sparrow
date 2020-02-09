import {Component, OnInit, ViewChild} from '@angular/core';
import {ColSpec, ColType, Filter, FilterSpec, FilterType} from '../../basic/basic.model';
import {FilteredTableComponent} from '../../basic/filtered-table/filtered-table.component';
import {ObjectDetailService} from '../../basic/object-detail.service';

@Component({
  selector: 'app-client-error',
  templateUrl: './client-error.component.html',
  styleUrls: ['./client-error.component.css']
})
export class ClientErrorComponent implements OnInit {
  @ViewChild(FilteredTableComponent) ftable: FilteredTableComponent;

  readonly FSPEC: FilterSpec[] = [
    {
      name: 'User',
      field: 'user',
      type: FilterType.Prop,
    },
    {
      name: 'Date',
      field: 'dateTime',
      type: FilterType.DateRange,
    },
    {
      name: 'Error',
      field: 'error',
      type: FilterType.Search,
    },
  ];

  // "error": error.toString(),
  // "stackTrace": stackTrace.toString(),
  // "deviceParameters": deviceParameters,
  // "applicationParameters": applicationParameters,
  // "customParameters": customParameters,
  // "dateTime": dateTime.toIso8601String()

  readonly COLSPEC: ColSpec[] = [
    {
      title: 'Date',
      field: 'dateTime',
      type: ColType.Date,
      width: '35%',
    },
    {
      title: 'User',
      type: ColType.Value,
      width: '30%',
    },
    {
      title: 'Error',
      field: 'error',
      type: ColType.Value,
      width: '10%',
    },
    {
      title: 'Ops ',
      type: ColType.Ops,
      width: '5%',
      actions:
          [
            {
              icon: 'fa-info',
              toolTip: 'Show event details',
              action:
                  info => {
                    this.objSrv.show(info);
                  }
            },
          ],
    }
  ]

  readonly ENTRIES_PER_PAGE = 25;

  readonly PAGE_SHOWN = 5;

  from = 0;

  total = 0;

  showFilter = true;

  errors: Object[] = [];

  filter = new Filter();

  filterDesc: FilterSpec[] = []

  constructor(private objSrv: ObjectDetailService) {}

  ngOnInit() {}

  showEventDetail(event: any) {
    this.objSrv.show(event);
  }
}
