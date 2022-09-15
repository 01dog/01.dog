/** @type {import('@sveltejs/kit').Handle} */
import { RFN_LOGIN } from "$env/static/private"

export async function handle({ event, resolve }) {
    const url = new URL(event.request.url);

    if (url.pathname.startsWith('/rfn')) {
        const auth = event.request.headers.get("Authorization");

        /* TODO: btoa should not be used here and should be replaced with something like
            Buffer.from(str, 'base64') and buf.toString('base64). however...
            Buffer.from() isn't encoding the env variable correctly, and i dont know why
            for now, i'll leave it since this isn't a permanent solution, but this should
            be addressed at some point.**/
        if (auth !== `Basic ${btoa(RFN_LOGIN)}`) {
            return new Response("Not authorized", {
                status: 401,
                headers: {
                    "WWW-Authenticate":
                        'Basic realm="User Visible Realm", charset="UTF-8"',
                }
            })
        }
    }
    
    // TODO: find a way to do this without disabling ssr?
    return resolve(event, {ssr: false});
}