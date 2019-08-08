import { Component, OnInit } from '@angular/core';
import { ApiService } from '../shared/services/api.service';
import { Device } from '../../../../API/src/db/models/device';
import { State } from '../store/reducers';
import { Store } from '@ngrx/store';
import { OptionsType } from '../../../../API/src/db/models/options-type';
import { cloneDeep } from 'lodash';

const DEVICE: Device = {
  title: '',
  room_id: null,
  os_type: null,
  device_type: null
};

@Component({
  selector: 'app-devices',
  templateUrl: './devices.component.html',
  styleUrls: ['./devices.component.scss']
})
export class DevicesComponent implements OnInit {
  public allDevices: Device[];
  
  constructor(
    private apiService: ApiService,
    private store: Store<State>
  ) {
  }
  
  ngOnInit() {
    this.apiService.rest('/devices', 'GET')
      .subscribe((res) => this.allDevices = cloneDeep(res));
  }
  
}
