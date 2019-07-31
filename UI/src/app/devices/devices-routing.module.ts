import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DevicesComponent } from './devices.component';
import { CrudDeviceComponent } from './crud-device/crud-device.component';

const routes: Routes = [
  {
    path: '',
    component: DevicesComponent
  },
  {
    path: 'edit/:deviceId',
    component: CrudDeviceComponent,
    data: {
      isEdit: true
    }
  },
  {
    path: 'add',
    component: CrudDeviceComponent,
    data: {
      isEdit: false
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DevicesRoutingModule { }
