import { APP_NAME, API_VERSION } from '../../constnats';
import { Filter } from './basic.model';

export function surl(uri: string): string {
    return APP_NAME + '/api/' + API_VERSION + '/in/r0/' + uri;
}

export function aurl(uri: string): string {
    return APP_NAME + '/api/' + API_VERSION + '/in/r1/' + uri;
}

export function nurl(uri: string): string {
    return APP_NAME + '/api/' + API_VERSION + '/in/r2/' + uri;
}

export function murl(uri: string, ): string {
    return APP_NAME + '/api/' + API_VERSION + '/in/r3/' + uri;
}

export function purl(uri: string): string {
    return APP_NAME + '/api/' + API_VERSION + '/' + uri;
}

export function _url(
    access: string,
    offset: number,
    limit: number,
    filter: Filter,
    ...comps: string[]): string {
    let url = APP_NAME + '/api/' + API_VERSION + '/';
    if (access) {
        url += access + '/';
    }
    comps.forEach((u: string, index: number) => {
        url += u
        if (index < comps.length - 1) {
            url += '/'
        }
    });
    if (offset >= 0) {
        url += '?offset=' + offset;
    }
    if (limit > 0) {
        url += '&limit=' + limit;
    }
    if (filter) {
        url += '&filter=' + JSON.stringify(filter)
    }
    return url;

}
