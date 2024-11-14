import { NextRequest, NextResponse } from "next/server";
import { updateSession } from "@/utils/supabase/middleware";

export async function middleware(request: NextRequest) {
  const { user, supabaseResponse } = await updateSession(request);

  const requestedPath = request.nextUrl.pathname;

  const isLoginPage = requestedPath.includes("/login");
  if (isLoginPage && !!user)
    return NextResponse.redirect(new URL("/", request.url));

  if (!user && !isLoginPage)
    return NextResponse.redirect(new URL("/login", request.url));

  return supabaseResponse;
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)",
  ],
};
