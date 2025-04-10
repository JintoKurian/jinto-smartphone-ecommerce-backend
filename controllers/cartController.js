const Cart = require('../models/cartModel');



exports.addToCart = async(req, res) => {
  const { userId, productId } = req.body;

  if (userId !== req.user.id) {
      return res.status(403).json({ message: 'Unauthorized to add cart for this user' });
  }

  try {
      let cartItem = await Cart.findOne({ userId, productId });

      if (cartItem) {
          cartItem.quantity += 1;
          await cartItem.save();
          res.status(200).json({ message: 'Quantity Increased', cartItem });
      } else {
          const newCartItem = new Cart({ userId, productId });
          await newCartItem.save();
          res.status(201).json({ message: 'Item added to cart', newCartItem });
      }
  } catch (err) {
      res.status(500).json({ message: 'Failed to add to cart', error: err });
  }
}



exports.getUserCart = async(req, res) => {
  const { userId } = req.params;

  if (userId !== req.user.id) {
      return res.status(403).json({ message: 'Unauthorized to view cart' });
  }

  try {
      const cartItems = await Cart.find({ userId }).populate('productId');
      res.status(200).json(cartItems);
  } catch (err) {
      res.status(500).json({ message: 'Failed to get cart items', error: err });
  }
}


exports.updateCartQuantity = async (req, res) => {
  const { cartId } = req.params;
  const { quantity } = req.body;

  try {
      const cartItem = await Cart.findById(cartId);
      
      if (!cartItem) return res.status(404).json({ message: 'Cart item not found' });

      if (cartItem.userId.toString() !== req.user.id) {
          return res.status(403).json({ message: 'Unauthorized to update this item' });
      }

      cartItem.quantity = quantity;
      await cartItem.save();
      res.status(200).json(cartItem);
  } catch (err) {
      res.status(500).json({ message: 'Failed to update quantity', error: err });
  }
};


exports.removeFromCart = async (req, res) => {
  const { cartId } = req.params;

  try {
      const cartItem = await Cart.findById(cartId);

      if (!cartItem) return res.status(404).json({ message: 'Cart item not found' });

      if (cartItem.userId.toString() !== req.user.id) {
          return res.status(403).json({ message: 'Unauthorized to delete this item' });
      }

      await cartItem.deleteOne();
      res.status(200).json({ message: 'Item removed from cart' });
  } catch (err) {
      res.status(500).json({ message: 'Failed to remove item', error: err });
  }
};


























// exports.addToCart = async(req,res) => {
//     const { userId, productId } = req.body;

//     try{
//         let cartItem = await Cart.findOne({ userId, productId });

//         if(cartItem){
//             cartItem.quantity += 1;
//             await cartItem.save();
//             res.status(200).json({message: 'Quantity Increased', cartItem});
//         } else {
//             const newCartItem = new Cart({ userId, productId });
//             await newCartItem.save();
//             res.status(201).json({ message: 'Item added to cart', newCartItem});
//         }
//     } catch (err) {
//         res.status(500).json({message: 'Failed to add to cart', error: err});
//     }
// }


//Get all cart items for a user

// exports.getUserCart = async(req, res)=>{
//     const { userId } = req.params;

//     try{
//         const cartItems = await Cart.find({userId}).populate('productId');
//         res.status(200).json(cartItems);
//     } catch (err) {
//         res.status(500).json({message: 'Failed to get cart items', error: err});
//     }
// }

// Update Item quantity

// exports.updateCartQuantity = async (req, res) => {
//     const { cartId } = req.params;
//     const { quantity } = req.body;
  
//     try {
//       const updated = await Cart.findByIdAndUpdate(cartId, { quantity }, { new: true });
//       res.status(200).json(updated);
//     } catch (err) {
//       res.status(500).json({ message: 'Failed to update quantity', error: err });
//     }
//   };

  //Remove item from cart

  // exports.removeFromCart = async (req, res) => {
  //   const { cartId } = req.params;
  
  //   try {
  //     await Cart.findByIdAndDelete(cartId);
  //     res.status(200).json({ message: 'Item removed from cart'});
  //   } catch (err) {
  //     res.status(500).json({ message: 'Failed to remove item', error: err });
  //   }
  // };