const createAndThrowError = (message, statusCode) => {
  const error = new Error(message);
  error.code = statusCode;
  throw error;
};

module.exports = { createAndThrowError };
