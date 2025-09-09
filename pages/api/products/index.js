import { dbConnect } from "@/lib/mongodb";
import Product from "@/models/Product";
import { requireAdmin } from "@/lib/auth";

export default async function handler(req, res) {
  await dbConnect();

  if (req.method === "GET") {
    const products = await Product.find().sort({ createdAt: -1 });
    return res.json(products);
  }

  if (req.method === "POST") {
    const admin = requireAdmin(req);
    if (!admin) return res.status(401).json({ message: "Admin only" });
    const p = await Product.create(req.body);
    return res.json(p);
  }

  res.status(405).end();
}
