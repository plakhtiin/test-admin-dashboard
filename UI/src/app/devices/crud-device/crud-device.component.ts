import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../shared/services/api.service';
import { Room } from '../../../../../API/src/db/models/room';
import { DeviceType } from '../../../../../API/src/db/models/device-type';
import { Device } from '../../../../../API/src/db/models/device';
import { OperatingSystem } from '../../../../../API/src/db/models/operating-system';
import { State } from '../../store/reducers';
import { select, Store } from '@ngrx/store';
import * as DeviceActions from '../../store/actions/devices/devices.actions';
import * as DeviceSelectors from '../../store/selectors/devices/devices.selectors';
import * as RoomsSelectors from '../../store/selectors/rooms/rooms.selectors';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { OptionsType } from '../../../../../API/src/db/models/options-type';
import { cloneDeep } from 'lodash';
import { ActivatedRoute, Params } from '@angular/router';

const DEVICE: Device = {
  title: '',
  room_id: null,
  os_type: null,
  device_type: null
};

@Component({
  selector: 'app-crud-device',
  templateUrl: './crud-device.component.html',
  styleUrls: ['./crud-device.component.css']
})
export class CrudDeviceComponent implements OnInit {
  public allRooms$: Observable<OptionsType[]>;
  public allDeviceTypes$: Observable<OptionsType[]>;
  public allOSTypes$: Observable<OptionsType[]>;
  public deviceObj: Device = cloneDeep(DEVICE);
  public isEdit = false;
  
  constructor(
    private apiService: ApiService,
    private store: Store<State>,
    private route: ActivatedRoute,
  ) {
  }
  
  ngOnInit() {
    this.route.data.subscribe((data) => {
        this.isEdit = data.isEdit;
        if (this.isEdit) {
          this.route.params.subscribe((params: Params) => {
            this.apiService.rest(`/device`, 'GET', null, { deviceId: params['deviceId'] })
              .subscribe((res: Device) => {
                this.deviceObj = res;
              });
          });
        }
    });
    this.store.dispatch(new DeviceActions.LoadDeviceCollectionRequest());
    this.store.dispatch(new DeviceActions.LoadOperatingSystemCollectionRequest());
    this.allDeviceTypes$ = this.store.pipe(
      select(DeviceSelectors.selectDevicesCollection),
      map((devices: DeviceType[]) => {
        return devices.map((device: DeviceType) => {
          return {label: device.title, value: device.id} as OptionsType;
        });
      })
    );
    this.allOSTypes$ = this.store.pipe(
      select(DeviceSelectors.selectOperatingSystemsCollection),
      map((operatingSystems: OperatingSystem[]) => {
        return operatingSystems.map((os: OperatingSystem) => {
          return {label: os.name, value: os.id} as OptionsType;
        });
      })
    );
    this.allRooms$ = this.store.pipe(
      select(RoomsSelectors.selectRoomsCollection),
      map((rooms: Room[]) => {
        return rooms.map((room: Room) => {
          return {label: room.name, value: room.id} as OptionsType;
        });
      })
    );
  }
  // Create new device
  public addNewDevice(): void {
    this.apiService.rest('/device', 'POST', this.deviceObj)
      .subscribe((res) => this.deviceObj = cloneDeep(DEVICE));
  }
  
  // Edit device
  public editDevice(): void {
    this.apiService.rest('/device', 'PUT', this.deviceObj)
      .subscribe((res) => this.deviceObj = cloneDeep(DEVICE));
  }
  
}
