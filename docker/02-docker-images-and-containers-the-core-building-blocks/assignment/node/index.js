const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send(`
    <h1>Hi there! If you see this, the simple node app is running!!</h1>
  `);
});

app.listen(3000);
