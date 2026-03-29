"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { AppHeader } from "@/components/AppHeader";
import { LandingSlideSections } from "@/components/LandingSlideSections";
import {
  Phone,
  MessageCircle,
  BookOpen,
  FileText,
  Share2,
  Video,
  Gamepad2,
  ShoppingCart,
  Check,
  X
} from "lucide-react";

function PlansGraphic() {
  // Basic 카드용 미니 앱 아이콘 – 공부용/비공부용 구분
  const MINI_APPS = [
    { id: "sns", Icon: Share2, isStudy: false },
    { id: "video", Icon: Video, isStudy: false },
    { id: "game", Icon: Gamepad2, isStudy: false },
    { id: "shop", Icon: ShoppingCart, isStudy: false },
    { id: "call", Icon: Phone, isStudy: true },
    { id: "msg", Icon: MessageCircle, isStudy: true },
    { id: "learn", Icon: BookOpen, isStudy: true },
    { id: "memo", Icon: FileText, isStudy: true }
  ];

  const [removedMini, setRemovedMini] = useState<Set<string>>(new Set());
  const miniTimers = useRef<ReturnType<typeof setTimeout>[]>([]);

  useEffect(() => {
    const nonStudy = MINI_APPS.filter((a) => !a.isStudy);
    const run = () => {
      setRemovedMini(new Set());
      nonStudy.forEach((app, i) => {
        miniTimers.current.push(
          setTimeout(
            () => setRemovedMini((prev) => new Set(prev).add(app.id)),
            600 + i * 220
          )
        );
      });
      miniTimers.current.push(
        setTimeout(run, 2600)
      );
    };
    run();
    return () => miniTimers.current.forEach(clearTimeout);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="mt-8 flex flex-col items-center gap-3">
      <div className="grid max-w-3xl grid-cols-3 gap-4 sm:gap-6">
        {/* 베이직 – 방해 요소 정리 */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          className="relative flex aspect-[9/19] items-center justify-center rounded-3xl border border-slate-200 bg-slate-950/90 shadow-xl"
        >
          <div className="grid grid-cols-4 gap-1.5 p-3">
            {MINI_APPS.map((app) => {
              const Icon = app.Icon;
              const isOff = !app.isStudy;
              const isRemoved = removedMini.has(app.id);
              return (
                <motion.div
                  key={app.id}
                  className={`flex aspect-square items-center justify-center rounded-xl ${
                    isOff ? "bg-slate-700/80" : "bg-navy-600"
                  }`}
                  initial={false}
                  animate={{
                    opacity: isOff && isRemoved ? 0 : 1,
                    scale: isOff && isRemoved ? 0.3 : 1
                  }}
                  transition={{ duration: 0.35, ease: "easeOut" }}
                >
                  <Icon
                    className={`h-4 w-4 ${
                      isOff ? "text-slate-500" : "text-white"
                    }`}
                    strokeWidth={2.1}
                  />
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* 프로 – 시간표 기반 모드 */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5, delay: 0.05 }}
          className="relative flex aspect-[9/19] items-center justify-center rounded-3xl border border-slate-200 bg-slate-950/90 shadow-xl"
        >
          <div className="flex w-[82%] flex-col gap-2">
            <motion.div
              className="flex items-center justify-between rounded-2xl bg-slate-900 px-3 py-2"
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex gap-1.5">
                <div className="h-2 w-6 rounded-full bg-navy-400" />
                <div className="h-2 w-2 rounded-full bg-navy-400" />
              </div>
              <div className="h-1.5 w-10 rounded-full bg-slate-600" />
            </motion.div>
            <motion.div
              className="flex items-center justify-between rounded-2xl bg-slate-900 px-3 py-2"
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.12 }}
            >
              <div className="flex gap-1.5">
                <div className="h-2 w-2 rounded-full bg-navy-400" />
                <div className="h-2 w-6 rounded-full bg-navy-400" />
              </div>
              <div className="h-1.5 w-14 rounded-full bg-slate-600" />
            </motion.div>
            <motion.div
              className="flex items-center justify-between rounded-2xl bg-slate-900 px-3 py-2"
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.24 }}
            >
              <div className="flex gap-1.5">
                <div className="h-2 w-5 rounded-full bg-slate-500" />
              </div>
              <div className="h-1.5 w-8 rounded-full bg-slate-700" />
            </motion.div>
          </div>
        </motion.div>

        {/* 프리미엄 – 학습 리포트 */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="relative flex aspect-[9/19] items-center justify-center rounded-3xl border border-slate-200 bg-slate-950/90 shadow-xl"
        >
          <div className="flex w-[70%] items-end justify-between gap-2">
            <motion.div
              className="w-1/4 rounded-full bg-slate-700"
              initial={{ height: 16 }}
              animate={{ height: 30 }}
              transition={{ duration: 1, repeat: Infinity, repeatType: "reverse" }}
            />
            <motion.div
              className="w-1/4 rounded-full bg-slate-600"
              initial={{ height: 22 }}
              animate={{ height: 42 }}
              transition={{ duration: 1, delay: 0.1, repeat: Infinity, repeatType: "reverse" }}
            />
            <motion.div
              className="w-1/4 rounded-full bg-navy-600"
              initial={{ height: 30 }}
              animate={{ height: 60 }}
              transition={{ duration: 1, delay: 0.2, repeat: Infinity, repeatType: "reverse" }}
            />
            <motion.div
              className="w-1/4 rounded-full bg-slate-700"
              initial={{ height: 18 }}
              animate={{ height: 34 }}
              transition={{ duration: 1, delay: 0.3, repeat: Infinity, repeatType: "reverse" }}
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
}

const products = [
  {
    id: "gillo-phone-package",
    name: "대치폰 패키지",
    subtitle: "대치폰 기기 + 1년 학습 관리",
    desc: "기기 + 1년 학습 관리",
    href: "/gillo-phone-rental",
    accent: "text-navy-700"
  },
  {
    id: "gillo-tab-package",
    name: "대치탭 패키지",
    subtitle: "대치탭 기기 + 1년 학습 관리",
    desc: "인강·필기용 태블릿 + 1년 관리",
    href: "/gillo-tab-rental",
    accent: "text-navy-700"
  },
  {
    id: "management-subscription",
    name: "학습 관리 구독 연장",
    subtitle: "기기는 그대로, 관리만 연장",
    desc: "1년 이후 관리만 월 구독",
    href: "/management-subscription",
    accent: "text-slate-700"
  }
];

const COMPARISON_MATRIX_ROWS: { label: string; general: string; daechiroot: string }[] = [
  { label: "기기", general: "저가 피처폰·보급형", daechiroot: "S급 아이폰·아이패드" },
  { label: "관리", general: "일률 차단·잠금", daechiroot: "생활 맞춤 1:1" },
  { label: "약정", general: "2년+ · 위약금", daechiroot: "약정 없음" },
  { label: "보안", general: "우회에 취약", daechiroot: "Apple MDM" },
  { label: "경험", general: "갈등·피로", daechiroot: "몰입 환경" }
];

export default function Home() {
  return (
    <div className="min-h-screen bg-[#f8f9fa] text-slate-900">
      <AppHeader>
        <Link href="/gillo-phone-rental" className="transition hover:text-slate-900">
          대치폰 패키지
        </Link>
        <Link href="/gillo-tab-rental" className="transition hover:text-slate-900">
          대치탭 패키지
        </Link>
        <Link href="/b2b" className="transition hover:text-slate-900">
          학원·교육기관 제휴
        </Link>
        <Link href="/management-subscription" className="transition hover:text-slate-900">
          학습 관리 구독 연장
        </Link>
        <Link href="/faq" className="transition hover:text-slate-900">
          자주 묻는 질문
        </Link>
        <Link
          href="/inquiry"
          className="rounded-full bg-navy-800 px-4 py-2 text-[13px] font-medium text-white shadow-sm shadow-navy-900/25 ring-1 ring-white/10 transition hover:bg-navy-900 hover:shadow-md"
        >
          문의하기
        </Link>
      </AppHeader>

      <main>
        {/* Hero — 문서 스냅에서 제외 */}
        <section className="snap-none border-b border-slate-200/70 bg-white">
          <div className="relative mx-auto flex min-h-[min(88vh,820px)] max-w-5xl flex-col items-center justify-center px-5 py-14 sm:px-8 sm:py-20">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: [0.22, 0.61, 0.36, 1] }}
              className="text-center"
            >
              <p className="text-[11px] font-medium tracking-wide text-navy-700 sm:text-xs">대치루트 학습관리</p>
              <h1 className="mt-3 text-balance text-[2rem] font-semibold leading-tight tracking-tight text-slate-900 sm:text-4xl md:text-[2.75rem]">
                수험생 맞춤 기기 관리, <span className="text-navy-700">대치루트</span>
              </h1>
              <p className="mx-auto mt-4 max-w-md text-sm text-slate-500 sm:text-base">시간표 · MDM · 리포트</p>
              <div className="mt-8 flex flex-col items-stretch justify-center gap-2.5 sm:flex-row sm:gap-3">
                <Link
                  href="/inquiry"
                  className="inline-flex items-center justify-center rounded-full bg-navy-700 px-8 py-3 text-sm font-semibold text-white transition hover:bg-navy-800"
                >
                  상담 신청
                </Link>
                <Link
                  href="#products"
                  className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white px-8 py-3 text-sm font-medium text-slate-800 transition hover:border-slate-300"
                >
                  패키지 보기
                </Link>
              </div>
              <PlansGraphic />
            </motion.div>
          </div>
        </section>

        <LandingSlideSections />

        {/* 비교 */}
        <section className="snap-none border-b border-slate-200/60 bg-white">
          <div className="mx-auto max-w-5xl px-5 py-12 sm:px-8 sm:py-16">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.45 }}
            >
              <h3 className="text-lg font-semibold tracking-tight text-slate-900 sm:text-xl">기존의 공부폰 vs 대치루트</h3>

              <div className="mt-5 overflow-x-auto rounded-xl border border-slate-200">
                <table className="w-full min-w-[600px] border-collapse text-left text-sm">
                  <thead>
                    <tr className="border-b border-slate-200 bg-slate-50">
                      <th className="whitespace-nowrap px-4 py-3 font-semibold text-slate-900">항목</th>
                      <th className="whitespace-nowrap px-4 py-3 font-semibold text-slate-600">기존의 공부폰</th>
                      <th className="whitespace-nowrap border-l-2 border-navy-200 bg-navy-50 px-4 py-3 font-semibold text-navy-900">
                        대치루트
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {COMPARISON_MATRIX_ROWS.map((row) => (
                      <tr key={row.label} className="border-b border-slate-100 last:border-0">
                        <td className="bg-slate-50/80 px-4 py-3.5 font-medium text-slate-800">{row.label}</td>
                        <td className="px-4 py-3.5 text-slate-600">
                          <span className="flex items-start gap-2">
                            <X className="mt-0.5 h-4 w-4 shrink-0 text-red-500" strokeWidth={2.5} aria-hidden />
                            <span>{row.general}</span>
                          </span>
                        </td>
                        <td className="border-l-2 border-navy-100 bg-navy-50/90 px-4 py-3.5 text-slate-800">
                          <span className="flex items-start gap-2">
                            <Check className="mt-0.5 h-4 w-4 shrink-0 text-navy-600" strokeWidth={2.5} aria-hidden />
                            <span>{row.daechiroot}</span>
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </motion.div>
          </div>
        </section>

        {/* 서비스 패키지 */}
        <section id="products" className="snap-none scroll-mt-20 border-t border-slate-200/60 bg-white">
          <div className="mx-auto max-w-5xl px-5 py-12 sm:px-8 sm:py-16">
            <h2 className="text-center text-xl font-semibold tracking-tight text-slate-900 sm:text-2xl">
              패키지
            </h2>

            <div className="mt-8 space-y-4">
              {products.map((product, i) => (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  className="rounded-2xl border border-slate-200/90 bg-white p-5 shadow-sm sm:p-6"
                >
                  <p className={`text-base font-semibold ${product.accent} sm:text-lg`}>{product.name}</p>
                  <p className="mt-0.5 text-sm text-slate-500">{product.subtitle}</p>
                  <p className="mt-2 text-sm text-slate-600">{product.desc}</p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    <Link
                      href={product.href}
                      className="inline-flex items-center justify-center rounded-full border border-slate-200 px-4 py-2.5 text-[13px] font-medium text-slate-800 transition hover:border-slate-300"
                    >
                      자세히
                    </Link>
                    <Link
                      href="/inquiry"
                      className="inline-flex items-center justify-center rounded-full bg-navy-700 px-4 py-2.5 text-[13px] font-medium text-white transition hover:bg-navy-800"
                    >
                      상담
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="snap-none border-t border-slate-200/80 bg-white">
        <div className="mx-auto flex max-w-5xl flex-col gap-4 px-5 py-8 text-[11px] text-slate-500 sm:flex-row sm:items-center sm:justify-between sm:px-8">
          <div className="flex items-center gap-2">
            <img src="/daechiroot-logo.png" alt="" className="h-5 w-5 opacity-80" />
            <span className="font-medium text-slate-700">대치루트</span>
          </div>
          <p>
            정현우 · 150-07-03484 · 강남구 개포동 · © {new Date().getFullYear()}
          </p>
        </div>
      </footer>
    </div>
  );
}
