let db = require("../db/queries");
var express = require('express');
var router = express.Router();
const { loginRequired } = require("../auth/helpers");
const passport = require("../auth/local");

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post("/new", db.createUser)

router.post("/login", passport.authenticate("local"), (req, res) => {
  res.json(req.user);
});

router.post("/addimage", loginRequired, db.addImage)

router.get("/getcurrentuser", loginRequired, db.getSingleUser)

router.get("/getsingleuserimages", loginRequired, db.getSingleUserImages)

router.get("/logout", db.logoutUser)

module.exports = router;
