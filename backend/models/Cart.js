import mongoose from "mongoose";

const cartSchema = new mongoose.Schema(
  {
    userId: String,
    productId: String,
    name: String,
    price: Number,
    deposit: Number,
    img: String,
  },
  { timestamps: true }
);

export default mongoose.model("Cart", cartSchema);