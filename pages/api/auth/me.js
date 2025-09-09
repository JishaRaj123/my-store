import jwt from "jsonwebtoken";

export default async function handler(req, res) {
  const { token } = req.cookies || {};
  if (!token) return res.json({ user: null });
  try {
    const user = jwt.verify(token, process.env.JWT_SECRET);
    res.json({ user });
  } catch {
    res.json({ user: null });
  }
}
