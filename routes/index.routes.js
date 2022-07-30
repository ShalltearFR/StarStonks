const Ticket = require("../models/Ticket.model");
const Trip = require("../models/Trip.model");

const router = require("express").Router();

/* GET home page */
router.get("/", (req, res, next) => {
  res.render("homepage", {
    title: "Home",
    user: req.session.user,
  });
});

router.get("/results", (req, res, next) => {
  res.render("results", {
    title: "Trajets suggérés",
    user: req.session.user,
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


module.exports = router;
