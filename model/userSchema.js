//Require Mongoose
const mongoose = require("mongoose");

//schema
const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
});

const userModel = mongoose.model("userModel", userSchema);
module.exports = userModel;
