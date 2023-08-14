const knex = require("knex");
const config = require("../knexfile.js");

if (process.env.NODE_ENV === "test") {
  module.exports = knex(config.test);
} else if (process.env.NODE_ENV === "dev") {
  module.exports = knex(config.development);
}
