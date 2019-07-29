import { Action } from '@ngrx/store';
import { DeviceType } from '../../../../../../API/src/db/models/device-type';
import { OperatingSystem } from '../../../../../../API/src/db/models/operating-system';

export enum DeviceActionTypes {
  LoadDeviceCollectionRequest = '[Device] Load DeviceCollectionRequest',
  LoadDeviceError = '[Device] Load Error',
  LoadDeviceCollection = '[Device] Load DeviceCollection',
  LoadOperatingSystemCollectionRequest = '[Device] Load OperatingSystemCollectionRequest',
  LoadOperatingSystemCollection = '[Device] Load OperatingSystemCollection',
}

export class LoadDeviceCollectionRequest implements Action {
  readonly type = DeviceActionTypes.LoadDeviceCollectionRequest;
}

export class LoadDeviceError implements Action {
  readonly type = DeviceActionTypes.LoadDeviceError;
  
  constructor(public error: any) {
  }
}

export class LoadDeviceCollection implements Action {
  readonly type = DeviceActionTypes.LoadDeviceCollection;
  
  constructor(public devices: DeviceType[]) {
  }
}

export class LoadOperatingSystemCollectionRequest implements Action {
  readonly type = DeviceActionTypes.LoadOperatingSystemCollectionRequest;
}

export class LoadOperatingSystemCollection implements Action {
  readonly type = DeviceActionTypes.LoadOperatingSystemCollection;
  
  constructor(public operatingSystems: OperatingSystem[]) {
  }
}

export type DeviceActions = LoadDeviceCollectionRequest | LoadDeviceError | LoadDeviceCollection
  | LoadOperatingSystemCollectionRequest | LoadOperatingSystemCollection;
