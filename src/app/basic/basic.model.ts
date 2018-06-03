import { SelectItem } from "primeng/components/common/selectitem";

export interface Result<T> {
    status: number;
    op: string;
    msg: string;
    ok: boolean;
    error: any;
    data: T;
}

export interface DateRange {
    from: Date;
    to: Date;
}

export class Matcher {
    public matchAll = false;
    public fields: string[] = [];
}


// export class Filter {
//     public fields = new Map<string, string[]>();
//     public dates = new Map<string, DateRange>();
//     public lists = new Map<string, ArrayMatcher>();
// }

export class Filter {
    public fields = new Object();
    public boolFields = new Object();
    public dates = new Object();
    public lists = new Object();
    public searches = new Object()
    public constants = new Object();
}

export enum FilterType {
    Value = 'value',
    Array = 'array',
    DateRange = 'dateRange',
    Boolean = 'boolean',
    Search = 'search',
    Constant = 'constant'

}
// data?: string[] | DateRange | boolean[] | number[] | SelectItem[]
export type FVal = string[] | DateRange | boolean[] | number[] | SelectItem[];
// export type FilterVals = Object;


export interface FilterSpec {
    field: string;
    name: string;
    type: FilterType;
    fixedVal?: FVal;
}

export interface PaginateEvent {
    first: number;
    rows: number;
    page: number;
    pageCount: number;
}
