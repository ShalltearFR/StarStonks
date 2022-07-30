const { Schema, model } = require("mongoose");

const userSchema = new Schema({
  name: {
    type: String,
  },
  image: String
});

const Location = model("Location", userSchema);

module.exports = Location;
