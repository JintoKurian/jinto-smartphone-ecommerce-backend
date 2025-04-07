const express = require("express");
const {
  createOrder,
  getUserOrders,
  getAllOrders,
} = require("../controllers/orderController");

const router = express.Router();

// POST place a new order
router.post("/", createOrder);

// GET all orders of a specific user
router.get("/user/:userId", getUserOrders);

// GET all orders (admin use case)
router.get("/", getAllOrders);

module.exports = router;
