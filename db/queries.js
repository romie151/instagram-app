const db = require("./index");

const authHelpers = require("../auth/helpers");
const passport = require("../auth/local");

//gets all info for a single user 
function getSingleUser(req, res, next) {
  db
    .any("SELECT * FROM users JOIN images ON users.id = images.user_id WHERE username = ${username}", req.user)
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

//gets all img urls for all users
function getAllUserImages(req, res, next) {
  db
    .any("SELECT img_url FROM users JOIN images ON users.id = images.user_id")
    .then(function(data) {
      res.status(200).json({
        status: "success",
        data: data,
        message: "Fetched all images for all users"
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
        message: "Fetched all images for one user"
      });
    })
    .catch(function(err) {
      return next(err);
    });
}

function addImage(req, res, next) { 
  db
    .none("INSERT INTO images (img_url, user_ID) VALUES (${img_url}, ${user_id})", 
    { img_url: req.body.url, user_id: req.body.id })
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
    .none("UPDATE images SET img_likes = array_append(img_likes, ${username}) WHERE id=${img_id}", 
    { username: req.body.username, img_id: req.body.img_id })
    // [[req.body.username], req.body.img_id])
    .then(function() {
      res.status(200).json({
        status: "success",
        message: "Added one like to image"
      });
    })
    .catch(function(err) {
      console.log(err)
      return next(err);
    });
}

function addFollower(req, res, next) { 
  db
    .none("UPDATE users SET user_followers = array_cat(user_followers, '${username}') WHERE user_id= ${id}", 
    { username: req.body.username, id: req.body.id })
    .then(function(data) {
      res.status(200).json({
        status: "success",
        data: data,
        message: "Added one follower"
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
  console.log('createuser')
  if(req.body.password.length <= 6) { 
    res.status(200).json({ 
      message: `password must be longer than 6 characters`
    })
    return
  }
  const hash = authHelpers.createHash(req.body.password);
  console.log('hash', hash)
  console.log('req.body.username',req.body.username)
  db
    .none(
      "INSERT INTO users (username, password_digest, full_name, email ) VALUES (${username}, ${password}, ${full_name}, ${email} )",
      { username: req.body.username, password: hash, full_name: req.body.full_name, email: req.body.email }
    )
    .then(() => {
      res.status(200).json({
        message: `created user: ${req.body.username}`
      })
    })
    .catch(err => {
      console.log(err);
      res.status(500).send("error creating user");
    });
}

module.exports = {
getSingleUser: getSingleUser,
getAllUserImages: getAllUserImages,
getSingleUserImages: getSingleUserImages, 
addImage: addImage, 
addLike: addLike, 
addFollower: addFollower, 
loginUser: loginUser, 
logoutUser: logoutUser, 
createUser: createUser
}; 