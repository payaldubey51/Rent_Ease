import express from "express";
import Rental from "../models/Rental.js";

const router = express.Router();

// GET ALL RENTALS
router.get("/", async (req, res) => {
  try {
    const rentals = await Rental.find()
      .populate("user")
      .populate("product");

    res.json(rentals);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
});

// CREATE RENTAL
router.post("/", async (req, res) => {
  try {
    const rental = await Rental.create(req.body);

    res.status(201).json(rental);
  } catch (error) {
    res.status(400).json({
      message: error.message,
    });
  }
});

// UPDATE RENTAL
router.put("/:id", async (req, res) => {
  try {
    const rental = await Rental.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    res.json(rental);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
});

// DELETE RENTAL
router.delete("/:id", async (req, res) => {
  try {
    await Rental.findByIdAndDelete(req.params.id);

    res.json({
      message: "Rental deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
});

export default router;