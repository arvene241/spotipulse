import { FaUser, FaMusic } from "react-icons/fa";
import { FaClockRotateLeft } from "react-icons/fa6";
import { PiMicrophoneStageFill } from "react-icons/pi";
import { BiSolidPlaylist } from "react-icons/bi";

export const navItems = [
  { linkName: "Profile", icon: <FaUser />, href: "/" },
  { linkName: "Top Artists", icon: <PiMicrophoneStageFill />, href: "/top-artists" },
  { linkName: "Top Tracks", icon: <FaMusic />, href: "/top-tracks" },
  { linkName: "Recent", icon: <FaClockRotateLeft />, href: "/recent" },
  { linkName: "Playlists", icon: <BiSolidPlaylist />, href: "/playlists" },
];