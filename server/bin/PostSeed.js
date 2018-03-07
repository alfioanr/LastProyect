const mongoose = require("mongoose");
const Post = require("../models/Post");

mongoose
  .connect("mongodb://localhost/developfather")
  .then(() => console.log("Conectado con Seeds!"))
  .catch(error => console.log(error));

  const PostsArray= [
    {
      tittle:"Welcome all",
      content: "Welcome All to developFather Adopt a Junior, they will be more than glad learning from you",
      creatorId:"5a96c1305c327938243733d6"
    },
    {
      tittle:"Thanks For having me",
      content:"my name is antonio, i'm excited to start learning from you adopt me please",
      creatorId:"5a981a76a06a752059424ca1"
    }
  ]
      
  
Post.collection.drop();

PostsArray.forEach(p => {
  let newPost = new Post(p);
  newPost
    .save()
    .then(newSavedPost => console.log(newSavedPost))
    .catch(err => console.log(err));
});