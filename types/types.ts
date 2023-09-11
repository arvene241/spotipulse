interface ExternalURI {
  spotify: string;
}
interface Followers {
  href: string;
  total: number;
}

interface Images {
  url: string;
  height: number;
  width: number;
}

interface Spotify {
  href: string;
  id: string;
  type: string;
  uri: string;
}

interface Added_By extends Spotify {
  external_urls: ExternalURI;
  followers: Followers;
}

interface PlaylistsObject extends Spotify {
  collaborative: boolean;
  description: string;
  external_urls: ExternalURI;
  images: Images[];
  name: string;
  owner: Owner;
  public: boolean;
  snapshot_id: string;
}

interface Owner extends Spotify {
  external_urls: ExternalURI;
  followers: Followers;
  display_name: string;
}

export interface Album extends Spotify {
  album_type: string;
  total_tracks: number;
  available_markets: Array<string>;
  external_urls: ExternalURI;
  images: Images[];
  name: string;
  release_date: string;
  artists: Artist[];
}

export interface Artist extends Spotify {
  external_urls: ExternalURI;
  followers: Followers;
  genres: Array<string>;
  images: Images[];
  name: string;
  popularity: number;
}

export interface Track extends Spotify {
  album: Album;
  artists: Artist[];
  available_markets: Array<string>;
  external_urls: ExternalURI;
  name: string;
  popularity: number;
  preview_url: string;
}

export interface Items {
  added_at: string;
  added_by: Added_By;
  track: Track;
}

export interface Tracks extends Followers {
  items: Items[];
}

export interface Playlist extends PlaylistsObject {
  followers: Followers;
  tracks: Tracks;
}

export interface PlaylistsItmes extends PlaylistsObject {
  tracks: Followers;
}

export interface Playlists extends Followers {
  items: PlaylistsItmes[]
}

export interface CurrentUser extends Spotify {
  country: string;
  display_name: string;
  email: string;
  external_urls: ExternalURI;
  followers: Followers;
  images: Images[];
  product: string;
}

export interface Artists extends Followers {
  items: Artist[];
}

export interface RecentlyPlayed extends Followers {
  items: [{
    track: Track;
    played_at: string;
  }]
}

export interface TopTracks extends Followers {
  items: Track[];
}

export interface TopArtists extends Followers {
  items: Artist[];
}

// interface Album {
//   album_type: string;
//   total_tracks: number;
//   available_markets: Array<string>;
//   external_urls: {
//     spotify: string;
//   }
//   href: string;
//   id: string;
//   images: Images[];
//   name: string;
//   release_date: string;
//   type: string;
//   uri: string;
//   genres: Array<string>;
//   label: string;
//   popularity: number;
//   album_group: string;
//   artists: ArtistItems[];
// }

// export interface ArtistItems {
//   external_urls: {
//     spotify: string;
//   }
//   followers: Follower
//   genres: Array<string>;
//   href: string;
//   id: string;
//   images: Images[];
//   name: string;
//   popularity: number;
//   type: string;
//   uri: string;
// }

// interface PlaylistOwner {
//   external_urls: {
//     spotify: string;
//   }
//   followers: Follower;
//   href: string;
//   id: string;
//   type: string;
//   uri: string;
//   display_name: string;
// }

// export interface TracksItems {
//   album: Album;
//   artists: ArtistItems[];
//   available_markets: Array<string>;
//   disc_number: number;
//   duration_ms: number;
//   explicit: boolean;
//   external_urls: {
//     spotify: string;
//   }
//   href: string;
//   id: string;
//   name: string;
//   popularity: number;
//   preview_url: string;
//   track_number: number;
//   uri: string;
//   is_local: boolean;
// }

// export interface PlaylistItems {
//   collaborative: string;
//   description: string;
//   external_urls: {
//     spotify: string;
//   }
//   href: string;
//   id: string;
//   images: Images[];
//   name: string;
//   owner: PlaylistOwner;
//   public: boolean;
//   snapshot_id: string;
//   tracks: Tracks;
//   type: string;
//   uri: string;
// }

// interface RecentItems {
//   track: TracksItems;
// }

// export interface SpotifyUser {
//   country: string;
//   display_name: string;
//   email: string;
//   followers: Follower;
//   href: string;
//   id: string;
//   images: Images[];
//   type: string;
//   uri: string;
//   external_urls: {
//     spotify: string;
//   }
// }

// export interface FollowingArtists {
//   artists: {
//     href: string;
//     total: number;
//     items: ArtistItems[];
//   }
// }

// export interface Playlists {
//   href: string;
//   total: number;
//   items: PlaylistItems[];
// }

// export interface TopTracks {
//   href: string;
//   total: number;
//   items: TracksItems[];
// }

// export interface TopArtists {
//   href: string;
//   total: number;
//   items: ArtistItems[];
// }

// export interface RecentlyPlayed {
//   href: string;
//   total: number;
//   items: RecentItems[];
// }

// interface Tracks {
//   href: string;
//   total: number;
//   items: [{
//     added_by: PlaylistOwner,
//     track: TracksItems
//   }]
// }