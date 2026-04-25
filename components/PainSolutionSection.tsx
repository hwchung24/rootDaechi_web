"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const PAIRS = [
  {
    pain: "인터넷은 막고 싶은데 인강은 봐야 해요",
    solutionTitle: "타임라인 잠금",
    solutionDesc: "공부 시간엔 유튜브·SNS 차단, 인강 앱만 허용"
  },
  {
    pain: "독서실 간다고 나가서 어디 있는지 몰라요",
    solutionTitle: "공부 장소 체크인·아웃",
    solutionDesc: "도착·출발 시간을 부모에게 실시간 전송"
  },
  {
    pain: "기존 공부폰은 택시도 못 잡아서 불편해요",
    solutionTitle: "유틸리티 모드",
    solutionDesc: "카카오택시·지도·뱅킹 허용, 아이폰 감성 그대로"
  }
];

export function PainSolutionSection() {
  return (
    <section className="snap-none border-b border-slate-200/70 bg-white" aria-labelledby="pain-solution-heading">
      <div className="mx-auto max-w-6xl px-5 py-12 sm:px-8 sm:py-14">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.4 }}
          className="text-center"
        >
          <h2 id="pain-solution-heading" className="text-2xl font-bold tracking-tight text-slate-900 sm:text-[1.75rem]">
            고통 → 해결
          </h2>
          <p className="mt-2 text-sm text-slate-600 sm:text-[15px]">이런 상황이라면 대치폰이 필요합니다</p>
        </motion.div>

        <div className="mt-8 rounded-3xl border border-slate-200 bg-[#fafafa] p-4 sm:p-6">
          <div className="grid gap-4 sm:gap-5">
            {PAIRS.map((item, index) => (
              <motion.div
                key={item.solutionTitle}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.42, delay: index * 0.06 }}
                className="grid items-center gap-3 rounded-2xl bg-white p-4 ring-1 ring-slate-200/80 sm:grid-cols-[1.35fr_auto_1.15fr] sm:gap-4 sm:p-5"
              >
                <blockquote className="text-[15px] font-medium text-slate-800 sm:text-base">&ldquo;{item.pain}&rdquo;</blockquote>
                <span className="mx-auto flex h-9 w-9 items-center justify-center rounded-full bg-slate-100 text-slate-600">
                  <ArrowRight className="h-4 w-4" strokeWidth={2} aria-hidden />
                </span>
                <div className="rounded-xl bg-navy-50/45 px-4 py-3 ring-1 ring-navy-100">
                  <p className="text-sm font-bold text-slate-900 sm:text-[15px]">{item.solutionTitle}</p>
                  <p className="mt-1 text-[13px] leading-relaxed text-slate-600 sm:text-sm">{item.solutionDesc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
