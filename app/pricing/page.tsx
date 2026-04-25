"use client";

import Link from "next/link";
import { AppHeader } from "@/components/AppHeader";

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

      <main className="mx-auto max-w-6xl px-5 py-12 sm:px-8 sm:py-16">
        <section className="text-center">
          <h1 className="text-3xl font-bold tracking-tight sm:text-[2.15rem]">패키지·가격</h1>
          <p className="mt-3 text-sm text-slate-600 sm:text-base">가격 투명성과 상담 전환에 집중한 구성입니다.</p>
        </section>

        <section className="mt-8 grid grid-cols-1 gap-4 lg:grid-cols-3">
          {plans.map((plan) => (
            <article
              key={plan.name}
              className={`rounded-2xl bg-white p-6 shadow-sm ${
                plan.featured ? "border-2 border-navy-400 ring-2 ring-navy-100/70" : "border border-slate-200"
              }`}
            >
              {plan.featured ? (
                <p className="mb-3 rounded-full bg-navy-50 py-1 text-center text-[12px] font-semibold text-navy-700">가장 인기</p>
              ) : null}
              <h2 className="text-lg font-semibold">{plan.name}</h2>
              <p className="mt-2 text-4xl font-bold tracking-tight">{plan.price}</p>
              <ul className="mt-4 space-y-1.5 text-sm text-slate-600">
                {plan.lines.map((line) => (
                  <li key={line}>{line}</li>
                ))}
              </ul>
            </article>
          ))}
        </section>

        <section className="mt-8 rounded-3xl border border-slate-200 bg-white p-6 sm:p-8">
          <h2 className="text-xl font-bold tracking-tight">월 구독 구조</h2>
          <p className="mt-3 text-sm leading-relaxed text-slate-700 sm:text-base">
            모든 플랜은 기본 3개월 관리가 포함되며, 이후에는 월 49,000원 구독으로 연장 가능합니다. 위약금 없이 언제든 해지할 수 있습니다.
          </p>
        </section>

        <section className="mt-8 rounded-3xl border border-slate-200 bg-white p-6 sm:p-8">
          <h2 className="text-xl font-bold tracking-tight">전체 FAQ</h2>
          <p className="mt-3 text-sm text-slate-700 sm:text-base">결제 전 자주 묻는 질문은 FAQ 페이지에서 한 번에 확인할 수 있습니다.</p>
          <div className="mt-5 flex flex-wrap gap-3">
            <Link href="/faq" className="inline-flex rounded-full border border-slate-200 px-6 py-3 text-sm font-medium text-slate-800">
              FAQ 보기
            </Link>
            <Link href="/notify" className="inline-flex rounded-full bg-navy-800 px-6 py-3 text-sm font-semibold text-white">
              알림 신청
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
}
