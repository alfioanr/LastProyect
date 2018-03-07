const express = require("express");
const router = express.Router();
const Post = require("../models/Post");

/* CRUD -> READ ALL */
router.get("/", (req, res, next) => {
  Post.find()
    .then(post => {
      res.status(200).json(post);
    })
    .catch(err => console.log(err));
});

router.get("/detail/:id", (req, res, next) => {
  Post.findOne({ _id: req.body.id })
    .then(post => {
      res.status(200).json(post);
    })
    .catch(err => console.log(err));
});

router.put("/edit/:id", (req, res, next) => {
  Post.findByIdAndUpdate(req.params.id, {
    title: req.body.title,
    content: req.body.content
  })
    .then(post => {
      res.status(200).json(post);
    })
    .catch(err => console.log(err));
});
router.delete("/delete/:id", (req, res, next) => {
  Post.findByIdAndRemove(req.params.id)
    .then(post => {
      res.status(200).json({ message: "Post Deleted" });
    })
    .catch(err => console.log(err));
});
router.post("/newpost", (req, res,next) => {
  const { title, content, creatorId } = req.body;
  console.log(title, content, creatorId);
  const post = new Post({ title, content, creatorId });
  post
    .save()
    .then(p => {
      res.status(200).json(p);
    })
    .catch(err => res.status(500).json(err));
});
module.exports = router;
