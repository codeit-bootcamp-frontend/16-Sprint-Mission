import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const middleware = (req: NextRequest) => {
  const token = req.cookies.get("accessToken")?.value;
  const url = req.nextUrl.clone();
  const authPaths = ["/login", "/signup"];

  if (authPaths.some((path) => path.includes(url.pathname)) && token) {
    url.pathname = "/";
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
};

export const config = {
  matcher: ["/login", "/signup"],
};

export default middleware;
