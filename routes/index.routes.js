const router = require("express").Router();

/* GET home page */
router.get("/", (req, res, next) => {
  res.render("homepage", {
    title: "Home"
  })
});

module.exports = router;
