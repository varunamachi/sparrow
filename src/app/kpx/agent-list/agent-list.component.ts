import { Agent, AgentPlatform } from './../kpx.model';
import { ConfirmationService } from 'primeng/components/common/confirmationservice';
import { MsgService } from './../../basic/msg.service';
import { ObjectDetailService } from './../../basic/object-detail.service';
import { BasicService } from './../../basic/basic.service';
import { FilteredTableComponent } from './../../basic/filtered-table/filtered-table.component';
import { FilterType, FilterSpec, ColType, ColSpec } from './../../basic/basic.model';
import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
    selector: 'app-agent-list',
    templateUrl: './agent-list.component.html',
    styleUrls: ['./agent-list.component.css']
})
export class AgentListComponent implements OnInit {

    dataType = 'agent';

    readonly FSPEC: FilterSpec[] = [
        {
            name: 'Name',
            field: 'name',
            type: FilterType.Prop,
        },
        {
            name: 'Platform',
            field: 'type',
            type: FilterType.Prop,
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
            title: 'Platform',
            field: 'platform',
            type: ColType.Custom,
            valueGetter: (item: Agent) => {
                switch (item.platform) {
                    case AgentPlatform.Android: return 'Android';
                    case AgentPlatform.IOS: return 'IOS';
                    case AgentPlatform.Linux: return 'Linux';
                    case AgentPlatform.Windows: return 'Windows';
                    case AgentPlatform.OSX: return 'OSX';
                }
                return "Unknown";
            },
            width: '20%',
        },
        {
            title: 'Owner',
            field: 'owner',
            type: ColType.Value,
            width: '20%',
        },
        {
            title: 'Actions',
            type: ColType.Ops,
            width: '10%',
            actions: [
                {
                    icon: 'fa-key',
                    toolTip: 'Generate auth secret',
                    action: (agent: Agent) => {
                        this.generateSecret(agent);
                    },
                },
                {
                    icon: 'fa-trash',
                    toolTip: 'Delete',
                    action: (agent: Agent) => {
                        this.delete(agent);
                    },
                },
                {
                    icon: 'fa-info',
                    toolTip: 'Show details',
                    action: (agent: Agent) => {
                        this.objSrv.show(agent);
                    }
                },
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
        private confirmSrv: ConfirmationService) {

    }

    ngOnInit() {
    }

    // onEntityCreationDone(item: Entity) {
    //     this.showCreateEntityDialog = false;
    //     this.genSrv.createItem(this.dataType, item).subscribe(() => {
    //         this.msgSrv.showSuccess('Entity created');
    //         this.ftable.refreshAll();
    //     }, err => {
    //         this.msgSrv.showError('Failed to create entity');
    //     })

    // }


    delete(agent: Agent) {
        // this.confirmSrv.confirm({
        //     message: 'Do you really want to delete the entity',
        //     accept: () => {
        //         this.genSrv.deleteItem(this.dataType, entity._id).subscribe(
        //             () => {
        //                 this.msgSrv.showSuccess('Entity successfuly deleted');
        //                 this.ftable.refreshAll();
        //             }, err => {
        //                 this.msgSrv.showError('Failed to delete entity');
        //             });
        //     },
        // });
    }

    generateSecret(agent: Agent) {
        // this.confirmSrv.confirm({
        //     message: 'If you generate secret, previous secret is invalidated.' +
        //         ' Do you want to continue?',
        //     accept: () => {
        //         this.entitySrv.generateSecret(entity).subscribe(
        //             (secret: string) => {
        //                 this.secret = secret;
        //                 this.showSecret = true;
        //             }, err => {
        //                 this.msgSrv.showError(
        //                     'Failed to generate entity secret');
        //             }
        //         )
        //     },
        // });
    }

}
