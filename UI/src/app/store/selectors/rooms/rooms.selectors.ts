import { createSelector, MemoizedSelector } from '@ngrx/store';
import { MemoizedSelectorWithProps } from '@ngrx/store/src/selector';
import { State } from '../../reducers';
import { RoomState } from '../../reducers/rooms/rooms.reducer';

export const roomsFeature = (state: State) => state.rooms;

export const selectRoomsCollection =
  createSelector(roomsFeature, (state: RoomState) => state.rooms);
