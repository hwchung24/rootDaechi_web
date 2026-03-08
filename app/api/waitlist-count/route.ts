import { NextResponse } from "next/server";
import { Client } from "@notionhq/client";

export const dynamic = "force-dynamic";

type DatabaseResponse = {
  data_sources?: { id: string; name?: string }[];
};

type QueryResponse = {
  results?: unknown[];
  has_more?: boolean;
  next_cursor?: string | null;
};

export async function GET() {
  const apiKey = process.env.NOTION_API_KEY;
  const databaseId = process.env.NOTION_DATABASE_ID;

  if (!databaseId || !apiKey) {
    return NextResponse.json({ count: 0 });
  }

  try {
    const notion = new Client({ auth: apiKey });

    // SDK v5: get data_source_id from database (required for query)
    const dbRes = (await notion.request({
      method: "get",
      path: `databases/${databaseId}`
    })) as DatabaseResponse;

    const dataSourceId =
      Array.isArray(dbRes.data_sources) && dbRes.data_sources.length > 0
        ? dbRes.data_sources[0].id
        : null;

    if (!dataSourceId) {
      return NextResponse.json({ count: 0 });
    }

    let count = 0;
    let cursor: string | undefined;

    do {
      const res = (await notion.request({
        method: "post",
        path: `data_sources/${dataSourceId}/query`,
        body: {
          page_size: 100,
          ...(cursor ? { start_cursor: cursor } : {})
        }
      })) as QueryResponse;

      const pageCount = Array.isArray(res.results) ? res.results.length : 0;
      count += pageCount;
      cursor = res.has_more && res.next_cursor ? res.next_cursor : undefined;
    } while (cursor);

    return NextResponse.json({ count });
  } catch (err) {
    console.error("[waitlist-count]", err);
    return NextResponse.json({ count: 0 });
  }
}
