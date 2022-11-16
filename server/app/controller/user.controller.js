const db = require("../models");
const User = db.user;

exports.signup = (req, res) => {
  User.create({
    firstname: req.body.firstname,
    lastname: req.body.lastname,
    phoneNumber: req.body.phoneNumber,
    username: req.body.username,
    password: req.body.password,
  }).then(() => {
    res.status(201).send({ message: "successfully" });
  });
};

exports.get = (req, res) => {
  User.findAll().then((data) => res.send(data));
};
