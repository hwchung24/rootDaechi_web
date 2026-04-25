"use client";

import Link from "next/link";
import { AppHeader } from "@/components/AppHeader";
import { SiteFooter } from "@/components/SiteFooter";

const plans = [
  {
    name: "대치폰 세팅",
    price: "149,000원",
    lines: ["기존 아이폰 지참", "대면 세팅 + 3개월 관리", "월 구독 연장 가능"]
  },
  {
    name: "대치폰 리퍼비쉬",
    price: "499,000원",
    lines: ["아이폰 12 S급", "3개월 관리 포함", "월 구독 연장 가능"],
    featured: true
  },
  {
    name: "대치폰 프리미엄",
    price: "1,499,000원",
    lines: ["아이폰 17 신품", "3개월 관리 포함", "월 구독 연장 가능"]
  }
];

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-[#f8f9fa] text-slate-900">
      <AppHeader>
        <Link href="/" className="transition hover:text-slate-900">
          홈
        </Link>
        <Link href="/parents" className="transition hover:text-slate-900">
          학부모 페이지
        </Link>
        <Link href="/students" className="transition hover:text-slate-900">
          학생 페이지
        </Link>
      </AppHeader>

      <main>
        <section className="bg-[#f8f9fa] pb-12 pt-16 text-center">
          <div className="mx-auto max-w-[1280px] px-6 md:px-12">
            <h1 className="text-4xl font-bold tracking-tight text-[#111827]">패키지·가격</h1>
            <p className="mt-3 text-[16px] text-[#6B7280]">가격 투명성과 상담 전환에 집중한 구성입니다.</p>
          </div>
        </section>

        <section className="bg-white py-16">
          <div className="mx-auto max-w-[1280px] px-6 md:px-12">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
              {plans.map((plan) => {
                const description =
                  plan.name === "대치폰 세팅"
                    ? "내 아이폰을 그대로 사용하고 싶다면"
                    : plan.name === "대치폰 리퍼비쉬"
                      ? "기기 걱정 없이 바로 시작하고 싶다면"
                      : "최신 기기로 완벽하게 시작하고 싶다면";

                const isFeatured = Boolean(plan.featured);
                return (
                  <article
                    key={plan.name}
                    className={`rounded-2xl p-8 flex h-full flex-col ${
                      isFeatured ? "border-2 border-[#1B2A4A] bg-[#1B2A4A]" : "border border-[#E5E7EB] bg-white"
                    }`}
                  >
                    {isFeatured ? (
                      <span className="mb-4 inline-block rounded-full bg-white px-3 py-1 text-xs font-semibold text-[#1B2A4A]">가장 인기</span>
                    ) : null}
                    <h2 className={`text-xl font-semibold ${isFeatured ? "text-white" : "text-[#111827]"}`}>{plan.name}</h2>
                    <p className={`mt-2 text-4xl font-bold tracking-tight ${isFeatured ? "text-white" : "text-[#111827]"}`}>{plan.price}</p>
                    <p className={`mb-4 mt-2 text-sm ${isFeatured ? "text-slate-300" : "text-[#6B7280]"}`}>{description}</p>
                    <ul className={`space-y-2.5 text-sm ${isFeatured ? "text-white/90" : "text-[#6B7280]"}`}>
                      {plan.lines.map((line) => (
                        <li key={line} className="flex items-start gap-2">
                          <span className={isFeatured ? "text-white" : "text-[#1B2A4A]"}>✓</span>
                          <span>{line}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="mt-auto pt-6">
                      <Link
                        href="/notify"
                        className={`block w-full rounded-xl py-3 text-center text-sm font-semibold transition ${
                          isFeatured
                            ? "bg-white text-[#1B2A4A] hover:bg-gray-100"
                            : "border border-[#1B2A4A] text-[#1B2A4A] hover:bg-[#1B2A4A] hover:text-white"
                        }`}
                      >
                        알림 신청하기
                      </Link>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section className="bg-[#f8f9fa] py-16">
          <div className="mx-auto grid max-w-[1280px] grid-cols-1 items-center gap-8 px-6 md:grid-cols-2 md:px-12">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-[#111827]">3개월 이후에는?</h2>
              <p className="mt-4 text-[16px] leading-relaxed text-[#6B7280]">
                모든 플랜은 기본 3개월 관리가 포함되며, 이후에는 월 49,000원 구독으로 연장 가능합니다. 위약금 없이 언제든 해지할 수
                있습니다.
              </p>
            </div>
            <div className="rounded-2xl border border-[#E5E7EB] bg-white p-6 text-center">
              <p className="text-4xl font-bold text-[#1B2A4A]">월 49,000원</p>
              <p className="mt-2 text-sm text-[#6B7280]">위약금 없음 · 언제든 해지 가능</p>
            </div>
          </div>
        </section>

        <section className="bg-[#1B2A4A] py-20 text-center">
          <div className="mx-auto max-w-[1280px] px-6 md:px-12">
            <h2 className="text-2xl font-bold text-white">추가 문의</h2>
            <p className="mb-8 mt-2 text-sm text-slate-300">결제 전 궁금한 내용은 문의 페이지에서 바로 안내받을 수 있습니다.</p>
            <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link href="/inquiry" className="rounded-xl bg-white px-6 py-3 font-semibold text-[#1B2A4A] transition hover:bg-gray-100">
              문의하기
              </Link>
              <Link
                href="/notify"
                className="rounded-xl border border-white px-6 py-3 font-semibold text-white transition hover:bg-white hover:text-[#1B2A4A]"
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
