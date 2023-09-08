"use client";

import Button from "@/components/Button";
import { useAppSelector } from "@/libs/hooks";
import {
  useGetTopArtistsLongQuery,
  useGetTopArtistsMediumQuery,
  useGetTopArtistsShortQuery,
} from "@/libs/services/spotifySlice";
import { cn } from "@/libs/utils";
import { TopArtists } from "@/types/types";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, useCallback } from "react";
import { FaInfoCircle } from "react-icons/fa";

const Artists = () => {
  const accessToken = useAppSelector((state) => state.auth.accessToken);

  const [activeQuery, setActiveQuery] = useState("long");
  const [topArtists, setTopArtists] = useState<TopArtists>();

  const { data: shortArtists } = useGetTopArtistsShortQuery(accessToken);
  const { data: mediumArtists } = useGetTopArtistsMediumQuery(accessToken);
  const { data: longArtists } = useGetTopArtistsLongQuery(accessToken);

  useEffect(() => {
    setTopArtists(longArtists);
  }, [longArtists]);

  const changeData = useCallback((query: string) => {
    setActiveQuery(query);

    switch (query) {
      case "short":
        setTopArtists(shortArtists);
        break;
      case "medium":
        setTopArtists(mediumArtists);
        break;
      case "long":
        setTopArtists(longArtists);
        break;
      default:
        setTopArtists(longArtists);
        break;
    }
  }, [shortArtists, mediumArtists, longArtists]);

  return (
    <>
      <header className="md:flex block justify-between items-center">
        <h2 className="font-black text-2xl text-center md:text-start">
          Top Artists
        </h2>
        <div className="flex gap-5 mt-[30px] md:mt-0 justify-around md:justify-center">
          <Button
            content="All Time"
            handleClick={() => changeData("long")}
            variant="link"
            className={cn({ "underline text-white": activeQuery === "long" })}
          />
          <Button
            content="Last 6 Months"
            handleClick={() => changeData("medium")}
            variant="link"
            className={cn({ "underline text-white": activeQuery === "medium" })}
          />
          <Button
            content="Last 4 Weeks"
            handleClick={() => changeData("short")}
            variant="link"
            className={cn({ "underline text-white": activeQuery === "short" })}
          />
        </div>
      </header>
      {topArtists && (
        <ul className="grid grid-cols-sm-grid sm:grid-cols-md-grid md:grid-cols-lg-grid gap-5 mt-[50px]">
          {topArtists.items.map((item) => (
            <li key={item.id}>
              <Link
                href={`/artist/${item.id}`}
                className="flex flex-col items-center justify-center group"
              >
                <div className="relative">
                  <Image
                    src={item.images[0].url}
                    alt={item.name}
                    width="300"
                    height="300"
                    className="w-[150px] h-[150px] md:w-[200px] md:h-[200px] rounded-full object-cover"
                  />
                  <div className="absolute inset-0 w-full h-full flex items-center justify-center opacity-0 group-hover:opacity-100 text-white bg-[rgba(0,0,0,0.5)] rounded-full">
                    <FaInfoCircle className="text-[25px]" />
                  </div>
                </div>
                <p className="text-center underline-offset-4 group-hover:underline my-[20px]">
                  {item.name}
                </p>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default Artists;
