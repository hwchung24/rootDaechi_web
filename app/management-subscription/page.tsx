"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { AppHeader } from "@/components/AppHeader";

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 0.61, 0.36, 1] } }
};

export default function ManagementSubscriptionPage() {
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
        <Link
          href="/inquiry"
          className="rounded-full bg-navy-800 px-4 py-2 text-[13px] font-medium text-white transition hover:bg-navy-900"
        >
          문의하기
        </Link>
      </AppHeader>

      <main className="mx-auto max-w-5xl px-5 py-12 sm:px-8 sm:py-16">
        <motion.section variants={fadeInUp} initial="hidden" animate="show" className="mb-12 text-center">
          <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-slate-500">
            이미 대치폰·대치탭을 보유한 분들을 위해
          </p>
          <h1 className="mt-2 text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
            학습 관리 구독 연장
          </h1>
          <p className="mt-3 text-sm text-slate-600 sm:text-base">
            기기는 그대로 두고, 상위권 수준의 학습 관리만 월 구독 형태로 이어갈 수 있습니다.
          </p>
        </motion.section>

        <section className="mb-16">
          <div className="grid gap-6 rounded-2xl border border-slate-200 bg-white p-6 text-left shadow-sm sm:grid-cols-2 sm:p-8">
            <div>
              <h2 className="text-base font-semibold text-slate-900 sm:text-lg">이 페이지가 필요한 분</h2>
              <ul className="mt-3 space-y-2 text-sm text-slate-700">
                <li>· 이미 대치폰 또는 대치탭 패키지를 구매해 1년을 사용해 보신 분</li>
                <li>· 같은 관리 원칙을 유지하면서, 대학 입시까지 환경을 이어가고 싶은 분</li>
                <li>· 기기는 그대로 사용하면서, 관리 서비스만 유연하게 연장하고 싶은 분</li>
              </ul>
            </div>
            <div className="rounded-2xl bg-slate-50 p-4 text-sm text-slate-700 sm:p-5">
              <p className="text-[11px] font-semibold tracking-[0.18em] text-slate-500">구독 구조</p>
              <p className="mt-2">
                학습 관리 구독은 <span className="font-semibold">대치폰·대치탭 공식 기기</span>를 기준으로 제공됩니다.
                패키지 이력과 학생 상황을 반영해 운영 방식을 맞춥니다. 요금은 월 19,000원(만 구천 원) 단일입니다.
              </p>
              <p className="mt-3 text-xs text-slate-500">
                ※ 별도 기기에서 이용을 원하시는 경우, 지원 가능 여부를 상담을 통해 개별 안내드립니다.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-16">
          <div className="mb-6 text-center sm:mb-8">
            <h2 className="text-base font-semibold text-slate-900 sm:text-lg">학습 관리 구독</h2>
            <p className="mt-2 text-xs text-slate-600 sm:text-sm">
              기기는 이미 보유하고 계신다는 전제에서, 학습 관리 서비스만 월 단위로 이어갑니다.
            </p>
          </div>

          <div className="mx-auto max-w-lg">
            <div className="flex flex-col rounded-2xl border-2 border-navy-200 bg-white p-6 text-center shadow-sm sm:p-8">
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-navy-600">월 구독</p>
              <p className="mt-2 text-3xl font-bold tracking-tight text-navy-800 sm:text-4xl">
                19,000원
              </p>
              <p className="mt-1 text-xs text-slate-500">만 구천 원 · 부가세 별도</p>
              <ul className="mt-6 space-y-2.5 text-left text-sm text-slate-700">
                <li>· Apple MDM 기반 앱·웹 허용·차단</li>
                <li>· 요일·시간대별 시간표 연동 제어</li>
                <li>· 주간 학습 리포트 · 학부모 카카오톡 피드백</li>
                <li>· 부모 앱으로 원격 모드 조정</li>
              </ul>
              <p className="mt-4 text-left text-xs text-slate-500">
                ※ 패키지 사용 이력에 따라 세부 설정은 상담 시 함께 맞춥니다.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-8">
          <div className="rounded-2xl border border-slate-200 bg-white p-6 text-left shadow-sm sm:p-7">
            <h2 className="text-sm font-semibold text-slate-900 sm:text-base">이렇게 진행됩니다</h2>
            <ul className="mt-3 space-y-2 text-sm text-slate-700">
              <li>· 기존 대치폰·대치탭 사용 이력과 현재 성적·목표를 간단히 공유합니다.</li>
              <li>· 연장 시점과 운영 방식을 상담으로 확정한 뒤, 월 19,000원 구독을 반영합니다.</li>
              <li>· 동의 후에는 기존 기기에 새로운 기간을 반영해 관리 정책이 연장됩니다.</li>
            </ul>
          </div>
          <div className="mt-6 flex flex-col items-center gap-2 text-sm sm:flex-row sm:justify-center sm:gap-3">
            <Link
              href="/inquiry"
              className="inline-flex items-center justify-center rounded-full bg-navy-800 px-5 py-2.5 text-[13px] font-medium text-white transition hover:bg-navy-900"
            >
              카카오톡으로 구독 연장 상담하기
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

