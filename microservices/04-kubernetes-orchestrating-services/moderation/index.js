const axios = require('axios');
const express = require('express');

const app = express();

app.use(express.json());

app.post('/events', (req, res) => {
  const { type, data } = req.body;

  console.log('Received Event', type);

  if (type === 'CommentCreated') {
    const status = data.content.toLowerCase().includes('orange')
      ? 'rejected'
      : 'approved';

    axios
      .post('http://events-bus-service.default:4005/events', {
        type: 'CommentModerated',
        data: { ...data, status },
      })
      .then((response) => {
        console.log(
          `[ModerationService] - Event: ${JSON.stringify(response.data)}`
        );
      })
      .catch((err) => {
        console.log(
          `[ModerationService] - Error: ${JSON.stringify(err?.response?.data)}`
        );
      });
  }
  res.send({ status: 'OK' });
});

app.listen(4003, () => {
  console.log('Listening on port 4003');
});
