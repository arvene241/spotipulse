"use client";

import { logout } from "@/libs/features/authSlice";
import { useAppDispatch, useAppSelector } from "@/libs/hooks";
import {
  useGetFollowingQuery,
  useGetPlaylistsQuery,
  useGetTopArtistsLongQuery,
  useGetTopTracksLongQuery,
  useGetUserQuery,
} from "@/libs/services/spotifySlice";
import { signOut } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import Button from "./Button";
import { useRouter } from "next/navigation";
import { FaInfoCircle } from "react-icons/fa";
import TrackItem from "./TrackItem";

const Profile = () => {
  const dispatch = useAppDispatch();
  const accessToken = useAppSelector((state) => state.auth.accessToken);
  const userProfile = useAppSelector((state) => state.auth.user);

  const router = useRouter();

  const { data: userData, isLoading: isUserLoading } =
    useGetUserQuery(accessToken);

  const { data: followingData } =
    useGetFollowingQuery(accessToken);

  const { data: playlistsData } =
    useGetPlaylistsQuery(accessToken);

  const { data: topArtistsData } =
    useGetTopArtistsLongQuery(accessToken);

  const { data: topTracksData } =
    useGetTopTracksLongQuery(accessToken);

  const handleLogout = () => {   
    dispatch(logout);
    signOut({ callbackUrl: "/signin" });
  };

  {console.log('userData', userData)}
  {console.log('userProfile', userProfile)}

  return (
    <main className="container main">
      {userData && (
        <div>
          <header className="flex flex-col items-center justify-center gap-5">
            <Image
              src={userData.images[0].url}
              alt="user profile"
              width="300"
              height="300"
              className="rounded-full w-[150px] h-[150px]"
            />

            <Link
              href={userData.external_urls.spotify}
              className="font-black text-center text-h1 text-white hover:text-green"
              target="_blank"
              rel="noopener noreferrer"
            >
              {userData.display_name}
            </Link>

            <div className="flex items-center justify-center gap-7">
              <div className="text-center">
                <p className="text-green font-bold text-xl pb-1">
                  {userData.followers.total}
                </p>
                <p className="text-lightGrey text-xs uppercase tracking-widest font-medium">
                  Followers
                </p>
              </div>
              <div className="text-center">
                <p className="text-green font-bold text-xl pb-1">
                  {followingData?.artists.items.length}
                </p>
                <p className="text-lightGrey text-xs uppercase tracking-widest font-medium">
                  Following
                </p>
              </div>
              <div className="text-center">
                <Link href="/playlists">
                  <p className="text-green font-bold text-xl pb-1">
                    {playlistsData?.total}
                  </p>
                  <p className="text-lightGrey text-xs uppercase tracking-widest font-medium">
                    Playlists
                  </p>
                </Link>
              </div>
            </div>

            <Button
              content="Logout"
              handleClick={handleLogout}
              className="mt-3"
            />
          </header>

          {/* Top Tracks and Artists */}
          <div className="w-full block md:grid md:grid-cols-2 gap-[70px] mt-[70px] md:mt-[100px]">
            {/* Top Artists */}
            <div className="w-full">
              <div className="w-full flex items-center justify-between mb-[40px] gap-2">
                <h3 className="font-black text-xl">Top Artists of All Time</h3>
                <Button
                  content="See more"
                  handleClick={() => router.push("/artists")}
                />
              </div>

              {topArtistsData && (
                <ul className="flex flex-col items-center justify-center gap-[20px] md:gap-[30px]">
                  {topArtistsData.items.slice(0, 10).map((item) => (
                    <li key={item.id} className="w-full">
                      <Link
                        href={`/artist/${item.id}`}
                        className="flex items-center gap-[20px] group"
                      >
                        <div className="relative">
                          <Image
                            src={item.images[0].url}
                            alt="Album Artwork"
                            width='300' height="300" className="rounded-full w-[50px] h-[50px] object-cover"
                          />
                          <div className="absolute inset-0 w-full h-full flex items-center justify-center opacity-0 group-hover:opacity-100 text-white bg-[rgba(0,0,0,0.5)] rounded-full">
                            <FaInfoCircle className="text-[25px]" />
                          </div>
                        </div>

                        <div className="flex-1">
                          <p>{item.name}</p>
                        </div>
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </div>

            {/* Top Tracks */}
            <div className="w-full mt-[50px] md:mt-0">
              <div className="w-full flex items-center justify-between mb-[40px] gap-2">
                <h3 className="font-black text-xl">Top Tracks of All Time</h3>
                <Button
                  content="See more"
                  handleClick={() => router.push("/tracks")}
                />
              </div>

              {topTracksData && (
                <ul className="flex flex-col gap-[20px] md:gap-[30px]">
                  {topTracksData.items.slice(0, 10).map((item) => (
                    <TrackItem item={item} key={item.id} />
                  ))}
                </ul>
              )}
            </div>
          </div>
        </div>
      )}
    </main>
  );
};

export default Profile;
