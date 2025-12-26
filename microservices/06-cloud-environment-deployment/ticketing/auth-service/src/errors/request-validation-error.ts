import type { ValidationError } from 'express-validator';
import { CustomError } from './custom-errors.ts';

export class RequestValidationError extends CustomError {
  statusCode = 400;

  constructor(private errors: ValidationError[]) {
    super('Invalid request');

    Object.setPrototypeOf(this, RequestValidationError.prototype);
  }

  serializeErrors() {
    return this.errors.map((e) => ({
      type: e.type,
      value: 'value' in e ? e.value : undefined,
      message: e.msg,
      field: 'path' in e ? e.path : undefined,
      paramType: 'location' in e ? e.location : undefined,
    }));
  }
}
