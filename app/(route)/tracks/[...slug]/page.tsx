"use client";

import Button from "@/components/Button";
import GridBox from "@/components/GridBox";
import { buttonVariants } from "@/components/Button";
import {
  useGetAnalysisQuery,
  useGetTrackQuery,
} from "@/libs/services/spotifySlice";
import { cn, formatDuration, getYear, parsePitchClass } from "@/libs/utils";
import Image from "next/image";
import Link from "next/link";

export default function Page({ params }: { params: { slug: string } }) {
  const { data: audioAnalysisData } = useGetAnalysisQuery(params.slug);
  const { data: trackData } = useGetTrackQuery(params.slug);

  return (
    <>
      {trackData && (
        <div className="flex flex-col items-center sm:flex-row mb-[30px] sm:items-start md:mb-[70px] gap-[30px] md:gap-[40px]">
          <div className="m-auto max-w-[200px] md:max-w-[250px]">
            <Image
              src={trackData.album.images[0].url}
              alt={trackData.name}
              width={300}
              height={300}
              className="w-full align-middle"
            />
          </div>
          <div className="sm:text-left text-center flex-grow">
            <h1 className="text-3xl sm:text-[40px] font-black mb-3">
              {trackData.name}
            </h1>
            <h2 className="text-lg sm:text-2xl font-bold text-lightestGrey mb-2">
              {trackData.artists.map(({ name }, i) => (
                <span key={i}>
                  {name}
                  {trackData.artists.length > 0 &&
                  i === trackData.artists.length - 1
                    ? ""
                    : ","}
                  &nbsp;
                </span>
              ))}
            </h2>
            <h3 className="text-lightGrey mb-2">
              {trackData.album.name} &middot;{" "}
              {getYear(trackData.album.release_date)}
            </h3>
            <Link
              href={trackData.external_urls.spotify}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                buttonVariants({ variant: "green" }),
                "mt-5 inline-block"
              )}
            >
              Play on Spotify
            </Link>
          </div>
        </div>
      )}
      {audioAnalysisData && trackData && (
        <div className="grid grid-cols-2-grid sm:grid-cols-5-grid w-full border-t border-l border-grey text-center">
          <GridBox
            header={formatDuration(trackData.duration_ms)}
            content="Duration"
          />
          <GridBox
            header={parsePitchClass(audioAnalysisData.track.key)}
            content="Key"
          />
          <GridBox
            header={audioAnalysisData.track.mode === 1 ? "Major" : "Minor"}
            content="Modality"
          />
          <GridBox
            header={audioAnalysisData.track.time_signature}
            content="Time Signature"
          />
          <GridBox
            header={Math.round(audioAnalysisData.track.tempo)}
            content="Tempo (BPM)"
          />
          <GridBox header={`${trackData.popularity}%`} content="Popularity" />
          <GridBox header={audioAnalysisData.bars.length} content="Bars" />
          <GridBox header={audioAnalysisData.beats.length} content="Beats" />
          <GridBox
            header={audioAnalysisData.sections.length}
            content="Sections"
          />
          <GridBox
            header={audioAnalysisData.segments.length}
            content="Segments"
          />
        </div>
      )}
    </>
  );
}
