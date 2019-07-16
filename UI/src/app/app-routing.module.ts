import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'forms'
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
    path: 'forms',
    loadChildren: () => import('./forms/forms.module').then(mod => mod.FormsModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
