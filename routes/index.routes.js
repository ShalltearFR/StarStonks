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
  res.render("results", {
    title: "Trajets suggérés",
    user: req.session.user,
    selectResult: req.query.selectResult
  });
});

router.get("/classes", (req, res, next) => {
  res.render("classes", {
    title: "Classes",
    user: req.session.user,
  });
});
// router.get("/cart", (req, res, next) => {
//   const 
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


router.get("/cart", (req, res, next) => {
  res.render("cart", {
    title: "Cart",
    user: req.session.user,
  });
});

router.get("/application", (req, res, next) => {
  res.render("application", {
    title: "Application",
    user: req.session.user,
  });
});

module.exports = router;
