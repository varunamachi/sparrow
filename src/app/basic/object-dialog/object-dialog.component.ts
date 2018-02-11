import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { ObjectDetailService } from '../object-detail.service';

@Component({
    selector: 'app-object-dialog',
    templateUrl: './object-dialog.component.html',
    styleUrls: ['./object-dialog.component.css']
})
export class ObjectDialogComponent implements OnInit {

    sub: Subscription

    object: Object = null;

    show = false;

    constructor(private objSrv: ObjectDetailService) {
        this.sub = objSrv.observable.subscribe(
            (obj: Object) => {
                this.object = obj;
                this.show = true;
            }
        )
    }

    ngOnInit() {
    }
}
