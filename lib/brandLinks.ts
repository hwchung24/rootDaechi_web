/** 상단 네비 «소개» 드롭다운의 브랜드 링크 — 실제 URL은 env 또는 아래 기본값 */
export const BRAND_LINK_ITEMS: { href: string; label: string }[] = [
  { href: process.env.NEXT_PUBLIC_BRAND_BLOG_URL ?? "https://blog.naver.com/matchooo", label: "블로그" },
  {
    href: process.env.NEXT_PUBLIC_BRAND_INSTAGRAM_URL ?? "https://www.instagram.com/daechiroot/",
    label: "인스타그램"
  },
  { href: "/story", label: "대치루트 이야기" }
];

export function isExternalBrandHref(href: string): boolean {
  return href.startsWith("http://") || href.startsWith("https://");
}
