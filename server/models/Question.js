const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const QuestionSchema = new Schema({
  question: String,
  PosibleAnswers:[],
  correctAnswers:String
});

const Question = mongoose.model("Question", QuestionSchema);

module.exports = Question;
