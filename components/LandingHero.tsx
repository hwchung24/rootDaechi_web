"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { LandingHeroIPadVisual } from "@/components/LandingHeroIPadVisual";

/** 랜딩 홈 — PLAUD형 2열 히어로 (포인트 남색) */
export function LandingHero() {
  return (
    <section className="snap-none border-b border-white/10 bg-[#13223F]">
      <div className="mx-auto min-h-auto max-w-6xl bg-[#13223F] px-6 py-12 md:min-h-screen md:px-6 md:py-14 sm:px-12">
        <div className="grid min-h-0 items-center gap-10 md:min-h-[calc(100vh-7rem)] lg:grid-cols-[55fr_45fr] lg:items-center lg:gap-12">
          <motion.div initial={false} className="order-1 mt-5 flex h-full w-full flex-col items-start justify-center text-left lg:order-1 lg:mt-0">
            <div className="mb-4">
              <p className="inline-flex w-fit rounded-[8px] bg-white/10 px-[14px] py-[6px] text-[13px] font-medium text-white">
                5월 출시  ·  출시 알림 신청자 모집중
              </p>
            </div>
            <h1 className="break-keep text-[30px] font-bold leading-[1.25] tracking-[-0.03em] text-white md:text-[44px] md:leading-[1.15] lg:text-[52px]">
              <span>DOS EDU</span>
              <br />
              <span>환경을 통한 학습 관리</span>
            </h1>
            <p className="mt-5 max-w-xl text-[17px] leading-[1.7] text-white">
              대치동 학습 환경을 아이폰에 담았습니다
            </p>

            <div className="mt-8 flex flex-col gap-3">
              <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-stretch sm:gap-3">
                <Link
                  href="#phone-detail"
                  className="inline-flex w-full items-center justify-center rounded-[10px] bg-white px-7 py-3.5 text-[15px] font-semibold text-[#1B2A4A] sm:w-auto sm:min-w-[11rem]"
                >
                  DOS EDU 자세히 보기 →
                </Link>
                <Link
                  href="/management-subscription"
                  className="inline-flex w-full items-center justify-center rounded-[10px] border-2 border-white/55 bg-white/5 px-7 py-3.5 text-[15px] font-semibold text-white transition hover:bg-white/10 sm:w-auto sm:min-w-[11rem]"
                >
                  구독 연장
                </Link>
              </div>
              <Link
                href="/pricing"
                className="block text-center text-[15px] font-medium text-white/80 hover:underline sm:text-left"
              >
                패키지 보기
              </Link>
            </div>

          </motion.div>

          <motion.div initial={false} className="order-2 hidden h-full w-full items-center justify-center self-center lg:order-2 lg:flex lg:justify-end">
            <div className="w-full max-w-[420px] md:max-w-[620px]">
              <LandingHeroIPadVisual />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
