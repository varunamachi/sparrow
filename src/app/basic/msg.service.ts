import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Message } from 'primeng/components/common/message';

@Injectable()
export class MsgService {

    source = new Subject<Message>();

    observable = this.source.asObservable();

    constructor() { }

    show(msg: Message) {
        if(msg) {
            this.source.next(msg);
        }
    }

    showError(msg: string, header: string = 'Error!') {
        this.show({
            severity: 'error',
            summary: header,
            detail: msg,
        })
    }

    showWarning(msg: string, header: string = 'Warning!') {
        this.show({
            severity: 'warn',
            summary: header,
            detail: msg,
        })
    }

    showInfo(msg: string, header: string = 'Information...') {
        this.show({
            severity: 'info',
            summary: header,
            detail: msg,
        })
    }

    showSuccess(msg: string, header: string = 'Success') {
        this.show({
            severity: 'success',
            summary: header,
            detail: msg,
        })
    }
}
