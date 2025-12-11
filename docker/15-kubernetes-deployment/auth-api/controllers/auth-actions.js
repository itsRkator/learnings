const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const { createAndThrowError } = require('../helpers/error');

const createPasswordHash = async (password) => {
  try {
    console.log(password);

    const hashedPassword = await bcrypt.hash(password, 12);
    return hashedPassword;
  } catch (error) {
    createAndThrowError('Failed to create secure password.', 5000);
  }
};

const verifyPasswordHash = async (password, hashedPassword) => {
  let isPasswordValid;
  try {
    isPasswordValid = await bcrypt.compare(password, hashedPassword);
    console.log(isPasswordValid, password, hashedPassword);
  } catch (error) {
    createAndThrowError('Failed to verify password', 500);
  }

  if (!isPasswordValid) {
    createAndThrowError('Failed to verify password', 401);
  }
};

const createToken = () => {
  return jwt.sign({}, process.env.AUTH_TOKE_SECRET, { expiresIn: '1h' });
};

const verifyToken = (token) => {
  try {
    jwt.verify(token, process.env.AUTH_TOKE_SECRET);
  } catch (error) {
    createAndThrowError('Could not verify token', 401);
  }
};

const getHashedPassword = async (req, res, next) => {
  const { password: rawPassword } = req.body;

  try {
    const hashedPassword = createPasswordHash(rawPassword);
    res.status(200).json({ hashed: hashedPassword });
  } catch (error) {
    next(error);
  }
};

const getToken = async (req, res, next) => {
  const { password, hashedPassword } = req.body;

  try {
    await verifyPasswordHash(password, hashedPassword);
  } catch (error) {
    next(error);
  }

  const token = createToken();

  res.status(200).json({ token });
};

const getTokenConfirmation = (req, res) => {
  const { token } = req.body;

  verifyToken(token);

  res.status(200).json({});
};

module.exports = { getHashedPassword, getToken, getTokenConfirmation };
