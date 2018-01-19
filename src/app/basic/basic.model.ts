
export interface Result {
    status: number;
    op: string;
    msg: string;
    ok: boolean;
    error: any;
    data: any;
}

export class DateRange {
    constructor(
        public from: Date,
        public to: Date) {

    }
}

export class ArrayMatcher {
    public name = '';
    public matchAll = false;
    public tags: string[] = [];
}

export class Filter {
    public fields = new Map<string, string>();
    public dates: DateRange[] = [];
    public lists: ArrayMatcher[] = [];
}
