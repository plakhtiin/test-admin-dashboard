import * as Koa from 'koa';
import { Client } from 'pg';
import { router } from './routes/routes';

const app = new Koa();

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
// client.query('SELECT t.* FROM public.lists t WHERE title=\'1\'', [])
//   .then((res) => {
//     console.info(res.rows) // Hello World!
//     client.end()
//   })
//   .catch((err) => console.error(err));

app.use(router.routes());

app.listen(3000);

console.log('Server running on port 3000');
