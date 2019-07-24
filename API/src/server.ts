import * as Koa from 'koa';
import * as Router from 'koa-router';
import { router as rooms  } from './routes/rooms';
import { router as devices  } from './routes/devices';
import { router as os  } from './routes/operating-systems';
import * as cors from '@koa/cors';
import * as bodyParser from 'koa-bodyparser';

const app = new Koa();
const koaOptions = {
  origin: '*',
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS']
};

const router = new Router();

app
  .use(bodyParser())
  .use(router.allowedMethods())
  .use(cors(koaOptions))
  .use(rooms.routes())
  .use(os.routes())
  .use(devices.routes());

app.listen(3000);

console.log('Server running on port 3000');
