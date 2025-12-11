const createError = (message, statusCode) => {
  const error = new Error(message);
  error.code = statusCode;

  return error;
};

const createAndThrowError = (message, statusCode) => {
  throw createError(message, statusCode);
};

module.exports = { createAndThrowError, createError };
