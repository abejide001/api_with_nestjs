import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response } from 'express';

@Injectable()
export class ValidationMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: Function) {
    if (!req.body.name) {
        return res.status(400).json({ message: "name is required" })
    }
    next();
  }
}
