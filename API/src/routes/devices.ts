import { createNewDevice, getAllDeviceTypes, getDeviceById } from '../db/devices-db';
import { DeviceType } from '../db/models/device-type';
import { handlerError } from './handler-error';
import * as Router from 'koa-router';

const router = new Router();

router.get('/allDeviceTypes', (ctx) => {
  return getAllDeviceTypes()
    .then((rows: DeviceType[]) => {
      return ctx.body = (rows as DeviceType[]);
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

router.get('/device', (ctx) => {
  console.log(ctx.request.query);
  return getDeviceById(ctx.request.query.deviceId)
    .then((row) => {
      if (row) {
        return ctx.body = row;
      }
    })
    .catch((err) => {
      return handlerError(err);
    });
});

export { router };
