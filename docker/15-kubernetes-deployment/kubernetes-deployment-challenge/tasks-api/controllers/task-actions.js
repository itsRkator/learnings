const mongoose = require('mongoose');

const Task = require('../models/task');
const { createError } = require('../helpers/error');

const getTasks = async (req, res, next) => {
  const { userId } = req;
  let tasks;

  try {
    tasks = await Task.find({ user: userId });
  } catch (error) {
    const createdError = createError('Failed to fetch tasks.', 500);
    return next(createError);
  }

  res
    .status(200)
    .json({ tasks: tasks.map((task) => task.toObject({ getters: true })) });
};

const deleteTask = async (req, res, next) => {
  const { id: taskId } = req.params;
  const { userId } = req;
  let task;

  try {
    task = await Task.findOne({ _id: taskId });
  } catch (error) {
    const createdError = createError('Failed to delete task.', 500);
    return next(createdError);
  }

  if (task.user.toString() !== userId) {
    const createdError = createError(
      'You are not authorized to delete this task.',
      405
    );
    return next(createdError);
  }

  try {
    await Task.deleteOne({ _id: taskId });
  } catch (error) {
    const createdError = createError('Failed to delete task.', 500);
    return next(createdError);
  }

  res.status(200).json({ message: 'Task deleted!' });
};

const createTask = async (req, res, next) => {
  const { title, text } = req.body;
  const { userId } = req;

  const newTask = new Task({
    title,
    text,
    user: new mongoose.Types.ObjectId(userId),
  });
  let savedTask;

  try {
    savedTask = await newTask.save();
  } catch (error) {
    const createdError = createError('Failed to save task.', 500);
    return next(createdError);
  }

  res.status(201).json({ task: savedTask.toObject() });
};

module.exports = { createTask, deleteTask, getTasks };
