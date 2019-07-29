import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { DevicesEffects } from './devices.effects';

describe('DevicesEffects', () => {
  let actions$: Observable<any>;
  let effects: DevicesEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        DevicesEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.get<DevicesEffects>(DevicesEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
