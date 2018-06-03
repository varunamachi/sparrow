import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'app-holder',
    templateUrl: './holder.component.html',
    styleUrls: ['./holder.component.css']
})
export class HolderComponent implements OnInit {

    @Input('name') name = '';

    constructor() { }

    ngOnInit() {
    }

}
