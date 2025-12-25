const router = require("express").Router();
const controller = require("../controllers/order.controller");

router.post("/checkout", controller.createOrder);

module.exports = router;
