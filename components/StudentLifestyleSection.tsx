"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Plus } from "lucide-react";

const CARDS: {
  id: string;
  badge: string;
  caption: string;
  image: string;
  imageAlt: string;
}[] = [
  {
    id: "hs",
    badge: "고등학생",
    caption: "학교·학원 일정에 맞춘 시간표",
    image:
      "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "책상에서 공부하는 학생"
  },
  {
    id: "online",
    badge: "인강·독학",
    caption: "집중 시간엔 인강만, 쉴 땐 연락",
    image:
      "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "노트북으로 인강을 듣는 학습 장면"
  },
  {
    id: "retake",
    badge: "N수·재수",
    caption: "스스로 세운 계획이 지키는 자리",
    image:
      "https://images.unsplash.com/photo-1517842645767-c639b8806036?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "야간에 집중해서 공부하는 모습"
  },
  {
    id: "parent",
    badge: "부모님과 함께",
    caption: "리포트로 맞춤 피드백",
    image:
      "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "가족과 함께하는 학습 환경"
  }
];

export function StudentLifestyleSection() {
  return (
    <section
      className="snap-none border-b border-slate-200/70 bg-[#f7f7f7] py-14 sm:py-20"
      aria-labelledby="lifestyle-heading"
    >
      <div className="mx-auto max-w-6xl px-5 text-center sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.45 }}
        >
          <h2
            id="lifestyle-heading"
            className="text-balance text-[1.65rem] font-bold tracking-tight text-slate-900 sm:text-3xl md:text-[2rem]"
          >
            전문가와 1대1 맞춤 설계를 진행합니다
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-slate-600 sm:text-base">
            메디컬 학부 진학 선배와의 1대1 상담을 통해 초기 설계를 진행합니다
          </p>
        </motion.div>
      </div>

      <div className="relative mt-10 sm:mt-12">
        <div className="lifestyle-scroll flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth px-5 pb-3 pt-1 motion-reduce:snap-none sm:gap-5 sm:px-8">
          {CARDS.map((card, i) => (
            <article
              key={card.id}
              className="relative h-[min(52vh,420px)] w-[min(88vw,360px)] shrink-0 snap-start overflow-hidden rounded-2xl sm:h-[min(50vh,440px)] sm:w-[min(72vw,380px)] lg:w-[380px]"
              aria-label={`${card.badge}: ${card.caption}`}
            >
              <Image
                src={card.image}
                alt={card.imageAlt}
                fill
                className="object-cover"
                sizes="(max-width: 640px) 88vw, 380px"
                priority={i === 0}
              />
              <div
                className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/75 via-black/25 to-black/10"
                aria-hidden
              />

              <span className="absolute left-4 top-4 z-10 rounded-full bg-navy-800/92 px-3.5 py-1.5 text-[11px] font-semibold uppercase tracking-wide text-white shadow-sm backdrop-blur-sm sm:text-xs">
                {card.badge}
              </span>

              <span
                className="pointer-events-none absolute right-4 top-4 z-10 flex h-9 w-9 items-center justify-center rounded-lg border border-white/25 bg-white/15 text-white backdrop-blur-md"
                aria-hidden
              >
                <Plus className="h-5 w-5" strokeWidth={2.2} />
              </span>

              <p className="absolute bottom-5 left-5 right-14 z-10 text-left text-lg font-semibold leading-snug tracking-tight text-white drop-shadow-sm sm:text-xl">
                {card.caption}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
