const { Schema, model } = require("mongoose");

// TODO: Please make sure you edit the user model to whatever makes sense in this case
const userSchema = new Schema(
  {
    pseudonyme: {
      type :      String,
      required :  true
    },
    firstName:    String,
    firstName :   String,
    email: {
      type :      String,
      unique :    true,
      required :  true
    },
    password: {
      type :      String,
      required :  true
    },
    adress :      String,
    mobile :      String,
    bloodGroup :  String,
    sexe :        String,
    allergy :     String,
    avatarUrl :   String
  },
  {
    // this second object adds extra properties: `createdAt` and `updatedAt`
    timestamps: true,
  }
);

const User = model("User", userSchema);

module.exports = User;
