import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  public openRoomsListTree: BehaviorSubject<number> = new BehaviorSubject(null);
  public openRoomsListTree$ = this.openRoomsListTree.asObservable();

  constructor() { }
}
