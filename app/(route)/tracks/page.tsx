"use client";

import Button from "@/components/Button";
import TrackItem from "@/components/TrackItem";
import { useGetTopTracksLongQuery, useGetTopTracksMediumQuery, useGetTopTracksShortQuery } from "@/libs/services/spotifySlice";
import { cn } from "@/libs/utils";
import { TopTracks } from "@/types/types";
import { useState, useEffect, useCallback } from "react";
import { useAppSelector } from "@/libs/hooks";

const Tracks = () => {
  const accessToken = useAppSelector((state) => state.auth.accessToken);

  const [activeQuery, setActiveQuery] = useState("long");
  const [topTracks, setTopTracks] = useState<TopTracks>();

  const { data: shortTracks } = useGetTopTracksShortQuery(accessToken);
  const { data: mediumTracks } = useGetTopTracksMediumQuery(accessToken);
  const { data: longTracks } = useGetTopTracksLongQuery(accessToken);

  useEffect(() => {
    setTopTracks(longTracks)
  },[longTracks])

  const changeData = useCallback((query: string) => {
    setActiveQuery(query);

    switch (query) {
      case "short":
        setTopTracks(shortTracks);
        break;
      case "medium":
        setTopTracks(mediumTracks);
        break;
      case "long":
        setTopTracks(longTracks);
        break;
      default:
        setTopTracks(longTracks);
        break;
    }
  }, [shortTracks, mediumTracks, longTracks]);

  return (
    <>
      <header className="md:flex block justify-between items-center">
        <h2 className="font-black text-2xl text-center md:text-start">Top Tracks</h2>
        <div className="flex gap-5 mt-[30px] md:mt-0 justify-around md:justify-center">
          <Button
            content="All Time"
            handleClick={() => changeData("long")}
            variant="link"
            className={cn({"underline text-white": activeQuery === "long"})}
          />
          <Button
            content="Last 6 Months"
            handleClick={() => changeData("medium")}
            variant="link"
            className={cn({"underline text-white": activeQuery === "medium"})}
          />
          <Button
            content="Last 4 Weeks"
            handleClick={() => changeData("short")}
            variant="link"
            className={cn({"underline text-white": activeQuery === "short"})}
          />
        </div>
      </header>
      {topTracks && (
        <ul className="mt-12 flex flex-col gap-[20px] md:gap-[30px]">
          {topTracks.items.map((item) => (
            <TrackItem item={item} key={item.id} />
          ))}
        </ul>
      )}
    </>
  );
};

export default Tracks;
