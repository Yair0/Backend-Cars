/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async (knex) =>
  knex("cars")
    .del()
    .then(() =>
      knex("cars").insert([
        {
          id: 1,
          uuid: "JHk290Xj",
          make: "Ford",
          model: "F10",
          package: "Base",
          color: "Silver",
          year: 2010,
          category: "Truck",
          mileage: 120123,
          price: 1999900,
        },
        {
          id: 2,
          uuid: "fWl37Ia",
          make: "Toyota",
          model: "Camry",
          package: "SE",
          color: "White",
          year: 2019,
          category: "Sedan",
          mileage: 3999,
          price: 2899000,
        },
        {
          id: 3,
          uuid: "1i3xjRllc",
          make: "Toyota",
          model: "Rav4",
          package: "XSE",
          color: "Red",
          year: 2018,
          category: "SUV",
          mileage: 24001,
          price: 2275000,
        },
        {
          id: 4,
          uuid: "dku43920s",
          make: "Ford",
          model: "Bronco",
          package: "Badlands",
          color: "Bumt Orange",
          year: 2022,
          category: "SUV",
          mileage: 1,
          price: 4499000,
        },
      ])
    );
