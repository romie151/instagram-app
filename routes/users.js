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

router.get("/getcurrentuser", loginRequired, db.getLoggedUser)

router.get("/getsingleuser/:username", loginRequired, db.getSingleUser)

router.get("/getsingleimageinfo/:img_id", db.getSingleImageInfo)

router.get("/getloggeduserimages", loginRequired, db.getLoggedUserImages) 

router.get("/getsingleuserimages/:username", db.getSingleUserImages)

router.post("/addimage", loginRequired, db.addImage)

router.post("/addcomment", loginRequired, db.addComment)

router.post("/removecomment", loginRequired, db.removeComment)

router.post("/adduserdescription", loginRequired, db.addUserDescription)

router.post("/addlike", loginRequired, db.addLike)

router.post("/removelike",loginRequired, db.removeLike)

router.post("/addfollow", loginRequired, db.addFollow)

router.post("/removefollow", loginRequired, db.removeFollow)

router.get("/logout", db.logoutUser)

module.exports = router;
