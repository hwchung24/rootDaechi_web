"use client";

import Link from "next/link";
import { BarChart2, Lock, MapPin, MessageCircle } from "lucide-react";
import { AppHeader } from "@/components/AppHeader";
import { LandingHero } from "@/components/LandingHero";
import { SiteFooter } from "@/components/SiteFooter";

const quickFeatures = [
  {
    icon: Lock,
    title: "집중 시간 앱 자동 차단",
    desc: "유튜브·SNS는 막고, 인강 앱은 그대로.",
    detail: "공부 시간표와 연동 → 자동 전환"
  },
  {
    icon: MapPin,
    title: "위치 체크인·아웃 알림",
    desc: "독서실 도착·출발 시간, 부모님께 자동 전송.",
    detail: "공부 장소 설정 → 실시간 감지"
  },
  {
    icon: BarChart2,
    title: "카카오톡 학부모 리포트",
    desc: "오늘 몇 시간 집중했는지 매일 확인.",
    detail: "일간·주간·월간 리포트 자동 발송"
  },
  {
    icon: MessageCircle,
    title: "24시간 AI 코칭",
    desc: "새벽 2시 수학 문제도 즉시 해결.",
    detail: "서울대 출신 멘토진 로직 기반 SNU-AI"
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
      "데이터로 대화하니까 갈등이 사라졌어요. 독서실에 몇 시간 있었는지 보이니 처음으로 아이를 믿을 수 있게 됐습니다.",
    source: "대치동 학부모 · 고3 · 5개월 사용"
  },
  {
    quote: "의지력이 3일이면 끝이었는데 AI가 계획 잡아주고 알림까지 오니 4개월째 페이스 유지 중이에요.",
    source: "강남구 고3 · 4개월 사용"
  },
  {
    quote: "잔소리할 필요가 없어졌어요. 통제하는 부모가 아니라 선물해주는 부모가 된 것 같아요.",
    source: "목동 학부모 · 고2 · 3개월 사용"
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
            <p className="mb-12 text-[13px] font-medium uppercase tracking-[0.05em] text-[#9CA3AF]">
              이 대화, 오늘도 하셨나요?
            </p>

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
              <p className="break-keep text-[18px] font-medium text-[#111827] md:text-[20px]">이 대화가 매일 반복된다면, 대치폰이 그 구조를 바꿔드립니다.</p>
              <p className="mt-2 text-[14px] text-[#6B7280] md:text-[15px]">의지 대신 시스템. 잔소리 대신 데이터.</p>
            </div>
          </div>
        </section>

        <section className="bg-[#FAFAFA] py-14 md:py-24">
          <div className="mx-auto max-w-6xl px-5 md:px-12">
            <p className="text-center text-[13px] font-medium uppercase tracking-[0.05em] text-[#9CA3AF]">대치폰 핵심 기능</p>
            <h2 className="mt-3 text-center text-[36px] font-semibold tracking-[-0.02em] text-[#111827]">30초 안에 이해되는 대치폰</h2>
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
          </div>
        </section>

        <section className="border-b border-slate-200/70 bg-white py-14 md:py-24">
          <div className="mx-auto max-w-6xl px-6 sm:px-12">
            <h2 className="break-keep px-4 text-center text-[24px] font-semibold tracking-[-0.02em] text-[#111827] md:px-0 md:text-[36px]">당신에게 맞는 페이지로</h2>
            <p className="mt-3 text-center text-[16px] text-[#6B7280]">같은 제품, 보고 싶은 게 다릅니다</p>
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
                        잔소리가 사라지는
                        <br />
                        데이터 관리
                      </>
                    ) : card.id === "students" ? (
                      <>
                        친구들이랑 똑같은
                        <br />
                        아이폰 그대로
                      </>
                    ) : (
                      <>
                        커리큘럼 연동
                        <br />
                        단체 도입
                      </>
                    )}
                  </p>
                  <p className={`mt-2 text-[14px] leading-[1.6] ${card.id === "parents" ? "text-white/65" : "text-[#6B7280]"}`}>
                    {card.id === "parents" ? (
                      <>
                        &quot;어디 있어?&quot; 물어볼 필요 없습니다.
                        <br />
                        위치·리포트·AI 코칭을 학부모 시선으로 정리했습니다.
                      </>
                    ) : card.id === "students" ? (
                      <>
                        투박한 공부폰 말고.
                        <br />
                        공부할 땐 집중만, 쉴 땐 제대로 쉽니다.
                      </>
                    ) : (
                      <>
                        대치폰·대치탭 세팅을 학원 커리큘럼과
                        <br />
                        연동해 도입합니다.
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
                    {card.id === "parents" ? "학부모 페이지 보기 →" : card.id === "students" ? "학생 페이지 보기 →" : "B2B 문의하기"}
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="products" className="scroll-mt-20 border-b border-slate-200/70 bg-[#FAFAFA] py-14 md:py-24">
          <div className="mx-auto max-w-6xl px-6 sm:px-12">
            <p className="text-center text-[13px] uppercase tracking-[0.05em] text-[#9CA3AF]">실사용자 후기</p>
            <h2 className="mt-3 break-keep px-5 text-center text-[26px] font-semibold leading-[1.3] tracking-[-0.02em] text-[#111827] md:px-0 md:text-[36px] md:leading-normal">
              6개월째 루틴이 무너진 적 없습니다
            </h2>
            <div className="mx-auto mt-14 grid max-w-[1100px] grid-cols-1 gap-4 lg:grid-cols-3">
              {reviews.map((review) => (
                <div key={review.source} className="rounded-2xl border border-[#E5E7EB] bg-white px-8 py-7">
                  <p className="mb-4 text-[14px] text-[#F59E0B]">★★★★★</p>
                  <p className="text-[15px] leading-[1.7] text-[#374151]">&ldquo;{review.quote}&rdquo;</p>
                  <div className="mt-5 border-t border-[#F3F4F6]" />
                  <p className="mt-4 text-[13px] text-[#9CA3AF]">{review.source}</p>
                </div>
              ))}
            </div>
            <div className="mt-16 text-center">
              <p className="text-[14px] text-[#9CA3AF]">기기 세팅 149,000원 · 월 49,000원 · 위약금 없음</p>
            </div>
            <div className="mt-4 flex flex-col items-center justify-center gap-3 sm:mt-4 sm:flex-row sm:gap-3">
              <Link
                href="/pricing"
                className="inline-flex items-center justify-center rounded-[10px] bg-[#1B2A4A] px-7 py-3.5 text-[15px] font-semibold text-white transition hover:bg-[#1B2A4A]"
              >
                패키지·가격 자세히 보기
              </Link>
              <Link
                href="/notify"
                className="inline-flex items-center justify-center rounded-[10px] border-[1.5px] border-[#1B2A4A] bg-transparent px-7 py-3.5 text-[15px] font-semibold text-[#1B2A4A] transition hover:border-[#1B2A4A]"
              >
                알림 신청
              </Link>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
