import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
  const cookie = req.cookies.get("admin");

  // Пропускаем проверку для /admin/login
  if (req.nextUrl.pathname === "/admin/login") {
    return NextResponse.next();
  }

  if (!cookie && req.nextUrl.pathname.startsWith("/admin")) {
    return NextResponse.redirect(new URL("/admin/login", req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: "/admin/:path*",
};
