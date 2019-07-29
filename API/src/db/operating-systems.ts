import { client } from './db';
import { OperatingSystem } from './models/operating-system';
import { OptionsType } from './models/options-type';

export function getAllOperatingSystems(): Promise<void | OperatingSystem[]> {
  return client.query('SELECT name, id FROM public.operating_systems t', [])
    .then((res) => {
      return res.rows as OptionsType[];
    })
    .catch((err) => {
      console.error(err);
      return err;
    });
}
