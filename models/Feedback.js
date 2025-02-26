const mongoose = require('mongoose');

const feedbackSchema = new mongoose.Schema({
  name: String,
  contactNumber: String,
  email: String,
  message: String
});

module.exports = mongoose.model('Feedback', feedbackSchema);
