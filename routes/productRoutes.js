const express = require("express");
const {
  getAllProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
} = require("../controllers/productController");
// const { insertSampleData } = require("../controllers/sampledataController");



const router = express.Router();

// GET all products
router.get("/", getAllProducts);

// GET product by ID
router.get("/:id", getProductById);

// POST create new product
router.post("/", createProduct);

// PUT update a product
router.put("/:id", updateProduct);

// DELETE a product
router.delete("/:id", deleteProduct);

// NEW ROUTE: Insert sample data
// router.post("/seed", insertSampleData);

module.exports = router;
