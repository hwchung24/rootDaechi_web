"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { LandingHeroIPadVisual } from "@/components/LandingHeroIPadVisual";

/** 랜딩 홈 — PLAUD형 2열 히어로 (포인트 남색) */
export function LandingHero() {
  return (
    <>
      <div className="bg-navy-800 px-4 py-2.5 text-center text-[12px] font-medium text-white sm:text-[13px]">
        <span className="font-semibold">5월 출시 전 사전 예약자 모집중</span>
      </div>
      <section className="snap-none border-b border-slate-200/60 bg-[#f7f7f7]">
        <div className="mx-auto max-w-6xl px-5 pb-12 pt-10 sm:px-8 sm:pb-16 sm:pt-12 lg:pb-20 lg:pt-14">
          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-12 xl:gap-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, ease: [0.22, 0.61, 0.36, 1] }}
              className="order-2 text-left lg:order-1"
            >
              <p className="inline-flex flex-wrap items-center gap-2">
                <span className="inline-flex items-center rounded-full bg-navy-800 px-2.5 py-1 text-[11px] font-bold tracking-wide text-white">
                  5월 출시
                </span>
                <span className="text-[13px] font-semibold text-navy-800 sm:text-sm">사전 예약자 모집중</span>
              </p>
              <h1 className="mt-3 text-[2rem] font-bold leading-[1.12] tracking-tight text-slate-900 sm:text-4xl lg:text-[2.75rem] lg:leading-[1.1]">
                대치동 관리형 독서실을
                <br className="hidden sm:block" /> 내 손 안으로
              </h1>
              <p className="mt-4 max-w-lg text-base leading-relaxed text-slate-600 sm:text-lg">
                의지를 믿지 말고 환경을 설계하세요
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
                <Link
                  href="/inquiry"
                  className="inline-flex min-h-[48px] items-center justify-center rounded-full bg-navy-800 px-8 text-sm font-semibold text-white shadow-md shadow-navy-900/20 transition hover:bg-navy-900"
                >
                  상담 신청
                </Link>
                <Link
                  href="#products"
                  className="inline-flex min-h-[48px] items-center justify-center rounded-full border border-slate-200 bg-white px-8 text-sm font-medium text-slate-800 transition hover:border-slate-300 hover:bg-white"
                >
                  패키지 보기
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.08, ease: [0.22, 0.61, 0.36, 1] }}
              className="relative order-1 mx-auto w-full max-w-[min(100%,440px)] lg:order-2 lg:max-w-none"
            >
              <div className="relative min-h-[240px] sm:min-h-[300px] lg:min-h-[340px]">
                <div
                  className="pointer-events-none absolute inset-[-12%] rounded-[40%] bg-gradient-to-br from-navy-200/35 via-white/0 to-slate-200/25 blur-3xl"
                  aria-hidden
                />
                <div className="relative z-10 flex items-center justify-center pb-6 pt-2 sm:pb-8">
                  <LandingHeroIPadVisual />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
