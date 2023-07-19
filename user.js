const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const loginData = new Schema({
  name: String,
  email: String,
});
module.exports = mongoose.model("User", loginData);
