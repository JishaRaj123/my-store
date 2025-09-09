import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema({
  name: { type: String, required: true },
  category: String,
  price: { type: Number, required: true },
  image: String,
  stock: { type: Number, default: 10 }, // inventory
}, { timestamps: true });

export default mongoose.models.Product || mongoose.model("Product", ProductSchema);
