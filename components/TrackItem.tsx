import { Track } from "@/types/types";
import { FaInfoCircle } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";
import { formatDuration } from "@/libs/utils";

interface TrackItemProps {
  item: Track;
}

const TrackItem = ({ item }: TrackItemProps) => {
  return (
    <li key={item.id} className="w-full">
      <Link
        href={`/tracks/${item.id}`}
        className="flex items-center gap-[20px] group"
      >
        <div className="relative">
          <Image src={item.album.images[0].url} alt="Album Artwork" width='300' height="300" className="w-[50px] h-[50px] object-cover" />
          <div className="absolute inset-0 w-full h-full flex items-center justify-center opacity-0 group-hover:opacity-100 text-white bg-[rgba(0,0,0,0.5)]">
            <FaInfoCircle className="text-[25px]" />
          </div>
        </div>

        <div className="flex-1 flex justify-between gap-4 overflow-hidden">
          {/* <p className="truncate">{item.name}</p> */}
          <div className="overflow-hidden">
            <p className="truncate">{item.name}</p>
            <div className="truncate text-lightGrey text-sm">
              {item.artists.map(({ name }, i) => (
                <span key={i}>
                  {name}
                  {item.artists.length > 0 && i === item.artists.length - 1
                    ? ""
                    : ","}
                  &nbsp;
                </span>
              ))}
              &nbsp;&middot;&nbsp;&nbsp;
              {item.album.name}
            </div>
          </div>
          <span className="text-lightGrey text-sm">
            {formatDuration(item.duration_ms)}
          </span>
        </div>
      </Link>
    </li>
  );
};

export default TrackItem;
