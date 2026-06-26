import mongoose from "mongoose";

const orderSchema = new mongoose.Schema(
  {
    userId: String,

    products: [
      {
        productId: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Product",
        },
        quantity: { type: Number, default: 1 },
      },
    ],

    address: String,

    rentDuration: Number, // months

    totalAmount: Number,

    status: {
      type: String,
      default: "Active",
    },
  },
  { timestamps: true }
);

export default mongoose.model("Order", orderSchema);