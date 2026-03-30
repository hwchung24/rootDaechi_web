"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const IMG = {
  timetable: "/landing-slides/timetable_dashboard_mockup.png",
  iphone: "/landing-slides/iphone_nobg.png",
  usim: "/landing-slides/usim_nobg.png",
  ai: "/landing-slides/ai_report_nobg.png",
  mosyle: "/landing-slides/mosyle_logo.png"
} as const;

type SlideSpec = {
  key: string;
  aria: string;
  img: string;
  headline: React.ReactNode;
  sub: React.ReactNode;
  variant?: "mosyle";
};

const SLIDES_TALL: SlideSpec[] = [
  {
    key: "timetable",
    aria: "시간표",
    img: IMG.timetable,
    headline: (
      <>
        &apos;인터넷은 막고 싶은데
        <br />
        인강은 써야해요&apos;
      </>
    ),
    sub: (
      <>
        부모님이 직접 설계하는 맞춤형 시간표.
        <br />
        공부 시간엔 인강만, 쉬는 시간엔 카톡까지 허용하세요.
      </>
    )
  },
  {
    key: "iphone",
    aria: "아이폰",
    img: IMG.iphone,
    headline: (
      <>
        &apos;기존의 공부폰은 들고 다니기
        <br />
        쪽팔려요&apos;
      </>
    ),
    sub: (
      <>
        투박한 기존의 공부폰 대신,
        <br />
        세련된 아이폰 감성 그대로
      </>
    )
  },
  {
    key: "usim",
    aria: "유심",
    img: IMG.usim,
    headline: (
      <>
        약정 걱정 없이,
        <br />
        기존 유심 그대로
      </>
    ),
    sub: (
      <>
        복잡한 개통 절차 없이
        <br />
        유심만 바꿔 끼우면 대치폰이 시작됩니다.
      </>
    )
  }
];

const SLIDES_STACK: SlideSpec[] = [
  {
    key: "ai",
    aria: "AI 리포트",
    img: IMG.ai,
    headline: (
      <>
        자녀의 공부 현황이
        <br />
        궁금해요?
      </>
    ),
    sub: (
      <>
        계획표를 작성해야 풀리는 잠금 기능과
        <br />
        매일 도착하는 카카오톡 AI 공부 리포트
      </>
    )
  },
  {
    key: "mosyle",
    aria: "Mosyle MDM",
    img: IMG.mosyle,
    variant: "mosyle",
    headline: (
      <>
        절대 뚫리지 않는
        <br />
        강력한 보안
      </>
    ),
    sub: (
      <>
        애플 공식 1등 MDM Mosyle 기반으로
        <br />
        완벽하게 통제합니다.
      </>
    )
  }
];

/** 큰 카드(3열) — 모바일에서도 동일한 이미지 박스로 맞춤 */
const MEDIA_BOX_TALL =
  "relative mx-auto mt-3 h-[200px] w-full max-w-[280px] shrink-0 sm:mt-4 sm:h-[220px] sm:max-w-[300px] lg:h-[230px]";

/** 우측 스택 카드 — 모바일(한 열)에서는 큰 카드와 동일 박스, sm 이상에서만 낮게 */
const MEDIA_BOX_STACK =
  "relative mx-auto mt-3 h-[200px] w-full max-w-[280px] shrink-0 sm:mt-3.5 sm:h-[132px] sm:max-w-[240px] md:max-w-[260px] lg:h-[140px]";

function FeatureMedia({ slide, layout }: { slide: SlideSpec; layout: "tall" | "stack" }) {
  const boxClass = layout === "tall" ? MEDIA_BOX_TALL : MEDIA_BOX_STACK;

  if (slide.variant === "mosyle") {
    return (
      <div className="flex min-h-0 flex-1 flex-col items-center justify-center gap-2.5 py-1">
        <div className={boxClass}>
          <Image
            src={slide.img}
            alt="Mosyle MDM"
            fill
            className="object-contain object-center"
            sizes="(max-width: 640px) 240px, 280px"
          />
        </div>
        <span className="rounded-full bg-navy-800 px-3 py-1 text-[10px] font-bold uppercase tracking-wide text-white">
          Apple 공식 1등 MDM
        </span>
      </div>
    );
  }

  return (
    <div className="flex min-h-0 flex-1 flex-col justify-center py-1 sm:py-2">
      <div className={boxClass}>
        <Image
          src={slide.img}
          alt=""
          fill
          className="object-contain object-center"
          sizes={layout === "tall" ? "(max-width: 1024px) 300px, 320px" : "(max-width: 1024px) 260px, 280px"}
          priority={slide.key === "timetable"}
        />
      </div>
    </div>
  );
}

export function LandingSlideSections() {
  return (
    <section className="snap-none border-y border-slate-200/80 bg-white" aria-labelledby="landing-features-heading">
      <div className="mx-auto max-w-6xl px-5 py-12 sm:px-8 sm:py-16 lg:py-20">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.45 }}
          className="text-center"
        >
          <h2 id="landing-features-heading" className="text-2xl font-bold tracking-tight text-slate-900 sm:text-[1.65rem]">
            주요 기능
          </h2>
          <p className="mt-2 text-sm text-slate-500">시간표·기기·보안까지 한눈에</p>
        </motion.div>

        <div className="mt-10 grid grid-cols-1 gap-4 lg:grid-cols-4 lg:items-stretch lg:gap-4 lg:[min-height:min(520px,65vh)]">
          {SLIDES_TALL.map((slide, i) => (
            <motion.article
              key={slide.key}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.12 }}
              transition={{ duration: 0.45, delay: i * 0.06 }}
              className="flex h-full min-h-[380px] flex-col rounded-3xl bg-[#f5f5f7] p-5 shadow-[0_4px_24px_-8px_rgba(15,23,42,0.08)] sm:p-6 lg:min-h-0"
              aria-label={slide.aria}
            >
              <h3 className="text-[17px] font-bold leading-snug tracking-tight text-slate-900 sm:text-lg">{slide.headline}</h3>
              <FeatureMedia slide={slide} layout="tall" />
              <p className="mt-auto text-[13px] leading-relaxed text-slate-600 sm:text-sm">{slide.sub}</p>
            </motion.article>
          ))}

          <div className="flex min-h-[360px] flex-col gap-4 lg:min-h-0 lg:h-full">
            {SLIDES_STACK.map((slide, i) => (
              <motion.article
                key={slide.key}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.12 }}
                transition={{ duration: 0.45, delay: 0.18 + i * 0.06 }}
                className="flex min-h-0 flex-1 flex-col rounded-3xl bg-[#f5f5f7] p-5 shadow-[0_4px_24px_-8px_rgba(15,23,42,0.08)] sm:p-6"
                aria-label={slide.aria}
              >
                <h3 className="text-[15px] font-bold leading-snug tracking-tight text-slate-900 sm:text-[16px]">{slide.headline}</h3>
                <FeatureMedia slide={slide} layout="stack" />
                <p className="mt-auto text-[12px] leading-relaxed text-slate-600 sm:text-[13px]">{slide.sub}</p>
              </motion.article>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="mt-10 flex justify-center"
        >
          <Link
            href="#products"
            className="inline-flex min-h-[48px] items-center justify-center rounded-full bg-navy-800 px-10 text-sm font-semibold text-white shadow-md shadow-navy-900/15 transition hover:bg-navy-900"
          >
            더 알아보기
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
