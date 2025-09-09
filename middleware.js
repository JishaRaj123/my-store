// middleware.js
import { NextResponse } from "next/server";
import { jwtVerify } from "jose";

const SECRET = new TextEncoder().encode(process.env.JWT_SECRET);

export async function middleware(req) {
  const { pathname } = req.nextUrl;
  if (!pathname.startsWith("/admin")) return NextResponse.next();

  const token = req.cookies.get("token")?.value;
  if (!token) return NextResponse.redirect(new URL("/login", req.url));

  try {
    const { payload } = await jwtVerify(token, SECRET);
    if (payload.role !== "admin") throw new Error("Not admin");
    return NextResponse.next();
  } catch {
    return NextResponse.redirect(new URL("/login", req.url));
  }
}

export const config = { matcher: ["/admin/:path*"] };
