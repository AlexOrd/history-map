import logger from './lib/logger'
import Koa from 'koa'
import views from 'koa-views'
import serve from 'koa-static'
// import model from './model'
import rootRoutes from './routes/index'
import userRoutes from './routes/user'
import updateRoutes from './routes/update'

const app = new Koa();

app.use(views(`${__dirname}/views`, { extension: 'jade' }));
app.use(serve(`${__dirname}/public`));
app.use(rootRoutes.routes());
app.use(rootRoutes.allowedMethods());
app.use(userRoutes.routes());
app.use(userRoutes.allowedMethods());
app.use(updateRoutes.routes());
app.use(updateRoutes.allowedMethods());

// model.sequelize.authenticate();
// model.sequelize.sync({ force: false });

app.listen(8080, () => {
  logger.info('Server running...')
});

export default app
