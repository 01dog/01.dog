// vercel middleware
import { RFN_LOGIN } from "$env/static/private"
import { next } from '@vercel/edge';


export const config = {
    // only add pw to this page
    matcher: '/rfn'
}

export default function middleware(request) {
    const auth = request.headers.get("Authorization")

    if (auth !== `Basic ${btoa(RFN_LOGIN)}`) {
        return new Response("Not authorized", {
            status: 401,
            headers: {
                "WWW-Authenticate":
                    'Basic realm="User Visible Realm", charset="UTF-8"',
            }
        })
    }
    
    return next();
}