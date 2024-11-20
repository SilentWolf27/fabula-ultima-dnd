import { NextRequest, NextResponse } from "next/server";
import { updateSession } from "@/utils/supabase/middleware";

export async function middleware(request: NextRequest) {
  const { user, supabaseResponse, token } = await updateSession(request);

  const requestedPath = request.nextUrl.pathname;

  if (!!user && (requestedPath === "/login" || requestedPath === "/"))
    return NextResponse.redirect(new URL("/dashboard", request.url));

  if (!user && requestedPath !== "/login")
    return NextResponse.redirect(new URL("/login", request.url));

  return supabaseResponse;
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)",
  ],
};
