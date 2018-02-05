import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'app-object',
    templateUrl: './object.component.html',
    styleUrls: ['./object.component.css']
})
export class ObjectComponent implements OnInit {

    @Input('object') object: Object;

    constructor() { }

    ngOnInit() {
    }

}
