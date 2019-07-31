import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'device'
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
    path: 'device',
    loadChildren: () => import('./device/device.module').then(mod => mod.DeviceModule)
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
