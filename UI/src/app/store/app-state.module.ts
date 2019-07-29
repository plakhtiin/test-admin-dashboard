import { NgModule } from '@angular/core';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { metaReducers, reducers } from './reducers';
import { environment } from '../../environments/environment';
import { AppEffects } from './effects/app.effects';
import { RoomEffects } from './effects/rooms/room.effects';
import { DevicesEffects } from './effects/devices/devices.effects';

@NgModule({
  imports: [
    StoreDevtoolsModule.instrument({}),
    EffectsModule.forRoot([AppEffects, RoomEffects, DevicesEffects]),
    StoreModule.forRoot(reducers, {
      metaReducers,
      runtimeChecks: {
        strictStateImmutability: true,
        strictActionImmutability: true,
      }
    }),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
  ]
})
export class AppStateModule {
}
