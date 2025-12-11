const axios = require('axios');
const User = require('../models/user');
const { createAndThrowError, createError } = require('../helpers/error');

const validateCredentials = (email, password) => {
  if (
    !email ||
    email.trim().length === 0 ||
    !email.includes('@') ||
    !password ||
    password.trim().length < 7
  ) {
    createAndThrowError('Invalid email or password.', 422);
  }
};

const checkUserExistence = async (email) => {
  let existingUser;
  try {
    existingUser = await User.findOne({ email });
  } catch (error) {
    createAndThrowError('Failed to create user.', 500);
  }

  if (existingUser) {
    createAndThrowError('Failed to create user.', 422);
  }
};

const getHashedPassword = async (password) => {
  try {
    const response = await axios.get(
      `http://${process.env.AUTH_API_HOST}/hashed-pw/${password}`
    );

    return response.data.hashed;
  } catch (error) {
    const code = error?.response?.status || 500;
    createAndThrowError(error.message || 'Failed to create user.', code);
  }
};

const getTokenForUser = async (password, hashedPassword) => {
  console.log(password, hashedPassword);
  try {
    const response = await axios.post(
      `http://${process.env.AUTH_API_HOST}/token`,
      { password, hashedPassword }
    );
    return response.data.token;
  } catch (error) {
    const code = err?.response?.status || 500;
    createAndThrowError(error.message || 'Failed to verify user.', code);
  }
};

const createUser = async (req, res, next) => {
  const { email, password } = req.body;

  try {
    validateCredentials(email, password);
  } catch (error) {
    return next(error);
  }

  try {
    await checkUserExistence(email);
  } catch (error) {
    return next(error);
  }

  let hashedPassword;
  try {
    hashedPassword = await getHashedPassword(password);
  } catch (error) {
    return next(error);
  }

  console.log(hashedPassword);

  const newUser = new User({
    email,
    password: hashedPassword,
  });

  let savedUser;
  try {
    savedUser = await newUser.save();
  } catch (error) {
    const createdError = createError(
      error.message || 'Failed to create user.',
      500
    );
    return next(createdError);
  }

  res
    .status(201)
    .json({ message: 'User created.', user: savedUser.toObject() });
};

const verifyUser = async (req, res, next) => {
  const { email, password } = req.body;

  try {
    validateCredentials(email, password);
  } catch (error) {
    return next(error);
  }

  let existingUser;
  try {
    existingUser = await User.findOne({ email });
  } catch (error) {
    const createdError = createError(
      error.message || 'Failed to find and verify user.',
      500
    );
    return next(createdError);
  }

  if (!existingUser) {
    const createdError = createError(
      'Failed to find and verify user for provided credentials.',
      422
    );
    return next(createdError);
  }

  try {
    console.log(password, existingUser);
    const token = await getTokenForUser(password, existingUser.password);
    res.status(200).json({ token, userId: existingUser._id });
  } catch (error) {
    next(error);
  }
};

module.exports = { createUser, verifyUser };
