import { KpxService } from './../kpx.service';
import { NoticeType } from './../kpx.model';
import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { MsgService } from '../../basic/msg.service';

@Component({
    selector: 'app-notice-create',
    templateUrl: './notice-create.component.html',
    styleUrls: ['./notice-create.component.css']
})
export class NoticeCreateComponent implements OnInit {

    readonly AUTH_LEVELS_ITEMS = [
        { label: "Warning", value: NoticeType.Warning },
        { label: "Critical", value: NoticeType.Critical },
        { label: "Information", value: NoticeType.Information },
    ];

    password = '';

    confirm = '';

    version = -1;

    working = false;

    @Output("onFinished") onFinished = new EventEmitter()

    constructor(
        private msgSrv: MsgService,
        private kpx: KpxService) {

    }

    ngOnInit() {
    }

    createNotice(f: any) {
        const notice = {
            type: f.value.type ? f.value.type : NoticeType.Warning,
            messageEn: f.value.messageEn,
            messageKn: f.value.messageKn,
            versionLimit: f.value.versionLimit,
            time: new Date(),
            done: false,
        };
        this.kpx.createNotice(notice).subscribe(
            res => {
                this.working = false;
                this.msgSrv.showSuccess('Notice created successful');
                this.onFinished.emit({ result: true, notice: notice });
            },
            err => {
                this.working = false;
                this.msgSrv.showError('Notice creation failed');
                this.onFinished.emit({ result: false, notice: notice });
            }
        )
    }
}
