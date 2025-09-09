import cookie from "cookie";
export default function handler(req, res) {
  res.setHeader("Set-Cookie", cookie.serialize("token", "", {
    httpOnly: true, secure: false, sameSite: "lax", path: "/", maxAge: 0
  }));
  res.json({ ok: true });
}
