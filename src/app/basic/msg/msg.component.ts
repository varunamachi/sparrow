import { Component, OnInit, OnDestroy } from '@angular/core';
import { MsgService } from '../msg.service';
import { Subscription } from 'rxjs/Subscription';
import { Message } from 'primeng/components/common/message';

@Component({
    selector: 'app-msg',
    templateUrl: './msg.component.html',
    styleUrls: ['./msg.component.css']
})
export class MsgComponent implements OnInit, OnDestroy {

    sub: Subscription;

    msgs: Array<Message> = [];

    constructor(private msgSrv: MsgService) {
        this.sub = msgSrv.observable.subscribe(
            (msg: Message) => {
                this.msgs.push(msg);
            }
        );
    }

    ngOnInit() {
    }

    ngOnDestroy() {
        if(this.sub) {
            this.sub.unsubscribe();
        }
    }

}
