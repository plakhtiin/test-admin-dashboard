import * as Koa from 'koa';
import { router } from './routes/routes';
import * as cors from '@koa/cors';

const app = new Koa();
const koaOptions = {
  origin: '*',
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS']
};
app.use(router.allowedMethods())
  .use(cors(koaOptions))
  .use(router.routes());

app.listen(3000);

console.log('Server running on port 3000');
