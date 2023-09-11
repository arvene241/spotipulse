import { Artist, Artists, CurrentUser, Playlist, Playlists, RecentlyPlayed, TopTracks, TopArtists } from "@/types/types";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define a service using a base URL and expected endpoints
export const spotifyApi = createApi({
  reducerPath: "spotifyApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.spotify.com/v1",
    prepareHeaders: (headers, { getState }: any) => {
      const token = getState().auth.accessToken;

      // If we have a token set in state, let's assume that we should be passing it.
      if (token) {
        headers.set("Authorization", `Bearer ${token}`);
      } else {
      }
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getUser: builder.query<CurrentUser, string>({
      query: () => "/me",
    }),
    getFollowing: builder.query<Artists, string>({
      query: () => "/me/following?type=artist",
    }),
    getRecentlyPlayed: builder.query<RecentlyPlayed, string>({
      query: () => "/me/player/recently-played",
    }),
    getPlaylists: builder.query<Playlists, string>({
      query: () => "/me/playlists",
    }),
    getPlaylist: builder.query<Playlist, string>({
      query: (playlistId) => `/playlists/${playlistId}`,
    }),
    getTopArtistsShort: builder.query<TopArtists, string>({
      query: () => "/me/top/artists?limit=50&time_range=short_term",
    }),
    getTopArtistsMedium: builder.query<TopArtists, string>({
      query: () => "/me/top/artists?limit=50&time_range=medium_term",
    }),
    getTopArtistsLong: builder.query<TopArtists, string>({
      query: () => "/me/top/artists?limit=50&time_range=long_term",
    }),
    getTopTracksShort: builder.query<TopTracks, string>({
      query: () => "/me/top/tracks?limit=50&time_range=short_term",
    }),
    getTopTracksMedium: builder.query<TopTracks, string>({
      query: () => "/me/top/tracks?limit=50&time_range=medium_term",
    }),
    getTopTracksLong: builder.query<TopTracks, string>({
      query: () => "/me/top/tracks?limit=50&time_range=long_term",
    }),
    getArtist: builder.query<Artist, string>({
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
  useGetPlaylistQuery,

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