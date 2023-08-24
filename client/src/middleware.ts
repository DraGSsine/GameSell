import { NextResponse, NextRequest } from "next/server";
import { verifyAuth } from "./util/auth";

export async function middleware(request: NextRequest) {
  const accessToken = request.cookies.get("access-token")?.value;

  try {
    if (request.nextUrl.pathname.startsWith("/profile")) {
      if (!accessToken || !(await verifyAuth(accessToken))) {
        return NextResponse.redirect(
          new URL("/auth/login", request.nextUrl.origin).href
        );
      }
    } else if (request.nextUrl.pathname.startsWith("/auth")) {
      if (accessToken && (await verifyAuth(accessToken))) {
        return NextResponse.redirect(new URL("/", request.nextUrl.origin).href);
      }
    }
  } catch (error) {
    console.error("Error verifying access token:", error);
    return NextResponse.redirect(new URL("/", request.nextUrl.origin).href);
  }

  return NextResponse.next();
}
