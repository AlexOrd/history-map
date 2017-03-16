const logger = require('./lib/logger');

const Koa = require('koa');
const views = require('koa-render');
const serve = require('koa-static');
const Router = require('koa-router');

const sugar = require('sugar');

const app = new Koa();
const router = new Router();

//app.use(serve('./public'));
app.use(views('./views', 'jade'));

const ui = require('./routes/ui');

router.get('/ui', ui.index);

app.use(router.routes());

const url = `http://localhost:${process.env.PORT || 3000}`;
logger.info(`app started on ${url}`);

app.listen(process.env.PORT || 3000);