"use client";

import type { LucideIcon } from "lucide-react";
import { motion } from "framer-motion";
import { Package, RotateCcw, ShieldCheck, MessageCircle } from "lucide-react";

const BADGES: {
  id: string;
  title: string;
  description: string;
  Icon: LucideIcon;
  iconAccent?: "dot";
}[] = [
  {
    id: "ship",
    title: "빠른 출고",
    description: "상담·결제 확인 후 영업일 기준 1~2일 내 발송합니다.",
    Icon: Package
  },
  {
    id: "return",
    title: "30일 무료 반품",
    description: "단순 변심도 가능합니다. 왕복 배송비 무료·조건에 따라 전액 환불.",
    Icon: RotateCcw
  },
  {
    id: "warranty",
    title: "1년 품질 보증",
    description: "보증 기간·범위는 국내 소비자 분쟁 해결 기준 및 제품 안내를 따릅니다.",
    Icon: ShieldCheck
  },
  {
    id: "support",
    title: "전담 고객 지원",
    description: "평일 기준 24시간 내 카카오톡으로 빠르게 답변해 드립니다.",
    Icon: MessageCircle,
    iconAccent: "dot"
  }
];

export function ServiceTrustSection() {
  return (
    <section
      className="snap-none border-y border-slate-200/70 bg-[#f0f1f3]"
      aria-labelledby="service-trust-heading"
    >
      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-8 sm:py-12">
        <h2 id="service-trust-heading" className="sr-only">
          서비스 안내
        </h2>
        <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4 lg:grid-cols-4 lg:gap-5">
          {BADGES.map((item, i) => {
            const Icon = item.Icon;
            return (
              <motion.li
                key={item.id}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                className="flex flex-col items-center rounded-2xl bg-white px-5 py-7 text-center shadow-sm shadow-slate-900/[0.04] ring-1 ring-slate-200/80 sm:px-6 sm:py-8"
              >
                <div className="relative flex h-12 w-12 items-center justify-center text-slate-900">
                  <Icon className="h-9 w-9" strokeWidth={1.35} aria-hidden />
                  {item.iconAccent === "dot" && (
                    <span
                      className="absolute -right-0.5 -top-0.5 h-2 w-2 rounded-full bg-red-500 ring-2 ring-white"
                      aria-hidden
                    />
                  )}
                </div>
                <h3 className="mt-4 text-[15px] font-bold tracking-tight text-slate-900 sm:text-base">{item.title}</h3>
                <p className="mt-2 text-[13px] leading-relaxed text-slate-600 sm:text-sm">{item.description}</p>
              </motion.li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
