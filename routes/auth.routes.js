const router = require("express").Router();

// ℹ️ Handles password encryption
const bcrypt = require("bcrypt");
const mongoose = require("mongoose");

// How many rounds should bcrypt run the salt (default [10 - 12 rounds])
const saltRounds = 10;

// Require the User model in order to interact with the database
const User = require("../models/User.model");
const Location = require("../models/Location.model");
const Trip = require("../models/Trip.model");
const Ticket = require("../models/Ticket.model");

// Require necessary (isLoggedOut and isLiggedIn) middleware in order to control access to specific routes
const isLoggedOut = require("../middleware/isLoggedOut");
const isLoggedIn = require("../middleware/isLoggedIn");

const fileUploader = require("../config/cloudinary.config");

router.get("/signup", isLoggedOut, (req, res) => {
  if (req.session.user) {
    return res.redirect("/");
  }
  res.render("auth/signup");
});

router.post("/signup", isLoggedOut, (req, res) => {
  const { pseudonyme, password, email } = req.body;
  if (!email) {
    return res.status(400).render("auth/signup", {
      errorMessage: "Veuillez rentrer votre mail",
    });
  }

  if (password.length < 8) {
    return res.status(400).render("auth/signup", {
      errorMessage: "Votre mot de passe doit comporter au minimum 8 caractères",
    });
  }

  if (pseudonyme.length < 1) {
    return res.status(400).render("auth/signup", {
      errorMessage: "Veuillez rentrer un pseudonyme",
    });
  }

  //   ! This use case is using a regular expression to control for special characters and min length
  /*
  const regex = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/;

  if (!regex.test(password)) {
    return res.status(400).render("signup", {
      errorMessage:
        "Password needs to have at least 8 chars and must contain at least one number, one lowercase and one uppercase letter.",
    });
  }
  */

  // Search the database for a user with the username submitted in the form
  User.findOne({ email }).then((found) => {
    // If the user is found, send the message username is taken
    if (found) {
      return res
        .status(400)
        .render("auth.signup", { errorMessage: "Email deja utilisé" });
    }

    // if user is not found, create a new user - start with hashing the password
    return bcrypt
      .genSalt(saltRounds)
      .then((salt) => bcrypt.hash(password, salt))
      .then((hashedPassword) => {
        // Create a user and save it in the database
        return User.create({
          pseudonyme,
          email,
          password: hashedPassword,
        });
      })
      .then((user) => {
        // Bind the user to the session object
        req.session.user = user;
        res.redirect("/");
      })
      .catch((error) => {
        if (error instanceof mongoose.Error.ValidationError) {
          return res
            .status(400)
            .render("auth/signup", { errorMessage: error.message });
        }
        if (error.code === 11000) {
          return res.status(400).render("auth/signup", {
            errorMessage: "L'adresse email est deja utilisé",
          });
        }
        return res
          .status(500)
          .render("auth/signup", { errorMessage: error.message });
      });
  });
});

router.get("/login", isLoggedOut, (req, res) => {
  if (req.session.user) {
    return res.redirect("/");
  }
  res.render("auth/login");
});

router.post("/login", isLoggedOut, (req, res, next) => {
  const { email, password } = req.body;

  if (!email) {
    return res.status(400).render("auth/login", {
      errorMessage: "Veuillez rentrer votre mail",
    });
  }

  // Here we use the same logic as above
  // - either length based parameters or we check the strength of a password
  if (password.length < 8) {
    return res.status(400).render("auth/login", {
      errorMessage: "Votre mot de passe n'a pas suffisement de caractères",
    });
  }

  // Search the database for a user with the username submitted in the form
  User.findOne({ email })
    .then((user) => {
      // If the user isn't found, send the message that user provided wrong credentials
      if (!user) {
        return res.status(400).render("auth/login", {
          errorMessage: "Informations incorrectes",
        });
      }

      // If user is found based on the username, check if the in putted password matches the one saved in the database
      bcrypt.compare(password, user.password).then((isSamePassword) => {
        if (!isSamePassword) {
          return res.status(400).render("auth/login", {
            errorMessage: "Informations incorrectes",
          });
        }
        req.session.user = user;
        // req.session.user = user._id; // ! better and safer but in this case we saving the entire user object
        return res.redirect("/");
      });
    })

    .catch((err) => {
      // in this case we are sending the error handling to the error handling middleware that is defined in the error handling file
      // you can just as easily run the res.status that is commented out below
      next(err);
      // return res.status(500).render("login", { errorMessage: err.message });
    });
});

router.get("/logout", isLoggedIn, (req, res) => {
  req.session.user = null
    res.redirect("/");
});

router.get("/payment", (req, res) => {
  res.render("auth/payment",{
    title: "Paiement",
    user: req.session.user,
    cart: req.session.cart
  });
});

router.post("/payment", (req, res) => {
  if (!req.session.user || !req.session.cart) {
    return res.redirect("/");
  }
  const { cardNumber, cryptogramme, expireDate } = req.body;

  if (cardNumber.length != 16) {
    return res.status(400).render("auth/payment", {
      title: "Paiement",
      user: req.session.user,
      cart: req.session.cart,
      errorMessage: "Votre n° de carte doit comporter 16 caractères",
    });
  } else if (cryptogramme.length != 3) {
    return res.status(400).render("auth/payment", {
      title: "Paiement",
      user: req.session.user,
      cart: req.session.cart,
      errorMessage: "Votre cryptogramme doit comporter 3 caractères",
    });
  } else if (!expireDate) {
    return res.status(400).render("auth/payment", {
      title: "Paiement",
      user: req.session.user,
      cart: req.session.cart,
      errorMessage: "Veuillez renseigner la date d'expiration de votre carte",
    });
  } else {
      const cart = req.session.cart
      Ticket.create({
        trip_id: cart.trip_id,
        user_id: req.session.user._id,
        passengers: cart.passengers,
        bags: cart.bags,
        price: {
          value: cart.price.value
        }
      })
      .then(()=>{
        req.session.cart = null
        res.redirect("/auth/reservations");
      })
      .catch(err => next(err))
  }
});

router.get("/profile", (req, res, next) => {
  if (!req.session.user) {
    return res.redirect("/");
  }
  res.render("auth/profile", {
    title: "Profil",
    user: req.session.user,
  });
});

router.post("/profile", fileUploader.single("avatarUrl"), (req, res, next) => {
  const { pseudonyme, email, lastName, firstName, mobile, sexe, zone, zip, department, bloodGroup, avatarUrl } = req.body

  let imageFile;
  if (req.file) {
    // Si modification d'image, met le nouveau lien
    imageFile = req.file.path;
  } else {
    // Sinon garde le lien de l'image actuel
    imageFile = avatarUrl;
  }
  User.findByIdAndUpdate(req.session.user._id, {
    //Met à jour dans la DB les informations
    pseudonyme,
    email,
    lastName,
    firstName,
    mobile,
    sexe,
    adress: {
      zone,
      zip,
      department,
    },
    bloodGroup,
    avatarUrl: imageFile,
  })
    .then(() => {
      User.findOne({ email })
        .then((DataFromDB) => {
          // Met à jour dans le client les informations de la DB et affiche un message sur le client
          req.session.user = DataFromDB;
          res.render("auth/profile", {
            title: "Profil",
            user: req.session.user,
            information: "Profil mis à jour",
          });
        })
        .catch((err) => next(err));
    })
    .catch((err) => next(err));
});

router.get("/reservations", (req, res, next) => {
  if (!req.session.user) {
    return res.redirect("/");
  }
  Ticket.find({user_id : req.session.user._id})
  //.populate("user_id", "_id") // Recupère uniquement le _id dans le user_id (pas besoin de recuperer d'autres infos)
  .populate({
    path: 'trip_id', //Populate le trip_id
    populate: { path: 'from' } // Suivi de from qui se situe dans l'object trip_id
  })
  .populate({
    path: 'trip_id',
    populate: { path: 'to' }
  })
  .then(ticketsFromDB =>{
    res.render("auth/reservations", {
      title: "Réservations",
      user: req.session.user,
      tickets: ticketsFromDB
    });
  })
  .catch(err => next(err))
});

router.get("/addtrip", (req, res, next) => {
  if (!req.session.user.admin) {
    return res.redirect("/");
  }
  Location.find()
  .then(locationFromDB => {
    res.render("auth/addTrip", {
      title: "Ajout de voyage",
      user: req.session.user,
      planets: locationFromDB
    });
  })
  .catch(err => next(err))
});

router.post("/addtrip", (req, res, next) => {
  if (!req.session.user.admin) {
    return res.redirect("/");
  }
  const { from, to, date, arrived, price, classe } = req.body

  if (from === to){
    return Location.find()
   .then(locationFromDB => {
     res.render("auth/addTrip", {
       title: "Ajout de voyage",
       user: req.session.user,
       planets: locationFromDB,
       information: "La planete de depart et d'arrivée sont les memes, veuillez changer l'une des valeurs",
       data : {
        from,
        to,
        date,
        arrived,
        price,
        classe
       }
     });
   })
  }

  if(!date || !arrived || !price){
    return Location.find()
   .then(locationFromDB => {
     res.render("auth/addTrip", {
       title: "Ajout de voyage",
       user: req.session.user,
       planets: locationFromDB,
       information: "Veuillez completer le voyage",
       data : {
        from,
        to,
        date,
        arrived,
        price,
        classe
       }
     });
   })
 }

  Trip.create({
    from,
    to,
    date,
    arrived,
    base_price: 
        {
        value: price
        },
    class: classe
  })

  Location.find()
  .then(locationFromDB => {
    res.render("auth/addTrip", {
      title: "Ajout de voyage",
      user: req.session.user,
      planets: locationFromDB,
      information: "Voyage ajouté avec succès"
    });
  })
  .catch(err => next(err))
});

module.exports = router;
