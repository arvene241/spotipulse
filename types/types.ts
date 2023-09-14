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

interface TrackAnalysis {
  num_samples: number;
  duration: number;
  sample_md5: string;
  offset_seconds: number;
  window_seconds: number;
  analysis_sample_rate: number;
  analysis_channels: number;
  end_of_fade_in: number;
  start_of_fade_out: number;
  loudness: number;
  tempo: number;
  tempo_confidence: number;
  time_signature: number;
  time_signature_confidence: number;
  key: number;
  key_confidence: number;
  mode: number;
  mode_confidence: number;
  codestring: string;
  code_version: number;
  echoprintstring: string;
  echoprint_version: number;
  synchstring: string;
  synch_version: number;
  rhythmstring: string;
  rhythm_version: number;
}

interface BarAnalysis {
  start: number;
  duration: number;
  confidence: number;
}

interface BeatAnalysis {
  start: number;
  duration: number;
  confidence: number;
}

interface SectionAnalysis {
  start: number;
  duration: number;
  confidence: number;
  loudness: number;
  tempo: number;
  tempo_confidence: number;
  key: number;
  key_confidence: number;
  mode: number;
  mode_confidence: number;
  time_signature: number;
  time_signature_confidence: number;
}

interface SegmentAnalysis {
  start: number;
  duration: number;
  confidence: number;
  loudness_start: number;
  loudness_max_time: number;
  loudness_max: number;
  loudness_end: number;
  pitches: number[];
  timbre: number[];
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
  duration_ms: number;
  disc_number: number;
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

export interface Artists {
  artists: {
    href: string;
    total: number;
    items: Artist[];
  }
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

export interface AudioAnalysis {
  track: TrackAnalysis;
  bars: BarAnalysis[];
  beats: BeatAnalysis[];
  sections: SectionAnalysis[];
  segments: SegmentAnalysis[];
  tatums: BeatAnalysis[];
}