

export interface SEvent {
    op: string;
    user: string;
    success: boolean;
    error: string;
    time: Date;
    data: any;
}
