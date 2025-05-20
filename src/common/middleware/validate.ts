import type { Request, Response, NextFunction, RequestHandler } from 'express';
import type { Schema } from '../../../node_modules/joi/lib/index';
import { error as apiError } from '@common/utils/response';

export const validate = (schema: Schema): RequestHandler => {
  return (req: Request, res: Response, next: NextFunction): void => {
    const { error: err, value } = schema.validate(req.body);
    if (err) {
      apiError(
        res,
        'Validation error',
        400,
        err.details.map((d) => d.message),
      );
      return;
    }
    req.validated = value;
    next();
  };
};

declare global {
  namespace Express {
    interface Request {
      validated?: unknown;
    }
  }
}
