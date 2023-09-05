"use client";

import TrackItem from "@/components/TrackItem";
import { useAppSelector } from "@/libs/hooks";
import {
  useGetRecentlyPlayedQuery,
} from "@/libs/services/spotifySlice";

const Recent = () => {
  const accessToken = useAppSelector((state) => state.auth.accessToken);

  const { data: recentData } = useGetRecentlyPlayedQuery(accessToken);

  return (
    <>
      <h2 className="font-black text-2xl text-center md:text-start">Recently Played Tracks</h2>
      {recentData && (
        <ul className="mt-12 flex flex-col gap-[20px] md:gap-[30px]">
          {recentData.items.map((item) => (
            <TrackItem item={item.track} key={item.track.id} />
          ))}
        </ul>
      )}
    </>
  );
};

export default Recent;
