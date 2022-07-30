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
    from: "62dee3cb8d13f46f3bc96d16", // Mustafar
    to :"62dee3cb8d13f46f3bc96d13", // Terre
    date: "2022-07-01T20:30:00Z",
    arrived: "2022-07-02T10:30:00Z",
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
    arrived: "2022-07-03T07:25:00Z",
    base_price :{
        value: 165000
    },
    class : "gold"
  },
  {
    from: "62dee3cb8d13f46f3bc96d16",
    to :"62dee3cb8d13f46f3bc96d13",
    date: "2022-06-29T18:15:00Z",
    arrived: "2022-06-30T15:45:00Z",
    base_price :{
        value: 130000
    },
    class : "silver"
  },
  {
    from: "62dee3cb8d13f46f3bc96d16",
    to :"62dee3cb8d13f46f3bc96d13",
    date: "2022-07-08T22:30:00Z",
    arrived: "2022-07-10T03:10:00Z",
    base_price :{
        value: 115000
    },
    class : "bronze"
  },
  {
    from: "62dee3cb8d13f46f3bc96d16",
    to :"62dee3cb8d13f46f3bc96d13",
    date: "2022-07-08T20:30:00Z",
    arrived: "2022-07-10T22:30:00Z",
    base_price :{
        value: 116000
    },
    class : "bronze"
  },
  {
    from: "62dee3cb8d13f46f3bc96d16", // Mustafar
    to :"62dee3cb8d13f46f3bc96d13", // Terre
    date: "2022-07-01T22:30:00Z",
    arrived: "2022-07-02T05:30:00Z",
    base_price :{
        value: 150000
    },
    class : "gold"
  },
];
Trip.create(data)
.then(()=>{
    console.log("Importation réussi")
    mongoose.disconnect()
});
