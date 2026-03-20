"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { AppHeader } from "@/components/AppHeader";

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 0.61, 0.36, 1] } }
};

export default function B2BPage() {
  return (
    <div className="min-h-screen bg-[#fafafa] text-slate-900">
      <AppHeader>
        <Link href="/gillo-phone-rental" className="transition hover:text-slate-900">
          대치폰 패키지
        </Link>
        <Link href="/gillo-tab-rental" className="transition hover:text-slate-900">
          대치탭 패키지
        </Link>
        <Link href="/management-subscription" className="transition hover:text-slate-900">
          학습 관리 구독 연장
        </Link>
        <Link href="/b2b" className="transition hover:text-slate-900">
          학원·교육기관 제휴
        </Link>
        <Link
          href="/inquiry"
          className="rounded-full bg-slate-900 px-4 py-2 text-[13px] font-medium text-white transition hover:bg-slate-800"
        >
          문의하기
        </Link>
      </AppHeader>

      <main className="mx-auto max-w-5xl px-5 py-12 sm:px-8 sm:py-16">
        {/* Hero */}
        <motion.section variants={fadeInUp} initial="hidden" animate="show" className="mb-12 text-center">
          <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-slate-400">
            For Academy &amp; School
          </p>
          <h1 className="mt-3 text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
            학원·교육기관 전용 제휴 문의
          </h1>
          <p className="mt-4 text-sm text-slate-600 sm:text-base">
            대치동 상위권 학생을 대상으로 검증된 대치폰·대치탭 세팅을, 귀 기관의 커리큘럼과 연동해
            운영할 수 있는 B2B 제휴 페이지입니다.
          </p>
        </motion.section>

        {/* Why / Use cases */}
        <section className="mb-12 grid gap-8 sm:grid-cols-2">
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-7">
            <h2 className="text-base font-semibold text-slate-900 sm:text-lg">이런 기관에 적합합니다</h2>
            <ul className="mt-3 space-y-2 text-sm text-slate-700">
              <li>· 자습 관리·기숙형 캠프 등에서 휴대폰 사용을 체계적으로 관리하고 싶은 학원</li>
              <li>· 상위권 집중반, 독학관리반 등 몰입 학습 환경을 강조하는 프로그램</li>
              <li>· 공신폰만으로는 한계가 있어, 학습 전용 디바이스를 도입하고 싶은 교육기관</li>
            </ul>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-7">
            <h2 className="text-base font-semibold text-slate-900 sm:text-lg">제휴 형태 (예시)</h2>
            <ul className="mt-3 space-y-2 text-sm text-slate-700">
              <li>· 학원 커리큘럼에 맞춘 대치폰·대치탭 기본 정책 설계</li>
              <li>· 반·분반·스터디 단위의 시간표 기반 잠금 정책 운영</li>
              <li>· 학부모 대상 안내 자료·동의서 템플릿 제공</li>
              <li>· 월별 리포트·운영 피드백 미팅 (옵션)</li>
            </ul>
          </div>
        </section>

        {/* How it works */}
        <section className="mb-12 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-7">
          <h2 className="text-base font-semibold text-slate-900 sm:text-lg">제휴 진행 절차</h2>
          <ol className="mt-4 space-y-3 text-sm text-slate-700">
            <li>
              <span className="font-semibold text-slate-900">1. 사전 상담</span>
              <p className="mt-1 text-xs text-slate-600 sm:text-[13px]">
                학원/교육기관의 규모, 대상 학년, 운영 방식(기숙/통학/자습실 등)을 간단히 공유받습니다.
              </p>
            </li>
            <li>
              <span className="font-semibold text-slate-900">2. 운영 시나리오 설계</span>
              <p className="mt-1 text-xs text-slate-600 sm:text-[13px]">
                학원 시간표·규정에 맞춰, 어떤 시간에 어떤 모드로 동작해야 하는지 운영 시나리오를 함께 설계합니다.
              </p>
            </li>
            <li>
              <span className="font-semibold text-slate-900">3. 파일럿 운영</span>
              <p className="mt-1 text-xs text-slate-600 sm:text-[13px]">
                일부 반·기수에서 파일럿으로 도입해 실제 운영 데이터를 확인하고, 필요시 정책을 수정합니다.
              </p>
            </li>
            <li>
              <span className="font-semibold text-slate-900">4. 정식 계약 및 확장</span>
              <p className="mt-1 text-xs text-slate-600 sm:text-[13px]">
                파일럿 결과를 바탕으로 정식 제휴 계약을 체결하고, 전체 반·캠프·지점 등으로 확장합니다.
              </p>
            </li>
          </ol>
        </section>

        {/* Contact */}
        <section className="mb-4 rounded-2xl border border-slate-200 bg-slate-50 p-6 text-sm text-slate-700 shadow-sm sm:p-7">
          <h2 className="text-base font-semibold text-slate-900 sm:text-lg">제휴 문의 방법</h2>
          <p className="mt-2 text-sm text-slate-700">
            아래 정보를 간단히 정리해 주시면, 담당자가 별도로 연락드려 구체적인 제휴 방식을 안내드립니다.
          </p>
          <ul className="mt-3 space-y-1.5 text-sm text-slate-700">
            <li>· 기관명 / 담당자 성함 / 연락처</li>
            <li>· 학생 수(또는 대략적인 규모)와 대상 학년</li>
            <li>· 희망 도입 형태 (예: 자습실만, 전 학년, 기숙 캠프 등)</li>
          </ul>
          <div className="mt-5 flex flex-col items-start gap-2 sm:flex-row sm:items-center sm:gap-3">
            <Link
              href="/inquiry"
              className="inline-flex items-center justify-center rounded-full bg-slate-900 px-5 py-2.5 text-[13px] font-medium text-white transition hover:bg-slate-800"
            >
              카카오톡으로 제휴 문의하기
            </Link>
            <p className="text-xs text-slate-500">
              ※ 일반 가정용 대치폰·대치탭 문의는 상단 메뉴의 패키지 페이지에서 별도로 받아요.
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}

