import { NextRequest, NextResponse } from 'next/server'

export async function middleware(req, res) {
    const url = new URL(req.url, `http://${req.headers.host}`)
    const page = url.pathname
    const cookie = req.cookies.get('user')?.value

    console.log(page)
    if (!cookie && page != '/Login' && page != '/' /* && page != '/Register' */) {
        console.log('NO cookie')
        return NextResponse.redirect(new URL('/Login', req.url))

    } else {
        if (cookie && page == '/Login') {
            console.log('NO Login')
            return NextResponse.redirect(new URL('/', req.url))

        } else {
            const regex = /^[A-Z]/
            if (page != '/' && !regex.test(page.charAt(1))) {
                console.log('UPPERCASE')
                const formatted = "/" + page.charAt(1).toUpperCase() + page.slice(2).toLowerCase();

                console.log(`http://${url.host + formatted}`, formatted)
                return NextResponse.redirect(
                    new URL(`http://${url.host + formatted}`, req.url)
                )
            } else {
                console.log('Next')
                return NextResponse.next()
            }
        }
    }
}


export const config = {
    // matcher solution for public, api, assets and _next exclusion
    matcher: "/((?!api|static|.*\\..*|_next).*)",
  };
/* 
export const config = {
    matcher: [
        '/Etapa/:path*',
        '/Login/:path*',
        '/Register/:path*',
        '/Etapas/:path*',

        '/etapa/:path*',
        '/login/:path*',
        '/register/:path*',
        '/etapas/:path*'
    ]
} */
