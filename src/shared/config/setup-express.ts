import { Express, json } from 'express'
import cors from 'cors'

export default (app: Express): void => {
  app.use(cors(
    {origin: ['https://quickdates.tech', 'http://localhost:3000', 'https://quick-dates.vercel.app']}
  ));
  app.use(json());
}
