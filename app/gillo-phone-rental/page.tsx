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
        <Link href="/" className="transition hover:text-slate-900">홈</Link>
        <Link href="/#products" className="transition hover:text-slate-900">서비스</Link>
        <Link href="/contact" className="rounded-full bg-slate-900 px-4 py-2 text-[13px] font-medium text-white transition hover:bg-slate-800">
          상담 신청
        </Link>
      </AppHeader>

      <main className="mx-auto max-w-5xl px-5 py-12 sm:px-8 sm:py-16">
        {/* Hero */}
        <motion.section variants={fadeInUp} initial="hidden" animate="show" className="mb-12 text-center">
          <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-violet-600">대치폰 대여</p>
          <h1 className="mt-2 text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
            아이폰 12 S급 대치폰 대여
          </h1>
          <p className="mt-3 text-sm text-slate-600">
            기기를 새로 사지 않고, 검증된 S급 아이폰 12로 대치폰을 일정 기간만 사용해 보고 싶은 분들을 위한 옵션입니다.
          </p>
        </motion.section>

        {/* 이미지 + 설명 */}
        <section className="mb-16">
          <div className="grid gap-6 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:grid-cols-2 sm:p-8">
            <div className="relative flex items-center justify-center">
              <div className="relative aspect-[9/19] w-40 overflow-hidden rounded-3xl border border-slate-200 bg-black/90 shadow-xl sm:w-48">
                <Image
                  src="/gillo-phone-rental-sample.png"
                  alt="대치폰 대여 샘플 이미지 (아이폰 12 S급)"
                  fill
                  sizes="192px"
                  className="object-contain object-center"
                />
              </div>
            </div>
            <div className="flex flex-col justify-center gap-4 text-sm text-slate-700">
              <div>
                <h2 className="text-base font-semibold text-slate-900 sm:text-lg">아이폰 12, 철저히 검증된 S급 상태</h2>
                <p className="mt-2">
                  대여에 사용하는 모든 단말은 외관·배터리·기능을 꼼꼼히 검수한 S급 아이폰 12만 사용합니다.
                  생활 스크래치 수준까지 확인 후, 학습에 방해되지 않는 단말만 선별합니다.
                </p>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-slate-900">공신폰 세팅이 그대로 적용된 대치폰</h3>
                <p className="mt-2">
                  대치폰 세팅과 동일하게 전화·문자·학습 앱 위주로 구성하고, 불필요한 앱과 우회 경로는 차단된 상태로 제공됩니다.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 요금 안내 */}
        <section className="mb-16">
          <div className="mb-6 flex flex-col items-center gap-2 rounded-xl border border-amber-200 bg-amber-50/80 px-4 py-3 sm:flex-row sm:justify-center sm:gap-3">
            <Clock className="h-4 w-4 shrink-0 text-amber-600" />
            <p className="text-center text-sm font-semibold text-amber-800 sm:text-base">
              대치폰 대여 · 월 5만 원, <span className="text-rose-600">첫 달 2만 원</span>
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-[2fr,1.5fr]">
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
              <h2 className="text-base font-semibold text-slate-900 sm:text-lg">요금 구조</h2>
              <ul className="mt-3 space-y-2 text-sm text-slate-700">
                <li>· 기본 대여료: <span className="font-semibold text-slate-900">월 5만 원</span></li>
                <li>· <span className="font-semibold text-rose-600">첫 달만 2만 원</span>으로 체험 가능</li>
                <li>· 최소 이용 기간, 보증금/파손 규정 등은 상담 시 1:1로 안내해 드립니다.</li>
              </ul>
              <p className="mt-4 text-xs text-slate-500">
                ※ 위 금액은 대여 및 세팅이 모두 포함된 금액이며, 추가 옵션 선택 시 비용이 달라질 수 있습니다.
              </p>
            </div>
            <div className="flex flex-col justify-between rounded-2xl border border-slate-200 bg-slate-50/60 p-6 shadow-sm sm:p-7">
              <div>
                <h3 className="text-sm font-semibold text-slate-900">이런 분께 추천드립니다</h3>
                <ul className="mt-3 space-y-2 text-sm text-slate-700">
                  <li>· 대치폰을 먼저 한 달 정도만 써보고 싶은 경우</li>
                  <li>· 특정 시험 기간에만 공신폰이 필요한 경우</li>
                  <li>· 기기 구매 부담 없이, 세팅된 폰으로만 써보고 싶은 경우</li>
                </ul>
              </div>
              <div className="mt-5 flex flex-col gap-2 text-sm">
                <Link
                  href="/inquiry"
                  className="inline-flex items-center justify-center rounded-full bg-slate-900 px-4 py-2.5 text-[13px] font-medium text-white transition hover:bg-slate-800"
                >
                  카카오톡으로 대여 문의하기
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-full border border-slate-300 px-4 py-2.5 text-[13px] font-medium text-slate-800 transition hover:border-slate-400 hover:bg-white"
                >
                  전화 상담 신청하기
                </Link>
              </div>
            </div>
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

