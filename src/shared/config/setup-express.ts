import { Express, json } from 'express'
import cors from 'cors'

export default (app: Express): void => {
  app.use(cors(
    {origin: 'https://quickdates.tech'}
  ));
  app.use(json());
}
