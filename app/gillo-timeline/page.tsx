"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 0.61, 0.36, 1] } }
};

export default function GilloTimelinePage() {
  return (
    <div className="min-h-screen bg-[#fafafa] text-slate-900">
      <header className="sticky top-0 z-50 border-b border-slate-200/60 bg-[#fafafa]/90 backdrop-blur-xl">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-5 py-3 sm:px-8">
          <Link href="/" className="flex items-center gap-2">
            <img src="/daechiroot-logo.png" alt="대치루트" className="h-6 w-6 object-contain" />
            <span className="text-sm font-semibold tracking-tight text-slate-900">대치루트</span>
          </Link>
          <nav className="flex items-center gap-6 text-[13px] text-slate-600">
            <Link href="/" className="transition hover:text-slate-900">홈</Link>
            <Link href="/#products" className="transition hover:text-slate-900">서비스</Link>
            <Link href="/contact" className="rounded-full bg-slate-900 px-4 py-2 text-[13px] font-medium text-white transition hover:bg-slate-800">
              상담 신청
            </Link>
          </nav>
        </div>
      </header>

      <main className="mx-auto max-w-5xl px-5 py-20 sm:px-8 sm:py-28">
        <motion.div variants={fadeInUp} initial="hidden" animate="show" className="text-center">
          <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-violet-600">GILLO TIMELINE</p>
          <h1 className="mt-3 text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl md:text-4xl">
            시간대별 휴대폰 통제 서비스
          </h1>
          <p className="mt-5 max-w-xl mx-auto text-slate-600">
            시간대별로 사용 가능 범위를 나눠, 공부 시간에는 완전 차단합니다.
            <br />
            세부 내용은 준비 중입니다.
          </p>
          <Link
            href="/#products"
            className="mt-8 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-5 py-2.5 text-sm font-medium text-slate-700 transition hover:bg-slate-50"
          >
            서비스 목록으로
          </Link>
        </motion.div>
      </main>

      <footer className="mt-16 border-t border-slate-200 bg-white py-6">
        <div className="mx-auto max-w-5xl px-5 text-center text-[12px] text-slate-500 sm:px-8">
          <p>대표: 정현우 | 사업자등록번호: 150-07-03484 | 서울특별시 강남구 개포동</p>
          <p className="mt-1 text-slate-400">© {new Date().getFullYear()} Daechiroot.</p>
        </div>
      </footer>
    </div>
  );
}
