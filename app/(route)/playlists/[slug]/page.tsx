"use client";

import { buttonVariants } from "@/components/Button";
import TrackItem from "@/components/TrackItem";
import { useGetPlaylistQuery } from "@/libs/services/spotifySlice";
import { cn } from "@/libs/utils";
import Image from "next/image";
import Link from "next/link";

export default function Page({ params }: { params: { slug: string } }) {
  const { data: playlistData } = useGetPlaylistQuery(params.slug);

  return (
    <>
      {playlistData && (
        <div className="block md:flex gap-[50px]">
          <div className="block md:flex flex-col items-center w-full md:w-1/3 text-center">
            <div className="hidden md:block max-w-[300px] w-full">
              <Image
                src={playlistData.images[0].url}
                alt={playlistData.name}
                width={300}
                height={300}
                className="w-full align-middle"
              />
            </div>
            <Link
              href={playlistData.external_urls.spotify}
              target="_blank"
              rel="noopener noreferrer"
              className="font-black text-2xl mt-5 inline-block"
            >
              {playlistData.name}
            </Link>
            <p className="mt-[10px] text-sm text-lightestGrey">By {playlistData.owner.display_name}</p>
            {playlistData.description && (
              <p className="text-sm text-lightestGrey playlistDesc" dangerouslySetInnerHTML={{ __html: playlistData.description }} />
            )}
            <p className="text-sm mt-5">{playlistData.tracks.total} Tracks</p>
            <Link href="/recommendations" className={cn(buttonVariants({variant: 'green'}), 'mt-5 mb-[50px] uppercase inline-block')}>Get Recommendations</Link>
          </div>

          <ul className="flex-1 mt-12 flex flex-col gap-[20px] md:gap-[30px] my-[50px] md:my-0">
            {playlistData.tracks.items.map((item) => (
              <TrackItem item={item.track} key={item.track.id} />
            ))}
          </ul>
        </div>
      )}
    </>
  );
};
