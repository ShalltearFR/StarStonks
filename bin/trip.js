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
  // -----------------------------------------------------------------------------Mustafar => Terre------------------------------------------------------------------------------------

  {
    from: "62e816809a1a7803526d047c", // Mustafar
    to: "62e816809a1a7803526d0479", // Terre
    date: "2023-07-01T20:30:00Z",
    arrived: "2023-07-02T10:30:00Z",
    base_price: {
      value: 150000
    },
    class: "gold"
  },
  {
    from: "62e816809a1a7803526d047c",
    to: "62e816809a1a7803526d0479",
    date: "2023-07-02T21:30:00Z",
    hours: "22h30",
    arrived: "2023-07-03T07:25:00Z",
    base_price: {
      value: 165000
    },
    class: "gold"
  },
  {
    from: "62e816809a1a7803526d047c",
    to: "62e816809a1a7803526d0479",
    date: "2023-06-29T18:15:00Z",
    arrived: "2023-06-30T15:45:00Z",
    base_price: {
      value: 130000
    },
    class: "silver"
  },
  {
    from: "62e816809a1a7803526d047c",
    to: "62e816809a1a7803526d0479",
    date: "2023-07-08T22:30:00Z",
    arrived: "2023-07-10T03:10:00Z",
    base_price: {
      value: 115000
    },
    class: "bronze"
  },
  {
    from: "62e816809a1a7803526d047c",
    to: "62e816809a1a7803526d0479",
    date: "2023-07-08T20:30:00Z",
    arrived: "2023-07-10T22:30:00Z",
    base_price: {
      value: 116000
    },
    class: "bronze"
  },
  {
    from: "62e816809a1a7803526d047c", // Mustafar
    to: "62e816809a1a7803526d0479", // Terre
    date: "2023-07-01T22:30:00Z",
    arrived: "2023-07-02T05:30:00Z",
    base_price: {
      value: 150000
    },
    class: "gold"
  },
  // -----------------------------------------------------------------------------Terre => Mustafar------------------------------------------------------------------------------------
  {
    from: "62e816809a1a7803526d0479", // Terre
    to: "62e816809a1a7803526d047c", // Mustafar
    date: "2023-07-01T20:30:00Z",
    arrived: "2023-07-02T10:30:00Z",
    base_price: {
      value: 150000
    },
    class: "gold"
  },
  {
    from: "62e816809a1a7803526d0479",
    to: "62e816809a1a7803526d047c",
    date: "2023-07-02T21:30:00Z",
    hours: "22h30",
    arrived: "2023-07-03T07:25:00Z",
    base_price: {
      value: 165000
    },
    class: "gold"
  },
  {
    from: "62e816809a1a7803526d0479",
    to: "62e816809a1a7803526d047c",
    date: "2023-06-29T18:15:00Z",
    arrived: "2023-06-30T15:45:00Z",
    base_price: {
      value: 130000
    },
    class: "silver"
  },
  {
    from: "62e816809a1a7803526d0479",
    to: "62e816809a1a7803526d047c",
    date: "2023-07-08T22:30:00Z",
    arrived: "2023-07-10T03:10:00Z",
    base_price: {
      value: 115000
    },
    class: "bronze"
  },
  {
    from: "62e816809a1a7803526d0479",
    to: "62e816809a1a7803526d047c",
    date: "2023-07-08T20:30:00Z",
    arrived: "2023-07-10T22:30:00Z",
    base_price: {
      value: 116000
    },
    class: "bronze"
  },
  {
    from: "62e816809a1a7803526d0479", // Terre
    to: "62e816809a1a7803526d047c", // Mustafar
    date: "2023-07-01T22:30:00Z",
    arrived: "2023-07-02T05:30:00Z",
    base_price: {
      value: 150000
    },
    class: "gold"
  },
  // -----------------------------------------------------------------------------Terre => Tatooine------------------------------------------------------------------------------------

  {
    from: "62e816809a1a7803526d0479", // Terre
    to: "62e816809a1a7803526d047a", // Tatooine
    date: "2023-07-01T20:30:00Z",
    arrived: "2023-07-02T10:30:00Z",
    base_price: {
      value: 150000
    },
    class: "gold"
  },
  {
    from: "62e816809a1a7803526d0479",
    to: "62e816809a1a7803526d047a",
    date: "2023-07-02T21:30:00Z",
    hours: "22h30",
    arrived: "2023-07-03T07:25:00Z",
    base_price: {
      value: 165000
    },
    class: "gold"
  },
  {
    from: "62e816809a1a7803526d0479",
    to: "62e816809a1a7803526d047a",
    date: "2023-06-29T18:15:00Z",
    arrived: "2023-06-30T15:45:00Z",
    base_price: {
      value: 130000
    },
    class: "silver"
  },
  {
    from: "62e816809a1a7803526d0479",
    to: "62e816809a1a7803526d047a",
    date: "2023-07-08T22:30:00Z",
    arrived: "2023-07-10T03:10:00Z",
    base_price: {
      value: 115000
    },
    class: "bronze"
  },
  {
    from: "62e816809a1a7803526d0479",
    to: "62e816809a1a7803526d047a",
    date: "2023-07-08T20:30:00Z",
    arrived: "2023-07-10T22:30:00Z",
    base_price: {
      value: 116000
    },
    class: "bronze"
  },
  {
    from: "62e816809a1a7803526d0479", // Terre
    to: "62e816809a1a7803526d047a", // Tatooine
    date: "2023-07-01T22:30:00Z",
    arrived: "2023-07-02T05:30:00Z",
    base_price: {
      value: 150000
    },
    class: "gold"
  },
  // -----------------------------------------------------------------------------Tatooine => Terre------------------------------------------------------------------------------------

  {
    from: "62e816809a1a7803526d047a", // Tatooine
    to: "62e816809a1a7803526d0479", // Terre
    date: "2023-07-01T20:30:00Z",
    arrived: "2023-07-02T10:30:00Z",
    base_price: {
      value: 150000
    },
    class: "gold"
  },
  {
    from: "62e816809a1a7803526d047a",
    to: "62e816809a1a7803526d0479",
    date: "2023-07-02T21:30:00Z",
    hours: "22h30",
    arrived: "2023-07-03T07:25:00Z",
    base_price: {
      value: 165000
    },
    class: "gold"
  },
  {
    from: "62e816809a1a7803526d047a",
    to: "62e816809a1a7803526d0479",
    date: "2023-06-29T18:15:00Z",
    arrived: "2023-06-30T15:45:00Z",
    base_price: {
      value: 130000
    },
    class: "silver"
  },
  {
    from: "62e816809a1a7803526d047a",
    to: "62e816809a1a7803526d0479",
    date: "2023-07-08T22:30:00Z",
    arrived: "2023-07-10T03:10:00Z",
    base_price: {
      value: 115000
    },
    class: "bronze"
  },
  {
    from: "62e816809a1a7803526d047a",
    to: "62e816809a1a7803526d0479",
    date: "2023-07-08T20:30:00Z",
    arrived: "2023-07-10T22:30:00Z",
    base_price: {
      value: 116000
    },
    class: "bronze"
  },
  {
    from: "62e816809a1a7803526d047a", // Tatooine
    to: "62e816809a1a7803526d0479", // Terre
    date: "2023-07-01T22:30:00Z",
    arrived: "2023-07-02T05:30:00Z",
    base_price: {
      value: 150000
    },
    class: "gold"
  },
  // -----------------------------------------------------------------------------Terre => Korriban------------------------------------------------------------------------------------

  {
    from: "62e816809a1a7803526d0479", // Terre
    to: "62e816809a1a7803526d047b", // Korriban
    date: "2023-07-01T20:30:00Z",
    arrived: "2023-07-02T10:30:00Z",
    base_price: {
      value: 150000
    },
    class: "gold"
  },
  {
    from: "62e816809a1a7803526d0479",
    to: "62e816809a1a7803526d047b",
    date: "2023-07-02T21:30:00Z",
    hours: "22h30",
    arrived: "2023-07-03T07:25:00Z",
    base_price: {
      value: 165000
    },
    class: "gold"
  },
  {
    from: "62e816809a1a7803526d0479",
    to: "62e816809a1a7803526d047b",
    date: "2023-06-29T18:15:00Z",
    arrived: "2023-06-30T15:45:00Z",
    base_price: {
      value: 130000
    },
    class: "silver"
  },
  {
    from: "62e816809a1a7803526d0479",
    to: "62e816809a1a7803526d047b",
    date: "2023-07-08T22:30:00Z",
    arrived: "2023-07-10T03:10:00Z",
    base_price: {
      value: 115000
    },
    class: "bronze"
  },
  {
    from: "62e816809a1a7803526d0479",
    to: "62e816809a1a7803526d047b",
    date: "2023-07-08T20:30:00Z",
    arrived: "2023-07-10T22:30:00Z",
    base_price: {
      value: 116000
    },
    class: "bronze"
  },
  {
    from: "62e816809a1a7803526d0479", // Terre
    to: "62e816809a1a7803526d047b", // Korriban
    date: "2023-07-01T22:30:00Z",
    arrived: "2023-07-02T05:30:00Z",
    base_price: {
      value: 150000
    },
    class: "gold"
  },
  // -----------------------------------------------------------------------------Korriban => Terre------------------------------------------------------------------------------------

  {
    from: "62e816809a1a7803526d047b", // Korriban
    to: "62e816809a1a7803526d0479", // Terre
    date: "2023-07-01T20:30:00Z",
    arrived: "2023-07-02T10:30:00Z",
    base_price: {
      value: 150000
    },
    class: "gold"
  },
  {
    from: "62e816809a1a7803526d047b",
    to: "62e816809a1a7803526d0479",
    date: "2023-07-02T21:30:00Z",
    hours: "22h30",
    arrived: "2023-07-03T07:25:00Z",
    base_price: {
      value: 165000
    },
    class: "gold"
  },
  {
    from: "62e816809a1a7803526d047b",
    to: "62e816809a1a7803526d0479",
    date: "2023-06-29T18:15:00Z",
    arrived: "2023-06-30T15:45:00Z",
    base_price: {
      value: 130000
    },
    class: "silver"
  },
  {
    from: "62e816809a1a7803526d047b",
    to: "62e816809a1a7803526d0479",
    date: "2023-07-08T22:30:00Z",
    arrived: "2023-07-10T03:10:00Z",
    base_price: {
      value: 115000
    },
    class: "bronze"
  },
  {
    from: "62e816809a1a7803526d047b",
    to: "62e816809a1a7803526d0479",
    date: "2023-07-08T20:30:00Z",
    arrived: "2023-07-10T22:30:00Z",
    base_price: {
      value: 116000
    },
    class: "bronze"
  },
  {
    from: "62e816809a1a7803526d047b", // Korriban
    to: "62e816809a1a7803526d0479", // Terre
    date: "2023-07-01T22:30:00Z",
    arrived: "2023-07-02T05:30:00Z",
    base_price: {
      value: 150000
    },
    class: "gold"
  },
  // -----------------------------------------------------------------------------Terre => Lola Sayu------------------------------------------------------------------------------------

  {
    from: "62e816809a1a7803526d0479", // Terre
    to: "62e816809a1a7803526d047d", // Lola Sayu
    date: "2023-07-01T20:30:00Z",
    arrived: "2023-07-02T10:30:00Z",
    base_price: {
      value: 150000
    },
    class: "gold"
  },
  {
    from: "62e816809a1a7803526d0479",
    to: "62e816809a1a7803526d047d",
    date: "2023-07-02T21:30:00Z",
    hours: "22h30",
    arrived: "2023-07-03T07:25:00Z",
    base_price: {
      value: 165000
    },
    class: "gold"
  },
  {
    from: "62e816809a1a7803526d0479",
    to: "62e816809a1a7803526d047d",
    date: "2023-06-29T18:15:00Z",
    arrived: "2023-06-30T15:45:00Z",
    base_price: {
      value: 130000
    },
    class: "silver"
  },
  {
    from: "62e816809a1a7803526d0479",
    to: "62e816809a1a7803526d047d",
    date: "2023-07-08T22:30:00Z",
    arrived: "2023-07-10T03:10:00Z",
    base_price: {
      value: 115000
    },
    class: "bronze"
  },
  {
    from: "62e816809a1a7803526d0479",
    to: "62e816809a1a7803526d047d",
    date: "2023-07-08T20:30:00Z",
    arrived: "2023-07-10T22:30:00Z",
    base_price: {
      value: 116000
    },
    class: "bronze"
  },
  {
    from: "62e816809a1a7803526d0479", // Terre
    to: "62e816809a1a7803526d047d", // Lola Sayu
    date: "2023-07-01T22:30:00Z",
    arrived: "2023-07-02T05:30:00Z",
    base_price: {
      value: 150000
    },
    class: "gold"
  },
  // -----------------------------------------------------------------------------Lola Sayu => Terre------------------------------------------------------------------------------------

  {
    from: "62e816809a1a7803526d047d", // Lola Sayu
    to: "62e816809a1a7803526d0479", // Terre
    date: "2023-07-01T20:30:00Z",
    arrived: "2023-07-02T10:30:00Z",
    base_price: {
      value: 150000
    },
    class: "gold"
  },
  {
    from: "62e816809a1a7803526d047d",
    to: "62e816809a1a7803526d0479",
    date: "2023-07-02T21:30:00Z",
    hours: "22h30",
    arrived: "2023-07-03T07:25:00Z",
    base_price: {
      value: 165000
    },
    class: "gold"
  },
  {
    from: "62e816809a1a7803526d047d",
    to: "62e816809a1a7803526d0479",
    date: "2023-06-29T18:15:00Z",
    arrived: "2023-06-30T15:45:00Z",
    base_price: {
      value: 130000
    },
    class: "silver"
  },
  {
    from: "62e816809a1a7803526d047d",
    to: "62e816809a1a7803526d0479",
    date: "2023-07-08T22:30:00Z",
    arrived: "2023-07-10T03:10:00Z",
    base_price: {
      value: 115000
    },
    class: "bronze"
  },
  {
    from: "62e816809a1a7803526d047d",
    to: "62e816809a1a7803526d0479",
    date: "2023-07-08T20:30:00Z",
    arrived: "2023-07-10T22:30:00Z",
    base_price: {
      value: 116000
    },
    class: "bronze"
  },
  {
    from: "62e816809a1a7803526d047d", // Lola Sayu
    to: "62e816809a1a7803526d0479", // Terre
    date: "2023-07-01T22:30:00Z",
    arrived: "2023-07-02T05:30:00Z",
    base_price: {
      value: 150000
    },
    class: "gold"
  },
  // -----------------------------------------------------------------------------Korriban => Lola Sayu------------------------------------------------------------------------------------

  {
    from: "62e816809a1a7803526d047b", // Korriban
    to: "62e816809a1a7803526d047d", // Lola Sayu
    date: "2023-07-01T20:30:00Z",
    arrived: "2023-07-02T10:30:00Z",
    base_price: {
      value: 150000
    },
    class: "gold"
  },
  {
    from: "62e816809a1a7803526d047b",
    to: "62e816809a1a7803526d047d",
    date: "2023-07-02T21:30:00Z",
    hours: "22h30",
    arrived: "2023-07-03T07:25:00Z",
    base_price: {
      value: 165000
    },
    class: "gold"
  },
  {
    from: "62e816809a1a7803526d047b",
    to: "62e816809a1a7803526d047d",
    date: "2023-06-29T18:15:00Z",
    arrived: "2023-06-30T15:45:00Z",
    base_price: {
      value: 130000
    },
    class: "silver"
  },
  {
    from: "62e816809a1a7803526d047b",
    to: "62e816809a1a7803526d047d",
    date: "2023-07-08T22:30:00Z",
    arrived: "2023-07-10T03:10:00Z",
    base_price: {
      value: 115000
    },
    class: "bronze"
  },
  {
    from: "62e816809a1a7803526d047b",
    to: "62e816809a1a7803526d047d",
    date: "2023-07-08T20:30:00Z",
    arrived: "2023-07-10T22:30:00Z",
    base_price: {
      value: 116000
    },
    class: "bronze"
  },
  {
    from: "62e816809a1a7803526d047b", // Korriban
    to: "62e816809a1a7803526d047d", // Lola Sayu
    date: "2023-07-01T22:30:00Z",
    arrived: "2023-07-02T05:30:00Z",
    base_price: {
      value: 150000
    },
    class: "gold"
  },
  // -----------------------------------------------------------------------------Lola Sayu => Korriban------------------------------------------------------------------------------------

  {
    from: "62e816809a1a7803526d047d", // Lola Sayu
    to: "62e816809a1a7803526d047b", // Korriban
    date: "2023-07-01T20:30:00Z",
    arrived: "2023-07-02T10:30:00Z",
    base_price: {
      value: 150000
    },
    class: "gold"
  },
  {
    from: "62e816809a1a7803526d047d",
    to: "62e816809a1a7803526d047b",
    date: "2023-07-02T21:30:00Z",
    hours: "22h30",
    arrived: "2023-07-03T07:25:00Z",
    base_price: {
      value: 165000
    },
    class: "gold"
  },
  {
    from: "62e816809a1a7803526d047d",
    to: "62e816809a1a7803526d047b",
    date: "2023-06-29T18:15:00Z",
    arrived: "2023-06-30T15:45:00Z",
    base_price: {
      value: 130000
    },
    class: "silver"
  },
  {
    from: "62e816809a1a7803526d047d",
    to: "62e816809a1a7803526d047b",
    date: "2023-07-08T22:30:00Z",
    arrived: "2023-07-10T03:10:00Z",
    base_price: {
      value: 115000
    },
    class: "bronze"
  },
  {
    from: "62e816809a1a7803526d047d",
    to: "62e816809a1a7803526d047b",
    date: "2023-07-08T20:30:00Z",
    arrived: "2023-07-10T22:30:00Z",
    base_price: {
      value: 116000
    },
    class: "bronze"
  },
  {
    from: "62e816809a1a7803526d047d", // Lola Sayu
    to: "62e816809a1a7803526d047b", // Korriban
    date: "2023-07-01T22:30:00Z",
    arrived: "2023-07-02T05:30:00Z",
    base_price: {
      value: 150000
    },
    class: "gold"
  },
  // -----------------------------------------------------------------------------Tatooine => Lola Sayu------------------------------------------------------------------------------------

  {
    from: "62e816809a1a7803526d047a", // Tatooine
    to: "62e816809a1a7803526d047d", // Lola Sayu
    date: "2023-07-01T20:30:00Z",
    arrived: "2023-07-02T10:30:00Z",
    base_price: {
      value: 150000
    },
    class: "gold"
  },
  {
    from: "62e816809a1a7803526d047a",
    to: "62e816809a1a7803526d047d",
    date: "2023-07-02T21:30:00Z",
    hours: "22h30",
    arrived: "2023-07-03T07:25:00Z",
    base_price: {
      value: 165000
    },
    class: "gold"
  },
  {
    from: "62e816809a1a7803526d047a",
    to: "62e816809a1a7803526d047d",
    date: "2023-06-29T18:15:00Z",
    arrived: "2023-06-30T15:45:00Z",
    base_price: {
      value: 130000
    },
    class: "silver"
  },
  {
    from: "62e816809a1a7803526d047a",
    to: "62e816809a1a7803526d047d",
    date: "2023-07-08T22:30:00Z",
    arrived: "2023-07-10T03:10:00Z",
    base_price: {
      value: 115000
    },
    class: "bronze"
  },
  {
    from: "62e816809a1a7803526d047a",
    to: "62e816809a1a7803526d047d",
    date: "2023-07-08T20:30:00Z",
    arrived: "2023-07-10T22:30:00Z",
    base_price: {
      value: 116000
    },
    class: "bronze"
  },
  {
    from: "62e816809a1a7803526d047a", // Tatooine
    to: "62e816809a1a7803526d047d", // Lola Sayu
    date: "2023-07-01T22:30:00Z",
    arrived: "2023-07-02T05:30:00Z",
    base_price: {
      value: 150000
    },
    class: "gold"
  },
  // -----------------------------------------------------------------------------Lola Sayu => Tatooine------------------------------------------------------------------------------------

  {
    from: "62e816809a1a7803526d047d", // Lola Sayu
    to: "62e816809a1a7803526d047a", // Tatooine
    date: "2023-07-01T20:30:00Z",
    arrived: "2023-07-02T10:30:00Z",
    base_price: {
      value: 150000
    },
    class: "gold"
  },
  {
    from: "62e816809a1a7803526d047d",
    to: "62e816809a1a7803526d047a",
    date: "2023-07-02T21:30:00Z",
    hours: "22h30",
    arrived: "2023-07-03T07:25:00Z",
    base_price: {
      value: 165000
    },
    class: "gold"
  },
  {
    from: "62e816809a1a7803526d047d",
    to: "62e816809a1a7803526d047a",
    date: "2023-06-29T18:15:00Z",
    arrived: "2023-06-30T15:45:00Z",
    base_price: {
      value: 130000
    },
    class: "silver"
  },
  {
    from: "62e816809a1a7803526d047d",
    to: "62e816809a1a7803526d047a",
    date: "2023-07-08T22:30:00Z",
    arrived: "2023-07-10T03:10:00Z",
    base_price: {
      value: 115000
    },
    class: "bronze"
  },
  {
    from: "62e816809a1a7803526d047d",
    to: "62e816809a1a7803526d047a",
    date: "2023-07-08T20:30:00Z",
    arrived: "2023-07-10T22:30:00Z",
    base_price: {
      value: 116000
    },
    class: "bronze"
  },
  {
    from: "62e816809a1a7803526d047d", // Lola Sayu
    to: "62e816809a1a7803526d047a", // Tatooine
    date: "2023-07-01T22:30:00Z",
    arrived: "2023-07-02T05:30:00Z",
    base_price: {
      value: 150000
    },
    class: "gold"
  },
  // -----------------------------------------------------------------------------Mustafar => Lola Sayu------------------------------------------------------------------------------------

  {
    from: "62e816809a1a7803526d047c", // Mustafar
    to: "62e816809a1a7803526d047d", // Lola Sayu
    date: "2023-07-01T20:30:00Z",
    arrived: "2023-07-02T10:30:00Z",
    base_price: {
      value: 150000
    },
    class: "gold"
  },
  {
    from: "62e816809a1a7803526d047c",
    to: "62e816809a1a7803526d047d",
    date: "2023-07-02T21:30:00Z",
    hours: "22h30",
    arrived: "2023-07-03T07:25:00Z",
    base_price: {
      value: 165000
    },
    class: "gold"
  },
  {
    from: "62e816809a1a7803526d047c",
    to: "62e816809a1a7803526d047d",
    date: "2023-06-29T18:15:00Z",
    arrived: "2023-06-30T15:45:00Z",
    base_price: {
      value: 130000
    },
    class: "silver"
  },
  {
    from: "62e816809a1a7803526d047c",
    to: "62e816809a1a7803526d047d",
    date: "2023-07-08T22:30:00Z",
    arrived: "2023-07-10T03:10:00Z",
    base_price: {
      value: 115000
    },
    class: "bronze"
  },
  {
    from: "62e816809a1a7803526d047c",
    to: "62e816809a1a7803526d047d",
    date: "2023-07-08T20:30:00Z",
    arrived: "2023-07-10T22:30:00Z",
    base_price: {
      value: 116000
    },
    class: "bronze"
  },
  {
    from: "62e816809a1a7803526d047c", // Mustafar
    to: "62e816809a1a7803526d047d", // Lola Sayu
    date: "2023-07-01T22:30:00Z",
    arrived: "2023-07-02T05:30:00Z",
    base_price: {
      value: 150000
    },
    class: "gold"
  },
  // -----------------------------------------------------------------------------Lola Sayu => Mustafar------------------------------------------------------------------------------------

  {
    from: "62e816809a1a7803526d047d", // Lola Sayu
    to: "62e816809a1a7803526d047c", // Mustafar
    date: "2023-07-01T20:30:00Z",
    arrived: "2023-07-02T10:30:00Z",
    base_price: {
      value: 150000
    },
    class: "gold"
  },
  {
    from: "62e816809a1a7803526d047d",
    to: "62e816809a1a7803526d047c",
    date: "2023-07-02T21:30:00Z",
    hours: "22h30",
    arrived: "2023-07-03T07:25:00Z",
    base_price: {
      value: 165000
    },
    class: "gold"
  },
  {
    from: "62e816809a1a7803526d047d",
    to: "62e816809a1a7803526d047c",
    date: "2023-06-29T18:15:00Z",
    arrived: "2023-06-30T15:45:00Z",
    base_price: {
      value: 130000
    },
    class: "silver"
  },
  {
    from: "62e816809a1a7803526d047d",
    to: "62e816809a1a7803526d047c",
    date: "2023-07-08T22:30:00Z",
    arrived: "2023-07-10T03:10:00Z",
    base_price: {
      value: 115000
    },
    class: "bronze"
  },
  {
    from: "62e816809a1a7803526d047d",
    to: "62e816809a1a7803526d047c",
    date: "2023-07-08T20:30:00Z",
    arrived: "2023-07-10T22:30:00Z",
    base_price: {
      value: 116000
    },
    class: "bronze"
  },
  {
    from: "62e816809a1a7803526d047d", // Lola Sayu
    to: "62e816809a1a7803526d047c", // Mustafar
    date: "2023-07-01T22:30:00Z",
    arrived: "2023-07-02T05:30:00Z",
    base_price: {
      value: 150000
    },
    class: "gold"
  },
  // -----------------------------------------------------------------------------Mustafar => Korriban------------------------------------------------------------------------------------

  {
    from: "62e816809a1a7803526d047c", // Mustafar
    to: "62e816809a1a7803526d047b", // Korriban
    date: "2023-07-01T20:30:00Z",
    arrived: "2023-07-02T10:30:00Z",
    base_price: {
      value: 150000
    },
    class: "gold"
  },
  {
    from: "62e816809a1a7803526d047c",
    to: "62e816809a1a7803526d047b",
    date: "2023-07-02T21:30:00Z",
    hours: "22h30",
    arrived: "2023-07-03T07:25:00Z",
    base_price: {
      value: 165000
    },
    class: "gold"
  },
  {
    from: "62e816809a1a7803526d047c",
    to: "62e816809a1a7803526d047b",
    date: "2023-06-29T18:15:00Z",
    arrived: "2023-06-30T15:45:00Z",
    base_price: {
      value: 130000
    },
    class: "silver"
  },
  {
    from: "62e816809a1a7803526d047c",
    to: "62e816809a1a7803526d047b",
    date: "2023-07-08T22:30:00Z",
    arrived: "2023-07-10T03:10:00Z",
    base_price: {
      value: 115000
    },
    class: "bronze"
  },
  {
    from: "62e816809a1a7803526d047c",
    to: "62e816809a1a7803526d047b",
    date: "2023-07-08T20:30:00Z",
    arrived: "2023-07-10T22:30:00Z",
    base_price: {
      value: 116000
    },
    class: "bronze"
  },
  {
    from: "62e816809a1a7803526d047c", // Mustafar
    to: "62e816809a1a7803526d047b", // Korriban
    date: "2023-07-01T22:30:00Z",
    arrived: "2023-07-02T05:30:00Z",
    base_price: {
      value: 150000
    },
    class: "gold"
  },
  // -----------------------------------------------------------------------------Korriban => Mustafar------------------------------------------------------------------------------------

  {
    from: "62e816809a1a7803526d047b", // Korriban
    to: "62e816809a1a7803526d047c", // Mustafar
    date: "2023-07-01T20:30:00Z",
    arrived: "2023-07-02T10:30:00Z",
    base_price: {
      value: 150000
    },
    class: "gold"
  },
  {
    from: "62e816809a1a7803526d047b",
    to: "62e816809a1a7803526d047c",
    date: "2023-07-02T21:30:00Z",
    hours: "22h30",
    arrived: "2023-07-03T07:25:00Z",
    base_price: {
      value: 165000
    },
    class: "gold"
  },
  {
    from: "62e816809a1a7803526d047b",
    to: "62e816809a1a7803526d047c",
    date: "2023-06-29T18:15:00Z",
    arrived: "2023-06-30T15:45:00Z",
    base_price: {
      value: 130000
    },
    class: "silver"
  },
  {
    from: "62e816809a1a7803526d047b",
    to: "62e816809a1a7803526d047c",
    date: "2023-07-08T22:30:00Z",
    arrived: "2023-07-10T03:10:00Z",
    base_price: {
      value: 115000
    },
    class: "bronze"
  },
  {
    from: "62e816809a1a7803526d047b",
    to: "62e816809a1a7803526d047c",
    date: "2023-07-08T20:30:00Z",
    arrived: "2023-07-10T22:30:00Z",
    base_price: {
      value: 116000
    },
    class: "bronze"
  },
  {
    from: "62e816809a1a7803526d047b", // Korriban
    to: "62e816809a1a7803526d047c", // Mustafar
    date: "2023-07-01T22:30:00Z",
    arrived: "2023-07-02T05:30:00Z",
    base_price: {
      value: 150000
    },
    class: "gold"
  },
  // -----------------------------------------------------------------------------Mustafar => Tatooine------------------------------------------------------------------------------------

  {
    from: "62e816809a1a7803526d047c", // Mustafar
    to: "62e816809a1a7803526d047a", // Tatooine
    date: "2023-07-01T20:30:00Z",
    arrived: "2023-07-02T10:30:00Z",
    base_price: {
      value: 150000
    },
    class: "gold"
  },
  {
    from: "62e816809a1a7803526d047c",
    to: "62e816809a1a7803526d047a",
    date: "2023-07-02T21:30:00Z",
    hours: "22h30",
    arrived: "2023-07-03T07:25:00Z",
    base_price: {
      value: 165000
    },
    class: "gold"
  },
  {
    from: "62e816809a1a7803526d047c",
    to: "62e816809a1a7803526d047a",
    date: "2023-06-29T18:15:00Z",
    arrived: "2023-06-30T15:45:00Z",
    base_price: {
      value: 130000
    },
    class: "silver"
  },
  {
    from: "62e816809a1a7803526d047c",
    to: "62e816809a1a7803526d047a",
    date: "2023-07-08T22:30:00Z",
    arrived: "2023-07-10T03:10:00Z",
    base_price: {
      value: 115000
    },
    class: "bronze"
  },
  {
    from: "62e816809a1a7803526d047c",
    to: "62e816809a1a7803526d047a",
    date: "2023-07-08T20:30:00Z",
    arrived: "2023-07-10T22:30:00Z",
    base_price: {
      value: 116000
    },
    class: "bronze"
  },
  {
    from: "62e816809a1a7803526d047c", // Mustafar
    to: "62e816809a1a7803526d047a", // Tatooine
    date: "2023-07-01T22:30:00Z",
    arrived: "2023-07-02T05:30:00Z",
    base_price: {
      value: 150000
    },
    class: "gold"
  },
  // -----------------------------------------------------------------------------Tatooine => Mustafar------------------------------------------------------------------------------------

  {
    from: "62e816809a1a7803526d047a", // Tatooine
    to: "62e816809a1a7803526d047c", // Mustafar
    date: "2023-07-01T20:30:00Z",
    arrived: "2023-07-02T10:30:00Z",
    base_price: {
      value: 150000
    },
    class: "gold"
  },
  {
    from: "62e816809a1a7803526d047a",
    to: "62e816809a1a7803526d047c",
    date: "2023-07-02T21:30:00Z",
    hours: "22h30",
    arrived: "2023-07-03T07:25:00Z",
    base_price: {
      value: 165000
    },
    class: "gold"
  },
  {
    from: "62e816809a1a7803526d047a",
    to: "62e816809a1a7803526d047c",
    date: "2023-06-29T18:15:00Z",
    arrived: "2023-06-30T15:45:00Z",
    base_price: {
      value: 130000
    },
    class: "silver"
  },
  {
    from: "62e816809a1a7803526d047a",
    to: "62e816809a1a7803526d047c",
    date: "2023-07-08T22:30:00Z",
    arrived: "2023-07-10T03:10:00Z",
    base_price: {
      value: 115000
    },
    class: "bronze"
  },
  {
    from: "62e816809a1a7803526d047a",
    to: "62e816809a1a7803526d047c",
    date: "2023-07-08T20:30:00Z",
    arrived: "2023-07-10T22:30:00Z",
    base_price: {
      value: 116000
    },
    class: "bronze"
  },
  {
    from: "62e816809a1a7803526d047a", // Tatooine
    to: "62e816809a1a7803526d047c", // Mustafar
    date: "2023-07-01T22:30:00Z",
    arrived: "2023-07-02T05:30:00Z",
    base_price: {
      value: 150000
    },
    class: "gold"
  },

];
Trip.create(data)
  .then(() => {
    console.log("Importation réussi")
    mongoose.disconnect()
  });
