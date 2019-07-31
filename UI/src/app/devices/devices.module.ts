import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DevicesRoutingModule } from './devices-routing.module';
import { DevicesComponent } from './devices.component';
import { SharedModule } from '../shared/shared.module';
import { CrudDeviceComponent } from './crud-device/crud-device.component';

@NgModule({
  declarations: [
    DevicesComponent,
    CrudDeviceComponent,
  ],
  imports: [
    CommonModule,
    DevicesRoutingModule,
    SharedModule,
  ],
})
export class DevicesModule { }
