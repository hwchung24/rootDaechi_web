"use client";

import Link from "next/link";

export function SiteFooter() {
  const footerGroups = [
    {
      title: "서비스",
      items: [
        { label: "대치폰 에듀", href: "/phone" },
        { label: "대치폰", href: "/daechi-phone" },
        { label: "학습 관리 구독 연장", href: "/management-subscription" },
        { label: "대치탭 출시 알림", href: "/notify" }
      ]
    },
    {
      title: "회사",
      items: [
        { label: "회사 소개", href: "/about" },
        { label: "블로그", href: "https://blog.naver.com/daechi_rt", external: true },
        { label: "인스타그램", href: "https://www.instagram.com/daechiroot/", external: true },
        { label: "채용", href: "/inquiry" }
      ]
    },
    {
      title: "문의",
      items: [
        { label: "문의하기", href: "/inquiry" },
        { label: "B2B 제휴", href: "/b2b" },
        { label: "사업 제휴", href: "/b2b" },
        { label: "광고 문의", href: "/inquiry" }
      ]
    },
    {
      title: "고객센터",
      items: [
        { label: "전화: 010-5581-0436" },
        { label: "이메일: contact@daechiroot.com" },
        { label: "카카오톡 상담: 평일 10:00 - 19:00" },
        { label: "민원 접수", href: "/inquiry" }
      ]
    },
    {
      title: "윤리경영",
      items: [{ label: "상담/신고", href: "/inquiry" }]
    }
  ] as const;

  const legalLinks = [
    { label: "서비스 이용약관", href: "/daechi-phone/service-terms" },
    { label: "개인정보처리방침", href: "/daechi-phone/privacy-policy" },
    { label: "미성년자 관련 추가 약관", href: "/daechi-phone/minor-terms" },
    { label: "MDM 면책 조항", href: "/daechi-phone/mdm-disclaimer" },
    { label: "환불 정책", href: "/daechi-phone/refund-policy" },
    { label: "위치정보 이용약관", href: "/daechi-phone/location-terms" }
  ] as const;

  return (
    <footer className="snap-none border-t border-slate-200 bg-[#f4f6f8]">
      <div className="mx-auto max-w-6xl px-6 py-8 sm:px-8 sm:py-10">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {footerGroups.map((group) => (
            <div key={group.title}>
              <p className="text-[13px] font-semibold leading-none text-[#4B5563]">{group.title}</p>
              <ul className="mt-3 space-y-1.5 text-[12px] leading-snug text-[#6B7280]">
                {group.items.map((item) => (
                  <li key={item.label}>
                    {"href" in item && item.href ? (
                      "external" in item && item.external ? (
                        <a href={item.href} target="_blank" rel="noopener noreferrer" className="transition hover:text-slate-900">
                          {item.label}
                        </a>
                      ) : (
                        <Link href={item.href} className="transition hover:text-slate-900">
                          {item.label}
                        </Link>
                      )
                    ) : (
                      <span>{item.label}</span>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-8 border-t border-slate-200 pt-6">
          <p className="text-[14px] font-semibold text-[#4B5563]">(주)대치루트</p>
          <div className="mt-3 text-[11px] leading-relaxed text-[#9CA3AF]">
            <p>사업자 등록번호 : 150-07-03484 | 대표 : 정현우</p>
            <p>주소 : 서울특별시 강남구 개포로 310</p>
            <p>대표 연락처 : 01055810436 | 이메일 : contact@daechiroot.com</p>
            <p>특허 출원 중 · 출원번호 10-2026-0068593</p>
          </div>

          <div className="mt-6 grid grid-cols-1 gap-x-8 gap-y-1 sm:grid-cols-2 lg:grid-cols-4">
            {legalLinks.map((item) => (
              <Link key={item.href} href={item.href} className="text-[12px] text-[#6B7280] transition hover:text-slate-900">
                {item.label}
              </Link>
            ))}
          </div>

          <p className="mt-6 text-[11px] text-[#9CA3AF]">© {new Date().getFullYear()} daechiroot. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
