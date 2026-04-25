"use client";

import Link from "next/link";
import { BarChart2, Lock, MapPin, MessageCircle } from "lucide-react";
import { AppHeader } from "@/components/AppHeader";
import { LandingHero } from "@/components/LandingHero";
import { SiteFooter } from "@/components/SiteFooter";

const quickFeatures = [
  {
    icon: Lock,
    title: "공부 시간, 자동으로 잠깁니다",
    desc: "시간표를 한 번 세팅하면 이후엔 자동입니다. 공부 시간엔 유튜브·SNS가 사라지고, 인강 앱만 남습니다. 의지력이 필요 없습니다.",
    detail: "시간표 연동 → 자동 전환 → 우회 불가"
  },
  {
    icon: MapPin,
    title: "지금 어디 있는지, 바로 압니다",
    desc: "독서실에 도착하면 체크인, 떠나면 체크아웃 알림이 학부모에게 자동으로 전송됩니다. '어디야?' 물어볼 필요가 없습니다.",
    detail: "장소 설정 → 실시간 감지 → 카카오톡 알림"
  },
  {
    icon: BarChart2,
    title: "오늘 얼마나 집중했는지, 매일 리포트로",
    desc: "순공 시간·앱 사용 패턴·루틴 달성률이 매일 카카오톡으로 정리됩니다. 잔소리가 데이터로 바뀝니다.",
    detail: "일간·주간·월간 자동 발송"
  },
  {
    icon: MessageCircle,
    title: "새벽 2시 막힌 수학 문제도, AI가 바로",
    desc: "서울대 출신 멘토진의 로직을 기반으로 한 SNU-AI가 24시간 대기합니다. 질문하면 바로 답합니다.",
    detail: "SNU-AI · 서울대 멘토진 로직 기반"
  }
];

const targetCards = [
  {
    id: "parents",
    title: "학부모라면",
    href: "/parents"
  },
  {
    id: "students",
    title: "학생이라면",
    href: "/students"
  },
  {
    id: "academy",
    title: "학원·기관이라면",
    href: "/b2b"
  }
];

const reviews = [
  {
    quote:
      "데이터로 대화하니까 갈등이 사라졌어요. 독서실에 몇 시간 있었는지 리포트로 보이니까, 처음으로 아이를 의심하지 않고 믿을 수 있게 됐습니다.",
    source: "대치동 학부모 · 고3 · 5개월 사용 · 베타 참여자"
  },
  {
    quote: "AI가 계획을 잡아주니까 4개월째 페이스가 무너지지 않았어요. 의지력 문제가 아니라 구조 문제였던 거예요.",
    source: "강남구 고3 · 4개월 사용 · 베타 참여자"
  },
  {
    quote: "플래너 미작성 시 폰이 잠기는 게 처음엔 불편했는데, 지금은 그게 루틴을 지켜줘요. 6개월째 한 번도 무너진 적 없습니다.",
    source: "대치동 재수생 · 6개월 사용 · 베타 참여자"
  }
];

export default function PhonePage() {
  return (
    <div className="min-h-screen bg-[#f8f9fa] text-slate-900">
      <AppHeader />

      <main>
        <LandingHero />

        <section className="bg-white py-14 md:py-24">
          <div className="mx-auto max-w-6xl px-6 text-center sm:px-12">
            <p className="mb-12 text-[13px] font-medium uppercase tracking-[0.05em] text-[#9CA3AF]">매일 반복되는 다툼</p>

            <div className="mx-auto max-w-[600px] space-y-2.5 text-left">
              <div className="flex justify-start">
                <p className="max-w-[260px] rounded-[18px_18px_18px_4px] bg-[#F3F4F6] px-[18px] py-3 text-[16px] leading-[1.5] text-[#111827]">
                  휴대폰 그만 봐
                </p>
              </div>
              <div className="flex justify-end">
                <p className="max-w-[260px] rounded-[18px_18px_4px_18px] bg-[#1B2A4A] px-[18px] py-3 text-right text-[16px] leading-[1.5] text-white">
                  조금만요
                </p>
              </div>
              <div className="flex justify-start">
                <p className="max-w-[260px] rounded-[18px_18px_18px_4px] bg-[#F3F4F6] px-[18px] py-3 text-[16px] leading-[1.5] text-[#111827]">
                  공부했어?
                </p>
              </div>
              <div className="flex justify-end">
                <p className="max-w-[260px] rounded-[18px_18px_4px_18px] bg-[#1B2A4A] px-[18px] py-3 text-right text-[16px] leading-[1.5] text-white">
                  했다고요
                </p>
              </div>
              <div className="flex justify-start">
                <p className="max-w-[260px] rounded-[18px_18px_18px_4px] bg-[#F3F4F6] px-[18px] py-3 text-[16px] leading-[1.5] text-[#111827]">
                  근데 왜 성적이 안 올라?
                </p>
              </div>
              <div className="flex justify-end">
                <p className="max-w-[260px] rounded-[18px_18px_4px_18px] bg-[#1B2A4A] px-[18px] py-3 text-right text-[16px] leading-[1.5] text-white">
                  ...
                </p>
              </div>
            </div>

            <div className="mt-14 text-center">
              <p className="break-keep text-[18px] font-medium text-[#111827] md:text-[20px]">
                더 이상 이 다툼이 없도록
                <br />
                대치폰이 대신 말해줍니다. 데이터로 해결합니다
              </p>
            </div>
          </div>
        </section>

        <section className="bg-[#FAFAFA] py-14 md:py-24">
          <div className="mx-auto max-w-6xl px-5 md:px-12">
            <p className="text-center text-[13px] font-medium uppercase tracking-[0.05em] text-[#9CA3AF]">대치폰 핵심 기능</p>
            <h2 className="mt-3 text-center text-2xl md:text-4xl leading-snug break-keep font-semibold tracking-[-0.02em] text-[#111827]">4가지 기능이 하나의 구조를 만듭니다</h2>
            <div className="mx-auto mt-12 grid max-w-[900px] grid-cols-1 gap-[10px] md:grid-cols-2 md:gap-4">
              {quickFeatures.map((item) => {
                const Icon = item.icon;
                return (
                  <article
                    key={item.title}
                    className="rounded-2xl border border-[#E5E7EB] bg-white p-5 transition hover:border-[#D1D5DB] md:px-8 md:py-8"
                  >
                    <Icon className="mb-5 h-7 w-7 text-[#1B2A4A]" strokeWidth={1.5} aria-hidden />
                    <p className="text-[18px] font-semibold text-[#111827]">{item.title}</p>
                    <p className="mt-2.5 text-[15px] leading-[1.6] text-[#6B7280]">{item.desc}</p>
                    <p className="mt-5 border-t border-[#E5E7EB] pt-4 text-[13px] text-[#9CA3AF]">→ {item.detail}</p>
                  </article>
                );
              })}
            </div>
            <div className="mt-6 flex items-center justify-center gap-2">
              <span className="inline-flex items-center gap-1 text-xs text-[#9CA3AF]">
                <Lock className="h-3.5 w-3.5" strokeWidth={1.8} aria-hidden />
                특허 출원 중
              </span>
              <span className="text-xs text-[#9CA3AF]">·</span>
              <span className="text-xs text-[#9CA3AF]">출원번호 10-2026-0068593</span>
            </div>
          </div>
        </section>

        <section className="border-b border-slate-200/70 bg-white py-14 md:py-24">
          <div className="mx-auto max-w-6xl px-6 sm:px-12">
            <h2 className="text-center text-2xl md:text-4xl leading-snug break-keep px-4 font-semibold tracking-[-0.02em] text-[#111827] md:px-0">서로의 시선으로 보는 대치폰</h2>
            <p className="mt-3 text-center text-[16px] text-[#6B7280]">학부모님과 학생이 서로 공감할수 있도록 안내합니다</p>
            <div className="mx-auto mt-14 grid max-w-[960px] grid-cols-1 gap-4 lg:grid-cols-3">
              {targetCards.map((card) => (
                <article
                  key={card.id}
                  className={`rounded-2xl px-8 py-8 ${
                    card.id === "parents"
                      ? "border border-transparent bg-[#1B2A4A]"
                      : card.id === "students"
                        ? "border border-[#E5E7EB] bg-white"
                        : "border border-[#E5E7EB] bg-[#FAFAFA]"
                  }`}
                >
                  <p
                    className={`text-[12px] font-semibold uppercase tracking-[0.04em] ${
                      card.id === "parents"
                        ? "text-[#93C5FD]"
                        : card.id === "students"
                          ? "inline-flex rounded-md bg-[#EEF2FF] px-2.5 py-1 text-[#1B2A4A]"
                          : "text-[#6B7280]"
                    }`}
                  >
                    {card.title}
                  </p>
                  <p className={`mt-4 text-[20px] font-semibold leading-snug ${card.id === "parents" ? "text-white" : "text-[#111827]"}`}>
                    {card.id === "parents" ? (
                      <>
                        잔소리 없이 아이를 믿고 싶다면
                        <br />
                        데이터가 답해줍니다
                      </>
                    ) : card.id === "students" ? (
                      <>
                        공부폰이 창피하지 않으면서
                        <br />
                        집중도 되고 싶다면
                      </>
                    ) : (
                      <>
                        학원 커리큘럼에 연동해
                        <br />
                        단체 도입하려면
                      </>
                    )}
                  </p>
                  <p className={`mt-2 text-[14px] leading-[1.6] ${card.id === "parents" ? "text-white/65" : "text-[#6B7280]"}`}>
                    {card.id === "parents" ? (
                      <>
                        위치·공부 시간·루틴을 데이터로 확인합니다.
                        <br />
                        싸우지 않아도 됩니다.
                      </>
                    ) : card.id === "students" ? (
                      <>
                        친구들이랑 똑같은 아이폰.
                        <br />
                        공부할 땐 자동으로 집중, 쉴 땐 제대로 쉽니다.
                      </>
                    ) : (
                      <>
                        대치폰·대치탭을 학원 시간표와 연동해
                        <br />
                        전체 반에 도입합니다.
                      </>
                    )}
                  </p>
                  <Link
                    href={card.href}
                    className={`mt-7 inline-flex items-center justify-center transition ${
                      card.id === "parents"
                        ? "rounded-[10px] bg-white px-6 py-3 text-[14px] font-semibold text-[#1B2A4A]"
                        : card.id === "students"
                          ? "rounded-[10px] border-[1.5px] border-[#1B2A4A] bg-transparent px-6 py-3 text-[14px] font-semibold text-[#1B2A4A]"
                          : "bg-transparent p-0 text-[14px] text-[#6B7280] underline underline-offset-4"
                    }`}
                  >
                    {card.id === "parents" ? "학부모 페이지 보기 →" : card.id === "students" ? "학생 페이지 보기 →" : "B2B 문의하기 →"}
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="products" className="scroll-mt-20 border-b border-slate-200/70 bg-[#FAFAFA] py-14 md:py-24">
          <div className="mx-auto max-w-6xl px-6 sm:px-12">
            <p className="text-center text-[13px] uppercase tracking-[0.05em] text-[#9CA3AF]">실사용자 후기</p>
            <h2 className="mt-3 text-center text-2xl md:text-4xl leading-snug break-keep px-5 font-semibold tracking-[-0.02em] text-[#111827] md:px-0">
              6개월째 루틴이 무너진 적이 없습니다
            </h2>
            <div className="mx-auto mt-14 grid max-w-[1100px] grid-cols-1 gap-4 lg:grid-cols-3">
              {reviews.map((review) => (
                <div key={review.source} className="rounded-2xl border border-[#E5E7EB] bg-white px-8 py-7">
                  <p className="mb-4 text-[14px] text-[#F59E0B]">★★★★★</p>
                  <p className="text-[15px] leading-[1.7] text-[#374151]">&ldquo;{review.quote}&rdquo;</p>
                  <div className="mt-5 border-t border-[#F3F4F6]" />
                  <p className="mt-4 text-[13px] text-[#9CA3AF]">{review.source}</p>
                  <p className="mt-1 text-[11px] text-[#9CA3AF]">베타 테스트 참여자 후기 (2025년 하반기)</p>
                </div>
              ))}
            </div>
            <div className="mt-16 text-center">
              <p className="text-[14px] text-[#9CA3AF]">기기 세팅 149,000원 · 월 49,000원 · 위약금 없음</p>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
