// const express = require('express');

import express from 'express';

const app = express();

const connectToDatabase = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve();
    }, 1000);
  });
};

app.get('/', async (req, res) => {
  await connectToDatabase();
  res.send('Hello World!');
});

await connectToDatabase();

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
