import * as Router from 'koa-router';
import { handlerError } from './handler-error';
import { getAllOperatingSystemsOptions } from '../db/operating-systems';
import { OperatingSystem } from '../db/models/operating-system';

const router = new Router();

router.get('/allOperatingSystems', (ctx) => {
  return getAllOperatingSystemsOptions()
    .then((rows: OperatingSystem[]) => {
      return ctx.body = rows;
    })
    .catch((err) => {
      return handlerError(err);
    });
});

export { router };
