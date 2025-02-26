const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const Feedback = require('./models/Feedback');

const app = express();

mongoose.connect('mongodb+srv://678deeps:DEEPS%40567@feedbacksystemdb.udupd.mongodb.net/FeedbackSystemDB?retryWrites=true&w=majority')
.then(() => console.log('MongoDB connected'))
.catch(err => console.log('Error connecting to MongoDB:', err));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('views'));

app.post('/submit-feedback', async (req, res) => {
  try {
    const feedback = new Feedback({
      name: req.body.name,
      contactNumber: req.body.contactNumber,
      email: req.body.email,
      message: req.body.message
    });

    await feedback.save();
    res.send('Feedback submitted successfully!');
  } catch (err) {
    res.status(500).send('Failed to submit feedback.');
  }
});

app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});