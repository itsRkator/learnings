const express = require('express');
const {
  getTasks,
  createTask,
  deleteTask,
} = require('../controllers/task-actions');

const router = express.Router();

router.get('/tasks', getTasks);
router.post('/tasks', createTask);
router.delete('/tasks/:id', deleteTask);

module.exports = router;
