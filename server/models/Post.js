const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PostSchema = new Schema({
  title: String,
  content: String,
  creatorId: { type: Schema.Types.ObjectId, ref: "User" },
});

const Post = mongoose.model("Post", PostSchema);

module.exports = Post;
