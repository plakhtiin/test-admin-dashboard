import { client } from './db';
import { Room } from './models/room';

export function getAllRooms(): Promise<void | Room[]> {
  return client.query('SELECT id, name, icon FROM public.rooms t', [])
    .then((res) => {
      return res.rows as Room[];
    })
    .catch((err) => {
      console.error(err);
      return err;
    });
}
