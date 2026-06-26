import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    category: String,
    price: Number,
    deposit: Number,
    img: String,
    description: String
  },
  { timestamps: true }
);

export default mongoose.model("Product", productSchema);