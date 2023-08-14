const Cars = require("../models/cars.model");

const getAllCars = async (_, res) => {
  try {
    console.info({ action: "Fetching all cars from DB" });
    const cars = await Cars.all();
    return res.status(200).json({ cars });
  } catch (error) {
    console.error({ error });
    return res.status(500).json({ error: "There are no cars available" });
  }
};

const addCar = async (req, res) => {
  try {
    console.info({ action: `Adding ${req.body.model} to DB` });
    const carId = await Cars.addCar(req.body);
    return res.status(201).json(carId);
  } catch (error) {
    console.error({ error });
    return res
      .status(500)
      .json({ error: "There was an error while saving car" });
  }
};

module.exports = { getAllCars, addCar };
