const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send(`
        <h1>Hello From the Node.js Demo App!!!</h1>
        <p>This is new!!</p>
        <p>Try sending a request to /error and see what happens next!!</p>
    `);
});

app.get('/error', (req, res) => {
  console.error('App is crashed!!');
  process.exit(1);
});

app.listen(3000, () => {
  console.log('App is running on port 3000!!');
});
