const path = require('path');
const express = require('express');

const app = express();

app.use(express.static('public'));

app.get('/', (req, res) => {
  const filePath = path.join(__dirname, 'views', 'welcome.html');
  res.sendFile(filePath);
});

app.listen(3000, () => {
  console.log('Server is listening on port 3000');
});
