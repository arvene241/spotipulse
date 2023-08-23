import NextAuth from "next-auth"
import SpotifyProvider from "next-auth/providers/spotify";

// persmissions to have access with different endpoints
const scopes = [
  "streaming",
  "user-read-private",
  "user-read-email",
  "user-modify-playback-state",
  "user-read-playback-state",
  "user-library-read",
  "user-library-modify",
  "user-read-recently-played",
  "user-top-read",
  "user-follow-read",
  "user-follow-modify",
  "playlist-read-private",
  "playlist-read-collaborative",
  "playlist-modify-public",
  "playlist-modify-private"
].join(",");

const params = {
  scope: scopes,
};

const LOGIN_URL =
  "https://accounts.spotify.com/authorize?" +
  new URLSearchParams(params).toString();

// refresh the access token
const refreshAccessToken = async (token: any) => {
  const params = new URLSearchParams();
  params.append("grant_type", "refresh_token");
  params.append("refresh_token", token.refreshToken);

  const response = await fetch("https://accounts.spotify.com/api/token", {
    method: "POST",
    headers: {
      Authorization:
        "Basic " + Buffer.from(process.env.SPOTIFY_CLIENT_ID + ":" + process.env.SPOTIFY_CLIENT_SECRET).toString("base64"),
    },
    body: params,
  });

  const data = await response.json();

  return {
    ...token,
    accessToken: data.access_token,
    accessTokenExpires: Date.now() + data.expires_in * 1000,
    refreshToken: data.refresh_token ?? token.refreshToken,
  }
}

const handler = NextAuth({
  providers: [
    SpotifyProvider({
      clientId: process.env.SPOTIFY_CLIENT_ID as string,
      clientSecret: process.env.SPOTIFY_CLIENT_SECRET as string,
      authorization: LOGIN_URL,
    })
  ],
  // save the token in the browser and make it encrypted
  secret: process.env.JWT_SECRET,
  // specify URLs to be used if you want to create custom sign in, sign out and error pages.
  pages: {
    signIn: "/signin",
  },
  // specify the callbacks to be used for each event
  callbacks: {
    async jwt({ token, account }) {
      // Persist the OAuth access_token and or the user id to the token right after signin
      // First time user sign in
      if (account) {
        token.accessToken = account.access_token
        token.refreshToken = account.refresh_token
        token.accessTokenExpires = account.expires_at
        return token
      }

      // if access token hasnt expired yet
      if (token.accessTokenExpires && Date.now() < Number(token.accessTokenExpires) * 1000) {
        return token;
      }

      // access token has expired, try to update it
      return await refreshAccessToken(token);
    },
    async session({ session, token, user }) {
      // Send properties to the client, like an access_token from a provider.
      session.accessToken = token.accessToken as string;
      return session;
    }
  }
})

export { handler as GET, handler as POST }