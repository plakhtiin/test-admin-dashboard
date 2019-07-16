import { Component, OnInit } from '@angular/core';
import { ApiService } from '../shared/services/api.service';
import { Room } from '../../../../API/src/db/models/room';
import { DeviceType } from '../../../../API/src/db/models/device_type';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.scss']
})
export class FormsComponent implements OnInit {
  public allRooms: Room[] = [];
  public allDeviceTypes: DeviceType[] = [];
  public newDevice = {
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
  }

  public addNewDevice(): void {
    this.apiService.rest('/device', 'PUT', this.newDevice).subscribe((res) => console.log(res));
  }

}
