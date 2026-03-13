import { getFeedItems, getSiteUrl } from "@/lib/feed";

function escapeXml(unsafe: string): string {
  return unsafe
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

function formatRfc2822(d: Date): string {
  return d.toUTCString();
}

export async function GET() {
  const siteUrl = getSiteUrl();
  const items = await getFeedItems();
  const lastBuildDate = items.length > 0
    ? formatRfc2822(items[0].pubDate)
    : formatRfc2822(new Date());

  const channelTitle = "대치루트";
  const channelDescription = "대치폰 구독 서비스";

  const rss = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>${escapeXml(channelTitle)}</title>
    <description>${escapeXml(channelDescription)}</description>
    <link>${escapeXml(siteUrl)}</link>
    <lastBuildDate>${lastBuildDate}</lastBuildDate>
    <atom:link href="${escapeXml(siteUrl)}/rss.xml" rel="self" type="application/rss+xml"/>
    ${items
      .map(
        (item) => `
    <item>
      <title>${escapeXml(item.title)}</title>
      <description>${escapeXml(item.description)}</description>
      <link>${escapeXml(item.link)}</link>
      <guid isPermaLink="false">${escapeXml(item.guid)}</guid>
      <pubDate>${formatRfc2822(item.pubDate)}</pubDate>
    </item>`
      )
      .join("")}
  </channel>
</rss>`;

  return new Response(rss, {
    headers: {
      "Content-Type": "application/rss+xml; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=3600",
    },
  });
}
