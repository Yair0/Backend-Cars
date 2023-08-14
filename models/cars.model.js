const knex = require("../database/connection");

const all = () => knex("cars");

const addCar = (payload) =>
  knex("cars")
    .insert(payload)
    .then((ids) => ({ id: ids[0] }));

module.exports = {
  all,
  addCar,
};
