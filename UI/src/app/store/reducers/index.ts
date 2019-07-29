import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../../environments/environment';
import { RoomState } from './rooms/rooms.reducer';
import * as fromRooms from './rooms/rooms.reducer';
import * as fromDevices from './devices/devices.reducer';
import { DeviceState } from './devices/devices.reducer';

export interface State {
  rooms: RoomState;
  device: DeviceState;
}

export const reducers: ActionReducerMap<State> = {
  rooms: fromRooms.reducer,
  device: fromDevices.reducer,
};


export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
