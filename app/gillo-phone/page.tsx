"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { AppHeader } from "@/components/AppHeader";
import { Clock, LayoutGrid, Layers, SlidersHorizontal } from "lucide-react";
import { WaitlistCount } from "@/components/WaitlistCount";

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 0.61, 0.36, 1] } }
};

export default function GilloPhonePage() {
  return (
    <div className="min-h-screen bg-[#fafafa] text-slate-900">
      <AppHeader>
        <Link href="/" className="transition hover:text-slate-900">홈</Link>
      </AppHeader>

      <main className="mx-auto max-w-5xl px-5 py-12 sm:px-8 sm:py-16">
        <motion.div variants={fadeInUp} initial="hidden" animate="show" className="mb-14 text-center">
          <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-navy-700">대치폰</p>
          <h1 className="mt-2 text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
            중고 매입 후 세팅·판매
          </h1>
          <p className="mt-3 text-sm text-slate-600">
            중고 기기를 매입해 대치폰으로 세팅한 뒤, 바로 사용 가능한 상태로 판매합니다. 원하는 세팅을 선택해 매입·세팅을 신청하세요.
          </p>
          <p className="mt-2 text-xs font-medium text-slate-500">
            ※ 아래 금액은 세팅 비용이며, <span className="text-slate-700">기기값은 별도</span>입니다.
          </p>
        </motion.div>

        {/* 세팅 A / B / C + 3월 50% 할인 */}
        <section className="mb-16">
          <div className="mb-6 flex flex-col items-center gap-2 rounded-xl border border-navy-200 bg-navy-50/80 px-4 py-3 sm:flex-row sm:justify-center sm:gap-3">
            <Clock className="h-4 w-4 shrink-0 text-navy-700" />
            <p className="text-center text-sm font-semibold text-navy-800 sm:text-base">
              3월까지 50% 할인 · 이후 정가 적용 <WaitlistCount />
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-3">
            <Link
              href="/gillo-phone/apply/a"
              className="flex flex-col rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:border-slate-300 hover:shadow-md"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-slate-100 text-slate-600">
                <LayoutGrid className="h-6 w-6" />
              </div>
              <h3 className="mt-4 text-lg font-bold text-slate-900">세팅 A</h3>
              <p className="mt-1 text-sm text-slate-600">기본앱만</p>
              <p className="mt-3 text-xs text-slate-500 leading-relaxed">
                갤러리, 계산기, 내 파일, 메시지, 연락처, 음성녹음, 전화, 메모(삼성 노트), 캘린더, 설정, 카메라, 시계, 날씨
              </p>
              <div className="mt-auto pt-4 border-t border-slate-100">
                <span className="text-xs text-slate-400 line-through">8만 원</span>
                <p className="mt-0.5 text-xl font-bold text-navy-600">4만 원 <span className="text-xs font-normal text-slate-500">(3월 한정)</span></p>
                <span className="mt-2 inline-block text-sm font-medium text-navy-600">이 세팅으로 매입 신청 →</span>
              </div>
            </Link>
            <Link
              href="/gillo-phone/apply/b"
              className="flex flex-col rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:border-slate-300 hover:shadow-md"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-navy-50 text-navy-600">
                <Layers className="h-6 w-6" />
              </div>
              <h3 className="mt-4 text-lg font-bold text-slate-900">세팅 B</h3>
              <p className="mt-1 text-sm text-slate-600">기본앱 + 추가앱 옵션</p>
              <p className="mt-3 text-xs text-slate-500 leading-relaxed">
                vFlatscan, 메가스터디, 대성마이맥, 이투스, 오르비클래스, 큐브, 콴다, 토스, 카카오택시, 월렛(삼성페이), 카카오맵, 네이버 사전, 패스, 병무청
              </p>
              <div className="mt-auto pt-4 border-t border-slate-100">
                <span className="text-xs text-slate-400 line-through">10만 원</span>
                <p className="mt-0.5 text-xl font-bold text-navy-600">5만 원 <span className="text-xs font-normal text-slate-500">(3월 한정)</span></p>
                <span className="mt-2 inline-block text-sm font-medium text-navy-600">이 세팅으로 매입 신청 →</span>
              </div>
            </Link>
            <Link
              href="/gillo-phone/apply/c"
              className="flex flex-col rounded-2xl border-2 border-navy-200 bg-navy-50/30 p-5 shadow-sm transition hover:border-navy-300 hover:shadow-md"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-navy-100 text-navy-600">
                <SlidersHorizontal className="h-6 w-6" />
              </div>
              <h3 className="mt-4 text-lg font-bold text-slate-900">세팅 C</h3>
              <p className="mt-1 text-sm text-slate-600">기본앱 + 앱 맞춤선택</p>
              <p className="mt-3 text-xs text-slate-500 leading-relaxed">
                필요한 앱만 골라서 넣는 맞춤 세팅입니다.
              </p>
              <div className="mt-auto pt-4 border-t border-slate-200/50">
                <span className="text-xs text-slate-400 line-through">12만 원</span>
                <p className="mt-0.5 text-xl font-bold text-navy-600">6만 원 <span className="text-xs font-normal text-slate-500">(3월 한정)</span></p>
                <span className="mt-2 inline-block text-sm font-medium text-navy-600">이 세팅으로 매입 신청 →</span>
              </div>
            </Link>
          </div>
        </section>
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
