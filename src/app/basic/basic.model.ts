export interface Result {
    status: number;
    op: string;
    msg: string;
    ok: boolean;
    error: any;
    data: any;
}

export interface DateRange {
    from: Date;
    to: Date;
}

export class ArrayMatcher {
    public name = '';
    public matchAll = false;
    public tags: string[] = [];
}

export class Filter {
    public fields = new Map<string, string[]>();
    public dates: DateRange[] = [];
    public lists: ArrayMatcher[] = [];
}

export enum FilterType {
    Value = 'value',
    Array = 'array',
    DateRange = 'dateRange',
}

export interface FilterDesc {
    name: string;
    type: FilterType;
    data: string[] | DateRange | boolean;
}

export interface PaginateEvent {
    first: number;
    rows: number;
    page: number;
    pageCount: number;

}
