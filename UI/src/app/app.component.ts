import { Component } from '@angular/core';
import * as RoomsCollectionActions from './store/actions/rooms/rooms-collection.actions';
import { Store } from '@ngrx/store';
import { State } from './store/reducers';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(
    private store: Store<State>
  ) {
    store.dispatch(new RoomsCollectionActions.LoadRoomsCollectionRequest());
  }
}
