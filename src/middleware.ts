import { NextRequest, NextResponse } from "next/server";
import { updateSession } from "@/utils/supabase/middleware";

const masterOnlyRoutes = ["/mishistorias"];

const playerOnlyRoutes = ["/dashboard/mispersonajes"];

export async function middleware(request: NextRequest) {
  const { user, supabaseResponse, token } = await updateSession(request);

  const requestedPath = request.nextUrl.pathname;

  if (!!user && (requestedPath === "/login" || requestedPath === "/"))
    return NextResponse.redirect(new URL("/dashboard", request.url));

  if (!user && requestedPath !== "/login")
    return NextResponse.redirect(new URL("/login", request.url));

  if (token && token.fabulaRole === "dm" && isNotValidMasterPath(requestedPath))
    return NextResponse.redirect(new URL("/dashboard", request.url));

  if (
    token &&
    token.fabulaRole === "player" &&
    isNotValidPlayerPath(requestedPath)
  )
    return NextResponse.redirect(new URL("/dashboard/", request.url));

  return supabaseResponse;
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)",
  ],
};

const isNotValidMasterPath = (path: string) => {
  return playerOnlyRoutes.some((route) => path.includes(route));
};

const isNotValidPlayerPath = (path: string) => {
  return masterOnlyRoutes.some((route) => path.includes(route));
};
