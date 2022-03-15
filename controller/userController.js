const express = require("express");
const model = require("../model/userSchema");

//post userdata in database
const sendUser = (req, res) => {
  const userModel = new model(req.body);
  userModel
    .save()
    .then(() => res.send("data sent successfully"))
    .catch((err) => res.send(err.message));
};

//get all userdata from dtabase
const getUser = (req, res) => {
  model
    .find()
    .then((data) => res.send(data))
    .catch((err) => res.send(err.message));
};

//updateOne
const updateOne = (req, res) => {
  model
    .updateOne({ _id: req.params.id }, { $set: { name: "bappy" } })
    .then(() => res.send("updated successfully"))
    .catch((err) => res.send(err.message));
};

//deleteone
const deleteone = (req, res) => {
  model
    .deleteOne({ _id: req.params.id })
    .then(() => res.send("delted"))
    .catch((err) => res.send(err.message));
};

module.exports = {
  getUser,
  sendUser,
  updateOne,
  deleteone,
};
