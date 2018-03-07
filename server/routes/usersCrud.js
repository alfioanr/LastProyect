const express = require("express");
const router = express.Router();
const User = require("../models/User");
var bcrypt = require("bcrypt");

/* CRUD -> READ ALL */
router.get("/", (req, res, next) => {
  User.find()
  .then((users) => {
    res.status(200).json(users);
  })
  .catch(err => console.log(err))
});
let loginPromise = (req, user) => {
  return new Promise((resolve, reject) => {
    req.login(user, e => (e ? reject(e) : resolve(user)));
  });
};

// CRUD -> CREATE USER IN DATABASE
router.post("/signup", (req, res, next) => {
  const {
    name,
    lastName,
    email,
    username,
    password,
    familiarTechnologys,
    friends
  } = req.body;
  if (!username || !password)
    return res.status(400).json({ message: "Provide username and password" });
  User.findOne({ username }, "_id")
    .then(foundUser => {
      if (foundUser)
        return res.status(400).json({ message: "The username already exists" });
      const salt = bcrypt.genSaltSync(10);
      const hashPass = bcrypt.hashSync(password, salt);
      const theUser = new User({ username, password: hashPass });
      return theUser
        .save()
        .then(user => loginPromise(req, user))
        .then(user => {
          debug(`Registered user ${user._id}. Welcome ${user.username}`);
          res.status(200).json(req.user);
        });
    })
    .catch(e => {
      console.log(e);
      res.status(500).json(e);
    });
});
// DELETE USER FROM DB
router.delete("/profile/delete/:id", (req, res) => {
  const id = req.params.id;

  User.findByIdAndRemove(id, (err, user) => {
    if (err) {
      return next(err);
    }
    return res.status(200).json({message:"Post Deleted"})
  });
});
/* CRUD -> UPDATE DATABASE */
router.put("/profile/edit/:id", (req, res, next) => {
  res.send({
    name: req.body.name,
    lastName: req.body.lastName,
    email: req.body.email,
    username: req.body.username,
    password: req.body.password,
    familiarTechnologys: req.body.familiarTechnologys,
    friends: req.body.friends
  });

  User.findByIdAndUpdate(id, updates, (err, result) => {
    if (err) {
      console.log(err);
    }
    res.status(200).json({ message: "user actualizado" });
  });
});

module.exports = router;
