import { Client } from 'pg';
import { Room } from './models/room';
import { DeviceType } from './models/device_type';

const client = new Client({
  user: 'ljfcticwoomtmp',
  host: 'ec2-54-221-212-126.compute-1.amazonaws.com',
  database: 'd73m8ie9s83ioe',
  password: '18a58c51f6d1c8753109b0cd80cc1fa82520706fee33cbcabe7aeb9cedaa80e9',
  port: 5432,
  ssl: true
});

client.connect()
  .then(() => {
    console.info('DB is connected');
  })
  .catch((err) => console.error(err));

export function getAllRooms(): Promise<void | Room[]> {
  return client.query('SELECT t.* FROM public.rooms t', [])
    .then((res) => {
      return res.rows as Room[];
    })
    .catch((err) => {
      console.error(err);
      return err;
    });
}

export function getAllDeviceTypes(): Promise<void | DeviceType[]> {
  return client.query('SELECT t.* FROM public.device_type t', [])
    .then((res) => {
      return res.rows as DeviceType[];
    })
    .catch((err) => {
      console.error(err);
      return err;
    });
}

// client.query('SELECT t.* FROM public.lists t WHERE title=\'1\'', [])
//   .then((res) => {
//     console.info(res.rows) // Hello World!
//     client.end()
//   })
//   .catch((err) => console.error(err));
