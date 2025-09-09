import { dbConnect } from "@/lib/mongodb";
import User from "@/models/User";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import cookie from "cookie";

export default async function handler(req, res) {
  if (req.method !== "POST") return res.status(405).end();
  const { email, password } = req.body;
  try {
    await dbConnect();
    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ message: "Invalid credentials" });
    const ok = await bcrypt.compare(password, user.passwordHash);
    if (!ok) return res.status(400).json({ message: "Invalid credentials" });

    const token = jwt.sign(
      { uid: user._id, role: user.role, name: user.name },
        // { email, role: "tester" },
      process.env.JWT_SECRET,
      { expiresIn: "7d" }
    );
    
    res.setHeader("Set-Cookie", cookie.serialize("token", token, {
      httpOnly: true, secure: false, sameSite: "lax", path: "/",
      maxAge: 7 * 24 * 60 * 60
    }));

    res.json({ ok: true, user: { id: user._id, name: user.name, role: user.role } });
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
}
