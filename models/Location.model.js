const { Schema, model } = require("mongoose");

const userSchema = new Schema({
  name:   String,
  image:  String
});

const Location = model("Location", userSchema);

module.exports = Location;
