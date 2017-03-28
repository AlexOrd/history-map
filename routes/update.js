import Router from 'koa-router'
const router = new Router({ prefix: '/update' });

router.get('/', async ctx => {
    await ctx.render('update')
});

// router.post('/update', function (ctx, next) {
//     // ...
// });

export default router