"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { LandingHeroIPadVisual } from "@/components/LandingHeroIPadVisual";

/** 랜딩 홈 — PLAUD형 2열 히어로 (포인트 남색) */
export function LandingHero() {
  const trustMetrics = [
    { value: "6개월", label: "루틴 유지 후기", source: "베타 사용자 중 루틴 유지 비율" },
    { value: "2등급↑", label: "수능 성적 향상", source: "6개월 이상 사용자 평균" },
    { value: "49,000원", label: "월 관리 비용", source: "관리형 독서실 월 50~90만원 대비" }
  ];

  return (
    <section className="snap-none border-b border-white/10 bg-[#1B2A4A]">
      <div className="mx-auto min-h-auto max-w-6xl bg-[#1B2A4A] px-6 py-12 md:min-h-screen md:px-6 md:py-14 sm:px-12">
        <div className="grid min-h-0 items-center gap-10 md:min-h-[calc(100vh-7rem)] lg:grid-cols-[55fr_45fr] lg:items-center lg:gap-12">
          <motion.div initial={false} className="order-1 mt-5 flex h-full w-full flex-col justify-center text-left lg:order-1 lg:mt-0">
            <div className="mb-4 flex w-fit items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-medium text-white md:hidden">
              <span>대치폰</span>
              <span>·</span>
              <span>5월 출시</span>
            </div>
            <div className="mb-4">
              <p className="inline-flex w-fit rounded-[8px] bg-white/10 px-[14px] py-[6px] text-[13px] font-medium text-white">
                5월 출시  ·  사전 예약 모집중
              </p>
              <p className="mt-2 text-[12px] text-white/60">현재 베타 운영 중 · 정식 출시 5월</p>
            </div>
            <h1 className="break-keep text-[30px] font-bold leading-[1.25] tracking-[-0.03em] text-white md:text-[44px] md:leading-[1.15] lg:text-[52px]">
              <span>의지가 아니라</span>
              <br />
              <span>구조가 공부를 시킵니다</span>
            </h1>
            <p className="mt-5 max-w-xl text-[17px] leading-[1.7] text-white">
              대치동 학습 시스템을 아이폰에 담았습니다.
              <br />
              공부 시간엔 자동 차단, 위치 확인, AI 코칭, 학부모 리포트까지.
            </p>
            <div className="mt-7 flex flex-wrap items-center gap-5">
              <Link
                href="/parents"
                className="inline-flex items-center justify-center rounded-[10px] bg-white px-7 py-[14px] text-[15px] font-semibold text-[#1B2A4A] transition hover:bg-white"
              >
                학부모라면 →
              </Link>
              <Link
                href="/students"
                className="inline-flex items-center justify-center text-[15px] font-medium text-white/80 transition hover:underline"
              >
                학생이라면 →
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
