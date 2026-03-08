/**
 * RSS 피드용 항목 타입.
 * 나중에 Notion, CMS 등에서 가져오도록 getFeedItems()만 교체하면 됩니다.
 */
export type FeedItem = {
  title: string;
  description: string;
  link: string;
  pubDate: Date;
  guid: string;
};

/** 네이버 서치어드바이저 등록 주소와 동일하게(www 포함) 설정합니다. */
const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://www.daechiroot.com";

/**
 * 피드에 넣을 최신 게시글/업데이트 목록을 반환합니다.
 * 현재는 정적 업데이트 목록을 사용하며, 추후 Notion/API 연동 시 이 함수만 수정하면 됩니다.
 */
export async function getFeedItems(): Promise<FeedItem[]> {
  // 예시: 서비스 업데이트·공지 목록 (실제로는 DB/Notion/마크다운 등에서 가져오기)
  const updates: FeedItem[] = [
    {
      title: "대치루트 서비스 오픈",
      description: "아이폰 공신폰 솔루션 대치루트가 오픈했습니다. 쓰던 아이폰 그대로, 3월 한정 50% 할인을 진행합니다.",
      link: `${SITE_URL}`,
      pubDate: new Date("2025-03-01T00:00:00+09:00"),
      guid: `${SITE_URL}#open-2025-03-01`,
    },
    {
      title: "세팅 A·B·C 신청 안내",
      description: "공신폰 세팅(세팅 A/B/C)과 대치폰 매입·세팅 신청이 가능합니다. 각 세팅별 가격과 포함 앱은 서비스 소개에서 확인하세요.",
      link: `${SITE_URL}/gillo`,
      pubDate: new Date("2025-03-01T00:00:00+09:00"),
      guid: `${SITE_URL}/gillo#settings`,
    },
    {
      title: "자주 묻는 질문·문의하기",
      description: "FAQ와 카카오톡 플러스 친구 문의하기가 오픈했습니다.",
      link: `${SITE_URL}/faq`,
      pubDate: new Date("2025-03-01T00:00:00+09:00"),
      guid: `${SITE_URL}/faq`,
    },
  ];

  return updates.sort((a, b) => b.pubDate.getTime() - a.pubDate.getTime());
}

export function getSiteUrl(): string {
  return SITE_URL;
}
