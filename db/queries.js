const db = require("./index");

const authHelpers = require("../auth/helpers");
const passport = require("../auth/local");

//gets all info for a single user 
function getSingleUser(req, res, next) {
  db
    .any("select * from users join images on users.id = images.user_id where username = ${username}", req.user)
    .then(function(data) {
      res.status(200).json({
        status: "success",
        data: data,
        message: "Fetched one user"
      });
    })
    .catch(function(err) {
      return next(err);
    });
}

function getAllUserImages(req, res, next) {
  db
    .any("SELECT img_url FROM users JOIN images ON users.id = images.user_id")
    .then(function(data) {
      res.status(200).json({
        status: "success",
        data: data,
        message: "Fetched all user images"
      });
    })
    .catch(function(err) {
      return next(err);
    });
}
//gets all image urls for a single user
function getSingleUserImages(req, res, next) {
  db
    .any("SELECT img_url FROM users JOIN images ON users.id = images.user_id WHERE username = ${username}", req.user)
    .then(function(data) {
      res.status(200).json({
        status: "success",
        data: data,
        message: "Fetched one user's image"
      });
    })
    .catch(function(err) {
      return next(err);
    });
}

function addImage(req, res, next) { 
  db
    .one("INSERT INTO images (img_url, img_likes, user_ID) VALUES (${img_url}, ${img_likes}, ${user_id}", req.user)
    .then(function(data) {
      res.status(200).json({
        status: "success",
        data: data,
        message: "Added one image"
      });
    })
    .catch(function(err) {
      return next(err);
    });
}

function addLike(req, res, next) { 
  db
    .one("UPDATE images SET img_likes = array_cat(img_likes, '${username}') WHERE user_id= ${user_id}", req.user)
    .then(function(data) {
      res.status(200).json({
        status: "success",
        data: data,
        message: "Added one like"
      });
    })
    .catch(function(err) {
      return next(err);
    });
}

function addFollower(req, res, next) { 
  db
    .one("UPDATE images SET img_likes = array_cat(img_likes, '${username}') WHERE user_id= ${user_id}", req.user)
    .then(function(data) {
      res.status(200).json({
        status: "success",
        data: data,
        message: "Added one like"
      });
    })
    .catch(function(err) {
      return next(err);
    });
}

function loginUser(req, res, next) {
  passport.authenticate("local", {});
}

function logoutUser(req, res, next) {
  req.logout();
  res.status(200).send("log out success");
}

function createUser(req, res, next) {
  if(req.body.password.length <= 6) { 
    res.status(200).json({ 
      message: `password must be longer than 6 characters`
    })
    return
  }
  const hash = authHelpers.createHash(req.body.password);
  console.log("createuser hash: ", hash);
  db
    .none(
      "INSERT INTO users (username, password_digest, email) VALUES (${username}, ${password}, ${email})",
      { username: req.body.username, password: hash, email: req.body.email }
    )
    .then(() => {
      res.status(200).json({
        message: `created user: ${req.body.username}`
      }); 
      console.log('calling next ***')
      next()
    })
    .catch(err => {
      console.log(err);
      res.status(500).send("error creating user");
    });
}

module.exports = {
getSingleUser: getSingleUser,
getSingleUserImages: getSingleUserImages,  
loginUser: loginUser, 
logoutUser: logoutUser, 
createUser: createUser, 
addImage: addImage, 
addLike: addLike
}; 