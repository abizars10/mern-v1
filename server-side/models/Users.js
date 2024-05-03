const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  name: String,
  position: String,
  national: String,
});

const UserModel = mongoose.model("users", UserSchema);

module.exports = UserModel;
