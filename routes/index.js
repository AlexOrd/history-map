import Router from 'koa-router'
const router = new Router();

router.get('/', async ctx => {
  const host = ctx.request.host;
  await ctx.render('index', { host })
});

router.get('/about', async ctx => {
  await ctx.render('about')
});

export default router
