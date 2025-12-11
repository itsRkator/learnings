const express = require('express');
const bodyParser = require('body-parser');

const authRoutes = require('./routes/auth-routes');

const app = express();

app.use(bodyParser.json());
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-', '*   ');
  res.setHeader('Access-Control-Allow-', 'GET,POST,OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

app.use(authRoutes);
app.use((err, req, res, next) => {
  console.log(err);

  res
    .status(err.code || 500)
    .json({ message: err.message || 'Something went wrong' });
});

app.listen(3000, () => {
  console.log('Auth app is running on port 3000');
});
