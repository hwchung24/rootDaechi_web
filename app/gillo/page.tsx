"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { LayoutGrid, Layers, SlidersHorizontal, Clock } from "lucide-react";

const fadeInUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 0.61, 0.36, 1] } }
};

export default function GilloPage() {
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

      <main className="mx-auto max-w-5xl px-5 py-12 sm:px-8 sm:py-16">
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate="show"
          className="mb-14 text-center"
        >
          <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-blue-600">대치폰 세팅</p>
          <h1 className="mt-2 text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
            공신폰 세팅 서비스
          </h1>
          <p className="mt-3 text-sm text-slate-600">
            전화·문자·인강만 남기고 나머지는 차단합니다.
          </p>
        </motion.div>

        {/* 설정은 대치루트가 대신 관리 – 절차 한 번에 */}
        <section className="mb-16">
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
            <h2 className="text-xl font-bold tracking-tight text-slate-900 sm:text-2xl">
              설정은 대치루트가 대신 관리합니다
            </h2>
            <p className="mt-2 text-sm text-slate-600">
              목표만 알려주시면, 사용 습관에 맞춰 기기에 적용합니다.
            </p>
            <ol className="mt-6 space-y-3 sm:mt-8 sm:space-y-4">
              <li className="flex gap-4 rounded-xl border border-slate-200 bg-slate-50/50 px-4 py-3 sm:px-5 sm:py-4">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-blue-100 text-sm font-bold text-blue-600">1</span>
                <div>
                  <p className="font-semibold text-slate-900">상담 & 진단</p>
                  <p className="mt-0.5 text-sm text-slate-600">사용 패턴을 파악해 맞춤 프로필을 설계합니다.</p>
                </div>
              </li>
              <li className="flex gap-4 rounded-xl border border-slate-200 bg-slate-50/50 px-4 py-3 sm:px-5 sm:py-4">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-blue-100 text-sm font-bold text-blue-600">2</span>
                <div>
                  <p className="font-semibold text-slate-900">초기화 & 구조 설계</p>
                  <p className="mt-0.5 text-sm text-slate-600">기기 초기화 후 전화·문자·인강만 남도록 재배치합니다.</p>
                </div>
              </li>
              <li className="flex gap-4 rounded-xl border border-slate-200 bg-slate-50/50 px-4 py-3 sm:px-5 sm:py-4">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-blue-100 text-sm font-bold text-blue-600">3</span>
                <div>
                  <p className="font-semibold text-slate-900">화이트리스트 세팅</p>
                  <p className="mt-0.5 text-sm text-slate-600">학습용 앱만 남기고 우회 경로를 차단합니다.</p>
                </div>
              </li>
              <li className="flex gap-4 rounded-xl border border-slate-200 bg-slate-50/50 px-4 py-3 sm:px-5 sm:py-4">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-blue-100 text-sm font-bold text-blue-600">4</span>
                <div>
                  <p className="font-semibold text-slate-900">검수 & 출고</p>
                  <p className="mt-0.5 text-sm text-slate-600">검수 후 전달하고, 학년·목표 변경 시 재조정 가능합니다.</p>
                </div>
              </li>
            </ol>
          </div>
        </section>

        {/* 세팅 A / B / C + 3월 50% 할인 */}
        <section className="mb-16">
          <div className="mb-6 flex flex-col items-center gap-2 rounded-xl border border-amber-200 bg-amber-50/80 px-4 py-3 sm:flex-row sm:justify-center sm:gap-3">
            <Clock className="h-4 w-4 shrink-0 text-amber-600" />
            <p className="text-center text-sm font-semibold text-amber-800 sm:text-base">
              3월까지 50% 할인 · 이후 정가 적용
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-3">
            {/* 세팅 A */}
            <Link
              href="/gillo/apply/a"
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
                <p className="mt-0.5 text-xl font-bold text-blue-600">4만 원 <span className="text-xs font-normal text-slate-500">(3월 한정)</span></p>
                <span className="mt-2 inline-block text-sm font-medium text-blue-600">이 세팅 신청하기 →</span>
              </div>
            </Link>
            {/* 세팅 B */}
            <Link
              href="/gillo/apply/b"
              className="flex flex-col rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:border-slate-300 hover:shadow-md"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                <Layers className="h-6 w-6" />
              </div>
              <h3 className="mt-4 text-lg font-bold text-slate-900">세팅 B</h3>
              <p className="mt-1 text-sm text-slate-600">기본앱 + 추가앱 옵션</p>
              <p className="mt-3 text-xs text-slate-500 leading-relaxed">
                vFlatscan, 메가스터디, 대성마이맥, 이투스, 오르비클래스, 큐브, 콴다, 토스, 카카오택시, 월렛(삼성페이), 카카오맵, 네이버 사전, 패스, 병무청
              </p>
              <div className="mt-auto pt-4 border-t border-slate-100">
                <span className="text-xs text-slate-400 line-through">10만 원</span>
                <p className="mt-0.5 text-xl font-bold text-blue-600">5만 원 <span className="text-xs font-normal text-slate-500">(3월 한정)</span></p>
                <span className="mt-2 inline-block text-sm font-medium text-blue-600">이 세팅 신청하기 →</span>
              </div>
            </Link>
            {/* 세팅 C */}
            <Link
              href="/gillo/apply/c"
              className="flex flex-col rounded-2xl border-2 border-blue-200 bg-blue-50/30 p-5 shadow-sm transition hover:border-blue-300 hover:shadow-md"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100 text-blue-600">
                <SlidersHorizontal className="h-6 w-6" />
              </div>
              <h3 className="mt-4 text-lg font-bold text-slate-900">세팅 C</h3>
              <p className="mt-1 text-sm text-slate-600">기본앱 + 앱 맞춤선택</p>
              <p className="mt-3 text-xs text-slate-500 leading-relaxed">
                필요한 앱만 골라서 넣는 맞춤 세팅입니다.
              </p>
              <div className="mt-auto pt-4 border-t border-slate-200/50">
                <span className="text-xs text-slate-400 line-through">12만 원</span>
                <p className="mt-0.5 text-xl font-bold text-blue-600">6만 원 <span className="text-xs font-normal text-slate-500">(3월 한정)</span></p>
                <span className="mt-2 inline-block text-sm font-medium text-blue-600">이 세팅 신청하기 →</span>
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


