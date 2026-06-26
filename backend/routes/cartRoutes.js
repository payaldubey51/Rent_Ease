import express from "express";
import Cart from "../models/Cart.js";

const router = express.Router();


// ➕ ADD TO CART
router.post("/", async (req, res) => {
  try {
    const { userId, productId, name, price, deposit, img } = req.body;

    if (!userId || !name) {
      return res.status(400).json({ message: "Missing required fields" });
    }

    const item = await Cart.create({
      userId,
      productId,
      name,
      price,
      deposit,
      img,
    });
console.log('text')
    res.status(201).json(item);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});


// 📥 GET USER CART
router.get("/:userId", async (req, res) => {
  try {
    const cart = await Cart.find({ userId: req.params.userId });

    res.status(200).json(cart);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});


// ❌ DELETE ITEM
router.delete("/:id", async (req, res) => {
  try {
    const deleted = await Cart.findByIdAndDelete(req.params.id);

    if (!deleted) {
      return res.status(404).json({ message: "Item not found" });
    }

    res.status(200).json({ message: "Item removed successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

export default router;