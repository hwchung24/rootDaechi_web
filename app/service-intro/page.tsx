"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { AppHeader } from "@/components/AppHeader";
import { PlansGraphic } from "@/components/PlansGraphic";
import { ComparisonMatrixSection } from "@/components/ComparisonMatrixSection";

export default function ServiceIntroPage() {
  return (
    <div className="min-h-screen bg-[#f8f9fa] text-slate-900">
      <AppHeader>
        <Link href="/gillo-phone-rental" className="transition hover:text-slate-900">
          대치폰 패키지
        </Link>
        <Link href="/gillo-tab-rental" className="transition hover:text-slate-900">
          대치탭 패키지
        </Link>
        <Link href="/b2b" className="transition hover:text-slate-900">
          학원·교육기관 제휴
        </Link>
        <Link href="/management-subscription" className="transition hover:text-slate-900">
          학습 관리 구독 연장
        </Link>
      </AppHeader>

      <main>
        <section className="border-b border-slate-200/70 bg-white">
          <div className="relative mx-auto flex min-h-[min(88vh,820px)] max-w-5xl flex-col items-center justify-center px-5 py-14 sm:px-8 sm:py-20">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: [0.22, 0.61, 0.36, 1] }}
              className="text-center"
            >
              <p className="text-[11px] font-medium tracking-wide text-navy-700 sm:text-xs">대치루트 학습관리</p>
              <h1 className="mt-3 text-balance text-[2rem] font-semibold leading-tight tracking-tight text-slate-900 sm:text-4xl md:text-[2.75rem]">
                수험생 맞춤 기기 관리, <span className="text-navy-700">대치루트</span>
              </h1>
              <p className="mx-auto mt-4 max-w-md text-sm text-slate-500 sm:text-base">시간표 · MDM · 리포트</p>
              <div className="mt-8 flex flex-col items-stretch justify-center gap-2.5 sm:flex-row sm:gap-3">
                <Link
                  href="/inquiry"
                  className="inline-flex items-center justify-center rounded-full bg-navy-700 px-8 py-3 text-sm font-semibold text-white transition hover:bg-navy-800"
                >
                  상담 신청
                </Link>
                <Link
                  href="/#products"
                  className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white px-8 py-3 text-sm font-medium text-slate-800 transition hover:border-slate-300"
                >
                  패키지 보기
                </Link>
              </div>
              <PlansGraphic />
            </motion.div>
          </div>
        </section>

        <ComparisonMatrixSection />
      </main>

      <footer className="border-t border-slate-200/80 bg-white">
        <div className="mx-auto flex max-w-5xl flex-col gap-4 px-5 py-8 text-[11px] text-slate-500 sm:flex-row sm:items-center sm:justify-between sm:px-8">
          <div className="flex items-center gap-2">
            <img src="/daechiroot-logo.png" alt="" className="h-5 w-5 opacity-80" />
            <span className="font-medium text-slate-700">대치루트</span>
          </div>
          <p>
            정현우 · 150-07-03484 · 강남구 개포동 · © {new Date().getFullYear()}
          </p>
        </div>
      </footer>
    </div>
  );
}
