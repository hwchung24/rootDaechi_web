"use client";

import Link from "next/link";
import { AppHeader } from "@/components/AppHeader";
import { SiteFooter } from "@/components/SiteFooter";

const metrics = [
  {
    value: "6개월",
    label: "루틴 무너진 적 없음"
  },
  {
    value: "2등급↑",
    label: "수능 성적 향상"
  },
  {
    value: "49,000원",
    label: "월 관리 비용"
  }
];

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-[#111827]">
      <AppHeader />

      <main>
        <section className="flex min-h-[80vh] items-center bg-[#FAFAFA] py-20">
          <div className="mx-auto max-w-[860px] px-6 text-center sm:px-8">
            <p className="mb-7 inline-block rounded-[6px] bg-[#EEF2FF] px-[14px] py-[6px] text-[13px] font-semibold text-[#1B2A4A]">
              수험생 환경 설계 회사
            </p>
            <h1 className="leading-[1.1] tracking-[-0.04em]">
              <span className="block text-[44px] font-bold text-[#111827] sm:text-[64px]">의지를 믿지 않습니다.</span>
              <span className="block text-[44px] font-bold text-[#1B2A4A] sm:text-[64px]">환경을 설계합니다.</span>
            </h1>
            <p className="mx-auto mt-6 max-w-[560px] whitespace-pre-line text-[18px] leading-[1.8] text-[#6B7280]">
              {"공부폰·태블릿·AI 코칭·리포트를 하나로 묶어\n수험생이 의지 없이도 집중할 수 있는\n환경을 만듭니다."}
            </p>
            <div className="mt-12 flex flex-col items-center justify-center gap-6 sm:flex-row sm:gap-12">
              {metrics.map((metric, idx) => (
                <div
                  key={metric.value}
                  className={`text-center ${idx > 0 ? "sm:border-l sm:border-[#E5E7EB] sm:pl-12" : ""}`}
                >
                  <p className="text-[32px] font-bold text-[#111827]">{metric.value}</p>
                  <p className="mt-1 text-[13px] text-[#9CA3AF]">{metric.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#FAFAFA] py-20">
          <div className="mx-auto max-w-[640px] px-6 text-center sm:px-8">
            <span className="mb-[-8px] block text-[40px] leading-none text-[#D1D5DB]">"</span>
            <p className="whitespace-pre-line text-[22px] font-semibold leading-[1.55] text-[#111827]">
              {"달라진 건 의지가 아니었습니다.\n환경이 성적을 바꿉니다."}
            </p>
            <p className="mt-5 text-[14px] text-[#9CA3AF]">오진혁 · 대치루트 창업자 · 서울대학교 재학</p>
          </div>
        </section>

        <section className="bg-white py-24">
          <div className="mx-auto px-6 sm:px-8">
            <p className="text-center text-[13px] uppercase tracking-[0.05em] text-[#9CA3AF]">대치루트 제품</p>
            <h2 className="mt-3 text-center text-[32px] font-semibold text-[#111827]">지금 만나볼 수 있는 제품</h2>

            <div className="mx-auto mt-12 grid max-w-[860px] grid-cols-1 gap-5 lg:grid-cols-2">
              <article className="rounded-[20px] border-2 border-[#1B2A4A] bg-white p-10">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="rounded-md bg-[#1B2A4A] px-3 py-1 text-[12px] font-semibold text-white">대치폰</span>
                  <span className="rounded-md bg-[#EEF2FF] px-[10px] py-[3px] text-[11px] text-[#1B2A4A]">5월 출시 · 사전 예약 중</span>
                </div>
                <h3 className="mt-4 text-[22px] font-semibold text-[#111827]">수험생 전용 관리 스마트폰</h3>
                <p className="mt-2.5 whitespace-pre-line text-[15px] leading-[1.7] text-[#6B7280]">
                  {"아이폰 감성 그대로,\n공부할 땐 자동으로 집중 모드.\n위치 추적·AI 코칭·학부모 리포트 포함."}
                </p>
                <p className="mt-5 text-[14px] text-[#9CA3AF]">세팅 149,000원 · 월 49,000원</p>
                <Link
                  href="/phone"
                  className="mt-6 inline-block rounded-[8px] bg-[#1B2A4A] px-6 py-3 text-[14px] font-semibold text-white"
                >
                  대치폰 자세히 보기 →
                </Link>
              </article>

              <article className="rounded-[20px] border border-[#E5E7EB] bg-[#FAFAFA] p-10">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="rounded-md bg-[#F3F4F6] px-3 py-1 text-[12px] font-semibold text-[#9CA3AF]">대치탭</span>
                  <span className="rounded-md bg-[#F3F4F6] px-[10px] py-[3px] text-[11px] text-[#9CA3AF]">출시 예정</span>
                </div>
                <h3 className="mt-4 text-[22px] font-semibold text-[#9CA3AF]">수험생 전용 관리 태블릿</h3>
                <p className="mt-2.5 whitespace-pre-line text-[15px] leading-[1.7] text-[#9CA3AF]">
                  {"인강·필기에 최적화된 태블릿에\n대치루트 학습 관리 시스템을 탑재합니다.\n출시 알림을 신청하세요."}
                </p>
                <button
                  type="button"
                  disabled
                  className="mt-6 inline-block cursor-default rounded-[8px] border border-[#D1D5DB] bg-transparent px-6 py-3 text-[14px] font-semibold text-[#9CA3AF]"
                >
                  출시 알림 신청
                </button>
              </article>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
