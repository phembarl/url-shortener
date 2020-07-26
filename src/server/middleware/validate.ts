import { validationResult } from 'express-validator';
import { Request, Response, NextFunction } from 'express';

const validate = (req: Request, res: Response, next: NextFunction) => {
  const errorFormatter = ({ msg }: { msg: string }) => `${msg}`;
  const validationError = validationResult(req).formatWith(errorFormatter);

  if (!validationError.isEmpty()) {
    const errorMsg = validationError.mapped();

    return res.status(400).json({
      status: 400,
      message: errorMsg,
    });
  }
  return next();
};

export default validate;
