import { dbConnect } from "@/lib/mongodb";
import User from "@/models/User";
import bcrypt from "bcryptjs";

export default async function handler(req, res) {
  if (req.method !== "POST") return res.status(405).end();
  const { name, email, password } = req.body;
  try {
    await dbConnect();
    const exists = await User.findOne({ email });
    if (exists) return res.status(400).json({ message: "Email already used" });
    const passwordHash = await bcrypt.hash(password, 10);
    const user = await User.create({ name, email, passwordHash, role: "user" });
    res.json({ ok: true, user: { id: user._id, name: user.name, role: user.role } });
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
}
