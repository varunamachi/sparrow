import { APP_NAME, API_VERSION } from '../../constnats';
import { Filter } from './basic.model';

const SA = 'in/r0';
const AA = 'in/r1';
const NA = 'in/r2';
const MA = 'in/r3';
const PA = '';

export function surl(...uri: string[]): string {
    return _url(SA, null, null, null, ...uri);
}

export function aurl(...uri: string[]): string {
    return _url(AA, null, null, null, ...uri);
}

export function nurl(...uri: string[]): string {
    return _url(NA, null, null, null, ...uri);
}

export function murl(...uri: string[] ): string {
    return _url(MA, null, null, null, ...uri);
}

export function purl(...uri: string[]): string {
    return _url(PA, null, null, null, ...uri);
}

export function surlx(
    offset: number,
    limit: number,
    filter: Filter,
    ...uri: string[]): string {
    return _url(SA, offset, limit, filter, ...uri);
}
export function aurlx(
    offset: number,
    limit: number,
    filter: Filter,
    ...uri: string[]): string {
    return _url(AA, offset, limit, filter, ...uri);
}

export function nurlx(
    offset: number,
    limit: number,
    filter: Filter,
    ...uri: string[]): string {
    return _url(NA, offset, limit, filter, ...uri);
}

export function murlx(
    offset: number,
    limit: number,
    filter: Filter,
    ...uri: string[]): string {
    return _url(MA, offset, limit, filter, ...uri);
}

export function purlx(
    offset: number,
    limit: number,
    filter: Filter,
    ...uri: string[]): string {
    return _url(PA, offset, limit, filter, ...uri);
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
    if (filter) {
        url += '?filter=' + JSON.stringify(filter)
    }
    if (offset !== null && limit !== null) {
        url += (filter ? '&' : '?') + 'offset=' + offset + '&limit=' + limit;
    }
    return url;

}
