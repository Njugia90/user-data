const { type } = require("mode/lib/extension");
const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    require: true,
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