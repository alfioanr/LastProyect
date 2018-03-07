// pregunta
// respuestas posible
// respuesta correcta 

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const InterviewSchema = new Schema({
  questionsid: [{ type: Schema.Types.ObjectId, ref: "Question" }]
});

const Interview = mongoose.model("Interview", InterviewSchema);

module.exports = Interview;
