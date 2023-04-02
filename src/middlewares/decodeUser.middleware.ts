import { Injectable, NestMiddleware } from '@nestjs/common';
import { NextFunction } from 'express';

@Injectable()
export class DecodeUserMiddleware implements NestMiddleware {
  use(req: Request, _res: Response, next: NextFunction) {
    const currentUser = {}; // Obtain current user from session

    req['user'] = currentUser;

    next();
  }
}
