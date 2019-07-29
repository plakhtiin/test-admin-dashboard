import { DeviceType } from '../../../../../../API/src/db/models/device-type';
import { DeviceActions, DeviceActionTypes } from '../../actions/devices/devices.actions';
import { OperatingSystem } from '../../../../../../API/src/db/models/operating-system';

export interface DeviceState {
  collection: DeviceType[];
  operatingSystems: OperatingSystem[];
}

export const initialDeviceState: DeviceState = {
  collection: [],
  operatingSystems: []
};

export function reducer(state = initialDeviceState, action: DeviceActions): DeviceState {
  switch (action.type) {
    case DeviceActionTypes.LoadDeviceCollection:
      return {
        ...state,
        collection: action.devices
      };
    case DeviceActionTypes.LoadOperatingSystemCollection:
      return {
        ...state,
        operatingSystems: action.operatingSystems
      };
    default:
      return state;
  }
}
