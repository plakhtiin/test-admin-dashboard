import { createNewDevice, getAllDeviceTypes } from '../db/devices-db';
import { DeviceType } from '../db/models/device-type';
import { handlerError } from './handler-error';
import * as Router from 'koa-router';

const router = new Router();

router.get('/allDeviceTypes', (ctx) => {
  return getAllDeviceTypes()
    .then((rows: DeviceType[]) => {
      return ctx.body = (rows as DeviceType[]).map(row => {
        return {value: row.id, label: row.title};
      });
    })
    .catch((err) => {
      return handlerError(err);
    });
});

router.post('/device', (ctx) => {
  return createNewDevice(ctx.request.body)
    .then((rows) => {
      return ctx.body = rows;
    })
    .catch((err) => {
      return handlerError(err);
    });
});

export { router };
