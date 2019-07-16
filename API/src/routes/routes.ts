import * as Router from 'koa-router';
import { getAllDeviceTypes, getAllRooms } from '../db/db';
import { Room } from '../db/models/room';
import { handlerError } from './handler-error';
import { DeviceType } from '../db/models/device_type';

const router = new Router();

router.use((ctx, next) => next()
  .then(_ => console.log('Success'))
  .catch(err => console.error(err.stack))
);

router.get('/allRooms', (ctx) => {
  return getAllRooms()
    .then((rows: Room[]) => {
      return ctx.body = rows;
    })
    .catch((err) => {
      return handlerError(err);
    });
});

router.get('/allDeviceTypes', (ctx) => {
  return getAllDeviceTypes()
    .then((rows: DeviceType[]) => {
      return ctx.body = rows;
    })
    .catch((err) => {
      return handlerError(err);
    });
});


export { router };
