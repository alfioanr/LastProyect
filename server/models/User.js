const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  name: String,
  lastName: String,
  email: String,
  username: String,
  password: String,
  familiarTechnologys: [],
  role: {
    type: String,
    enum: ["admin","Senior", "Junior"],
    default: "Junior"
  },
  post_history: [],
  friends: [{}] 
});

const User = mongoose.model("User", UserSchema);

module.exports = User;
