import { createSelector, MemoizedSelector } from '@ngrx/store';
import { MemoizedSelectorWithProps } from '@ngrx/store/src/selector';
import { State } from '../../reducers';
import { DeviceState } from '../../reducers/devices/devices.reducer';

export const devicesFeature = (state: State) => state.device;

export const selectDevicesCollection =
  createSelector(devicesFeature, (state: DeviceState) => state.collection);

export const selectOperatingSystemsCollection =
  createSelector(devicesFeature, (state: DeviceState) => state.operatingSystems);
