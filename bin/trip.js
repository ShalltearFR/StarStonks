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

const Trip = require("../models/Trip.model");

const data = [
  {
    from: "62dee3cb8d13f46f3bc96d16",
    to :"62dee3cb8d13f46f3bc96d13",
    date: "2022-07-01T20:30:00Z",
    duration: "14h30",
    base_price :{
        value: 150000
    },
    class : "gold"
  },
  {
    from: "62dee3cb8d13f46f3bc96d16",
    to :"62dee3cb8d13f46f3bc96d13",
    date: "2022-07-02T21:30:00Z",
    hours: "22h30",
    duration: "13h30",
    base_price :{
        value: 155000
    },
    class : "gold"
  },
  {
    from: "62dee3cb8d13f46f3bc96d16",
    to :"62dee3cb8d13f46f3bc96d13",
    date: "2022-06-29T18:15:00Z",
    hours: "23h30",
    duration: "21h30",
    base_price :{
        value: 130000
    },
    class : "silver"
  },
  {
    from: "62dee3cb8d13f46f3bc96d16",
    to :"62dee3cb8d13f46f3bc96d13",
    date: "2022-07-08T22:30:00Z",
    hours: "3h30",
    duration: "24h00",
    base_price :{
        value: 115000
    },
    class : "bronze"
  }
];
Trip.create(data)
.then(()=>{
    console.log("Importation réussi")
    mongoose.disconnect()
});
