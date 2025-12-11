const express = require('express');
const bodyParser = require('body-parser');

const authRoutes = require('./routes/auth-routes');

const app = express();

app.use(bodyParser.json());
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST,GET,OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  next();
});
app.use(authRoutes);

app.use((error, req, res, next) => {
  console.log(error);
  res
    .status(error.code || 500)
    .json({ message: error.message || 'Something went wrong.' });
});

app.listen(3000, () => {
  console.log('Auth app is listening on port 3000.');
});
