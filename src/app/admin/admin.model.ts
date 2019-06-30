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

export interface MemoryStats {
    total: number;
    used: number;
    free: number;
}

export interface CPUStats {
    usad: Array<number>;
    combinedUsage: number;
}

export interface SysStat {
    cpuStats: CPUStats;
    memoryStats: MemoryStats;
}

export interface DiskInfo {
    path: string;
    fstype: string;
    total: number;
    free: number;
    used: number;
}

export interface CPUInfo {
    numPhysical: number;
    numLogical: number;
}

export interface SysInfo {
    cpuInfo: CPUInfo;
    diskInfo: Array<DiskInfo>;
}