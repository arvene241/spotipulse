"use client";

import { useAppSelector } from "@/libs/hooks";
import {
  useGetPlaylistsQuery,
} from "@/libs/services/spotifySlice";
import Image from "next/image";
import Link from "next/link";

const Playlists = () => {
  const accessToken = useAppSelector((state) => state.auth.accessToken);

  const { data: playlistsData } = useGetPlaylistsQuery(accessToken);

  return (
    <>
      <h2 className="font-black text-2xl text-center md:text-start">Your Playlists</h2>
      {playlistsData && (
        <ul className="grid grid-cols-sm-grid sm:grid-cols-md-grid md:grid-cols-lg-grid gap-6 mt-[50px]">
          {playlistsData.items.map((item) => (
            <li key={item.id}>
              <Link
                href={`/playlists/${item.id}`}
                className="flex flex-col items-center justify-center group"
              >
                <div className="relative w-full">
                  <Image
                    src={item.images[0].url}
                    alt={item.name}
                    width="300"
                    height="300"
                    className="w-full object-cover"
                  />
                  <div className="absolute inset-0 w-full h-full flex items-center justify-center opacity-0 group-hover:opacity-100 text-white bg-[rgba(0,0,0,0.5)]">
                  </div>
                </div>
                <div className="my-[20px] text-center">
                <p className=" font-black underline-offset-4 group-hover:underline mb-1">
                  {item.name}
                </p>
                <p className="text-xs font-bold text-lightGrey uppercase">
                  {item.tracks.total} {item.tracks.total > 1 ? "tracks" : "track"}
                </p>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default Playlists;
