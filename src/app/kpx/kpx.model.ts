

export enum AgentPlatform {
    Android = 0,
    IOS = 1,
    Linux = 2,
    Windows = 3,
    OSX = 4,
}

export interface Agent {
    _id: string;
    name: string;
    platform: AgentPlatform;
    desc: string;
    active: boolean;
    owner: string;
    ownerEmail: string;
    createdOn: Date;
    modifiedOn: Date;
}
