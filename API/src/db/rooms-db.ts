import { client } from './db';
import { OptionsType } from './models/options-type';

export function getAllRooms(): Promise<void | OptionsType[]> {
  return client.query('SELECT id, name FROM public.rooms t', [])
    .then((res) => {
      return res.rows as OptionsType[];
    })
    .catch((err) => {
      console.error(err);
      return err;
    });
}
