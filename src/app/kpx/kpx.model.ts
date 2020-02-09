import {Time} from '@angular/common';


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

export enum NoticeType {
  Information = 'Information',
  Warning = 'Warning',
  Critical = 'Critical',
}

export interface Notice {
  _id?: string;
  type: NoticeType;
  messageEn: string;
  messageKn: string;
  versionLimit: number;
  time: Date;
  done: boolean;
}

export interface RecentStat {
  date: String;
  devices: number;
  launches: number;
  newUsers: number;
  errors: number;
}
