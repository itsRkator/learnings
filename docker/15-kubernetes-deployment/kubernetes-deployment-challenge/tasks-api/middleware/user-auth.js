const axios = require('axios');
const { createAndThrowError, createError } = require('../helpers/error');

const retrieveToken = (headers) => {
  if (!headers?.authorization || headers.authorization === '') {
    createAndThrowError('Could not authenticate user.', 401);
  }

  const token = headers?.authorization.split(' ')[1];

  if (!token || token === '') {
    createAndThrowError('Could not authenticate user.', 401);
  }
  return token;
};

const verifyUser = async (req, res, next) => {
  let token;

  try {
    token = retrieveToken(req.headers);
  } catch (error) {
    return next(error);
  }

  let response;

  try {
    response = await axios.post(
      `http://${process.env.AUTH_API_HOST}/verify-token`,
      {
        token,
      }
    );
  } catch (error) {
    const createdError = createError('Could not authenticate user.', 401);
    return next(createdError);
  }

  req.userId = response.data.uid;
  next();
};

module.exports = { verifyUser };
