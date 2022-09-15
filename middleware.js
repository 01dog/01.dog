// vercel middleware
import { next } from '@vercel/edge';


export const config = {
    // only add pw to this page
    matcher: '/rfn'
}

export default function middleware(request) {
    const auth = request.headers.get("Authorization")

    /* TODO: btoa should not be used here and should be replaced with something like
    Buffer.from(str, 'base64') and buf.toString('base64). however...
    Buffer.from() isn't encoding the env variable correctly, and i dont know why
    for now, i'll leave it since this (hopefully) won't always need auth, but this should
    be addressed at some point.**/
    if (auth !== `Basic ${btoa(process.env.RFN_LOGIN)}`) {
        return new Response("Not authorized", {
            status: 401,
            headers: {
                "WWW-Authenticate":
                    'Basic realm="User Visible Realm", charset="UTF-8"',
            }
        })
    }
    
    return next(); // no args returns 200 OK
}