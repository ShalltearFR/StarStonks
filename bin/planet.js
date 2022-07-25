const mongoose = require("mongoose");

const MONGO_URI = require("../utils/consts");

mongoose
  .connect(MONGO_URI)
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
