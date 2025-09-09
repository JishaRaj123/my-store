import mongoose from "mongoose";

const OrderSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  items: [
    {
      productId: { type: mongoose.Schema.Types.ObjectId, ref: "Product" },
      name: String,
      price: Number,
      qty: Number
    }
  ],
  amount: Number,
  status: { type: String, enum: ["pending", "paid", "failed"], default: "pending" },
  stripeSessionId: String
}, { timestamps: true });

export default mongoose.models.Order || mongoose.model("Order", OrderSchema);
