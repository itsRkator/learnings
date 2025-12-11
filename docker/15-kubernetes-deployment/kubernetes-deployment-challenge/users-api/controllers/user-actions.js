const path = require('path');
const fs = require('fs');

const axios = require('axios');

const { createAndThrowError, createError } = require('../helpers/error');
const User = require('../models/user');

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
    createAndThrowError(
      error.message || 'Failed to create users.',
      error?.response?.status || 500
    );
  }
};

const getTokenForUser = async (password, hashedPassword, uid) => {
  try {
    const response = await axios.post(
      `http://${process.env.AUTH_API_HOST}/token`,
      {
        password,
        hashedPassword,
        userId: uid,
      }
    );
    return response.data.token;
  } catch (error) {
    createAndThrowError(
      error.message || 'Failed to verify user.',
      error?.response?.status || 500
    );
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

  const logEntry = `${new Date().toISOString()} - ${
    savedUser._id
  } - ${email}\n`;
  fs.appendFile(
    path.join('/app', 'users', 'users-log.txt'),
    logEntry,
    (err) => {
      console.log(err);
    }
  );

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
    const token = await getTokenForUser(
      password,
      existingUser.password,
      existingUser._id
    );
    res.status(200).json({ token, userId: existingUser._id });
  } catch (error) {
    next(error);
  }
};

const getLogs = (req, res, next) => {
  fs.readFile(path.join('/app', 'users', 'users-log.txt'), (err, data) => {
    if (err) {
      createAndThrowError('Could not open logs file.', 500);
    } else {
      const userLogs = data
        .toString()
        .split('\n')
        .filter((userLog) => !!userLog.length);
      res.status(200).json({ logs: userLogs });
    }
  });
};

module.exports = { createUser, getLogs, verifyUser };
