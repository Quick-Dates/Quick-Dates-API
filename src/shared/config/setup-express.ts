import { Express, json } from 'express'
import cors from 'cors'

export default (app: Express): void => {
  app.use(cors(
    {origin: ['https://quick-dates.vercel.app', 'http://localhost:3000']}
  ));
  app.use(json());
}
