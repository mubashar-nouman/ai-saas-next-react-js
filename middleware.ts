// middleware.js
import { NextResponse } from 'next/server';

// Define routes that need protection
const protectedPaths = ['/dashboard', '/profile', '/tools'];

export default function middleware(req: { cookies: { get: (arg0: string) => any; }; nextUrl: { pathname: string; }; url: string | URL | undefined; }) {
  const token = req.cookies.get('token'); // The name should match your backend cookie name

  if (protectedPaths.some(path => req.nextUrl.pathname.startsWith(path))) {
    if (!token) {
      console.warn('Unauthorized access attempt to:', req.nextUrl.pathname);
      const loginUrl = new URL('/login', req.url);
      return NextResponse.redirect(loginUrl);
    }
  }

  return NextResponse.next();
}

// This will apply the middleware to all paths under /dashboard, /profile, and /tools
export const config = {
  matcher: ['/dashboard/:path*', '/profile/:path*', '/tools/:path*'],
};
