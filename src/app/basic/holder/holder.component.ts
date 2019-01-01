import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FilterType, MatchStrategy } from '../basic.model';
import { SelectItem } from 'primeng/primeng';


interface ExtSelectItem extends SelectItem {
    desc: string;
}

@Component({
    selector: 'app-holder',
    templateUrl: './holder.component.html',
    styleUrls: ['./holder.component.css']
})
export class HolderComponent implements OnInit {

    @Input('name') name = '';

    @Input('collapsible') collapsible = true;

    @Input('collapsed') collapsed = false;

    // @Input('showNegator') showNegator = false;

    @Input('modifier') modifier = MatchStrategy.One;

    @Output('modifierChange') modifierChange = new EventEmitter();

    @Output('onReset') onReset = new EventEmitter();

    @Input('filterType') filterType: FilterType = FilterType.Prop;

    readonly ARRAY_OPTS: Array<ExtSelectItem> = [
        {
            label: 'All',
            value: MatchStrategy.All,
            desc: 'Match all the selected items',
        },
        {
            label: 'One',
            value: MatchStrategy.One,
            desc: 'Match one or more selected items',
        },
        {
            label: 'None',
            value: MatchStrategy.None,
            desc: 'Exclude the selected items',
        },
    ];



    constructor() { }

    ngOnInit() {
    }

    onModifierChanged() {
        if (this.filterType == FilterType.Prop) {
            if (this.modifier == MatchStrategy.One) {
                this.modifier = MatchStrategy.None;
            } else {
                this.modifier = MatchStrategy.One;
            }
        } 
        this.modifierChange.emit(this.modifier);
    }
}
