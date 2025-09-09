import { dbConnect } from "@/lib/mongodb";
import Category from "@/models/Category";
import { requireAdmin } from "@/lib/auth";

export default async function handler(req, res) {
  await dbConnect();

  if (req.method === "GET") {
    const cats = await Category.find().sort({ name: 1 });
    return res.json(cats);
  }

  if (req.method === "POST") {
    const admin = requireAdmin(req);
    if (!admin) return res.status(401).json({ message: "Admin only" });
    const c = await Category.create(req.body);
    return res.json(c);
  }

  res.status(405).end();
}
