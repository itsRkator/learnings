const axios = require('axios');
const cors = require('cors');
const express = require('express');

const app = express();

app.use(express.json());
app.use(cors());

const events = [];

const broadcastEvent = (event) => {
  axios
    .post('http://localhost:4000/events', event)
    .then((response) => {
      console.log(`[PostsService] - Event: ${JSON.stringify(response.data)}`);
    })
    .catch((err) => {
      console.log(
        `[PostsService] - Error: ${JSON.stringify(err?.response?.data)}`
      );
    });

  axios
    .post('http://localhost:4001/events', event)
    .then((response) => {
      console.log(
        `[CommentsService] - Event: ${JSON.stringify(response.data)}`
      );
    })
    .catch((err) => {
      console.log(
        `[CommentsService] - Error: ${JSON.stringify(err?.response?.data)}`
      );
    });

  axios
    .post('http://localhost:4002/events', event)
    .then((response) => {
      console.log(`[QueryService] - Event: ${JSON.stringify(response.data)}`);
    })
    .catch((err) => {
      console.log(
        `[QueryService] - Error: ${JSON.stringify(err?.response?.data)}`
      );
    });

  axios
    .post('http://localhost:4003/events', event)
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
};

app.post('/events', (req, res) => {
  const event = req.body;

  events.push(event);

  broadcastEvent(event);

  res.send({ status: 'OK' });
});

app.get('/events', (req, res) => {
  res.send(events);
});

app.listen(4005, () => {
  console.log('Listening on port 4005');
});
