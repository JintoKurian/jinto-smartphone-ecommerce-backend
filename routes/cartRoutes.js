const express = require("express");
const verifyToken = require("../middleware/authMiddleware.js");


const {
  addToCart,
  getUserCart,
  updateCartQuantity,
  removeFromCart,
} = require('../controllers/cartController.js');


const router = express.Router();

router.post('/add', verifyToken, addToCart);
router.get('/user/:userId', verifyToken, getUserCart);
router.put('/update/:cartId', verifyToken, updateCartQuantity);
router.delete('/remove/:cartId', verifyToken, removeFromCart);


module.exports = router;