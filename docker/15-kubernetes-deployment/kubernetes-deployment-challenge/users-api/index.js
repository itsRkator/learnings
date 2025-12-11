const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const userRoutes = require('./routes/user-routes');

const app = express();

app.use(bodyParser.json());

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST,GET,OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

app.use(userRoutes);

app.use((err, req, res, next) => {
  res
    .status(err.code || 500)
    .json({ message: err.message || 'Something went wrong.' });
});

mongoose
  .connect(process.env.MONGODB_CONNECTION_URI)
  .then(() => {
    console.log('Connected to the Database!');
    app.listen(3000, () => {
      console.log('Auth app is running on port 3000');
    });
  })
  .catch((error) => {
    console.log('Failed to connect to MongoDB!');
  });
