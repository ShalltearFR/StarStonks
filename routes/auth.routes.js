const router = require("express").Router();

// ℹ️ Handles password encryption
const bcrypt = require("bcrypt");
const mongoose = require("mongoose");

// How many rounds should bcrypt run the salt (default [10 - 12 rounds])
const saltRounds = 10;

// Require the User model in order to interact with the database
const User = require("../models/User.model");

// Require necessary (isLoggedOut and isLiggedIn) middleware in order to control access to specific routes
const isLoggedOut = require("../middleware/isLoggedOut");
const isLoggedIn = require("../middleware/isLoggedIn");

const fileUploader = require('../config/cloudinary.config');

router.get("/signup", isLoggedOut, (req, res) => {
  if (req.session.user) {
    return res.redirect("/");
  }
  res.render("auth/signup");
});

router.post("/signup", isLoggedOut, (req, res) => {
  const { pseudonyme, password, email } = req.body;

  console.log("test");
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
  req.session.destroy((err) => {
    if (err) {
      return res
        .status(500)
        .render("auth/logout", { errorMessage: err.message });
    }
    res.redirect("/");
  });
});

router.get("/payment", isLoggedOut, (req, res) => {
  if (!req.session.user) {
    return res.redirect("/");
  }
  res.render("auth/payment");
});

router.post("/payment", isLoggedOut, (req, res) => {
  const { cardNumber, cryptogramme, expireDate } = req.body;

  if (cardNumber.length != 16) {
    return res.status(400).render("auth/payment", {
      errorMessage: "Votre n° de carte doit comporter 16 caractères",
    });
  } else if (cryptogramme.length != 3) {
    return res.status(400).render("auth/payment", {
      errorMessage: "Votre cryptogramme doit comporter 3 caractères",
    });
  } else if (!expireDate) {
    return res.status(400).render("auth/payment", {
      errorMessage: "Veuillez renseigner la date d'expiration de votre carte",
    });
  } else {
    return res.redirect("/reservations");
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

  console.log(req.session.user)
});

router.post("/profile", fileUploader.single("avatarUrl"), (req, res, next) => { 
  const {pseudonyme, email, lastName, firstName, mobile, sexe, zone, zip, department, bloodGroup } = req.body

  console.log(req.body)
  User.findByIdAndUpdate(req.session.user._id, {
    pseudonyme,
    email,
    lastName,
    firstName, 
    mobile,
    sexe,
    adress :{
      zone,
      zip,
      department
    },
    bloodGroup
  })
  .then((updatedDataFromDB)=> {
    console.log("email =",updatedDataFromDB.email)
    const emailFromDB = req.body.email
    User.findOne({emailFromDB})
    .then(DataFromDB =>{
      console.log("DataFromDB", DataFromDB)
      req.session.destroy((err) => {
        if (err) {
          return res
            .status(500)
            .render("auth/logout", { errorMessage: err.message });
        }
        setTimeout(()=> req.session.user = DataFromDB, 500)
      })

      
      console.log("req =",req.session.user)
    })
    .catch(err => next(err))
    
  })
  .catch((err)=> next(err))
})

module.exports = router;
