import { NextResponse } from "next/server";
import { useSelector } from "react-redux";

export function Middleware(request) {
    const user = useSelector((state) => state.auth.user)
    console.log

    if (!user) {
        return NextResponse.redirect(
            new URL('/login', request.url)
        )
    }
        return NextResponse.next()
}
export const config = {
    matcher: ['/admin/:path*']
    }
