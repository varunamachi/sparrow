import { Entity } from './../entity.model';
import { Filter, FilterDesc, PaginateEvent } from './../../basic/basic.model';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-entity-list',
    templateUrl: './entity-list.component.html',
    styleUrls: ['./entity-list.component.css']
})
export class EntityListComponent implements OnInit {

    entities: Entity

    readonly ENTRIES_PER_PAGE = 25;

    readonly PAGE_SHOWN = 5;

    from = 0;

    total = 0;

    showFilter = true;

    filter = new Filter();

    filterDesc: FilterDesc[] = []

    showCreateEntityDialog = false;

    constructor() { }

    ngOnInit() {
    }

    refresh() {

    }

    populateFilters() {

    }

    filterChanged(filter: Filter) {
        this.from = 0;
        this.filter = filter;
        this.refresh();
    }

    onEntityCreationDone() {
        this.showCreateEntityDialog = false;
        this.refresh();
    }

    showEntityDetails(entity: any) {
    }

    paginate(event: PaginateEvent) {
        this.from = event.first;
        this.refresh();
    }

}
