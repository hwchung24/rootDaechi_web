"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { AppHeader } from "@/components/AppHeader";
import { Clock } from "lucide-react";

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 0.61, 0.36, 1] } }
};

export default function GilloTabRentalPage() {
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
      </AppHeader>

      <main className="mx-auto max-w-5xl px-5 py-12 sm:px-8 sm:py-16">
        {/* Hero */}
        <motion.section variants={fadeInUp} initial="hidden" animate="show" className="mb-12 text-center">
          <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-navy-700">
            대치탭 패키지 · 기기 + 1년 관리
          </p>
          <h1 className="mt-2 text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
            대치탭 1대와 1년 학습 관리
          </h1>
          <p className="mt-3 text-sm text-slate-600">
            처음 한 번 기기를 구매하면, 1년 동안 인강·필기에 최적화된 학습 관리가 함께 제공됩니다.
          </p>
        </motion.section>

        {/* 이미지 + 설명 */}
        <section className="mb-16">
          <div className="grid gap-6 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:grid-cols-2 sm:p-8">
            <div className="relative flex items-center justify-center">
              <Image
                src="/daechi-tab.png"
                alt="대치탭 대여 샘플 이미지"
                width={280}
                height={380}
                className="rounded-3xl border border-slate-200 bg-white object-cover shadow-xl"
              />
            </div>
            <div className="flex flex-col justify-center gap-4 text-sm text-slate-700">
              <div>
                <h2 className="text-base font-semibold text-slate-900 sm:text-lg">검증된 단말기만 제공됩니다</h2>
                <p className="mt-2">
                  패키지에 포함되는 단말기는 철저한 상태 검수 후에 세팅됩니다.
                  <span className="mt-1 block text-xs text-slate-500">※ 현재 기본 기종은 아이패드 10세대입니다.</span>
                </p>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-slate-900">인강과 필기에 최적화된 세팅</h3>
                <p className="mt-2">
                  인강 플랫폼, 필기 앱, PDF 뷰어 등 학습에 필요한 앱 위주로 구성하고,
                  게임·SNS·쇼핑·브라우저 등의 방해 요소는 차단된 상태로 제공됩니다.
                </p>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-slate-900">대치폰과 연동되는 학습 환경</h3>
                <p className="mt-2">
                  대치폰 대여 서비스와 함께 사용할 경우, 휴대폰과 태블릿이 같은 원칙으로 관리되어
                  인강은 태블릿에서, 연락과 필수 앱은 폰에서 사용하는 &quot;역할 분리&quot; 환경을 만들 수 있습니다.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 패키지 안내 – 기기 + 1년 학습 관리 */}
        <section className="mb-16">
          <div className="mb-4 text-center sm:mb-6">
            <h2 className="text-base font-semibold text-slate-900 sm:text-lg">대치탭 패키지 구성</h2>
            <p className="mt-2 text-xs text-slate-600 sm:text-sm">
              대치탭 1대와 1년 학습 관리 서비스가 함께 제공되는 패키지입니다. 이후에는 학습 관리만 구독 형태로 연장할 수 있습니다.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-[1.1fr,1fr]">
            <div className="flex flex-col rounded-2xl border border-slate-200 bg-white p-6 text-left shadow-sm sm:p-7">
              <p className="text-[11px] font-semibold tracking-[0.18em] text-slate-500">구성</p>
              <h3 className="mt-2 text-base font-semibold text-slate-900 sm:text-lg">대치탭 기기 + 1년 학습 관리</h3>
              <ul className="mt-3 space-y-2 text-sm text-slate-700">
                <li>· 검증된 아이패드 10세대 기기 1대 제공</li>
                <li>· 인강·필기에 최적화된 앱 구성 및 방해 요소 차단</li>
                <li>· 시간표 기반 인강·필기 집중 모드 운영</li>
                <li>· 주간 사용 리포트 및 학부모 카카오톡 피드백</li>
              </ul>
              <p className="mt-4 text-xs text-slate-500">
                ※ 세부 관리 방식은 상담 후 확정되며, 학년·목표에 따라 일부 항목이 조정될 수 있습니다.
              </p>
            </div>

            <div className="flex flex-col rounded-2xl border border-slate-200 bg-slate-50 p-6 text-left shadow-sm sm:p-7">
              <p className="text-[11px] font-semibold tracking-[0.18em] text-slate-500">가격</p>
              <p className="mt-3 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
                399,000원
              </p>
              <p className="mt-2 text-sm text-slate-700">기기 비용과 1년 학습 관리 서비스가 모두 포함된 금액입니다.</p>
              <p className="mt-3 text-xs text-slate-500">
                1년 이후에는 기기는 그대로 두고, 학습 관리만 월 <span className="font-semibold text-slate-700">19,000원</span>(만 구천 원)에
                연장할 수 있습니다.
              </p>
              <div className="mt-5">
                <Link
                  href="/management-subscription"
                  className="inline-flex items-center text-[13px] font-medium text-slate-700 underline underline-offset-4"
                >
                  구독 연장 안내
                </Link>
              </div>
            </div>
          </div>

          <div className="mt-8 flex flex-col items-center gap-2 text-sm sm:flex-row sm:justify-center sm:gap-3">
            <Link
              href="/inquiry"
              className="inline-flex items-center justify-center rounded-full bg-navy-800 px-5 py-2.5 text-[13px] font-medium text-white transition hover:bg-navy-900"
            >
              카카오톡으로 대치탭 패키지 상담하기
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

