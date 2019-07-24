import * as Router from 'koa-router';
import { getAllRoomsOptions } from '../db/rooms-db';
import { handlerError } from './handler-error';
import { OptionsType } from '../db/models/options-type';

const router = new Router();

router.use((ctx, next) => next()
  .catch(err => console.error(err.stack))
);

router.get('/allRooms', (ctx) => {
  return getAllRoomsOptions()
    .then((rows: OptionsType[]) => {
      return ctx.body = rows;
    })
    .catch((err) => {
      return handlerError(err);
    });
});

export { router };
