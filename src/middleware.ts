import { withAuth } from "next-auth/middleware";
import { NextResponse } from "next/server";

export default withAuth(
  function middleware(req) {
    const url = new URL(req.url);
    console.log("URL", url.pathname);
    if (url.pathname === `/u/${req.nextauth.token?.name}`) 
      return NextResponse.redirect(new URL("/dashboard", req.url));
  }
);

export const config = { 
  matcher: [
    "/dashboard/:page*"
  ] 
};