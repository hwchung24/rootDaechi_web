"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { LandingHeroIPadVisual } from "@/components/LandingHeroIPadVisual";

/** 랜딩 홈 — PLAUD형 2열 히어로 (포인트 남색) */
export function LandingHero() {
  const trustMetrics = [
    { value: "6개월", label: "베타테스터 23명 구독 유지율 평균"},
    { value: "1.6등급↑", label: "수능 성적 향상", source: "베타테스터 23명 중 6개월 이상 사용자 평균" },
    { value: "49,000원", label: "관리형 독서실 대비 10분의 1 수준"}
  ];

  return (
    <section className="snap-none border-b border-white/10 bg-[#1B2A4A]">
      <div className="mx-auto min-h-auto max-w-6xl bg-[#1B2A4A] px-6 py-12 md:min-h-screen md:px-6 md:py-14 sm:px-12">
        <div className="grid min-h-0 items-center gap-10 md:min-h-[calc(100vh-7rem)] lg:grid-cols-[55fr_45fr] lg:items-center lg:gap-12">
          <motion.div initial={false} className="order-1 mt-5 flex h-full w-full flex-col items-center justify-center text-center lg:order-1 lg:mt-0 lg:items-start lg:text-left">
            <div className="mb-4">
              <p className="inline-flex w-fit rounded-[8px] bg-white/10 px-[14px] py-[6px] text-[13px] font-medium text-white">
                5월 출시  ·  출시 알림 신청자 모집중
              </p>
            </div>
            <h1 className="break-keep text-[30px] font-bold leading-[1.25] tracking-[-0.03em] text-white md:text-[44px] md:leading-[1.15] lg:text-[52px]">
              <span>대치폰</span>
              <br />
              <span>환경을 통한 학습 관리</span>
            </h1>
            <p className="mx-auto mt-5 max-w-xl text-[17px] leading-[1.7] text-white lg:mx-0">
              대치동 학습 환경을 아이폰에 담았습니다
            </p>
            
            <div className="mt-12 flex flex-row items-stretch justify-center px-4 py-7 md:px-0 md:py-0">
              {trustMetrics.map((metric, idx) => (
                <div
                  key={metric.value}
                  className={`flex-1 px-2 text-center lg:flex lg:items-start lg:px-0 lg:text-left ${
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
