"use client";

import Link from "next/link";
import { BarChart2, Bell, MapPin } from "lucide-react";
import { AppHeader } from "@/components/AppHeader";
import { LandingHeroIPadVisual } from "@/components/LandingHeroIPadVisual";
import { SiteFooter } from "@/components/SiteFooter";

const parentFeatures = [
  {
    title: "지금 어디 있는지 바로 압니다",
    description:
      "공부 장소에 도착하면 체크인, 떠나면 체크아웃.\n도착 시간과 체류 시간이 부모님께 자동 전송됩니다.",
    detail: "→ 공부 장소 설정 → 실시간 감지 → 카카오톡 알림",
    Icon: MapPin
  },
  {
    title: "오늘 몇 시간 집중했는지 매일 받아봅니다",
    description: "순공 시간·앱 사용 패턴·루틴 달성률이\n매일 카카오톡 리포트로 정리되어 옵니다.",
    detail: "→ 일간·주간·월간 리포트 자동 발송",
    Icon: BarChart2
  },
  {
    title: "공부 시작했는지 알림으로 확인합니다",
    description:
      "설정한 시간에 공부를 시작하지 않으면\n부모님께 먼저 알림이 갑니다. 물어볼 필요 없습니다.",
    detail: "→ 학습 시작 시간 설정 → 미시작 시 즉시 알림",
    Icon: Bell
  }
];

const parentFaq = [
  {
    question: "아이가 세팅을 우회하거나 앱을 지울 수 있나요?",
    answer:
      "불가능합니다. 특허 출원 중인 기업 보안 수준의 MDM 기술로\n잠겨 있어서, 아이가 직접 해제할 수 없습니다.\n어떤 방법으로도 앱 삭제나 설정 변경이 차단됩니다."
  },
  {
    question: "부모가 매번 앱을 들어가서 확인해야 하나요?",
    answer:
      "아니요. 처음 시간표 세팅만 하면\n이후에는 카카오톡으로 리포트가 자동으로 옵니다.\n별도 앱을 매일 열 필요 없습니다."
  },
  {
    question: "자유 시간에는 어떻게 되나요?",
    answer:
      "부모님이 설정한 자유 시간에는\n유튜브, SNS 등 모든 앱을 자유롭게 사용할 수 있습니다.\n통제가 아니라 시간대별 환경 설계입니다."
  },
  {
    question: "중도 해지가 되나요?",
    answer: "월 단위 구독이라 언제든 위약금 없이 해지 가능합니다.\n기기 세팅 이후 월 49,000원 구독을 유지하시면 됩니다."
  },
  {
    question: "기존에 쓰던 아이폰을 그대로 써도 되나요?",
    answer:
      "네, 아이폰만 있으면 됩니다.\n대치루트 세팅(149,000원)으로 대면 세팅을 진행하고\n바로 사용 가능합니다. 새 기기 구매가 필요 없습니다."
  }
];

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

      <main className="mx-auto max-w-6xl px-5 sm:px-8">
        <section className="relative left-1/2 right-1/2 min-h-auto w-screen -translate-x-1/2 border-b border-white/10 bg-[#1B2A4A] px-5 py-6 md:min-h-screen md:pb-12 md:pt-20 sm:pb-16">
          <div className="mx-auto max-w-6xl px-0 sm:px-8">
            <div className="grid min-h-0 items-center gap-8 md:min-h-[calc(100vh-80px)] lg:grid-cols-[55fr_45fr] lg:gap-10">
            <div className="order-2 mt-5 flex w-full flex-col justify-center lg:order-1 lg:mt-0">
              <p className="inline-block w-fit rounded-md bg-white/10 px-3 py-[5px] text-[13px] font-medium text-white">
                학부모 페이지
              </p>
              <h1 className="mt-5 break-keep text-[36px] font-bold leading-[1.15] tracking-[-0.03em] text-white sm:text-[42px] lg:text-[48px]">
                잔소리 한 번 없이
                <br />
                아이를 믿게 됩니다
              </h1>
              <p className="mt-5 break-keep text-[17px] leading-[1.7] text-white">
                위치·공부 시간·루틴 데이터가 매일 카카오톡으로 옵니다.
                <br />
                묻지 않아도, 싸우지 않아도 됩니다.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-5">
                <Link
                  href="/notify"
                  className="inline-flex items-center justify-center rounded-[10px] bg-white px-7 py-3.5 text-[15px] font-semibold text-[#1B2A4A]"
                >
                  지금 상담 신청 →
                </Link>
                <Link href="/pricing" className="text-[15px] font-medium text-white/80 hover:underline">
                  패키지 보기
                </Link>
              </div>
            </div>

            <div className="order-1 hidden items-center justify-center self-center lg:order-2 lg:flex lg:justify-end">
              <div className="w-full max-w-[420px] md:max-w-[500px]">
                <LandingHeroIPadVisual />
              </div>
            </div>
            </div>
          </div>
        </section>

        <section className="bg-white py-14 md:py-24">
          <div className="text-center">
            <p className="text-[13px] uppercase tracking-[0.05em] text-[#9CA3AF]">학부모가 매일 받는 것들</p>
            <h2 className="mt-3 text-2xl md:text-4xl leading-snug break-keep px-1 font-semibold tracking-[-0.02em] text-[#111827] md:px-0">데이터가 먼저 말해줍니다</h2>
          </div>

          <div className="mx-auto mt-14 grid max-w-[1000px] grid-cols-1 gap-5 lg:grid-cols-3">
            {parentFeatures.map((feature) => {
              const Icon = feature.Icon;
              return (
                <article key={feature.title} className="rounded-2xl border border-[#E5E7EB] bg-white px-8 py-8">
                  <Icon className="mb-5 h-[26px] w-[26px] text-[#1B2A4A]" strokeWidth={1.8} aria-hidden />
                  <h3 className="text-base md:text-lg break-keep leading-snug font-semibold text-[#111827]">{feature.title}</h3>
                  <p className="mt-2.5 whitespace-pre-line break-keep text-[15px] leading-[1.7] text-[#6B7280]">{feature.description}</p>
                  <p className="mt-5 border-t border-[#F3F4F6] pt-4 text-[13px] text-[#9CA3AF]">{feature.detail}</p>
                </article>
              );
            })}
          </div>


        </section>

        <section className="mt-8 rounded-3xl border border-slate-200 bg-white p-6 sm:p-8">
          <p className="text-center text-[13px] uppercase tracking-[0.05em] text-[#9CA3AF]">비용 비교</p>
          <h2 className="mt-3 text-2xl md:text-4xl leading-snug break-keep px-2 text-center font-semibold tracking-[-0.02em] text-[#111827] md:px-0">
            독서실 한 달 비용으로
            <br />
            대치폰 10개월을 씁니다
          </h2>
          <p className="mt-3 break-keep text-center text-[14px] text-[#6B7280] md:text-[16px]">관리는 더 촘촘하고, 비용은 10분의 1입니다.</p>
          <div className="mt-5 grid gap-3 md:grid-cols-2">
            <div className="rounded-2xl border border-slate-200 bg-[#fafafa] p-5 text-center">
              <p className="text-sm font-semibold text-slate-700">관리형 독서실</p>
              <p className="mt-2 text-3xl font-bold text-[#9CA3AF]">50~90만원/월</p>
              <p className="mt-2 text-sm text-slate-500">집에 오는 순간 관리 종료</p>
              <p className="mt-2 text-[12px] text-[#9CA3AF]">위치 추적 없음 · AI 코칭 없음 · 리포트 없음</p>
            </div>
            <div className="rounded-2xl border-2 border-[#1B2A4A] bg-[#EEF2FF] p-5 text-center">
              <p className="text-sm font-semibold text-navy-800">대치폰</p>
              <p className="mt-2 text-3xl font-bold text-[#1B2A4A]">49,000원/월</p>
              <p className="mt-2 text-sm text-slate-700">24시간 어디서든 관리</p>
              <p className="mt-2 text-[12px] text-[#1B2A4A]">위치 추적 · AI 코칭 · 카카오톡 리포트 모두 포함</p>
            </div>
          </div>
          <p className="mt-8 text-center text-[15px] text-[#6B7280]">기기 세팅 149,000원 · 이후 월 49,000원 · 위약금 없음</p>

        </section>

        <section className="mt-8 rounded-3xl border border-slate-200 bg-white p-6 sm:p-8">
          <p className="text-center text-[13px] uppercase tracking-[0.05em] text-[#9CA3AF]">학부모 후기</p>
          <h2 className="mt-3 text-2xl md:text-4xl leading-snug break-keep px-1 text-center font-semibold tracking-[-0.02em] text-[#111827] md:px-0">
            처음으로 아이를 믿을 수 있게 됐습니다
          </h2>
          <div className="mt-8 grid gap-3 md:grid-cols-3">
            <article className="rounded-2xl border border-[#E5E7EB] bg-white px-8 py-7">
              <p className="text-[14px] text-[#F59E0B]">★★★★★</p>
              <p className="mt-3.5 whitespace-pre-line text-[15px] leading-[1.7] text-[#374151]">
                &ldquo;데이터로 대화하니까 갈등이 사라졌어요.
                {"\n"}독서실에 몇 시간 있었는지 리포트로 보이니
                {"\n"}처음으로 아이를 믿을 수 있게 됐습니다.&rdquo;
              </p>
              <div className="mt-5 border-t border-[#F3F4F6]" />
              <p className="mt-3.5 text-[13px] text-[#9CA3AF]">대치동 학부모 · 고3 · 5개월 사용</p>
            </article>
            <article className="rounded-2xl border border-[#E5E7EB] bg-white px-8 py-7">
              <p className="text-[14px] text-[#F59E0B]">★★★★★</p>
              <p className="mt-3.5 whitespace-pre-line text-[15px] leading-[1.7] text-[#374151]">
                &ldquo;잔소리할 필요가 없어졌어요.
                {"\n"}통제하는 부모가 아니라
                {"\n"}선물해주는 부모가 된 것 같아요.&rdquo;
              </p>
              <div className="mt-5 border-t border-[#F3F4F6]" />
              <p className="mt-3.5 text-[13px] text-[#9CA3AF]">목동 학부모 · 고2 · 3개월 사용</p>
            </article>
            <article className="rounded-2xl border border-[#E5E7EB] bg-white px-8 py-7">
              <p className="text-[14px] text-[#F59E0B]">★★★★★</p>
              <p className="mt-3.5 whitespace-pre-line text-[15px] leading-[1.7] text-[#374151]">
                &ldquo;체크인 알림 덕분에 불필요한 의심이 줄었어요.
                {"\n"}아이도 감시받는다는 느낌 없이
                {"\n"}스스로 루틴을 지키기 시작했습니다.&rdquo;
              </p>
              <div className="mt-5 border-t border-[#F3F4F6]" />
              <p className="mt-3.5 text-[13px] text-[#9CA3AF]">강남구 학부모 · 고1 · 4개월 사용</p>
            </article>
          </div>
        </section>

        <section className="mt-8 bg-[#FAFAFA] py-14 md:py-24">
          <h2 className="text-2xl md:text-4xl leading-snug break-keep px-1 text-center font-semibold tracking-[-0.02em] text-[#111827] md:px-0">자주 묻는 질문</h2>
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
          <div className="mt-14 text-center">
            <p className="text-[15px] text-[#6B7280]">더 궁금한 점이 있으시면 언제든 말씀해주세요.</p>
            <div className="mt-5 flex flex-wrap items-center justify-center gap-3">
              <Link
                href="/inquiry"
                className="inline-flex w-auto rounded-[10px] border-[1.5px] border-[#1B2A4A] bg-transparent px-8 py-3.5 text-[15px] font-semibold text-[#1B2A4A]"
              >
                카카오톡 문의
              </Link>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
