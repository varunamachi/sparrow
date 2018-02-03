import { User } from "../security/security.model";



export interface SEvent {
    op: string;
    userID: string;
    userName: string,
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
    userNames: string[];
    eventTypes: string[];
}
