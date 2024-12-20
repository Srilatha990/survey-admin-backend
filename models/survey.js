// models/survey.js
const mongoose = require('mongoose');

const questionSchema = new mongoose.Schema({
  questionText: { type: String, required: true },
  answers: [{ type: String, required: true }], // Array of answers for the question
});

const surveySchema = new mongoose.Schema({
  surveyTitle: { type: String, required: true },
  surveyCategory: { type: String, required: true },
  noOfQuestions: { type: Number, required: true },
  datePosted: { type: Date, default: Date.now },
  questions: [questionSchema], // Array of questions
}, { timestamps: true });

module.exports = mongoose.model('Survey', surveySchema);
