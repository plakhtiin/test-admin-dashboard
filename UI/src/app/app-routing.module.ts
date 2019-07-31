import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'devices'
  },
  {
    path: 'calendar',
    loadChildren: () => import('./calendar/calendar.module').then(mod => mod.CalendarModule)
  },
  {
    path: 'charts',
    loadChildren: () => import('./charts/charts.module').then(mod => mod.ChartsModule)
  },
  {
    path: 'devices',
    loadChildren: () => import('./devices/devices.module').then(mod => mod.DevicesModule)
  },
  {
    path: 'rooms',
    loadChildren: () => import('./rooms/rooms.module').then(mod => mod.RoomsModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
