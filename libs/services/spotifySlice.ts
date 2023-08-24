import { FollowingArtists, Playlists, SpotifyUser } from "@/types/types";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define a service using a base URL and expected endpoints
export const spotifyApi = createApi({
  reducerPath: "spotifyApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.spotify.com/v1",
    prepareHeaders: (headers, { getState }: any) => {
      console.log('state: ', getState());
      const token = getState().auth.accessToken;

      // If we have a token set in state, let's assume that we should be passing it.
      if (token) {
        headers.set("Authorization", `Bearer ${token}`);
      }
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getUser: builder.query<SpotifyUser, string>({
      query: () => "/me",
    }),
    getFollowing: builder.query<FollowingArtists, string>({
      query: () => "/me/following?type=artist",
    }),
    getRecentlyPlayed: builder.query({
      query: () => "/me/player/recently-played",
    }),
    getPlaylists: builder.query<Playlists, string>({
      query: () => "/me/playlists",
    }),
    getTopArtistsShort: builder.query({
      query: () => "/me/top/artists?limit=50&time_range=short_term",
    }),
    getTopArtistsMedium: builder.query({
      query: () => "/me/top/artists?limit=50&time_range=medium_term",
    }),
    getTopArtistsLong: builder.query({
      query: () => "/me/top/artists?limit=50&time_range=long_term",
    }),
    getTopTracksShort: builder.query({
      query: () => "/me/top/tracks?limit=50&time_range=short_term",
    }),
    getTopTracksMedium: builder.query({
      query: () => "/me/top/tracks?limit=50&time_range=medium_term",
    }),
    getTopTracksLong: builder.query({
      query: () => "/me/top/tracks?limit=50&time_range=long_term",
    }),
    getArtist: builder.query({
      query: (artistId) => `/artists/${artistId}`,
    }),
    doesUserFollowArtist: builder.query({
      query: (artistId) => `/me/following/contains?type=artist&ids=${artistId}`,
    }),
    doesUserFollowPlaylist: builder.query({
      query: ({ playlistId, userId }) => `/playlists/${playlistId}/followers/contains?ids=${userId}`,
    }),
    getRecommendationsForTracks: builder.query({
      query: ({ trackIds, limit }) => `/recommendations?limit=${limit}&seed_tracks=${trackIds}`,
    }),
  }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const {
  // Profile
  useGetUserQuery,
  useGetFollowingQuery,
  useGetRecentlyPlayedQuery,
  useGetPlaylistsQuery,

  // top artists
  useGetTopArtistsShortQuery,
  useGetTopArtistsMediumQuery,
  useGetTopArtistsLongQuery,

  // top tracks
  useGetTopTracksShortQuery,
  useGetTopTracksMediumQuery,
  useGetTopTracksLongQuery,

  // artists
  useGetArtistQuery,
  useDoesUserFollowArtistQuery,
  useDoesUserFollowPlaylistQuery,

  // tracks recommendations
  useGetRecommendationsForTracksQuery,
} = spotifyApi;