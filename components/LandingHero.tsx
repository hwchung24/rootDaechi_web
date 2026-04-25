"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { LandingHeroIPadVisual } from "@/components/LandingHeroIPadVisual";

/** 랜딩 홈 — PLAUD형 2열 히어로 (포인트 남색) */
export function LandingHero() {
  const trustMetrics = [
    { value: "6개월", label: "루틴 유지 후기", source: "실사용자 후기 기준" },
    { value: "2등급↑", label: "수능 성적 향상", source: "6개월 사용자 기준" },
    { value: "24시간", label: "AI 코칭 지원", source: "연중무휴" }
  ];

  return (
    <section className="snap-none border-b border-white/10 bg-[#1B2A4A]">
      <div className="mx-auto min-h-auto max-w-6xl bg-[#1B2A4A] px-5 py-6 md:min-h-screen md:px-6 md:py-14 sm:px-12">
        <div className="grid min-h-0 items-center gap-10 md:min-h-[calc(100vh-7rem)] lg:grid-cols-[55fr_45fr] lg:items-center lg:gap-12">
          <motion.div initial={false} className="order-2 mt-5 flex h-full w-full flex-col justify-center text-left lg:order-1 lg:mt-0">
            <p className="mb-4 inline-flex w-fit rounded-[8px] bg-white/10 px-[14px] py-[6px] text-[13px] font-medium text-white">
              5월 출시  ·  사전 예약 모집중
            </p>
            <h1 className="break-keep text-[30px] font-bold leading-[1.25] tracking-[-0.03em] text-white md:text-[44px] md:leading-[1.15] lg:text-[52px]">
              <span>&ldquo;왜 성적이 안 올라?&rdquo;</span>
              <br />
              <span>그 싸움, 이제 그만하세요</span>
            </h1>
            <p className="mt-5 max-w-xl text-[17px] leading-[1.7] text-white">
              의지가 아니라 구조가 공부를 시킵니다.
              <br />
              대치동 학습 시스템을 아이폰에 담았습니다.
            </p>
            <div className="mt-7 flex flex-wrap items-center gap-5">
              <Link
                href="/notify"
                className="inline-flex items-center justify-center rounded-[10px] bg-white px-7 py-[14px] text-[15px] font-semibold text-[#1B2A4A] transition hover:bg-white"
              >
                지금 알림 신청
              </Link>
              <Link
                href="#products"
                className="inline-flex items-center justify-center text-[15px] font-medium text-white/80 transition hover:underline"
              >
                패키지 보기 →
              </Link>
            </div>
            <div className="mt-12 flex flex-row items-stretch justify-center px-4 py-7 md:px-0 md:py-0">
              {trustMetrics.map((metric, idx) => (
                <div
                  key={metric.value}
                  className={`flex-1 px-2 text-center md:flex md:items-start md:px-0 md:text-left ${
                    idx < trustMetrics.length - 1 ? "border-r border-white/20 md:border-r-0" : ""
                  }`}
                >
                  <div>
                    <p className="text-[22px] font-bold leading-none tracking-[-0.03em] text-white md:text-[28px]">{metric.value}</p>
                    <p className="mt-1 text-[11px] text-white/60 md:text-[13px]">{metric.label}</p>
                    <p className="mt-0.5 text-[10px] text-white/60 md:text-[11px]">{metric.source}</p>
                  </div>
                  {idx < trustMetrics.length - 1 ? <span className="mx-7 hidden text-white/15 md:block">|</span> : null}
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div initial={false} className="order-1 flex h-full w-full items-center justify-center self-center lg:order-2 lg:justify-end">
            <div className="w-full max-w-[420px] md:max-w-[620px]">
              <LandingHeroIPadVisual />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
