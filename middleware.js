import { NextResponse } from 'next/server';

export function middleware(request) {
  const { pathname } = request.nextUrl;

  // Check if user has visited before using cookie
  const hasVisited = request.cookies.get('region_selected');

  // Redirect root path to landing page only if first visit
  if (pathname === '/' && !hasVisited) {
    return NextResponse.redirect(new URL('/landing', request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - public folder
     * - admin (PayloadCMS admin panel)
     */
    '/((?!api|_next/static|_next/image|favicon.ico|admin|.*\\..*|public).*)',
  ],
};
