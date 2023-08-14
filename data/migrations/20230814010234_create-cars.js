/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = (knex) =>
  knex.schema.createTable("cars", (tbl) => {
    tbl.increments();
    tbl.text("uuid", 9).unique().notNullable();
    tbl.text("make", 128).notNullable();
    tbl.text("model", 128).notNullable();
    tbl.text("package", 128).notNullable();
    tbl.text("color", 128).notNullable();
    tbl.integer("year", 4).notNullable();
    tbl.text("category", 128).notNullable();
    tbl.integer("mileage", 7).notNullable();
    tbl.integer("price", 8).notNullable();
  });

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = (knex) => knex.schema.dropTableIfExists("cars");
