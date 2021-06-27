const mongoose = require("mongoose");
const { Schema } = mongoose;

const OrderSchema = new Schema({
  OrderId: { type: String, required: true },
  CustomerName: { type: String, required: false },
});

module.exports = mongoose.model("order", OrderSchema);
