import { NextRequest, NextResponse } from 'next/server'

export async function middleware(request: NextRequest) {
  const response = NextResponse.next()
  
  // Don't track visits to admin routes or API routes
  if (
    request.nextUrl.pathname.startsWith('/admin') ||
    request.nextUrl.pathname.startsWith('/api/admin') ||
    request.nextUrl.pathname.startsWith('/') ||
    request.nextUrl.pathname === '/api/track-visit'
  ) {
    return response
  }
  
  // Track visit in the background
  try {
    const trackVisit = async () => {
      await fetch(`${request.nextUrl.origin}/api/track-visit`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      })
    }
    
    // Fire and forget - don't wait for response
    trackVisit().catch(console.error)
  } catch (error) {
    console.error('Error tracking visit:', error)
  }
  
  return response
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - public (public files)
     */
    '/((?!_next/static|_next/image|favicon.ico|public).*)',
  ],
}