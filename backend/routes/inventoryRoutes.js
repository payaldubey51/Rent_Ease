import express from "express";
import Inventory from "../models/Inventory.js";

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const inventory =
      await Inventory.find()
        .populate("productId");

    res.json(inventory);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
});

router.post("/", async (req, res) => {
  try {
    const item =
      await Inventory.create(
        req.body
      );

    res.status(201).json(item);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
});

export default router;