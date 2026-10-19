export interface Episode {
  title?: string;
  pubDate?: string;
  link?: string;
  contentSnippet?: string;
  itunes?: { image?: string; duration?: string; summary?: string };
  enclosure?: { url?: string; type?: string };
}
