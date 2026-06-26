const mongoose = require("mongoose");

const maintenanceSchema =
  new mongoose.Schema(
    {
      userId: String,

      productName: String,

      issueType: String,

      description: String,

      status: {
        type: String,
        default: "Pending",
      },
    },
    {
      timestamps: true,
    }
  );

module.exports =
  mongoose.model(
    "Maintenance",
    maintenanceSchema
  );