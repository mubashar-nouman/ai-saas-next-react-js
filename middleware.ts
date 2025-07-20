import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { jwtVerify } from 'jose';

export async function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;
  const token = req.cookies.get('token')?.value;

  let publicRoutes: string[] = [];

  // Public routes that don't require authentication - If token, then I allowed only root path to be accessible
  if(token){
    publicRoutes = ['/'];
  }
  else{
    publicRoutes = ['/login', '/signup', '/'];
  }
  
  // Check if current path is a public route
  if (publicRoutes.includes(pathname)) {
    return NextResponse.next();
  }

  // If no token and trying to access protected route, redirect to login
  if (!token) {
    return NextResponse.redirect(new URL('/login', req.url));
  }

  try {
    const secret = new TextEncoder().encode(process.env.JWT_SECRET);
    const { payload } = await jwtVerify(token, secret);
    const userRole = payload.role as string;

    // Role-based route access control with strict separation
    if (userRole === 'admin') {
      // Admins can only access /admin routes
      if (!pathname.startsWith('/admin')) {
        return NextResponse.redirect(new URL('/admin', req.url));
      }
    } else if (userRole === 'user') {
      // Users can only access /dashboard routes
      if (!pathname.startsWith('/dashboard')) {
        return NextResponse.redirect(new URL('/dashboard', req.url));
      }
    } else {
      // Invalid role, redirect to login
      return NextResponse.redirect(new URL('/login', req.url));
    }

    return NextResponse.next();
  } catch (err) {
    // Invalid token, redirect to login
    return NextResponse.redirect(new URL('/login', req.url));
  }
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
     */
    '/((?!api|_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)',
  ],
};
