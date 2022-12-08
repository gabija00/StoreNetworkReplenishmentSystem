const authJwt = require("./authJwt");
const verifySignUp = require("./verifySignUp");
const db = require("../config/db.config");

module.exports = {
  authJwt,
  verifySignUp
};
