import { EntityService } from './../entity.service';
import { ConfirmationService } from 'primeng/components/common/confirmationservice';
import { MsgService } from './../../basic/msg.service';
import { BasicService } from './../../basic/basic.service';
import { ObjectDetailService } from './../../basic/object-detail.service';
import { Entity } from './../entity.model';
import {
    FilterSpec,
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

    dataType = 'entity';

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
                    icon: 'fa-key',
                    toolTip: 'Generate auth secret',
                    action: (entity: Entity) => { this.generateSecret(entity); },
                },
                {
                    icon: 'fa-trash',
                    toolTip: 'Delete Entity',
                    action: (entity: Entity) => { this.deleteEntity(entity); },
                },
                {
                    icon: 'fa-info',
                    toolTip: 'Show entity details',
                    action: (entity: Entity) => {
                        this.objSrv.show(entity);
                    }
                },
                // {
                //     icon: 'fa-key',
                //     toolTip: 'Show entity secret dialog',
                //     action: (entity: Entity) => {
                //         this.secret = 'c722c55f-207a-4538-bdb8-4214ef98feb7';
                //         this.showSecret = true;
                //     }
                // }
            ]
        },
    ]

    @ViewChild(FilteredTableComponent) ftable: FilteredTableComponent;

    showFilter = true;

    showCreateEntityDialog = false;

    secret: string;

    showSecret: boolean;

    constructor(
        private genSrv: BasicService,
        private objSrv: ObjectDetailService,
        private msgSrv: MsgService,
        private confirmSrv: ConfirmationService,
        private entitySrv: EntityService) {

    }

    ngOnInit() {
    }

    onEntityCreationDone(item: Entity) {
        this.showCreateEntityDialog = false;
        this.genSrv.createItem(this.dataType, item).subscribe(() => {
            this.msgSrv.showSuccess('Entity created');
            this.ftable.refreshAll();
        }, err => {
            this.msgSrv.showError('Failed to create entity');
        })

    }


    deleteEntity(entity: Entity) {
        this.confirmSrv.confirm({
            message: 'Do you really want to delete the entity',
            accept: () => {
                this.genSrv.deleteItem(this.dataType, entity._id).subscribe(
                    () => {
                        this.msgSrv.showSuccess('Entity successfuly deleted');
                        this.ftable.refreshAll();
                    }, err => {
                        this.msgSrv.showError('Failed to delete entity');
                    });
            },
        });
    }

    generateSecret(entity: Entity) {
        this.confirmSrv.confirm({
            message: 'If you generate secret, previous secret is invalidated.' +
                ' Do you want to continue?',
            accept: () => {
                this.entitySrv.generateSecret(entity).subscribe(
                    (secret: string) => {
                        this.secret = secret;
                        this.showSecret = true;
                    }, err => {
                        this.msgSrv.showError(
                            'Failed to generate entity secret');
                    }
                )
            },
        });
    }

}
