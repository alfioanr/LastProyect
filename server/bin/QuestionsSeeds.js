const mongoose = require("mongoose");
const Question = require("../models/Question");

mongoose
  .connect("mongodb://localhost/developfather")
  .then(() => console.log("Conectado con Seeds!"))
  .catch(error => console.log(error));

const QuestionsArray = [
  {
    question: "Is JavaScript a case-sensitive language?",
    PosibleAnswers: ["YES", "NO"],
    correctAnswers: "YES"
  },
  {
    question: "How can you get the type of arguments passed to a function?",
    PosibleAnswers: [
      "using typeof operator",
      "using getType function",
      "Both of the above",
      "None of the above"
    ],
    correctAnswers: "using typeof operator"
  },
  {
    question:
      "Which built-in method combines the text of two strings and returns a new string?",
    PosibleAnswers: ["append()", "concat()", "attach()", "None of the above"],
    correctAnswers: "concat()"
  },
  {
    question:
      "Which built-in method returns the characters in a string beginning at the specified location?",
    PosibleAnswers: [
      "substr()",
      "getSubstring()",
      "slice()",
      "None of the above"
    ],
    correctAnswers: "substr()"
  },
  {
    question:
      "Which of the following function of Number object returns the number's value?",
    PosibleAnswers: [
      "toString()",
      "valueOf()",
      "toLocaleString()",
      "toPrecision()"
    ],
    correctAnswers: "valueOf()"
  },
  {
    question:
      "Which of the following function of String object is used to match a regular expression against a string?",
    PosibleAnswers: ["concat()", "match()", "search()", "replace()"],
    correctAnswers: "match()"
  },
  {
    question:
      "Which of the following function of String object returns the calling string value converted to lower case while respecting the current locale?",
    PosibleAnswers: [
      "toLocaleLowerCase()",
      "toLowerCase()",
      "toString()",
      "substring()"
    ],
    correctAnswers: "toLocaleLowerCase()"
  },
  {
    question:
      "Which of the following function of String object causes a string to be displayed as a subscript, as if it were in a <sub> tag?",
    PosibleAnswers: ["Sup()", "small()", "strike()", "sub()"],
    correctAnswers: "sub()"
  },
  {
    question:
      "Which of the following function of Array object creates a new array with the results of calling a provided function on every element in this array?",
    PosibleAnswers: ["push()", "join()", "pop()", "map()"],
    correctAnswers: "map()"
  },
  {
    question:
      "Which of the following function of Array object returns a string representing the array and its elements?",
    PosibleAnswers: ["toSource()", "sort()", "splice()", "toString()"],
    correctAnswers: "toString()"
  }
];
Question.collection.drop();

QuestionsArray.forEach(q => {
  let newQuestion = new Question(q);
  newQuestion
    .save()
    .then(newSavedQuestion => console.log(newSavedQuestion))
    .catch(err => console.log(err));
});
