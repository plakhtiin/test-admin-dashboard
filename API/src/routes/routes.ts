import * as Router from 'koa-router';

const router = new Router();

router.use((ctx, next) => next()
  .then(_ => console.log('Success'))
  .catch(err => console.error(err.stack))
);

router.get('/calendar', ctx => ctx.body = 'Success, this is amazing');


export { router };
