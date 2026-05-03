"use client";

import Link from "next/link";
import Image from "next/image";
import { AppHeader } from "@/components/AppHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { homeEvidenceSection } from "@/lib/evidenceSections";

const metrics = [
  {
    value: "6개월",
    label: "초기 사용자 구독 유지율 평균"
  },
  {
    value: "1.6등급↑",
    label: "성적 향상",
    source: "초기 사용자 중 6개월 이상 사용자 평균"
  },
  {
    value: "2.1시간",
    label: "초기 사용자 순공 시간 증가 평균"
  }
];

const landingPrimaryButtonClass =
  "rounded-[10px] bg-[#1B2A4A] px-6 py-3 text-center text-[14px] font-semibold text-white transition hover:bg-[#13223F]";
const landingSecondaryButtonClass =
  "rounded-[10px] border border-[#D1D5DB] bg-transparent px-6 py-3 text-center text-[14px] font-semibold text-[#6B7280] transition hover:border-[#9CA3AF]";

const homeTeamProfiles = [
  {
    id: "advisor",
    imageSrc: "/team-profile-advisor.png",
    imageAlt: "대치루트 정현우 시스템 총괄 디렉터 프로필 사진",
    attribution: "정현우 · 대치루트 시스템 총괄 디렉터",
    bio: [
      "인하대학교 산업경영공학과 재학",
      "FOBISIA CODING 우승 (2018)",
      "휘문고등학교 졸업",
    ]
  },
  {
    id: "jinhyuk",
    imageSrc: "/founder-jinhyuk.png",
    imageAlt: "대치루트 공동 창업자 오진혁 사진",
    attribution: "오진혁 · 대치루트 수석 교육 디렉터",
    bio: [
      "서울대학교 학부대학 광역 재학",
      "수백명의 학생 학습 코칭 경험",
      "중산고등학교 졸업"
    ]
  },
  {
    id: "tech-lead",
    imageSrc: "/team-profile-jeong-yoonsung.png",
    imageAlt: "대치루트 정윤성 전략 고문 프로필 사진",
    attribution: "정윤성 · 대치루트 전략 고문",
    bio: [
      "성균관대학교 약학대학원 박사",
      "(전) 삼성물산 상사부문 의약/바이오 사업 책임",
      "(전) 대웅제약 신규 사업 총괄",
      "(전) 메디온 사업운영 본부장",
      "(전) 동아제약 브라질 법인장",
      "(전) 제이씨앤피 총괄 부사장",
    ]
  }
] as const;

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-[#111827]">
      <AppHeader />

      <main className="[--section-spacing:80px] md:[--section-spacing:120px]">
        <section className="snap-none border-b border-white/10 bg-[#13223F]">
          <div className="mx-auto min-h-auto max-w-6xl bg-[#13223F] px-6 py-12 md:min-h-screen md:px-6 md:py-14 sm:px-12">
            <div className="grid min-h-0 items-center gap-10 md:min-h-[calc(100vh-7rem)]">
              <div className="order-1 mt-5 flex h-full w-full flex-col items-start justify-center text-left lg:mt-0">
                <p className="inline-flex w-fit rounded-[8px] bg-white/10 px-[14px] py-[6px] text-[13px] font-medium text-white">
                  대치폰 5월 정식 출시
                </p>
                <h1 className="mt-5 break-keep text-[30px] font-bold leading-[1.25] tracking-[-0.025em] text-white md:text-[44px] md:leading-[1.15] lg:text-[52px]">
                  서울대 멘토진이 학습 환경을 설계합니다
                </h1>
                <p className="mt-7 max-w-xl whitespace-pre-line break-keep text-[18px] leading-[1.75] text-white/90 md:text-[19px]">
                  {"공부시간에 집중모드가 자동으로 켜지는 아이폰\n독서실 입퇴실 문자 발송·서울대 AI 코칭·학부모 리포트까지"}
                </p>
              </div>
            </div>
            <div className="mt-12 flex flex-row items-stretch justify-center">
              {metrics.map((metric, idx) => (
                <div
                  key={metric.value}
                  className={`flex-1 px-3 text-center md:px-6 ${
                    idx < metrics.length - 1 ? "border-r border-white/20" : ""
                  }`}
                >
                  <div>
                    <p className="text-[22px] font-bold leading-none tracking-[-0.03em] text-white md:text-[28px]">{metric.value}</p>
                    <p className="mt-1 text-[11px] text-white/75 md:text-[13px]">{metric.label}</p>
                    <p className="mt-0.5 text-[10px] text-white/60 md:text-[11px]">{metric.source}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-white py-[var(--section-spacing)]">
          <div className="mx-auto max-w-6xl px-6 sm:px-8">
            <p className="text-center text-[13px] uppercase tracking-[0.05em] text-[#9CA3AF]">왜 공부폰인가</p>
            <h2 className="mt-3 break-keep text-center text-[22px] font-semibold text-[#111827] md:text-[32px]">
              {homeEvidenceSection.need.title}
            </h2>
            <div className="mx-auto mt-8 max-w-[860px] space-y-5 text-center">
              {homeEvidenceSection.need.paragraphs.map((paragraph) => (
                <p key={paragraph} className="whitespace-pre-line break-keep text-[16px] leading-[1.8] text-[#4B5563]">
                  {paragraph}
                </p>
              ))}
            </div>
            <div className="mx-auto mt-14 grid max-w-[1120px] grid-cols-1 gap-5 md:grid-cols-3">
              {homeEvidenceSection.need.cards.map((card, index) => {
                const isSolution = index === 2;
                const number = String(index + 1).padStart(2, "0");
                const containerClassName = isSolution
                  ? "rounded-[20px] border-2 border-[#1B2A4A] bg-white p-6 md:p-10"
                  : "rounded-[20px] border border-[#E5E7EB] bg-[#FAFAFA] p-6 md:p-10";
                const numberClassName = isSolution
                  ? "inline-flex rounded-full bg-[#1B2A4A] px-3 py-1 text-[12px] font-semibold tracking-[0.08em] text-white"
                  : "inline-flex rounded-full border border-[#D1D5DB] bg-white px-3 py-1 text-[12px] font-semibold tracking-[0.08em] text-[#6B7280]";
                const titleClassName = isSolution
                  ? "mt-5 text-[20px] font-semibold tracking-[-0.02em] text-[#1B2A4A]"
                  : "mt-5 text-[20px] font-semibold tracking-[-0.02em] text-[#111827]";
                const bodyClassName = isSolution
                  ? "mt-3 break-keep text-[15px] leading-[1.7] text-[#334155]"
                  : "mt-3 break-keep text-[15px] leading-[1.7] text-[#6B7280]";

                return (
                  <article key={card.title} className={containerClassName}>
                    <p className={numberClassName}>{number}</p>
                    <p className={titleClassName}>{card.title}</p>
                    <p className={bodyClassName}>{card.body}</p>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section className="bg-[#FAFAFA] py-[var(--section-spacing)]" aria-label="팀 프로필">
          <div className="mx-auto max-w-6xl px-6 sm:px-8">
            <div
              className="flex snap-x snap-mandatory gap-5 overflow-x-auto overscroll-x-contain pb-3 [scrollbar-width:thin] sm:gap-6 [&::-webkit-scrollbar]:h-1.5 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-[#D1D5DB] [&::-webkit-scrollbar-track]:bg-transparent"
              style={{ scrollPaddingInline: "max(1.5rem, env(safe-area-inset-left))" }}
            >
              {homeTeamProfiles.map((profile) => (
                <article
                  key={profile.id}
                  className="flex w-[min(calc(100vw-3rem),300px)] shrink-0 snap-start flex-col sm:w-[280px]"
                >
                  <div className="overflow-hidden rounded-2xl border border-[#E5E7EB] bg-white shadow-sm">
                    <Image
                      src={profile.imageSrc}
                      alt={profile.imageAlt}
                      width={680}
                      height={960}
                      className="aspect-[3/4] h-auto w-full object-cover"
                      sizes="(max-width: 640px) 85vw, 300px"
                    />
                  </div>
                  <div className="mt-5 flex min-h-0 flex-1 flex-col text-left">
                    <p className="text-[14px] font-semibold leading-snug text-[#111827] sm:text-[15px]">{profile.attribution}</p>
                    <p className="mt-3 text-[11px] font-semibold tracking-[0.04em] text-[#9CA3AF]">주요 약력</p>
                    <ul className="mt-2 list-outside list-disc space-y-2 pl-5 text-[13px] leading-[1.55] text-[#4B5563] marker:text-[#1B2A4A] sm:text-[14px]">
                      {profile.bio.map((line) => (
                        <li key={line} className="break-keep pl-0.5">
                          {line}
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              ))}
            </div>
            <div className="mt-8 flex flex-col items-center gap-3 text-center">
              <Link href="/about" className={`inline-flex ${landingPrimaryButtonClass}`}>
                대치루트 이야기 전체 읽기 →
              </Link>
              <p className="text-[13px] text-[#9CA3AF]">팀 소개 · 옆으로 스크롤하여 확인하세요</p>
            </div>
          </div>
        </section>

        <section className="bg-white py-[var(--section-spacing)]">
          <div className="mx-auto px-6 sm:px-8">
            <p className="text-center text-[13px] uppercase tracking-[0.05em] text-[#9CA3AF]">대치루트 제품</p>
            <h2 className="mt-3 break-keep text-center text-[22px] font-semibold text-[#111827] md:text-[32px]">지금 만나볼 수 있는 제품</h2>

            <div className="mx-auto mt-12 grid max-w-[1200px] grid-cols-1 gap-5 lg:grid-cols-3">
              <article className="rounded-[20px] border-2 border-[#1B2A4A] bg-white p-6 md:p-10">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="rounded-md bg-[#1B2A4A] px-3 py-1 text-[12px] font-semibold text-white">대치폰</span>
                  <span className="rounded-md bg-[#EEF2FF] px-[10px] py-[3px] text-[11px] text-[#1B2A4A]">5월 출시 · 출시 알림 신청자 모집 중</span>
                </div>
                <h3 className="mt-4 break-keep text-[20px] font-semibold text-[#111827] md:text-[22px]">수험생 전용 관리 스마트폰</h3>
                <p className="mt-2.5 whitespace-pre-line text-[15px] leading-[1.7] text-[#6B7280]">
                  {"아이폰 기반\n공부할 땐 자동으로 집중 모드\n독서실 입퇴실 문자 발송·서울대 AI 코칭·학부모 리포트 포함"}
                </p>
                <p className="mt-5 text-[14px] text-[#9CA3AF]">기기 세팅 + 3개월 기본 관리 149,000원</p>
                <Link
                  href="/phone"
                  className={`mt-6 block w-full ${landingPrimaryButtonClass} md:inline-block md:w-auto`}
                >
                  대치폰 자세히 보기 →
                </Link>
              </article>

              <article className="rounded-[20px] border-2 border-[#1B2A4A] bg-white p-6 md:p-10">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="rounded-md bg-[#1B2A4A] px-3 py-1 text-[12px] font-semibold text-white">학습 관리 구독 연장</span>
                  <span className="rounded-md bg-[#EEF2FF] px-[10px] py-[3px] text-[11px] text-[#1B2A4A]">이용 가능</span>
                </div>
                <h3 className="mt-4 break-keep text-[20px] font-semibold text-[#111827] md:text-[22px]">기기는 그대로, 관리만 연장</h3>
                <p className="mt-2.5 whitespace-pre-line text-[15px] leading-[1.7] text-[#6B7280]">
                  {"이미 대치폰·대치탭을 사용 중이라면\n월 구독으로 학습 관리 서비스를\n수능까지 이어갈 수 있습니다"}
                </p>
                <p className="mt-5 text-[14px] text-[#9CA3AF]">기본 월 29,000원(부가세 별도) · 프리미엄 월 299,000원</p>
                <Link
                  href="/management-subscription"
                  className={`mt-6 block w-full ${landingPrimaryButtonClass} md:inline-block md:w-auto`}
                >
                  구독 연장 보기 →
                </Link>
              </article>

              <article className="rounded-[20px] border border-[#E5E7EB] bg-[#FAFAFA] p-6 md:p-10">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="rounded-md bg-[#F3F4F6] px-3 py-1 text-[12px] font-semibold text-[#9CA3AF]">대치탭</span>
                  <span className="rounded-md bg-[#F3F4F6] px-[10px] py-[3px] text-[11px] text-[#9CA3AF]">출시 예정</span>
                </div>
                <h3 className="mt-4 break-keep text-[20px] font-semibold text-[#9CA3AF] md:text-[22px]">수험생 전용 관리 태블릿</h3>
                <p className="mt-2.5 whitespace-pre-line text-[15px] leading-[1.7] text-[#9CA3AF]">
                  {"인강·필기에 최적화된 아이패드에\n대치루트 학습 관리 시스템을 탑재합니다\n대치폰과 함께 쓰면 역할 분리가 완성됩니다"}
                </p>
                <Link
                  href="/notify"
                  className={`mt-6 block w-full ${landingSecondaryButtonClass} md:inline-block md:w-auto`}
                >
                  출시 알림 신청
                </Link>
              </article>
            </div>
          </div>
        </section>

      </main>

      <SiteFooter />
    </div>
  );
}
