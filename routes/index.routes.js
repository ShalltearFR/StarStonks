const Ticket = require("../models/Ticket.model");
const Trip = require("../models/Trip.model");
const Location = require("../models/Location.model");

const router = require("express").Router();

/* GET home page */
router.get("/", (req, res, next) => {
  Location.find()
    .then(planetsFromDB => {
      res.render("homepage", {
        title: "Home",
        user: req.session.user,
        planets: planetsFromDB
      });
    })
    .catch(err => next(err))

});

router.get("/results", (req, res, next) => {
  const from = req.query.from
  const to = req.query.to
  Trip.find({ $and: [{ from }, { to }] })
    .populate("from")
    .populate("to")
    .sort({ date: 1 })
    .then(resultFromDB => {
      res.render("results", {
        title: "Trajets suggérés",
        user: req.session.user,
        destinations: resultFromDB
      });
    })
    .catch(() => {
      res.render("results", {
        title: "Trajets suggérés",
        notFound: "true",
      });
    })
});

router.get("/id/:id", (req, res, next) => {
  res.render("options", {
    title: "Options",
    user: req.session.user,
    tripId: req.params.id,
  });
});

router.get("/classes", (req, res, next) => {
  res.render("classes", {
    title: "Classes",
    user: req.session.user,
  });
});
// router.get("/cart", (req, res, next) => { 
//   Trip
//     .populate("from")
//     .populate("to")
//     .findOne({req.cart.from.name})
//     .then(LocationFromDB => {
//       res.render("cart", {
//         title: "Panier",
//         user: req.session.user,
//         cart: req.session.cart,
//         location: LocationFromDB
//       })
//     })
//     .catch(err => {
//       console.log("Index.routes.js res.render Location error ", err);
//       next(err);
//     })
// });

router.post("/cart", (req, res, next) => {
  const { ticketID, passengers, bags, roundTrip } = req.body

  Trip.findById(ticketID)
    .populate("from")
    .populate("to")
    .then(tripFromDB => {
      const totalPrice = tripFromDB.base_price.value + ((4700 * (passengers - 1)) + (1350 * bags)) // Calcul du cout totale

      req.session.cart = {
        trip_id: ticketID,
        trip: tripFromDB,
        passengers,
        bags,
        price: {
          value: totalPrice
        },
      }

      res.redirect("/cart")
    })
    .catch(err => next(err))
})

router.get("/cart", (req, res, next) => {
  res.render("cart", {
    title: "Cart",
    user: req.session.user,
    cart: req.session.cart,
  });
});

router.delete("/cart", (req, res, next) => {
  req.session.cart = null
  res.send("OK")
});

router.get("/application", (req, res, next) => {
  res.render("application", {
    title: "Application",
    user: req.session.user,
  });
});
router.get("/terre", (req, res, next) => {
  res.render("terre", {
    title: "Terre",
  });
});
router.get("/Tatooine", (req, res, next) => {
  res.render("tatooine", {
    title: "Tatooine",
  });
});
router.get("/LolaSayu", (req, res, next) => {
  res.render("LolaSayu", {
    title: "Lola Sayu",
  });
});
router.get("/Mustafar", (req, res, next) => {
  res.render("mustafar", {
    title: "Mustafar",
  });
});
router.get("/Korriban", (req, res, next) => {
  res.render("korriban", {
    title: "Korriban",
  });
});




module.exports = router;
