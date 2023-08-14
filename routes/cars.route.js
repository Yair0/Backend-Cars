const router = require("express").Router();
const CarsController = require("../controllers/cars.controller");

router.get("/cars", CarsController.getAllCars);
router.post("/cars", CarsController.addCar);

module.exports = router;
