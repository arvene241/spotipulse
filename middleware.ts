export { default } from "next-auth/middleware"

export const config = { matcher: ["/", "/tracks", "/recent", "/artists", "/playlist", "/artist", "/track"] }