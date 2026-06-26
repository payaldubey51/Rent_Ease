import mongoose from "mongoose";

const inventorySchema =
  new mongoose.Schema(
    {
      productId: {
        type:
          mongoose.Schema.Types.ObjectId,
        ref: "Product",
      },

      totalStock: Number,

      availableStock: Number,

      rentedStock: Number,

      maintenanceStock: Number,
    },
    {
      timestamps: true,
    }
  );

export default mongoose.model(
  "Inventory",
  inventorySchema
);