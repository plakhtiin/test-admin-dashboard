import { DeviceType } from './models/device-type';
import { client } from './db';
import { Device } from './models/device';
import { OptionsType } from './models/options-type';

export function getAllDeviceTypes(): Promise<void | DeviceType[]> {
  return client.query('SELECT id as value, title as label FROM public.device_types t', [])
    .then((res) => {
      return res.rows as OptionsType[];
    })
    .catch((err) => {
      console.error(err);
      return err;
    });
}

export function createNewDevice(newDevice: Device): Promise<void> {
  return client.query(
  'INSERT INTO public.devices (title, device_type, os_type, room_id) VALUES($1, $2, $3, $4) RETURNING *',
    [newDevice.title, newDevice.device_type, newDevice.os_type, newDevice.room_id]
  )
    .then((res) => {
      return res.rows;
    })
    .catch((err) => {
      console.error(err);
      return err;
    });
}
