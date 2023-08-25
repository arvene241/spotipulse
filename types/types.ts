interface Follower {
  href: string;
  total: number;
}

interface Images {
  url: string;
  height: number;
  width: number;
}

interface Album {
  album_type: string;
  total_tracks: number;
  available_markets: Array<string>;
  external_urls: {
    spotify: string;
  }
  href: string;
  id: string;
  images: Images[];
  name: string;
  release_date: string;
  type: string;
  uri: string;
  genres: Array<string>;
  label: string;
  popularity: number;
  album_group: string;
  artists: ArtistItems[];
}

interface ArtistItems {
  external_urls: {
    spotify: string;
  }
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
  external_urls: {
    spotify: string;
  }
  followers: Follower;
  href: string;
  id: string;
  type: string;
  uri: string;
  display_name: string;
}

export interface TracksItems {
  album: Album;
  artists: ArtistItems[];
  available_markets: Array<string>;
  disc_number: number;
  duration_ms: number;
  explicit: boolean;
  external_urls: {
    spotify: string;
  }
  href: string;
  id: string;
  name: string;
  popularity: number;
  preview_url: string;
  track_number: number;
  uri: string;
  is_local: boolean;
}

interface PlaylistItems {
  collaborative: string;
  description: string;
  external_urls: {
    spotify: string;
  }
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
  external_urls: {
    spotify: string;
  }
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

export interface TopTracks {
  href: string;
  total: number;
  items: TracksItems[];
}

export interface TopArtists {
  href: string;
  total: number;
  items: ArtistItems[];
}
