import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RoomComponent } from './room/room.component';
import { RoomsComponent } from './rooms.component';

const routes: Routes = [
  {
    path: '',
    component: RoomsComponent
  },
  {
    path: ':roomId',
    component: RoomComponent
  }
];
@NgModule({
  declarations: [
    RoomComponent,
    RoomsComponent
  ],
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class RoomsModule { }
