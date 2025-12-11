const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema(
  {
    title: String,
    text: String,
    user: mongoose.Schema.Types.ObjectId,
  },
  { timestamps: true }
);

module.exports = mongoose.model('Task', taskSchema);
