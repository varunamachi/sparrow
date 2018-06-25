import { ObjectDetailService } from './../../basic/object-detail.service';
import { Entity } from './../entity.model';
import {
    Filter,
    FilterSpec,
    PaginateEvent,
    FilterType,
    ColSpec,
    ColType
} from './../../basic/basic.model';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FilteredTableComponent } from '../../basic/filtered-table/filtered-table.component';

@Component({
    selector: 'app-entity-list',
    templateUrl: './entity-list.component.html',
    styleUrls: ['./entity-list.component.css']
})
export class EntityListComponent implements OnInit {

    readonly FSPEC: FilterSpec[] = [
        {
            name: 'Name',
            field: 'name',
            type: FilterType.Prop,
        },
        {
            name: 'Type',
            field: 'type',
            type: FilterType.Prop,
        },
        {
            name: 'Tags',
            field: 'tags',
            type: FilterType.Array,
        },
        {
            name: 'Created',
            field: 'createdAt',
            type: FilterType.DateRange,
        },
    ];

    readonly COLSPEC: ColSpec[] = [
        {
            title: 'Name',
            field: 'name',
            type: ColType.Value,
            width: '30%',
        },
        {
            title: 'Type',
            field: 'type',
            type: ColType.Value,
            width: '20%',
        },
        {
            title: 'Owner',
            field: 'owner',
            type: ColType.Value,
            width: '20%',
        },
        {
            title: 'Location',
            field: 'location',
            type: ColType.Value,
            width: '30%',
        },
        {
            title: 'Actions',
            type: ColType.Ops,
            width: '10%',
            actions: [
                {
                    icon: 'fa-trash',
                    toolTip: 'Delete Entity',
                    action: (entity: Entity) => { this.deleteEntity(entity); },
                },
                {
                    icon: 'fa-info',
                    toolTip: 'Show user details',
                    action: (entity: Entity) => {
                        this.objSrv.show(entity);
                    }
                }
            ]
        },
    ]

    @ViewChild(FilteredTableComponent) ftable: FilteredTableComponent;

    showFilter = true;

    showCreateEntityDialog = false;

    constructor(private objSrv: ObjectDetailService) {

    }

    ngOnInit() {
    }

    onEntityCreationDone() {
        this.showCreateEntityDialog = false;
        this.ftable.refresh();
    }


    deleteEntity(entity: Entity) {

    }

}
