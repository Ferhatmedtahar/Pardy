// import { NextRequest, NextResponse } from 'next/server'
// import { getUserFromToken } from './utils/authTools'
// import { COOKIE_NAME } from './utils/constants'

// export const middleware = async (req: NextRequest, res: NextResponse) => {
//   const token = req.cookies.get(COOKIE_NAME)
//   if (!token) return NextResponse.redirect('/signin')

//   try {
//     const user = await getUserFromToken(token)
//     if (!user) return NextResponse.redirect('/signin')
//     req.nextUrl.searchParams.set('userId', user.id)
//   } catch (error) {
//     console.error(error)
//     return NextResponse.redirect('/signin')
//   }
// }
//  !check if the cookie exist or not , no need to get the user in this case+ if the user trying to go to the home page redirect him to the dashboard page

import { NextRequest, NextResponse } from 'next/server'
import { COOKIE_NAME } from './utils/constants'

export function middleware(request: NextRequest) {
  if (request.nextUrl.pathname.startsWith('/dashboard')) {
    if (!request.cookies.has(COOKIE_NAME)) {
      return NextResponse.redirect(new URL('/signin', request.url))
    }
  }

  if (request.nextUrl.pathname === '/') {
    return NextResponse.redirect(new URL('/dashboard', request.url))
  }
}

export const config = {
  matcher: ['/dashboard/:path*', '/'],
}
