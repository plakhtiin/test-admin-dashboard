import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import * as DeviceActions from '../../actions/devices/devices.actions';
import { DeviceActionTypes } from '../../actions/devices/devices.actions';
import { catchError, map, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';
import { DeviceType } from '../../../../../../API/src/db/models/device-type';
import { ApiService } from '../../../shared/services/api.service';
import { OperatingSystem } from '../../../../../../API/src/db/models/operating-system';


@Injectable()
export class DevicesEffects {

  @Effect()
  public deviceCollectionRequest$ = this.actions$
    .pipe(
      ofType(DeviceActionTypes.LoadDeviceCollectionRequest),
      switchMap((action: DeviceActionTypes.LoadDeviceCollectionRequest) =>
        this.api.rest('/allDeviceTypes').pipe(
          map((res: DeviceType[]) => new DeviceActions.LoadDeviceCollection(res)),
          catchError(e => of(new DeviceActions.LoadDeviceError(e)))
        )
      )
    );

  @Effect()
  public operatingSystemsCollectionRequest$ = this.actions$
    .pipe(
      ofType(DeviceActionTypes.LoadOperatingSystemCollectionRequest),
      switchMap((action: DeviceActionTypes.LoadOperatingSystemCollectionRequest) =>
        this.api.rest('/allOperatingSystems').pipe(
          map((res: OperatingSystem[]) => new DeviceActions.LoadOperatingSystemCollection(res)),
          catchError(e => of(new DeviceActions.LoadDeviceError(e)))
        )
      )
    );

  constructor(
    private actions$: Actions,
    private api: ApiService
  ) {
  }
}
