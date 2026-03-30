"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { User } from "lucide-react";

export type RecommendedItem = {
  id: string;
  name: string;
  role: string;
  quote: string;
  thumbSrc: string;
  thumbAlt: string;
  showPlayOverlay?: boolean;
  avatarSrc: string;
  avatarAlt: string;
};

const ITEMS: RecommendedItem[] = [
  {
    id: "student-a",
    name: "정은지",
    role: "이화여자대학교 약학대학",
    quote:
      "인강 시간만 풀리고 나머지는 막혀 있어서 스스로 집중하는 습관이 잡혔어요. 부모님이랑 싸우지 않고도 규칙이 지켜져서 수험 기간이 훨씬 편했습니다.",
    thumbSrc: "/landing/ewha-pharmacy-logo.png",
    thumbAlt: "이화여자대학교 약학대학 로고",
    showPlayOverlay: false,
    avatarSrc:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&h=200&q=80",
    avatarAlt: ""
  },
  {
    id: "student-b",
    name: "이지우",
    role: "중앙대학교 의과대학",
    quote:
      "시간표를 제가 직접 짜고, 앱·카톡 사용도 요일·시간별로 조절할 수 있어요. 공부폰이라는 느낌보다 ‘내 목표에 맞춘 기기’에 가깝습니다.",
    thumbSrc: "/landing/chungang-med-logo.png",
    thumbAlt: "중앙대학교 의과대학 로고",
    showPlayOverlay: false,
    avatarSrc:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&h=200&q=80",
    avatarAlt: ""
  },
  {
    id: "parent",
    name: "휘문고 재학생 학부모",
    role: "자녀 고3 · 대치 인근 거주",
    quote:
      "자녀 폰만 보면 신경이 쓰였는데, MDM으로 앱이 어떻게 열리는지 한눈에 보이고 AI 리포트로 대화의 출발점이 생겼어요. 막막함이 줄었습니다.",
    thumbSrc: "/landing/whimoon-logo.png",
    thumbAlt: "휘문고 로고",
    showPlayOverlay: false,
    avatarSrc:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=200&h=200&q=80",
    avatarAlt: ""
  }
];

function VideoThumb({ item }: { item: RecommendedItem }) {
  return (
    <div className="relative aspect-video w-full overflow-hidden rounded-2xl bg-slate-200 sm:rounded-3xl">
      <Image
        src={item.thumbSrc}
        alt={item.thumbAlt}
        fill
        className="object-cover"
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      />
      {item.showPlayOverlay !== false && (
        <div
          className="pointer-events-none absolute inset-0 flex items-center justify-center bg-black/25"
          aria-hidden
        >
          <span className="flex h-12 w-12 items-center justify-center rounded-full bg-black/45 shadow-lg ring-2 ring-white/30 sm:h-14 sm:w-14">
            <svg
              className="ml-0.5 h-5 w-5 text-white sm:h-6 sm:w-6"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden
            >
              <path d="M8 5v14l11-7z" />
            </svg>
          </span>
        </div>
      )}
    </div>
  );
}

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
          <p className="mt-2 text-sm text-slate-500 sm:text-[15px]">명문대 재학생·학부모가 전한 이야기</p>
        </motion.div>

        <div className="mt-10 grid grid-cols-1 gap-10 md:grid-cols-3 md:gap-8 lg:gap-10">
          {ITEMS.map((item, i) => (
            <motion.article
              key={item.id}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.45, delay: i * 0.08 }}
              className="flex flex-col"
            >
              <VideoThumb item={item} />

              <div className="mt-4 flex items-center gap-3">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-slate-100 text-slate-500 ring-2 ring-white ring-offset-2 ring-offset-white sm:h-12 sm:w-12">
                  <User className="h-5 w-5 sm:h-6 sm:w-6" strokeWidth={2} aria-hidden />
                </div>
                <div className="min-w-0 text-left">
                  <p className="truncate text-[15px] font-bold text-slate-900 sm:text-base">{item.name}</p>
                  <p className="truncate text-[13px] text-slate-500 sm:text-sm">{item.role}</p>
                </div>
              </div>

              <p className="mt-4 text-left text-[14px] leading-relaxed text-slate-700 sm:text-[15px]">
                <span className="text-slate-400" aria-hidden>
                  &ldquo;
                </span>
                {item.quote}
                <span className="text-slate-400" aria-hidden>
                  &rdquo;
                </span>
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
