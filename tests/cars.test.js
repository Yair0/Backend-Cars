const request = require("supertest");
const app = require("../app");
const knex = require("../database/connection");

beforeAll(async () => {
  await knex.migrate.rollback();
  await knex.migrate.latest();
  await knex.seed.run();
});

describe("Cars Endpoints", () => {
  it("should list 0 cars", async () => {
    const res = await request(app).get("/cars");
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty("cars");
    expect(res.body.cars.length).toEqual(4);
  });

  it("should add new car", async () => {
    const res = await request(app).post("/cars").send({
      uuid: "YuL100Om",
      make: "Mazda",
      model: "3",
      package: "Base",
      color: "Blue",
      year: 2022,
      category: "Hatchback",
      mileage: 600,
      price: 2500000,
    });
    expect(res.statusCode).toEqual(201);
    expect(res.body).toHaveProperty("id");
    expect(res.body.id).toEqual(5);
  });
});

afterAll(async () => {
  await knex.destroy();
});
