import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { auth } from './auth';
 
// This function can be marked `async` if using `await` inside
export  async function middleware(request: NextRequest) {
    const session = await auth()
    if(session?.user.role !== "admin"){
        return NextResponse.redirect(new URL('/', request.url))
    }
    return NextResponse.next();
}
export const config = {
    matcher: '/dashboard/:path*',
}