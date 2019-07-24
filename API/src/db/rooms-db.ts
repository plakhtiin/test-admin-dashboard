import { client } from './db';
import { OptionsType } from './models/options-type';

export function getAllRoomsOptions(): Promise<void | OptionsType[]> {
  return client.query('SELECT room_id as value, room_name as label FROM public.rooms t', [])
    .then((res) => {
      return res.rows as OptionsType[];
    })
    .catch((err) => {
      console.error(err);
      return err;
    });
}
