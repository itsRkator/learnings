const axios = require('axios');
const cors = require('cors');
const express = require('express');

const posts = {};

const handleEvent = (type, data) => {
  if (type === 'PostCreated') {
    const { id, title } = data;
    posts[id] = { id, title, comments: [] };
  } else if (type === 'CommentCreated') {
    const { postId, id, content, status } = data;

    const post = posts[postId];
    post.comments.push({ id, content, status });
  } else if (type === 'CommentUpdated') {
    const { postId, id, content, status } = data;

    const post = posts[postId];
    const comment = post.comments.find((c) => c.id === id);

    comment.status = status;
    comment.content = content;
  }
};

const app = express();
app.use(express.json());
app.use(cors());

app.get('/posts', (req, res) => {
  res.send(posts);
});

app.post('/events', (req, res) => {
  const { type, data } = req.body;

  handleEvent(type, data);

  res.send({ message: 'Event has been processed' });
});

app.listen(4002, () => {
  console.log('Listening on port 4002');
  axios
    .get('http://events-bus-service.default:4005/events')
    .then((res) => res.data)
    .then((eventData) => {
      for (let event of eventData) {
        const { type, data } = event;
        console.log('Processing event: ', type);
        handleEvent(type, data);
      }
    })
    .catch((err) => {
      console.error(err);
    });
});
