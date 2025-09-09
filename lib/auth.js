import jwt from "jsonwebtoken";

export function requireAuth(req) {
  const { token } = req.cookies || {};
  if (!token) return null;
  try {
    return jwt.verify(token, process.env.JWT_SECRET); // { uid, role, name }
  } catch {
    return null;
  }
}

export function requireAdmin(req) {
  const user = requireAuth(req);
  if (!user || user.role !== "admin") return null;
  return user;
}
