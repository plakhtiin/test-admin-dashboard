import { Room } from '../../../../../../API/src/db/models/room';
import { RoomsCollectionActions, RoomsCollectionActionTypes } from '../../actions/rooms/rooms-collection.actions';

export interface RoomState {
  rooms: Room[];
  activeRoom: Room;
}

export const initialRoomState: RoomState = {
  rooms: [],
  activeRoom: null,
};

export function reducer(state = initialRoomState, action: RoomsCollectionActions): RoomState {
  switch (action.type) {
    case RoomsCollectionActionTypes.LoadRoomsCollection:
      return {
        ...state,
        rooms: action.rooms
      };
    default:
      return state;
  }
}
