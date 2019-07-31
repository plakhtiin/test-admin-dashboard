import * as Router from 'koa-router';
import { getAllRooms } from '../db/rooms-db';
import { handlerError } from './handler-error';
import { Room } from '../db/models/room';

const router = new Router();

router.use((ctx, next) => next()
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

export { router };
