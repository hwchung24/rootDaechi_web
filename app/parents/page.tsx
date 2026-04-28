"use client";

import Link from "next/link";
import { BarChart2, MapPin } from "lucide-react";
import { AppHeader } from "@/components/AppHeader";
import { LandingHeroIPadVisual } from "@/components/LandingHeroIPadVisual";
import { SiteFooter } from "@/components/SiteFooter";
import { parentsEvidenceSection } from "@/lib/evidenceSections";

const parentFeatures = [
  {
    title: "오늘 독서실엔 잘 들어갔는지",
    description:
      "독서실에 도착하면 체크인, 떠나면 체크아웃 알림이 자동으로 옵니다.\n도착 시간과 체류 시간을 정확히 확인할 수 있습니다",
    detail: "→ 공부 장소 설정 → 실시간 감지 → 카카오톡 알림",
    Icon: MapPin
  },
  {
    title: "오늘 공부는 잘 했는지",
    description: "순공 시간, 학습 계획 달성률이\n매일 카카오톡 리포트로 자동 전송됩니다",
    detail: "→ 일간·주간·월간 리포트 자동 발송",
    Icon: BarChart2
  },
  {
    title: "오늘 컨디션은 어땠는지",
    description:
      "학생의 루틴 흐름을 바탕으로\n필요한 학습 코칭 포인트를 정리해,\n매일 카카오톡 리포트로 자동 전송됩니다",
    detail: "→ 일간·주간·월간 리포트 자동 발송",
    Icon: BarChart2
  }
];

const parentFaq = [
  {
    question: "아이가 세팅을 우회하거나 앱을 지울 수 있나요?",
    answer:
      "Apple 공식 기업 보안용 MDM 기반의 특허 출원 중인 기술로\n잠겨 있어서, 아이가 직접 해제할 수 없습니다.\n어떤 방법으로도 앱 삭제나 설정 변경이 차단됩니다."
  },
  {
    question: "부모가 매번 앱을 들어가서 확인해야 하나요?",
    answer:
      "아니요. 처음에 알림 시간 설정만 하시면\n이후에는 카카오톡으로 리포트가 자동으로 옵니다.\n별도 앱을 매일 열 필요 없습니다."
  },
  {
    question: "자유 시간에는 어떻게 되나요?",
    answer:
      "부모님이 설정한 자유 시간에는\n유튜브, SNS 등 모든 앱을 자유롭게 사용할 수 있습니다.\n시간대별 환경 설계가 가능합니다."
  },
  {
    question: "중도 해지가 되나요?",
    answer: "월 단위 구독이라 언제든 위약금 없이 해지 가능합니다.\n기기 세팅 이후 월 29,000원(부가세 별도) 구독을 유지하시면 됩니다."
  },
  {
    question: "기존에 쓰던 아이폰을 그대로 써도 되나요?",
    answer:
      "네, 대치폰 세팅으로 진행하시면, 가져오신 아이폰에 대면 세팅을 진행하고\n바로 사용 가능합니다."
  }
];

const studyroomComparisonRows = [
  { item: "월 비용", studyroom: "50~90만원", daechi: "29,000원" },
  { item: "관리 범위", studyroom: "독서실 안에서만 관리", daechi: "24시간, 어디서든 관리" },
  { item: "출석 체크", studyroom: "o", daechi: "o" },
  { item: "체류 여부 확인", studyroom: "o", daechi: "o" },
  { item: "스마트폰 통제", studyroom: "o", daechi: "o" },
  { item: "플래너 점검", studyroom: "o", daechi: "o" },
  { item: "질의응답", studyroom: "o", daechi: "o" },
  { item: "학습 코칭", studyroom: "o", daechi: "o" }
];

const statCardClass = "rounded-2xl border border-[#E5E7EB] bg-white px-8 py-8 text-center";
const testimonialCardClass = "rounded-2xl border border-[#E5E7EB] bg-white px-8 py-8";
const featureCardClass = "rounded-[20px] border border-[#E5E7EB] bg-white p-6 transition hover:border-[#D1D5DB] md:p-10";

export default function ParentsPage() {
  return (
    <div className="min-h-screen bg-[#f8f9fa] text-slate-900">
      <AppHeader>
        <Link href="/" className="transition hover:text-slate-900">
          홈
        </Link>
        <Link href="/students" className="transition hover:text-slate-900">
          학생 페이지
        </Link>
        <Link href="/pricing" className="transition hover:text-slate-900">
          패키지·가격
        </Link>
      </AppHeader>

      <main className="[--section-spacing:80px] md:[--section-spacing:120px]">
        <section className="relative left-1/2 right-1/2 w-screen -translate-x-1/2 border-b border-white/10 bg-[#13223F]">
          <div className="mx-auto min-h-auto max-w-6xl bg-[#13223F] px-6 py-12 md:min-h-screen md:px-6 md:py-14 sm:px-12">
            <div className="grid min-h-0 items-center gap-10 md:min-h-[calc(100vh-7rem)] lg:grid-cols-[55fr_45fr] lg:items-center lg:gap-12">
            <div className="order-1 mt-5 flex h-full w-full flex-col items-start justify-center text-left lg:order-1 lg:mt-0">
              <p className="inline-block w-fit rounded-md bg-white/10 px-3 py-[5px] text-[13px] font-medium text-white">
                학부모 페이지
              </p>
              <h1 className="mt-5 break-keep text-[30px] font-bold leading-[1.25] tracking-[-0.03em] text-white md:text-[44px] md:leading-[1.15] lg:text-[52px]">
              자녀와 갈등이 사라졌어요

              </h1>
              <p className="mt-5 break-keep text-[17px] leading-[1.7] text-white">
                확인 가능한 데이터가 부모님과 학생 간 갈등을 줄여줍니다
              </p>
              <div className="mt-8 flex flex-col gap-3 md:flex-row md:items-center md:gap-5">
                <Link
                  href="/inquiry"
                  className="inline-flex w-full items-center justify-center rounded-[10px] bg-white px-7 py-3.5 text-[15px] font-semibold text-[#1B2A4A] md:w-auto"
                >
                  지금 상담 신청 →
                </Link>
                <Link
                  href="/phone"
                  className="mt-3 block text-center text-[15px] font-medium text-white/80 hover:underline md:mt-0 md:inline-flex md:text-left"
                >
                  대치폰 자세히 보기
                </Link>
              </div>
            </div>

            <div className="order-2 hidden h-full w-full items-center justify-center self-center lg:order-2 lg:flex lg:justify-end">
              <div className="w-full max-w-[420px] md:max-w-[620px]">
                <LandingHeroIPadVisual />
              </div>
            </div>
            </div>
          </div>
        </section>

        <section className="bg-white py-[var(--section-spacing)]">
          <div className="mx-auto max-w-6xl px-6 sm:px-12">
          <div className="text-center">
            <p className="text-[13px] font-medium uppercase tracking-[0.05em] text-[#9CA3AF]">매일 안심할 수 있도록</p>
            <h2 className="mt-3 text-2xl md:text-4xl leading-snug break-keep font-semibold tracking-[-0.02em] text-[#111827]">학부모님이 매일 받는 것들</h2>
          </div>

          <div className="hide-scrollbar mx-auto mb-14 mt-12 max-w-[980px] overflow-x-auto pb-2">
            <div className="flex min-w-max gap-4 lg:min-w-0 lg:justify-center">
              {[1, 2, 3].map((n) => (
                <div
                  key={n}
                  className="w-[220px] shrink-0 overflow-hidden rounded-2xl border border-[#E5E7EB] bg-white shadow-[0_8px_24px_rgba(17,24,39,0.06)] sm:w-[250px] lg:w-[300px]"
                >
                  <div className="aspect-[9/19.5] w-full bg-gradient-to-b from-[#EEF2FF] via-[#F8FAFC] to-[#E5E7EB]">
                    <div className="flex h-full items-center justify-center">
                      <p className="rounded-md bg-white/80 px-3 py-1.5 text-[12px] font-medium text-[#6B7280]">
                        샘플 이미지 {n}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mx-auto mt-14 grid max-w-[1100px] grid-cols-1 gap-5 lg:grid-cols-3">
            {parentFeatures.map((feature) => {
              const Icon = feature.Icon;
              return (
                <article key={feature.title} className={featureCardClass}>
                  <Icon className="mb-5 h-[26px] w-[26px] text-[#1B2A4A]" strokeWidth={1.8} aria-hidden />
                  <h3 className="text-base md:text-lg break-keep leading-snug font-semibold text-[#111827]">{feature.title}</h3>
                  <p className="mt-2.5 whitespace-pre-line break-keep text-[15px] leading-[1.7] text-[#6B7280]">{feature.description}</p>
                  <p className="mt-5 border-t border-[#F3F4F6] pt-4 text-[13px] text-[#9CA3AF]">{feature.detail}</p>
                </article>
              );
            })}
          </div>


          </div>
        </section>

        <section className="bg-[#FAFAFA] py-[var(--section-spacing)]">
          <div className="mx-auto max-w-6xl px-6 sm:px-12">
          <p className="text-center text-[13px] font-medium uppercase tracking-[0.05em] text-[#9CA3AF]">실제 사용자 변화</p>
          <h2 className="mt-3 text-center text-2xl md:text-4xl leading-snug break-keep font-semibold tracking-[-0.02em] text-[#111827]">
            {parentsEvidenceSection.impact.title}
          </h2>
          <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-3">
            {parentsEvidenceSection.impact.stats.map((stat) => (
              <article key={stat.label} className={statCardClass}>
                <p className="text-[13px] font-medium text-[#9CA3AF]">{stat.label}</p>
                <p className="mt-2 text-[22px] font-semibold text-[#111827]">{stat.value}</p>
                <p className="mt-2 text-[13px] text-[#6B7280]">{stat.sub}</p>
              </article>
            ))}
          </div>
          <p className="mx-auto mt-8 max-w-[760px] whitespace-pre-line break-keep text-center text-[15px] leading-[1.8] text-[#6B7280]">
            {parentsEvidenceSection.impact.description}
          </p>
          </div>
        </section>

        <section className="bg-white py-[var(--section-spacing)]">
          <div className="mx-auto max-w-6xl px-6 sm:px-12">
          <p className="text-center text-[13px] font-medium uppercase tracking-[0.05em] text-[#9CA3AF]">비용 비교</p>
          <h2 className="mt-3 text-2xl md:text-4xl leading-snug break-keep text-center font-semibold tracking-[-0.02em] text-[#111827]">관리형 독서실과 비교해보세요</h2>
          <p className="mt-3 break-keep text-center text-[14px] text-[#6B7280] md:text-[16px]">비용은 20분의 1, 관리는 24시간</p>
          <div className="mx-auto mt-10 max-w-[900px] overflow-hidden rounded-2xl border border-[#E5E7EB]">
            <div className="grid grid-cols-[2fr_1fr_1fr] bg-[#F9FAFB] px-5 py-3.5 text-[13px] font-semibold text-[#6B7280]">
              <p>비교 항목</p>
              <p className="text-center">관리형 독서실</p>
              <p className="-my-3.5 -mr-5 bg-[rgba(238,242,255,0.6)] px-5 py-3.5 text-center font-bold text-[#1B2A4A]">대치폰</p>
            </div>

            {studyroomComparisonRows.map((row, idx, arr) => (
              <div
                key={row.item}
                className={`grid grid-cols-[2fr_1fr_1fr] px-5 py-4 ${idx < arr.length - 1 ? "border-b border-[#F3F4F6]" : ""}`}
              >
                <p className="text-[15px] text-[#111827]">{row.item}</p>
                <p className="text-center text-[14px] text-[#9CA3AF]">{row.studyroom}</p>
                <p className="text-center text-[14px] font-semibold text-[#1B2A4A]">{row.daechi}</p>
              </div>
            ))}
          </div>
          <p className="mt-8 text-center text-[15px] text-[#6B7280]">기기 세팅 149,000원 · 이후 월 29,000원(부가세 별도) · 위약금 없음</p>

          </div>
        </section>

        <section className="bg-[#FAFAFA] py-[var(--section-spacing)]">
          <div className="mx-auto max-w-6xl px-6 sm:px-12">
          <p className="text-center text-[13px] font-medium uppercase tracking-[0.05em] text-[#9CA3AF]">왜 그런걸까</p>
          <h2 className="mt-3 text-center text-2xl md:text-4xl leading-snug break-keep font-semibold tracking-[-0.02em] text-[#111827]">
            {parentsEvidenceSection.reason.title}
          </h2>
          <p className="mx-auto mt-6 max-w-[820px] whitespace-pre-line break-keep text-center text-[15px] leading-[1.8] text-[#6B7280]">
            {parentsEvidenceSection.reason.body}
          </p>
          </div>
        </section>

        <section className="bg-white py-[var(--section-spacing)]">
          <div className="mx-auto max-w-6xl px-6 sm:px-12">
          <p className="text-center text-[13px] font-medium uppercase tracking-[0.05em] text-[#9CA3AF]">학부모 후기</p>
          <h2 className="mt-3 text-2xl md:text-4xl leading-snug break-keep text-center font-semibold tracking-[-0.02em] text-[#111827]">
            이젠 아이를 믿을 수 있게 됐습니다
          </h2>
          <div className="mt-8 grid grid-cols-1 gap-3 lg:grid-cols-3">
            <article className={testimonialCardClass}>
              <p className="mt-3.5 whitespace-pre-line text-[15px] leading-[1.7] text-[#374151]">
                &ldquo;데이터로 대화하니까 갈등이 사라졌어요.
                {"\n"}독서실에 몇 시간 있었는지 리포트로 보이니까,
                {"\n"}처음으로 아이를 의심하지 않고 믿을 수 있게 됐습니다.&rdquo;
              </p>
              <div className="mt-5 border-t border-[#F3F4F6]" />
              <p className="mt-3.5 text-[13px] text-[#9CA3AF]">대치동 학부모 · 고3 · 5개월 사용</p>
            </article>
            <article className={testimonialCardClass}>
              <p className="mt-3.5 whitespace-pre-line text-[15px] leading-[1.7] text-[#374151]">
                &ldquo;잔소리할 필요가 없어졌어요.
                {"\n"}통제하는 부모가 아니라
                {"\n"}선물해주는 부모가 된 것 같아요. 아이도 감시받는다는 느낌 없이 스스로 루틴을 지키기 시작했습니다.&rdquo;
              </p>
              <div className="mt-5 border-t border-[#F3F4F6]" />
              <p className="mt-3.5 text-[13px] text-[#9CA3AF]">목동 학부모 · 고2 · 3개월 사용</p>
            </article>
            <article className={testimonialCardClass}>
              <p className="mt-3.5 text-[15px] leading-[1.7] text-[#374151]">&ldquo;AI가 계획을 잡아주니까 4개월째 페이스가 무너지지 않았어요. 의지력 문제가 아니라 구조 문제였던 거예요.&rdquo;</p>
              <div className="mt-5 border-t border-[#F3F4F6]" />
              <p className="mt-3.5 text-[13px] text-[#9CA3AF]">강남구 학부모 · 고3 자녀 · 4개월 사용</p>
            </article>
          </div>
          </div>
        </section>

        <section className="mt-8 bg-[#FAFAFA] py-[var(--section-spacing)]">
          <div className="mx-auto max-w-6xl px-6 sm:px-12">
          <h2 className="text-2xl md:text-4xl leading-snug break-keep text-center font-semibold tracking-[-0.02em] text-[#111827]">자주 묻는 질문</h2>
          <div className="mx-auto mt-12 max-w-[760px]">
            {parentFaq.map((item, idx) => (
              <article
                key={item.question}
                className={`pb-7 pt-6 ${idx < parentFaq.length - 1 ? "border-b border-[#E5E7EB]" : ""}`}
              >
                <p className="mb-2.5 text-[16px] font-semibold text-[#111827]">{item.question}</p>
                <p className="whitespace-pre-line break-keep text-[15px] leading-[1.8] text-[#6B7280]">
                  {item.answer}
                  {item.question === "아이가 세팅을 우회하거나 앱을 지울 수 있나요?" ? (
                    <span className="text-[13px] text-[#9CA3AF]"> (특허 출원번호: 10-2026-0068593)</span>
                  ) : null}
                </p>
              </article>
            ))}
          </div>
          </div>
        </section>

        <section className="bg-white py-[var(--section-spacing)] text-center">
          <div className="mx-auto max-w-6xl px-6 sm:px-12">
            <p className="text-center text-[13px] font-medium uppercase tracking-[0.05em] text-[#9CA3AF]">시작 안내</p>
            <h2 className="text-2xl md:text-4xl leading-snug break-keep font-semibold tracking-[-0.02em] text-[#111827]">
              지금 시작해도 늦지 않았습니다
            </h2>
            <div className="mt-6">
              <Link
                href="/inquiry"
                className="inline-flex w-auto items-center justify-center rounded-[10px] bg-[#1B2A4A] px-8 py-3.5 text-[15px] font-semibold text-white"
              >
                지금 상담 신청 →
              </Link>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
