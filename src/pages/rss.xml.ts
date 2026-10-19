import type { APIRoute } from "astro";

// Preserve the subscription URL, serving the actual podcast rather than
// template articles. The daily Pages build refreshes this static mirror.
export const GET: APIRoute = async () => {
  const response = await fetch("https://feed.xyzfm.space/6vnv3ae7g34t", {
    signal: AbortSignal.timeout(20000),
  });
  if (!response.ok) throw new Error(`Podcast RSS returned ${response.status}`);
  return new Response(await response.text(), {
    headers: { "Content-Type": "application/rss+xml; charset=utf-8" },
  });
};
