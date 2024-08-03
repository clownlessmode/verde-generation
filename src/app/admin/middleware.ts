// app/admin/middleware.js
import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  console.log("Middleware работает!");
  return NextResponse.next();
}
