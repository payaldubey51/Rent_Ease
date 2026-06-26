import express from "express";
import Order from "../models/Order.js";
import Cart from "../models/Cart.js";

const router = express.Router();


// PLACE ORDER
router.post("/", async (req, res) => {
  try {
    const { userId, address, rentDuration } = req.body;

    const cartItems = await Cart.find({ userId }).populate("productId");

    let total = 0;

    const products = cartItems.map((item) => {
      total += item.productId.price;

      return {
        productId: item.productId._id,
        quantity: item.quantity,
      };
    });

    const order = await Order.create({
      userId,
      products,
      address,
      rentDuration,
      totalAmount: total,
    });

    // clear cart after order
    await Cart.deleteMany({ userId });

    res.status(201).json(order);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});


// GET USER ORDERS (MY RENTALS)
router.get("/:userId", async (req, res) => {
  try {
    const orders = await Order.find({ userId: req.params.userId }).populate(
      "products.productId"
    );

    res.json(orders);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

export default router;