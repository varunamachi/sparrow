import { User } from "../security/security.model";



export interface SEvent {
    op: string;
    user: string;
    success: boolean;
    error: string;
    time: Date;
    data: any;
}

export interface EventList {
    total: number;
    data: SEvent[];
}

export interface UserList {
    total: number;
    data: User[];
}

export interface EventFilterModel {
    userIDs: string[];
    eventTypes: string[];
}
