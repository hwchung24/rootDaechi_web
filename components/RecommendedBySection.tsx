"use client";

import { motion } from "framer-motion";

export type RecommendedItem = {
  id: string;
  title: string;
  quote: string;
};

const ITEMS: RecommendedItem[] = [
  {
    id: "review-daechi-parent",
    title: "대치동 학부모 · 고3 · 5개월",
    quote: "데이터로 대화하니 갈등이 사라졌어요. 처음으로 아이를 믿을 수 있게 됐습니다."
  },
  {
    id: "review-gangnam-student",
    title: "강남구 고3 · 4개월",
    quote: "의지력이 문제인 줄 알았는데 시간 계획 잡아주니 4개월째 페이스 유지 중입니다."
  },
  {
    id: "review-mokdong-parent",
    title: "목동 학부모 · 고2 · 3개월",
    quote: "잔소리할 필요가 없어졌어요. 통제하는 부모가 아니라 선물해주는 부모가 됐어요."
  },
  {
    id: "review-seocho-student",
    title: "서초구 고2 · 6개월",
    quote: "새벽에 막히는 수학 문제를 바로 해결하니까 학원 복습이 밀리지 않았습니다."
  },
  {
    id: "review-daechi-student",
    title: "대치동 재수생 · 5개월",
    quote: "플래너 미작성 잠금 기능이 생각보다 강력해서 무너진 루틴을 다시 세웠어요."
  },
  {
    id: "review-gangnam-parent",
    title: "강남구 학부모 · 고1 · 4개월",
    quote: "체크인 알림 덕분에 이동 시간까지 관리가 되고, 불필요한 의심이 줄었습니다."
  }
];

export function RecommendedBySection() {
  return (
    <section className="snap-none border-t border-slate-200/80 bg-white" aria-labelledby="recommended-by-heading">
      <div className="mx-auto max-w-6xl px-5 py-14 sm:px-8 sm:py-16 lg:py-20">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.45 }}
          className="text-center"
        >
          <h2 id="recommended-by-heading" className="text-2xl font-bold tracking-tight text-slate-900 sm:text-[1.75rem]">
            추천사
          </h2>
          <p className="mt-2 text-sm text-slate-500 sm:text-[15px]">실사용 후기 6개를 그대로 담았습니다</p>
        </motion.div>

        <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {ITEMS.map((item, i) => (
            <motion.article
              key={item.id}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.42, delay: i * 0.05 }}
              className="rounded-2xl border border-slate-200/90 bg-[#fafafa] p-5 sm:rounded-3xl sm:p-6"
            >
              <p className="text-[15px] font-bold text-slate-900 sm:text-base">{item.title}</p>
              <p className="mt-3 text-[14px] leading-relaxed text-slate-700 sm:text-[15px]">{item.quote}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
