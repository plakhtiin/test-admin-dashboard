import { Component, OnInit } from '@angular/core';
import { ApiService } from '../shared/services/api.service';
import { Room } from '../../../../API/src/db/models/room';
import { DeviceType } from '../../../../API/src/db/models/device-type';
import { Device } from '../../../../API/src/db/models/device';
import { OperatingSystem } from '../../../../API/src/db/models/operating-system';

@Component({
  selector: 'app-device',
  templateUrl: './device.component.html',
  styleUrls: ['./device.component.scss']
})
export class DeviceComponent implements OnInit {
  public allRooms: Room[] = [];
  public allDeviceTypes: DeviceType[] = [];
  public allOSTypes: OperatingSystem[] = [];
  public newDevice: Device = {
    title: '',
    room_id: null,
    os_type: null,
    device_type: null
  };

  constructor(
    private apiService: ApiService
  ) { }

  ngOnInit() {
    this.apiService.rest('/allRooms').subscribe((allRooms: Room[]) => {
      this.allRooms = allRooms;
    });
    this.apiService.rest('/allDeviceTypes').subscribe((allDeviceTypes: DeviceType[]) => {
      this.allDeviceTypes = allDeviceTypes;
    });
    this.apiService.rest('/allOperatingSystems').subscribe((allOSTypes: OperatingSystem[]) => {
      this.allOSTypes = allOSTypes;
    });
  }

  public addNewDevice(): void {
    this.apiService.rest('/device', 'POST', this.newDevice).subscribe((res) => console.log(res));
  }

}
