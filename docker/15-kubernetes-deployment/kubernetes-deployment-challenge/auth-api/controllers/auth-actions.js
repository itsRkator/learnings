const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const { createAndThrowError } = require('../helpers/error');

const createPasswordHash = async (password) => {
  try {
    console.log(password);
    const hashedPassword = await bcrypt.hash(password, 12);
    return hashedPassword;
  } catch (error) {
    createAndThrowError('Failed to create secure password.', 500);
  }
};

const verifyPasswordHash = async (password, hashedPassword) => {
  let isValidPassword;
  try {
    isValidPassword = await bcrypt.compare(password, hashedPassword);
    console.log(isValidPassword, password, hashedPassword);
  } catch (error) {
    createAndThrowError('Failed to verify password.', 500);
  }
  if (!isValidPassword) {
    createAndThrowError('Failed to verify password', 401);
  }
};

const createToken = (userId) => {
  return jwt.sign({ uid: userId }, process.env.JWT_AUTH_TOKEN_SECRET, {
    expiresIn: '1h',
  });
};

const verifyToken = (token) => {
  try {
    const decodedToken = jwt.verify(token, process.env.JWT_AUTH_TOKEN_SECRET);
    return decodedToken;
  } catch (error) {
    createAndThrowError('Could not verify token.', 401);
  }
};

const getHashedPassword = async (req, res, next) => {
  const { password: rawPassword } = req.params;
  try {
    const hashedPassword = await createPasswordHash(rawPassword);
    res.status(200).json({ hashed: hashedPassword });
  } catch (error) {
    next(err);
  }
};

const getToken = async (req, res, next) => {
  const { userId, password, hashedPassword } = req.body;

  try {
    await verifyPasswordHash(password, hashedPassword);
  } catch (error) {
    return next(error);
  }

  const token = createToken(userId);

  res.status(200).json({ token });
};

const getTokenConfirmation = (req, res) => {
  const { token } = req.body;

  const decodedToken = verifyToken(token);

  res.status(200).json({ uid: decodedToken.uid });
};

module.exports = { getHashedPassword, getToken, getTokenConfirmation };
