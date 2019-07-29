import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { catchError, map, switchMap } from 'rxjs/operators';
import { ApiService } from '../../../shared/services/api.service';
import * as RoomsCollectionActions from '../../actions/rooms/rooms-collection.actions';
import { RoomsCollectionActionTypes } from '../../actions/rooms/rooms-collection.actions';

import { Room } from '../../../../../../API/src/db/models/room';
import { of } from 'rxjs';

@Injectable()
export class RoomEffects {

  @Effect()
  public roomsCollectionRequest$ = this.actions$
    .pipe(
      ofType(RoomsCollectionActionTypes.LoadRoomsCollectionRequest),
      switchMap((action: RoomsCollectionActionTypes.LoadRoomsCollectionRequest) =>
        this.api.rest('/allRooms').pipe(
          map((res: Room[]) => new RoomsCollectionActions.LoadRoomsCollection(res)),
          catchError(e => of(new RoomsCollectionActions.LoadRoomError(e)))
        )
      )
    );

  constructor(
    private actions$: Actions,
    private api: ApiService
  ) {
  }
}
