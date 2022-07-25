const mongoose = require("mongoose");

const MONGO_URI = require("../utils/consts");

mongoose
  .connect("mongodb://0.0.0.0/star-stonks")
  .then((x) => {
    console.log(
      `Connected to Mongo! Database name: "${x.connections[0].name}"`
    );
  })
  .catch((err) => {
    console.error("Error connecting to mongo: ", err);
  });

const Location = require("../models/Location.model");

const data = [
  {
    name: "Terre",
  },
  {
    name: "Tatooine",
  },
  {
    name: "Korriban",
  },
  {
    name: "Mustafar",
  },
  {
    name: "Lola Sayo",
  },
];
Location.create(data);
