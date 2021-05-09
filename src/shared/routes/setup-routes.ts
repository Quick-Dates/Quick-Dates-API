import { Express } from 'express'
import routes from '.';

export default (app: Express): void => {
  app.use(routes);
}
