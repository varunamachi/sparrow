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

export interface DiskStats {
    path: string;
    fstype: string;
    total: number;
    free: number;
    used: number;
}

export interface MemoryStats {
    total: number;
    usage: number;
    free: number;
}


export interface CPUStats {
    numPhysical: number;
    numLogical: number;
    usage: Array<number>;
}

export interface SysStat {
    cpuUsage: CPUStats;
    diskStats: Array<DiskStats>;
    memoryStats: MemoryStats;
}
