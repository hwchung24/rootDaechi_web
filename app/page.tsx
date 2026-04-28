"use client";

import Link from "next/link";
import Image from "next/image";
import { AppHeader } from "@/components/AppHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { homeEvidenceSection } from "@/lib/evidenceSections";

const metrics = [
  {
    value: "6개월",
    label: "사용자 23명 구독 유지율 평균"
  },
  {
    value: "1.6등급↑",
    label: "수능 성적 향상",
    source: "사용자 23명 중 6개월 이상 사용자 평균"
  },
  {
    value: "2.1시간",
    label: "사용자 23명 순공 시간 증가 평균"
  }
];

const landingPrimaryButtonClass =
  "rounded-[10px] bg-[#1B2A4A] px-6 py-3 text-center text-[14px] font-semibold text-white transition hover:bg-[#13223F]";
const landingSecondaryButtonClass =
  "rounded-[10px] border border-[#D1D5DB] bg-transparent px-6 py-3 text-center text-[14px] font-semibold text-[#6B7280] transition hover:border-[#9CA3AF]";

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

        <section className="bg-[#FAFAFA] py-[var(--section-spacing)]">
          <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-10 px-6 sm:px-8 lg:grid-cols-[340px_minmax(0,1fr)] lg:gap-14">
            <div className="mx-auto w-full max-w-[280px] lg:max-w-[340px]">
              <div className="overflow-hidden rounded-2xl border border-[#E5E7EB] bg-white">
                <Image
                  src="/founder-jinhyuk.png"
                  alt="대치루트 창업자 진혁 사진"
                  width={680}
                  height={960}
                  className="h-auto w-full object-cover"
                />
              </div>
            </div>

            <div className="mx-auto w-full max-w-[720px] text-center lg:mx-0 lg:text-left">
              <span className="mb-[-8px] block text-[40px] leading-none text-[#D1D5DB]">&ldquo;</span>
              <p className="break-keep text-[22px] font-semibold leading-[1.55] text-[#111827]">
                저는 중학교 때 하루 종일 게임만 했습니다. 스마트폰 하나를 이기지 못해서였습니다. 대치루트는 그 경험에서 시작했습니다.
              </p>
              <p className="mt-5 text-[14px] text-[#9CA3AF]">— 오진혁 · 대치루트 공동 창업자 · 서울대학교 재학</p>
              <div className="mt-3 text-right lg:text-left">
                <Link href="/about" className="text-[13px] font-medium text-[#1B2A4A] underline underline-offset-4">
                  창업자 이야기 전체 읽기 →
                </Link>
              </div>
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
                <p className="mt-5 text-[14px] text-[#9CA3AF]">기본 월 29,000원 · 프리미엄 월 299,000원</p>
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
