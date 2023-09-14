"use client";

import { useGetArtistQuery } from "@/libs/services/spotifySlice";
import { formatWithCommas } from "@/libs/utils";
import Image from "next/image";

export default function Page({ params }: { params: { slug: string } }) {
  const { data: artistData } = useGetArtistQuery(params.slug);

  return (
    <div className="w-full h-full flex flex-col items-center justify-center gap-[30px]">
      {artistData && (
        <>
          <Image
            src={artistData.images[0].url}
            alt={artistData.name}
            width={300}
            height={300}
            className="rounded-full w-[200px] h-[200px] md:w-[300px] md:h-[300px] object-cover"
          />
          <div>
            <h1 className="font-black text-4xl md:text-7xl text-center">{artistData.name}</h1>
            <div className="grid grid-cols-3 mt-[30px]">
              <div>
                <h2 className="text-lg md:text-2xl font-black text-offGreen text-center">
                  {formatWithCommas(artistData.followers.total)}
                </h2>
                <p className="text-xs uppercase text-lightGrey text-center">Followers</p>
              </div>
              <div>
                <h2 className="text-lg md:text-2xl font-black capitalize text-offGreen text-center">
                  {artistData.genres.map((genre) => genre).join(", ")}
                </h2>
                <p className="text-xs uppercase text-lightGrey text-center">Genres</p>
              </div>
              <div>
                <h2 className="text-lg md:text-2xl font-black text-offGreen text-center">{artistData.popularity}%</h2>
                <p className="text-xs uppercase text-lightGrey text-center">Popularity</p>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
