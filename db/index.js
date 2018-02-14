var pgp = require("pg-promise")({});
var connectionString = "postgres://localhost/insta";
var db = pgp(connectionString);

module.exports = db;
