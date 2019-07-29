import { Action } from '@ngrx/store';
import { Room } from '../../../../../../API/src/db/models/room';

export enum RoomsCollectionActionTypes {
  LoadRoomsCollectionRequest = '[RoomsCollection] Load RoomsCollectionRequest',
  LoadRoomsCollection = '[RoomsCollection] Load RoomsCollection',
  LoadRoomError = '[Room] Load Error',
}

export class LoadRoomsCollectionRequest implements Action {
  readonly type = RoomsCollectionActionTypes.LoadRoomsCollectionRequest;
}

export class LoadRoomError implements Action {
  readonly type = RoomsCollectionActionTypes.LoadRoomError;
  
  constructor(public error: any) {
  }
  
}

export class LoadRoomsCollection implements Action {
  readonly type = RoomsCollectionActionTypes.LoadRoomsCollection;
  
  constructor(public rooms: Room[]) {
  }
}


export type RoomsCollectionActions = LoadRoomsCollectionRequest | LoadRoomsCollection | LoadRoomError;
