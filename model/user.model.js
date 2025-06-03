const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true, 
  },
  email: {
    type: String
  },
  age: {
    type: Number
  },
  address: {
    type: String
  },
  bio: {
    type: String
  },
});

const userModel = mongoose.model("User", userSchema);

module.exports = userModel;
