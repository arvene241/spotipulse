interface Follower {
  href: string;
  total: number;
}

interface Images {
  url: string;
  height: number;
  width: number;
}

interface ArtistItems {
  external_urls: object;
  followers: Follower
  genres: Array<string>;
  href: string;
  id: string;
  images: Images[];
  name: string;
  popularity: number;
  type: string;
  uri: string;
}

interface PlaylistOwner {
  external_urls: object;
  followers: Follower;
  href: string;
  id: string;
  type: string;
  uri: string;
  display_name: string;
}

interface PlaylistItems {
  collaborative: string;
  description: string;
  external_urls: object;
  href: string;
  id: string;
  images: Images[];
  name: string;
  owner: PlaylistOwner;
  public: boolean;
  snapshot_id: string;
  tracks: Follower;
  type: string;
  uri: string;
}

export interface SpotifyUser {
  country: string;
  display_name: string;
  email: string;
  followers: Follower;
  href: string;
  id: string;
  images: Images[];
  type: string;
  uri: string;
}

export interface FollowingArtists {
  artists: {
    href: string;
    total: number;
    items: ArtistItems[];
  }
}

export interface Playlists {
  href: string;
  total: number;
  items: PlaylistItems[];
}