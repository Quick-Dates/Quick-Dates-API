import { Request, Response, NextFunction } from 'express';

export const noCache = (req: Request, res: Response, next: NextFunction ): void => {
  res.set('cache-control', 'no-store, no-cache, must-revalidade, proxy-revalidade')
  res.set('pragma', 'no-cache')
  res.set('surrogate-control', 'no-store')
  res.set('expires', '0')
  res.set('surrogate-control', 'no-store')

}
