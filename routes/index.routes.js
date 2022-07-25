const router = require("express").Router();

/* GET home page */
router.get("/", (req, res, next) => {
    res.render("homepage", {
      title: "Home",
      user: req.session.user
    });
});

router.get("/profile", (req, res, next) => {
  res.render("profile", {
    title: "Profile",
  });
});

router.get("/results", (req, res, next) => {
  res.render("results", {
    title: "Results",
  });
});

router.get("/classes", (req, res, next) => {
  res.render("classes", {
    title: "Classes",
  });
});

module.exports = router;
