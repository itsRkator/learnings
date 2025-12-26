import type { NextFunction, Request, Response } from 'express';
import { validationResult } from 'express-validator';
import { RequestValidationError } from '../errors/request-validation-error.ts';
import { DatabaseConnectionError } from '../errors/database-connection-error.ts';

const signup = (req: Request, res: Response, next: NextFunction) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    throw new RequestValidationError(errors.array());
  }
  const { email, password } = req.body;

  console.log('Creating a user....');

  throw new DatabaseConnectionError();

  res.status(201).json({ message: 'User created' });
};

const signin = (req: Request, res: Response) => {
  res.send('Hi There! from Signin');
};

const signout = (req: Request, res: Response) => {
  res.send('Hi There! from Signout');
};

export { signup, signin, signout };
