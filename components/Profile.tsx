"use client";

import { logout } from "@/libs/features/authSlice";
import { useAppDispatch, useAppSelector } from "@/libs/hooks";
import { useGetFollowingQuery, useGetPlaylistsQuery, useGetTopArtistsLongQuery, useGetTopTracksLongQuery, useGetUserQuery } from "@/libs/services/spotifySlice";
import { signOut } from "next-auth/react";
import Image from "next/image";

const Profile = () => {
  const dispatch = useAppDispatch();
  const accessToken = useAppSelector((state) => state.auth.accessToken);

  const { data: userData, isLoading: isUserLoading } =
    useGetUserQuery(accessToken);
  
  const { data: followingData, refetch: refetchFollowing } =
  useGetFollowingQuery(accessToken);

  const { data: playlistsData, refetch: refetchPlaylists } =
  useGetPlaylistsQuery(accessToken);

  const { data: topArtistsData, refetch: refetchTopArtists } =
  useGetTopArtistsLongQuery(accessToken);

  const { data: topTracksData, refetch: refetchTopTracks } =
  useGetTopTracksLongQuery(accessToken);

  const handleLogout = () => {
    dispatch(logout);
    signOut({ callbackUrl: "/signin" });
  };

  return (
    <div>
      <header>
        <Image src={userData?.images[0].url || ''} alt="user profile" width='300' height='300' />
        <div><h1>{userData?.display_name}</h1></div>
        <div className="flex items-center justify-center gap-7">
          <div>

          </div>
        </div>
      </header>
    </div>
  );
};

export default Profile;
