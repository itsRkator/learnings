const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const goalSchema = new Schema({
  text: String,
});

module.exports = mongoose.model('Goal', goalSchema);
