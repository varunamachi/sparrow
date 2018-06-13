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
    public props = new Object();
    public boolFields = new Object();
    public dates = new Object();
    public lists = new Object();
    public searches = new Object()
    public constants = new Object();
}

export enum FilterType {
    Prop = 'prop',
    Array = 'array',
    DateRange = 'dateRange',
    Boolean = 'boolean',
    Search = 'search',
    Constant = 'constant',
    Static = 'static',
}
// data?: string[] | DateRange | boolean[] | number[] | SelectItem[]
export type FVal = string[] | DateRange | boolean[] | number[] | SelectItem[];
// export type FilterVals = Object;

export type LableProvider = (item: any) => string;

export interface FilterSpec {
    field: string;
    name: string;
    type: FilterType;
    fixedVal?: FVal;
    staticVals?: SelectItem[];
}

export interface PaginateEvent {
    first: number;
    rows: number;
    page: number;
    pageCount: number;
}

export interface FilterEvent {
    field: string,
    filter: Filter,
}

export enum ColType {
    Value = 'value',
    Date = 'date',
    Boolean = 'boolean',
    Array = 'array',
    Ops = 'ops',
    Custom = 'custom',
}

export type ValueGetter = (item: any) => string;

export interface ColAction {
    icon: string;
    action: (item: any) => void;
    disabled?: (item: any) => boolean;
    label?: string;
    toolTip?: string;
}

export interface ColSpec {
    title: string;
    field?: string;
    type: ColType;
    width: string;
    valueGetter?: ValueGetter;
    actions?: ColAction[];
}
