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

export default function GilloPhoneRentalPage() {
  return (
    <div className="min-h-screen bg-[#fafafa] text-slate-900">
      <AppHeader>
        <Link href="/gillo-phone-rental" className="transition hover:text-slate-900">대치폰 대여</Link>
        <Link href="/gillo-tab-rental" className="transition hover:text-slate-900">대치탭 대여</Link>
        <Link href="/inquiry" className="rounded-full bg-slate-900 px-4 py-2 text-[13px] font-medium text-white transition hover:bg-slate-800">
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
            대치폰 대여 전용 단말
          </h1>
          <p className="mt-3 text-sm text-slate-600">
            기기를 새로 사지 않고, 전교 1등이 쓰는 것처럼 시간표에 맞춰 정리된 디지털 환경을 일정 기간 동안 대여 형태로 이용할 수 있습니다.
          </p>
        </motion.section>

        {/* 이미지 + 설명 */}
        <section className="mb-16">
          <div className="grid gap-6 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:grid-cols-2 sm:p-8">
            <div className="relative flex items-center justify-center">
              <div className="relative aspect-[9/19] w-40 overflow-hidden rounded-3xl border border-slate-200 bg-black/90 shadow-xl sm:w-48">
                <Image
                  src="/gillo-phone-rental-sample.png"
                  alt="대치폰 대여 샘플 이미지"
                  fill
                  sizes="192px"
                  className="object-contain object-center"
                />
              </div>
            </div>
            <div className="flex flex-col justify-center gap-4 text-sm text-slate-700">
              <div>
                <h2 className="text-base font-semibold text-slate-900 sm:text-lg">검증된 단말만 사용합니다</h2>
                <p className="mt-2">
                  대여에 사용하는 모든 단말은 외관·배터리·기능을 꼼꼼히 검수한 단말만 사용합니다.
                  생활 스크래치 수준까지 확인 후, 학습에 방해되지 않는 단말만 선별합니다.
                  <span className="mt-1 block text-xs text-slate-500">※ 현재 대여 단말의 기본 기종은 아이폰 12입니다.</span>
                </p>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-slate-900">학습에 집중할 수 있는 구성</h3>
                <p className="mt-2">
                  전화·문자·학습 앱 위주로 구성하고, 불필요한 앱과 우회 경로는 차단된 상태로 제공됩니다.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 요금제 안내 – Basic / Pro / Premium */}
        <section className="mb-16">
          <div className="mb-6 flex flex-col items-center gap-2 rounded-xl border border-amber-200 bg-amber-50/80 px-4 py-3 sm:flex-row sm:justify-center sm:gap-3">
            <Clock className="h-4 w-4 shrink-0 text-amber-600" />
            <p className="text-center text-sm font-semibold text-amber-800 sm:text-base">
              대치폰 대여 · 베이직 49,000원 / 프로 79,000원 / 프리미엄 99,000원 (월 구독)
            </p>
          </div>
          <div className="mb-4 text-center sm:mb-6">
            <h2 className="text-base font-semibold text-slate-900 sm:text-lg">
              이렇게 이용하실 수 있어요
            </h2>
            <p className="mt-2 text-xs text-slate-600 sm:text-sm">
              세 가지 플랜 중 하나를 선택해, 자녀의 생활 패턴과 목표에 맞는 대치폰 환경을 대여 형태로 이용합니다.
              매달 최대 10명의 학생만 선별해 운영합니다.
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-3">
            {/* Basic */}
            <div className="flex flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-7">
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-500">Basic</p>
              <h2 className="mt-1 text-base font-semibold text-slate-900 sm:text-lg">베이직 – 기본에 충실한 모드</h2>
              <p className="mt-2 text-xs font-medium text-slate-500">“인터넷이랑 메신저만 막아주세요”에 가까운 구성</p>
              <ul className="mt-3 space-y-2 text-sm text-slate-700">
                <li>· 학습에 필요한 앱만 허용, 나머지는 설치·실행 차단</li>
                <li>· 브라우저·앱스토어 비활성화로 임의 설치 어려움</li>
                <li>· 알림 최소화, 방해 요소를 줄인 기본 집중 모드</li>
              </ul>
              <div className="mt-auto pt-4">
                <p className="text-xl font-bold text-slate-900">월 49,000원</p>
              </div>
            </div>
            {/* Pro */}
            <div className="flex flex-col rounded-2xl border-2 border-violet-300 bg-violet-50/40 p-6 shadow-sm sm:p-7">
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-violet-600">Pro · 추천</p>
              <h2 className="mt-1 text-base font-semibold text-slate-900 sm:text-lg">프로 – 시간표 기반 자동 제어</h2>
              <p className="mt-2 text-xs font-medium text-slate-500">“학교·학원·취침 시간마다 폰이 알아서 바뀌면 좋겠어요”</p>
              <ul className="mt-3 space-y-2 text-sm text-slate-700">
                <li>· 베이직 기능 포함</li>
                <li>· 요일·시간대별로 허용 앱과 잠금 강도 자동 전환</li>
                <li>· 학원/자습 시간에는 집중 모드, 쉬는 시간에는 완화된 모드</li>
              </ul>
              <div className="mt-auto pt-4">
                <p className="text-xl font-bold text-violet-700">월 79,000원</p>
              </div>
            </div>
            {/* Premium */}
            <div className="flex flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-7">
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-500">Premium</p>
              <h2 className="mt-1 text-base font-semibold text-slate-900 sm:text-lg">프리미엄 – 주간 학습 리포트</h2>
              <p className="mt-2 text-xs font-medium text-slate-500">“앱 사용 시간을 데이터로 확인하고 싶어요”</p>
              <ul className="mt-3 space-y-2 text-sm text-slate-700">
                <li>· 프로 기능 포함</li>
                <li>· 앱별 사용 시간·집중 시간 등을 주간 단위로 집계</li>
                <li>· 매주 금요일, 카카오톡으로 간단한 사용 리포트 발송</li>
              </ul>
              <div className="mt-auto pt-4">
                <p className="text-xl font-bold text-slate-900">월 99,000원</p>
              </div>
            </div>
          </div>
          <p className="mt-4 text-xs text-slate-500">
            ※ 모든 요금제에는 대치폰 단말 대여와 초기 세팅이 포함되며, 최소 이용 기간·보증금/파손 규정 등은 상담 시 개별 안내드립니다.
          </p>

          <div className="mt-6 rounded-2xl border border-slate-200 bg-white p-6 text-left shadow-sm sm:p-7">
            <h3 className="text-sm font-semibold text-slate-900 sm:text-base">
              이렇게 이용하실 수 있어요
            </h3>
            <ul className="mt-3 space-y-2 text-sm text-slate-700">
              <li>· 최소 이용 기간, 보증금/파손 규정 등은 상담을 통해 안내드립니다.</li>
              <li>· 기존 휴대폰 약정 상황과 학교·학원 스케줄을 반영해, 적용 가능한 플랜을 함께 설계합니다.</li>
              <li>· 자녀가 사용하는 인강·학습 앱 목록을 기준으로, 대치폰에 필요한 앱만 선별해 세팅합니다.</li>
            </ul>
            <p className="mt-3 text-xs text-slate-500">
              ※ 실제 제공 단말 기종과 세부 세팅 구성은 시기와 재고, 상담 내용에 따라 달라질 수 있습니다.
            </p>
          </div>
          <div className="mt-6 flex flex-col items-center gap-2 text-sm sm:flex-row sm:justify-center sm:gap-3">
            <Link
              href="/inquiry"
              className="inline-flex items-center justify-center rounded-full bg-slate-900 px-5 py-2.5 text-[13px] font-medium text-white transition hover:bg-slate-800"
            >
              카카오톡으로 대여·요금제 문의하기
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

