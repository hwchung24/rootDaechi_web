"use client";

import { motion } from "framer-motion";

export function FounderStorySection() {
  return (
    <section className="snap-none border-t border-slate-200/80 bg-white" aria-labelledby="founder-story-heading">
      <div className="mx-auto max-w-6xl px-5 py-14 sm:px-8 sm:py-16">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.45 }}
          className="text-center"
        >
          <h2 id="founder-story-heading" className="text-2xl font-bold tracking-tight text-slate-900 sm:text-[1.75rem]">
            창업자 스토리
          </h2>
          <p className="mt-2 text-sm text-slate-500 sm:text-[15px]">
            대치루트 공동창업자의 실제 경험이 제품 철학을 만들었습니다
          </p>
        </motion.div>

        <motion.article
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.45, delay: 0.05 }}
          className="mt-8 rounded-3xl border border-slate-200 bg-[#fafcff] p-6 sm:p-8"
        >
          <p className="text-[12px] font-bold uppercase tracking-[0.08em] text-navy-700">활용 포인트</p>
          <h3 className="mt-2 text-xl font-bold tracking-tight text-slate-900 sm:text-2xl">
            오진혁 공동창업자의 스토리가 가장 강력한 카피입니다
          </h3>
          <p className="mt-3 text-[15px] leading-relaxed text-slate-600 sm:text-base">
            중학생(게임만)에서 고1(100등대), 고1 말(전교 5등), 그리고 현역 연세대 진학까지. 휴대폰 사용 환경을 바꾼
            경험이 대치루트의 출발점이었습니다.
          </p>

          <blockquote className="mt-6 rounded-2xl border-l-4 border-navy-500 bg-white px-5 py-4 text-[16px] font-semibold leading-relaxed text-slate-900 sm:text-[18px]">
            &ldquo;달라진 건 의지가 아니었습니다. 휴대폰의 모든 유혹을 차단한 것,
            <br className="hidden sm:block" /> 그 3개월이 전국 상위 0.3%를 만들었습니다.&rdquo;
          </blockquote>

          <div className="mt-6 grid gap-3 md:grid-cols-2">
            <div className="rounded-2xl bg-rose-50/75 p-4 ring-1 ring-rose-100">
              <p className="text-[12px] font-semibold text-rose-700">현재 랜딩</p>
              <p className="mt-1 text-sm font-medium text-slate-700">
                &ldquo;서울대 출신이 만든 공부폰&rdquo; 같은 1줄 메시지 중심
              </p>
            </div>
            <div className="rounded-2xl bg-emerald-50/80 p-4 ring-1 ring-emerald-100">
              <p className="text-[12px] font-semibold text-emerald-700">개선 방향</p>
              <p className="mt-1 text-sm font-medium text-slate-700">
                공동창업자의 변화 스토리를 독립 섹션으로 강조해 제품 존재 이유를 전달
              </p>
            </div>
          </div>
        </motion.article>
      </div>
    </section>
  );
}
