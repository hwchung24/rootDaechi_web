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
        <Link href="/gillo-phone-rental" className="transition hover:text-slate-900">대치폰 대여</Link>
        <Link href="/gillo-tab-rental" className="transition hover:text-slate-900">대치탭 대여</Link>
        <Link
          href="/inquiry"
          className="rounded-full bg-slate-900 px-4 py-2 text-[13px] font-medium text-white transition hover:bg-slate-800"
        >
          카카오톡 문의
        </Link>
      </AppHeader>

      <main className="mx-auto max-w-5xl px-5 py-12 sm:px-8 sm:py-16">
        {/* Hero */}
        <motion.section variants={fadeInUp} initial="hidden" animate="show" className="mb-12 text-center">
          <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-violet-600">
            전교 1등의 디지털 독서실 · 월 10명 한정
          </p>
          <h1 className="mt-2 text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
            대치탭 대여 전용 태블릿
          </h1>
          <p className="mt-3 text-sm text-slate-600">
            인강·필기·자료 열람에 최적화된 태블릿을 대여해 드립니다.
            공부에 필요 없는 앱과 우회 경로는 막고, 학습에 필요한 기능만 남겨 둡니다.
          </p>
        </motion.section>

        {/* 이미지 + 설명 */}
        <section className="mb-16">
          <div className="grid gap-6 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:grid-cols-2 sm:p-8">
            <div className="relative flex items-center justify-center">
              <div className="relative aspect-[3/4] w-48 overflow-hidden rounded-3xl border border-slate-200 bg-black/90 shadow-xl sm:w-56">
                <Image
                  src="/gillo-tab-rental-sample.png"
                  alt="대치탭 대여 샘플 이미지"
                  fill
                  sizes="224px"
                  className="object-contain object-center"
                />
              </div>
            </div>
            <div className="flex flex-col justify-center gap-4 text-sm text-slate-700">
              <div>
                <h2 className="text-base font-semibold text-slate-900 sm:text-lg">인강과 필기에 최적화된 세팅</h2>
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

        {/* 요금/이용 안내 – 태블릿 구성 플랜 + 이용 방식 */}
        <section className="mb-16">
          <div className="mb-6 flex flex-col items-center gap-2 rounded-xl border border-amber-200 bg-amber-50/80 px-4 py-3 sm:flex-row sm:justify-center sm:gap-3">
            <Clock className="h-4 w-4 shrink-0 text-amber-600" />
            <p className="text-center text-sm font-semibold text-amber-800 sm:text-base">
              대치탭 대여 요금 및 기종은 상담 시 개별 안내드립니다.
            </p>
          </div>

          <div className="mb-4 text-center sm:mb-6">
            <h2 className="text-base font-semibold text-slate-900 sm:text-lg">
              이렇게 이용하실 수 있어요
            </h2>
            <p className="mt-2 text-xs text-slate-600 sm:text-sm">
              자녀의 학습 패턴에 맞춰, 인강·필기·자료 열람 중심의 대치탭 구성을 상담을 통해 맞춰 드립니다.
              매달 최대 10명의 학생만 선별해 운영합니다.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-3">
            {/* 인강 전용 탭 */}
            <div className="flex flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-7">
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-500">
                Option A
              </p>
              <h3 className="mt-1 text-base font-semibold text-slate-900 sm:text-lg">
                인강 전용 대치탭
              </h3>
              <p className="mt-2 text-xs font-medium text-slate-500">
                “모든 인강은 탭에서만 보고 싶어요”에 가까운 구성
              </p>
              <ul className="mt-3 space-y-2 text-sm text-slate-700">
                <li>· 주요 인강 플랫폼, PDF 뷰어, 필기 앱 중심 구성</li>
                <li>· 게임·SNS·쇼핑·불필요한 브라우저 경로 차단</li>
                <li>· 학원/자습실에서도 연결만 하면 바로 수강 가능</li>
              </ul>
              <div className="mt-auto pt-4">
                <p className="text-xs text-slate-500">요금은 상담 시 안내드립니다.</p>
              </div>
            </div>

            {/* 폰·탭 역할 분리 */}
            <div className="flex flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-7">
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-500">
                Option B
              </p>
              <h3 className="mt-1 text-base font-semibold text-slate-900 sm:text-lg">
                대치폰 + 대치탭 역할 분리
              </h3>
              <p className="mt-2 text-xs font-medium text-slate-500">
                “연락은 폰, 공부는 탭으로 분리하고 싶어요”
              </p>
              <ul className="mt-3 space-y-2 text-sm text-slate-700">
                <li>· 대치폰과 동일한 시간표·제어 정책으로 연동 세팅</li>
                <li>· 폰에서는 연락·필수 앱, 탭에서는 인강·필기 위주 구성</li>
                <li>· 시험 기간에는 탭 중심으로, 평소에는 폰 중심으로 유연 조정</li>
              </ul>
              <div className="mt-auto pt-4">
                <p className="text-xs text-slate-500">요금은 상담 시 안내드립니다.</p>
              </div>
            </div>

            {/* 맞춤 앱 구성 */}
            <div className="flex flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-7">
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-500">
                Option C
              </p>
              <h3 className="mt-1 text-base font-semibold text-slate-900 sm:text-lg">
                클라우드·필기·자료 맞춤 구성
              </h3>
              <p className="mt-2 text-xs font-medium text-slate-500">
                “자녀가 쓰는 앱 목록에 맞춰 세팅해 주세요”
              </p>
              <ul className="mt-3 space-y-2 text-sm text-slate-700">
                <li>· 기존에 사용 중인 인강·필기·클라우드 앱 기준 맞춤 세팅</li>
                <li>· 필요 앱만 화이트리스트로 등록, 나머지는 설치·실행 차단</li>
                <li>· 학년·과목 변화에 따라 구성을 재조정할 수 있는 옵션</li>
              </ul>
              <div className="mt-auto pt-4">
                <p className="text-xs text-slate-500">요금은 상담 시 안내드립니다.</p>
              </div>
            </div>
          </div>

          <p className="mt-4 text-xs text-slate-500">
            ※ 실제 제공 기종과 세부 구성은 시기와 재고, 상담 내용에 따라 달라질 수 있습니다.
          </p>

          <div className="mt-6 rounded-2xl border border-slate-200 bg-white p-6 text-left shadow-sm sm:p-7">
            <h3 className="text-sm font-semibold text-slate-900 sm:text-base">
              이용 안내
            </h3>
            <ul className="mt-3 space-y-2 text-sm text-slate-700">
              <li>· 최소 이용 기간, 보증금/파손 규정 등은 상담을 통해 안내드립니다.</li>
              <li>· 대치폰 대여 서비스와 함께 신청하시면, 통합된 시간표·제어 정책으로 세팅해 드립니다.</li>
              <li>· 인강 플랫폼, 필기 앱, 클라우드 저장소 등은 개별 상황에 맞춰 구성 가능합니다.</li>
            </ul>
          </div>

          <div className="mt-6 flex flex-col items-center gap-2 text-sm sm:flex-row sm:justify-center sm:gap-3">
            <Link
              href="/inquiry"
              className="inline-flex items-center justify-center rounded-full bg-slate-900 px-5 py-2.5 text-[13px] font-medium text-white transition hover:bg-slate-800"
            >
              카카오톡으로 대치탭 대여 문의하기
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

