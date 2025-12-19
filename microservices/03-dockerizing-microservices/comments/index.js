const axios = require('axios');
const cors = require('cors');
const express = require('express');
const { randomBytes } = require('crypto');

const commentsByPostId = {};

const app = express();

app.use(express.json());
app.use(cors());

// app.use((req, res, next) => {
//   res.setHeader('Access-Control-Allow-Origin', '*');
//   res.setHeader('Access-Control-Allow-Methods', 'POST,GET,OPTIONS');
//   res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
//   next();
// });

app.get('/posts/:id/comments', (req, res) => {
  const { id: postId } = req.params;
  res.send(commentsByPostId[postId] || []);
});
app.post('/posts/:id/comments', (req, res) => {
  const { id: postId } = req.params;
  const { content } = req.body;
  const commentId = randomBytes(16).toString('hex');

  const comment = { id: commentId, content, status: 'pending' };
  const comments = commentsByPostId[postId] || [];
  comments.push(comment);

  commentsByPostId[postId] = comments;

  axios.post('http://event-bus:4005/events', {
    type: 'CommentCreated',
    data: { ...comment, postId },
  });

  res.status(201).send(comments);
});

app.post('/events', (req, res) => {
  console.log('Received Event', req.body.type);
  const { type, data } = req.body;

  if (type === 'CommentModerated') {
    const { postId, ...comment } = data;
    const comments = commentsByPostId[postId];
    const existingComment = comments.find((c) => c.id === comment.id);
    existingComment.status = comment.status;

    axios
      .post('http://event-bus:4005/events', {
        type: 'CommentUpdated',
        data: { ...existingComment, postId: data.postId },
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

  res.send({ message: 'success' });
});

app.listen(4001, () => {
  console.log('Listening on port 4001');
});
