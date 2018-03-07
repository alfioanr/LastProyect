const mongoose = require("mongoose");
const User = require("../models/User");

mongoose
  .connect("mongodb://localhost/developfather")
  .then(() => console.log("Conectado con Seeds!"))
  .catch(error => console.log(error));

const UsersArray = [
  {
    name: "Admin",
    lastName: "Admin",
    email: "admin@developfather.com",
    username: "Admin",
    password: "1234",
    familiarTechnologys: [],
    role: "admin",
    post_history: [],
    friends: [{}]
  },
  {
    name: "Senior",
    lastName: "junior1",
    email: "junior1@developfather.com",
    username: "junior1",
    password: "1234",
    familiarTechnologys: [],
    role: "Junior",
    post_history: [],
    friends: [{}]
  },
  {
    name: "junior2",
    lastName: "junior2",
    email: "junior2@developfather.com",
    username: "junior2",
    password: "1234",
    familiarTechnologys: [],
    role: "Junior",
    post_history: [],
    friends: [{}]
  },
  {
    name: "junior3",
    lastName: "junior3",
    email: "junior3@developfather.com",
    username: "junior3",
    password: "1234",
    familiarTechnologys: [],
    role: "Junior",
    post_history: [],
    friends: [{}]
  },
  {
    name: "junior4",
    lastName: "junior4",
    email: "junior4@developfather.com",
    username: "junior4",
    password: "1234",
    familiarTechnologys: [],
    role: "Junior",
    post_history: [],
    friends: [{}]
  },
  {
    name: "junior5",
    lastName: "junior5",
    email: "junior5@developfather.com",
    username: "junior5",
    password: "1234",
    familiarTechnologys: [],
    role: "Junior",
    post_history: [],
    friends: [{}]
  },
  {
    name: "junior6",
    lastName: "junior6",
    email: "junior6@developfather.com",
    username: "junior6",
    password: "1234",
    familiarTechnologys: [],
    role: "Junior",
    post_history: [],
    friends: [{}]
  },
  {
    name: "junior7",
    lastName: "junior",
    email: "junior@developfather.com",
    username: "junior",
    password: "1234",
    familiarTechnologys: [],
    role: "Junior",
    post_history: [],
    friends: [{}]
  },
  {
    name: "junior8",
    lastName: "junior8",
    email: "junior8@developfather.com",
    username: "junior8",
    password: "1234",
    familiarTechnologys: [],
    role: "Junior",
    post_history: [],
    friends: [{}]
  },
  {
    name: "junior9",
    lastName: "junior9",
    email: "junior9@developfather.com",
    username: "junior9",
    password: "1234",
    familiarTechnologys: [],
    role: "Junior",
    post_history: [],
    friends: [{}]
  },
  {
    name: "Senior1",
    lastName: "Senior1",
    email: "Senior1@developfather.com",
    username: "Senior1",
    password: "1234",
    familiarTechnologys: [],
    role: "Senior",
    post_history: [],
    friends: [{}]
  },
  {
    name: "Senior2",
    lastName: "Senior2",
    email: "Senior2@developfather.com",
    username: "Senior2",
    password: "1234",
    familiarTechnologys: [],
    role: "Senior",
    post_history: [],
    friends: [{}]
  },
  {
    name: "Senior3",
    lastName: "Senior3",
    email: "Senior3@developfather.com",
    username: "Senior3",
    password: "1234",
    familiarTechnologys: [],
    role: "Senior",
    post_history: [],
    friends: [{}]
  },
  {
    name: "Senior4",
    lastName: "Senior4",
    email: "Senior4@developfather.com",
    username: "Senior4",
    password: "1234",
    familiarTechnologys: [],
    role: "Senior",
    post_history: [],
    friends: [{}]
  },
  {
    name: "Senior5",
    lastName: "Senior5",
    email: "Senior5@developfather.com",
    username: "Senior5",
    password: "1234",
    familiarTechnologys: [],
    role: "Senior",
    post_history: [],
    friends: [{}]
  },
  {
    name: "Senior6",
    lastName: "Senior6",
    email: "Senior6@developfather.com",
    username: "Senior6",
    password: "1234",
    familiarTechnologys: [],
    role: "Senior",
    post_history: [],
    friends: [{}]
  },
  {
    name: "Senior7",
    lastName: "Senior7",
    email: "Senior7@developfather.com",
    username: "Senior7",
    password: "1234",
    familiarTechnologys: [],
    role: "Senior",
    post_history: [],
    friends: [{}]
  },
  {
    name: "Senior8",
    lastName: "Senior8",
    email: "Senior8@developfather.com",
    username: "Senior8",
    password: "1234",
    familiarTechnologys: [],
    role: "Senior",
    post_history: [],
    friends: [{}]
  },
  {
    name: "Senior9",
    lastName: "Senior9",
    email: "Senior9@developfather.com",
    username: "Senior9",
    password: "1234",
    familiarTechnologys: [],
    role: "Senior",
    post_history: [],
    friends: [{}]
  }
];
User.collection.drop();

UsersArray.forEach(u => {
  let newUser = new User(u);
  newUser
    .save()
    .then(newSavedUser => console.log(newSavedUser))
    .catch(err => console.log(err));
});
