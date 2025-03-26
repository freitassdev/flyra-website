import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const protectedPages = ["/blog/admin/new-post", "/blog/admin/edit-post"];

export async function middleware(req: NextRequest) {
  const { pathname, origin } = req.nextUrl;
  const isProtectedPage = protectedPages.some((page) =>
    pathname.startsWith(page),
  );
  const authToken = req.cookies.get("authToken");
  const isValidUser = authToken?.value === process.env.AUTH_TOKEN; // TEMPORARIO
  if (isValidUser) {
    return NextResponse.next();
  } else {
    if (!isProtectedPage) {
      return NextResponse.next();
    }

    const url = new URL(`/`, origin);
    return NextResponse.redirect(url);
  }
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico|search.json).*)"],
};
