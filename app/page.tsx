"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

/* 공신폰 애니메이션 (Hero 전용) */
const DEMO_APPS = [
  { id: "sns", label: "SNS", bg: "bg-gradient-to-br from-pink-400 to-purple-500", isStudy: false },
  { id: "video", label: "영상", bg: "bg-gradient-to-br from-red-500 to-red-600", isStudy: false },
  { id: "game", label: "게임", bg: "bg-gradient-to-br from-amber-400 to-orange-500", isStudy: false },
  { id: "shop", label: "쇼핑", bg: "bg-gradient-to-br from-emerald-400 to-teal-500", isStudy: false },
  { id: "call", label: "전화", bg: "bg-gradient-to-br from-green-500 to-emerald-600", isStudy: true },
  { id: "msg", label: "문자", bg: "bg-gradient-to-br from-blue-500 to-blue-600", isStudy: true },
  { id: "learn", label: "인강", bg: "bg-gradient-to-br from-indigo-500 to-violet-600", isStudy: true },
  { id: "memo", label: "메모", bg: "bg-gradient-to-br from-slate-500 to-slate-600", isStudy: true }
];

type DeviceType = "phone" | "tablet" | "laptop";

function HeroAnimation() {
  const [device, setDevice] = useState<DeviceType>("phone");
  const [removed, setRemoved] = useState<Set<string>>(new Set());
  const ref = useRef<ReturnType<typeof setTimeout>[]>([]);

  useEffect(() => {
    const run = () => {
      setRemoved(new Set());
      setDevice("phone");
      DEMO_APPS.filter((a) => !a.isStudy).forEach((app, i) => {
        ref.current.push(setTimeout(() => setRemoved((prev) => new Set(prev).add(app.id)), 2400 + i * 120));
      });
      ref.current.push(setTimeout(() => setDevice("tablet"), 4800));
      ref.current.push(setTimeout(() => setDevice("laptop"), 6800));
      ref.current.push(setTimeout(run, 10500));
    };
    run();
    return () => ref.current.forEach(clearTimeout);
  }, []);

  const screen = (
    <div className="grid grid-cols-4 gap-1.5 p-2 sm:gap-2 sm:p-3">
      {DEMO_APPS.map((app) => (
        <motion.div
          key={app.id}
          layout
          initial={false}
          animate={{ opacity: removed.has(app.id) ? 0 : 1, scale: removed.has(app.id) ? 0.3 : 1 }}
          transition={{ duration: 0.35, ease: "easeOut" }}
          className={`aspect-square rounded-xl ${app.bg} flex items-center justify-center shadow-md`}
        >
          <span className="text-[10px] font-semibold text-white sm:text-xs">{app.label}</span>
        </motion.div>
      ))}
    </div>
  );

  const frame = "border border-slate-200/80 bg-gradient-to-b from-slate-50 to-slate-100 shadow-[0_20px_60px_-15px_rgba(15,23,42,0.12)]";
  return (
    <div className="flex min-h-[280px] items-center justify-center sm:min-h-[340px] md:min-h-[400px]">
      <AnimatePresence mode="wait">
        {device === "phone" && (
          <motion.div
            key="phone"
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.96 }}
            transition={{ duration: 0.4 }}
            className={`mx-auto w-full max-w-[280px] rounded-[2.4rem] p-2 sm:max-w-[320px] ${frame}`}
          >
            <div className="mx-auto h-5 w-24 rounded-full bg-slate-300/90" />
            <div className="mt-1.5 overflow-hidden rounded-[1.8rem] bg-slate-200/90">{screen}</div>
          </motion.div>
        )}
        {device === "tablet" && (
          <motion.div
            key="tablet"
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.96 }}
            transition={{ duration: 0.4 }}
            className={`mx-auto w-full max-w-[360px] rounded-[2rem] p-2.5 sm:max-w-[400px] ${frame}`}
          >
            <div className="overflow-hidden rounded-[1.5rem] bg-slate-200/90">{screen}</div>
          </motion.div>
        )}
        {device === "laptop" && (
          <motion.div
            key="laptop"
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.96 }}
            transition={{ duration: 0.4 }}
            className="mx-auto w-full max-w-[380px] sm:max-w-[420px]"
          >
            <div className={`rounded-t-2xl border border-b-0 border-slate-200/80 bg-gradient-to-b from-slate-50 to-slate-100 p-2 ${frame}`}>
              <div className="overflow-hidden rounded-t-xl bg-slate-200/90">{screen}</div>
            </div>
            <div className="rounded-b-2xl border border-t border-slate-200/80 bg-gradient-to-b from-slate-100 to-slate-200/60 py-3 shadow-xl">
              <div className="mx-auto h-1 w-20 rounded bg-slate-300/80" />
              <div className="mt-2 flex justify-center gap-3">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="h-2 w-10 rounded bg-slate-300/80" />
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

const products = [
  {
    id: "gillo",
    name: "GILLO",
    subtitle: "공신폰 세팅 서비스",
    desc: "전화·문자·인강만 남기고 나머지는 차단. 기기를 학습 전용으로 세팅합니다.",
    href: "/gillo",
    accent: "text-blue-600"
  },
  {
    id: "gillo-timeline",
    name: "GILLO TIMELINE",
    subtitle: "시간대별 휴대폰 통제 서비스",
    desc: "시간대별로 사용 가능 범위를 나눠, 공부 시간에는 완전 차단합니다.",
    href: "/gillo-timeline",
    accent: "text-violet-600"
  },
  {
    id: "gillo-phone",
    name: "GILLO PHONE",
    subtitle: "중고 매입 후 공신폰 세팅·판매",
    desc: "중고 기기를 매입해 공신폰으로 세팅한 뒤, 바로 사용 가능한 상태로 판매합니다.",
    href: "/gillo-phone",
    accent: "text-emerald-600"
  }
];

export default function Home() {
  return (
    <div className="min-h-screen bg-[#fafafa] text-slate-900">
      {/* Header – minimal Apple-style */}
      <header className="sticky top-0 z-50 border-b border-slate-200/60 bg-[#fafafa]/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-5 py-3 sm:px-8">
          <Link href="/" className="flex items-center gap-2">
            <img src="/daechiroot-logo.png" alt="대치루트" className="h-6 w-6 object-contain" />
            <span className="text-sm font-semibold tracking-tight text-slate-900">대치루트</span>
          </Link>
          <nav className="flex items-center gap-6 text-[13px] text-slate-600">
            <a href="#products" className="transition hover:text-slate-900">서비스</a>
            <Link href="/gillo#pricing" className="transition hover:text-slate-900">요금</Link>
            <Link
              href="/contact"
              className="rounded-full bg-slate-900 px-4 py-2 text-[13px] font-medium text-white transition hover:bg-slate-800"
            >
              상담 신청
            </Link>
          </nav>
        </div>
      </header>

      <main>
        {/* Hero – full-bleed, typography-first */}
        <section className="relative overflow-hidden border-b border-slate-200/60 bg-white">
          <div className="mx-auto max-w-5xl px-5 py-16 sm:px-8 sm:py-24">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.22, 0.61, 0.36, 1] }}
              className="text-center"
            >
              <p className="text-[11px] font-medium uppercase tracking-[0.25em] text-slate-400 sm:text-xs">
                대치루트 솔루션
              </p>
              <h1 className="mt-4 text-[2.75rem] font-semibold tracking-tight text-slate-900 sm:text-5xl md:text-6xl lg:text-7xl">
                휴대폰, 공부에만.
              </h1>
              <p className="mt-5 max-w-xl mx-auto text-base text-slate-600 sm:text-lg">
                전화·문자·인강만 남기고 나머지는 차단합니다.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 0.61, 0.36, 1] }}
              className="mt-12 sm:mt-16"
            >
              <div className="scale-[0.9] sm:scale-100 drop-shadow-[0_24px_48px_rgba(0,0,0,0.06)]">
                <HeroAnimation />
              </div>
            </motion.div>
          </div>
        </section>

        {/* Three products – Apple-style product blocks */}
        <section id="products" className="scroll-mt-20 bg-[#fafafa]">
          <div className="mx-auto max-w-5xl px-5 py-20 sm:px-8 sm:py-28">
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              className="text-center text-[11px] font-medium uppercase tracking-[0.2em] text-slate-400"
            >
              서비스
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              className="mt-3 text-center text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl md:text-4xl"
            >
              세 가지 방식으로 도와드립니다.
            </motion.h2>

            <div className="mt-16 space-y-4 sm:space-y-6">
              {products.map((product, i) => (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                >
                  <Link
                    href={product.href}
                    className="group block rounded-3xl border border-slate-200/80 bg-white p-6 shadow-sm transition hover:border-slate-300 hover:shadow-md sm:p-8"
                  >
                    <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                      <div>
                        <p className={`text-lg font-semibold tracking-tight ${product.accent} sm:text-xl`}>
                          {product.name}
                        </p>
                        <p className="mt-1 text-sm font-medium text-slate-900 sm:text-base">
                          {product.subtitle}
                        </p>
                        <p className="mt-2 text-sm text-slate-600">
                          {product.desc}
                        </p>
                      </div>
                      <span className="inline-flex items-center text-[13px] font-medium text-slate-500 group-hover:text-slate-900">
                        자세히 보기
                        <svg className="ml-1 h-4 w-4 transition group-hover:translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </span>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA strip */}
        <section className="border-t border-slate-200/60 bg-white">
          <div className="mx-auto max-w-5xl px-5 py-14 sm:px-8 sm:py-20">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex flex-col items-center gap-6 text-center sm:flex-row sm:justify-center sm:gap-8"
            >
              <div>
                <h3 className="text-xl font-semibold tracking-tight text-slate-900 sm:text-2xl">
                  무료 진단받기
                </h3>
                <p className="mt-1 text-sm text-slate-600">
                  기기 상태만 알려주시면, 막을 수 있는 범위를 안내드립니다.
                </p>
              </div>
              <Link
                href="/contact"
                className="shrink-0 rounded-full bg-slate-900 px-8 py-3.5 text-[15px] font-medium text-white transition hover:bg-slate-800"
              >
                상담 신청
              </Link>
            </motion.div>
          </div>
        </section>
      </main>

      <footer className="border-t border-slate-200 bg-white">
        <div className="mx-auto flex max-w-5xl flex-col gap-4 px-5 py-8 text-[12px] text-slate-500 sm:flex-row sm:items-center sm:justify-between sm:px-8">
          <div className="flex items-center gap-2">
            <img src="/daechiroot-logo.png" alt="" className="h-4 w-4 opacity-70" />
            <span className="font-medium text-slate-700">대치루트</span>
          </div>
          <div className="space-y-0.5">
            <p>대표: 정현우 | 사업자등록번호: 150-07-03484</p>
            <p>서울특별시 강남구 개포동 (대치/개포 센터)</p>
            <p className="text-slate-400">© {new Date().getFullYear()} Daechiroot.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
