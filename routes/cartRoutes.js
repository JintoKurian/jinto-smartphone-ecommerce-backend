const express = require("express");


const {
    addToCart,
    getUserCart,
    updateCartQuantity,
    removeFromCart,
  } = require('../controllers/cartController.js');

  
  const router = express.Router();

  router.post('/add', addToCart);
  router.get('/user/:userId', getUserCart);
  router.put('/update/:cartId', updateCartQuantity);
  router.delete('/remove/:cartId', removeFromCart);


  module.exports =router;