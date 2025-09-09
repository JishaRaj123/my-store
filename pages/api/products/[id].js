import { dbConnect } from "@/lib/mongodb";
import Product from "@/models/Product";
import { requireAdmin } from "@/lib/auth";

export default async function handler(req, res) {
  await dbConnect();
  const { id } = req.query;

  if (req.method === "PUT") {
    const admin = requireAdmin(req);
    if (!admin) return res.status(401).json({ message: "Admin only" });
    const updated = await Product.findByIdAndUpdate(id, req.body, { new: true });
    return res.json(updated);
  }

  if (req.method === "DELETE") {
    const admin = requireAdmin(req);
    if (!admin) return res.status(401).json({ message: "Admin only" });
    await Product.findByIdAndDelete(id);
    return res.json({ ok: true });
  }

  res.status(405).end();
}
