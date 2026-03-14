"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { AppHeader } from "@/components/AppHeader";
import {
  Phone,
  MessageCircle,
  BookOpen,
  FileText,
  Share2,
  Video,
  Gamepad2,
  ShoppingCart,
  Sparkles,
  Clock3,
  BarChart3
} from "lucide-react";

/* 휴대폰 사용 제한 애니메이션 (Hero 전용) – 앱은 아이콘만 */
const DEMO_APPS = [
  { id: "sns", Icon: Share2, bg: "bg-gradient-to-br from-pink-400 to-purple-500", isStudy: false },
  { id: "video", Icon: Video, bg: "bg-gradient-to-br from-red-500 to-red-600", isStudy: false },
  { id: "game", Icon: Gamepad2, bg: "bg-gradient-to-br from-amber-400 to-orange-500", isStudy: false },
  { id: "shop", Icon: ShoppingCart, bg: "bg-gradient-to-br from-emerald-400 to-teal-500", isStudy: false },
  { id: "call", Icon: Phone, bg: "bg-gradient-to-br from-green-500 to-emerald-600", isStudy: true },
  { id: "msg", Icon: MessageCircle, bg: "bg-gradient-to-br from-blue-500 to-blue-600", isStudy: true },
  { id: "learn", Icon: BookOpen, bg: "bg-gradient-to-br from-indigo-500 to-violet-600", isStudy: true },
  { id: "memo", Icon: FileText, bg: "bg-gradient-to-br from-slate-500 to-slate-600", isStudy: true }
];

type DeviceType = "phone" | "tablet" | "laptop";

function HeroAnimation() {
  const [device, setDevice] = useState<DeviceType>("phone");
  const [removed, setRemoved] = useState<Set<string>>(new Set());
  const ref = useRef<ReturnType<typeof setTimeout>[]>([]);

  useEffect(() => {
    const nonStudy = DEMO_APPS.filter((a) => !a.isStudy);
    const run = () => {
      setRemoved(new Set());
      setDevice("phone");
      // 폰: 2.4s 후 비공부 앱 순서대로 제거
      nonStudy.forEach((app, i) => {
        ref.current.push(setTimeout(() => setRemoved((prev) => new Set(prev).add(app.id)), 2400 + i * 120));
      });
      // 태블릿 전환 + 앱 초기화 후, 400ms 뒤 비공부 앱 제거
      ref.current.push(setTimeout(() => {
        setRemoved(new Set());
        setDevice("tablet");
      }, 4800));
      nonStudy.forEach((app, i) => {
        ref.current.push(setTimeout(() => setRemoved((prev) => new Set(prev).add(app.id)), 5200 + i * 120));
      });
      // 노트북 전환 + 앱 초기화 후, 400ms 뒤 비공부 앱 제거
      ref.current.push(setTimeout(() => {
        setRemoved(new Set());
        setDevice("laptop");
      }, 6800));
      nonStudy.forEach((app, i) => {
        ref.current.push(setTimeout(() => setRemoved((prev) => new Set(prev).add(app.id)), 7200 + i * 120));
      });
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
          className={`aspect-square rounded-2xl ${app.bg} flex items-center justify-center shadow-lg`}
        >
          <app.Icon className="h-6 w-6 text-white drop-shadow sm:h-7 sm:w-7" strokeWidth={2.2} />
        </motion.div>
      ))}
    </div>
  );

  return (
    <div className="flex min-h-[380px] items-center justify-center sm:min-h-[460px] md:min-h-[540px]">
      <AnimatePresence mode="wait">
        {device === "phone" && (
          <motion.div
            key="phone"
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.96 }}
            transition={{ duration: 0.4 }}
            className="mx-auto w-[200px] sm:w-[240px] aspect-[11/20] max-h-[min(520px,70vh)]"
          >
            {/* iPhone 비율: 검은색 베젤, 다이내믹 아일랜드, 둥근 화면 */}
            <div className="h-full w-full rounded-[2.75rem] border-[3px] border-slate-900 bg-slate-900 p-[8px] sm:p-[10px] shadow-[0_25px_60px_-12px_rgba(0,0,0,0.4),inset_0_1px_0_rgba(255,255,255,0.08)] flex flex-col">
              <div className="relative flex-1 min-h-0 overflow-hidden rounded-[2.25rem] bg-slate-800 flex flex-col">
                {/* 다이내믹 아일랜드 */}
                <div className="absolute left-1/2 top-2.5 sm:top-3 z-10 h-6 w-[88px] sm:h-7 sm:w-[100px] -translate-x-1/2 rounded-full bg-black shadow-inner" />
                {/* 화면 */}
                <div className="flex-1 min-h-0 rounded-[2.1rem] border border-slate-700 bg-[#e8eaed] pt-9 sm:pt-10 pb-3 flex flex-col justify-center">
                  {screen}
                </div>
              </div>
            </div>
          </motion.div>
        )}
        {device === "tablet" && (
          <motion.div
            key="tablet"
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.96 }}
            transition={{ duration: 0.4 }}
            className="mx-auto w-full max-w-[340px] sm:max-w-[400px]"
          >
            {/* 실제 태블릿: 검은색 베젤, 전면 카메라 점 */}
            <div className="rounded-[1.5rem] border-[3px] border-slate-900 bg-slate-900 p-3 shadow-[0_28px_60px_-14px_rgba(0,0,0,0.4),inset_0_1px_0_rgba(255,255,255,0.08)]">
              <div className="relative overflow-hidden rounded-[1.2rem] bg-slate-800">
                <div className="absolute left-1/2 top-4 z-10 h-3 w-3 -translate-x-1/2 rounded-full bg-black" />
                <div className="rounded-[1.05rem] border border-slate-700 bg-[#e8eaed] pt-8 pb-4">
                  {screen}
                </div>
              </div>
            </div>
          </motion.div>
        )}
        {device === "laptop" && (
          <motion.div
            key="laptop"
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.96 }}
            transition={{ duration: 0.4 }}
            className="mx-auto w-full max-w-[360px] sm:max-w-[420px]"
          >
            {/* 실제 노트북: 검은색 화면 베젤, 힌지, 키보드 베이스, 트랙패드 */}
            <div className="rounded-t-xl border-2 border-b-0 border-slate-900 bg-slate-900 px-2 pt-2 shadow-[0_20px_50px_-12px_rgba(0,0,0,0.4)]">
              <div className="rounded-t-lg border border-slate-700 bg-[#e8eaed] px-1.5 pt-6 pb-2">
                {screen}
              </div>
              {/* 힌지 라인 */}
              <div className="h-2 w-full rounded-b border-t-2 border-slate-800 bg-slate-800" />
            </div>
            <div className="rounded-b-xl border-2 border-t-2 border-slate-900 bg-slate-900 py-4 shadow-[0_20px_40px_-10px_rgba(0,0,0,0.35)]">
              <div className="mx-auto h-1.5 w-24 rounded-full bg-slate-700" />
              <div className="mx-auto mt-3 flex max-w-[85%] flex-wrap justify-center gap-1.5">
                {Array.from({ length: 12 }).map((_, i) => (
                  <div key={i} className="h-2 w-6 rounded-sm bg-slate-700" />
                ))}
              </div>
              <div className="mx-auto mt-2 h-4 w-32 rounded-md bg-slate-700/80" />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

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
    <div className="mt-10 flex justify-center">
      <div className="grid max-w-3xl grid-cols-3 gap-6">
        {/* Basic – 방해 요소 정리 (앱 사라짐) */}
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
                    isOff ? "bg-slate-700/80" : "bg-emerald-500"
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

        {/* Pro – 시간표 기반 모드 전환 (타임라인 카드) */}
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
                <div className="h-2 w-6 rounded-full bg-emerald-400" />
                <div className="h-2 w-2 rounded-full bg-emerald-400" />
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
                <div className="h-2 w-2 rounded-full bg-violet-400" />
                <div className="h-2 w-6 rounded-full bg-violet-400" />
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

        {/* Premium – 주간 리포트 (막대 그래프) */}
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
              className="w-1/4 rounded-full bg-violet-500"
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
    id: "gillo-phone-rental",
    name: "대치폰 대여",
    subtitle: "대치폰 대여 + 관리 서비스",
    desc: "대치폰을 일정 기간 대여하고, 시간표에 맞춘 제어와 관리까지 함께 맡기는 월 구독형 서비스입니다.",
    href: "/gillo-phone-rental",
    accent: "text-violet-600"
  },
  {
    id: "gillo-tab-rental",
    name: "대치탭 대여",
    subtitle: "대치탭 대여 + 관리 서비스",
    desc: "대치탭(태블릿)을 학습 전용으로 구성해 대여하고, 인강·필기 중심의 학습 환경을 관리해 드리는 서비스입니다.",
    href: "/gillo-tab-rental",
    accent: "text-blue-600"
  }
];

function ProblemNarrative() {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"]
  });

  // 0.0~0.25: 타이틀, 0.25~0.7: 고민 리스트, 0.78~1.0: 솔루션 문구
  const firstOpacity = useTransform(scrollYProgress, [0, 0.15, 0.25], [1, 1, 0]);
  const secondOpacity = useTransform(scrollYProgress, [0.22, 0.35, 0.7], [0, 1, 1]);
  const thirdOpacity = useTransform(scrollYProgress, [0.78, 0.9, 1], [0, 0.9, 1]);

  const concern1Opacity = useTransform(scrollYProgress, [0.22, 0.3, 0.72], [0, 1, 0]);
  const concern2Opacity = useTransform(scrollYProgress, [0.26, 0.34, 0.74], [0, 1, 0]);
  const concern3Opacity = useTransform(scrollYProgress, [0.3, 0.38, 0.76], [0, 1, 0]);
  const concern4Opacity = useTransform(scrollYProgress, [0.34, 0.42, 0.78], [0, 1, 0]);
  const concern5Opacity = useTransform(scrollYProgress, [0.38, 0.46, 0.8], [0, 1, 0]);

  return (
    <section
      ref={sectionRef}
      className="relative h-[280vh] border-b border-slate-200/60 bg-white"
    >
      <div className="sticky top-[64px] flex min-h-[calc(100vh-64px)] items-center">
        <div className="mx-auto flex w-full max-w-5xl flex-col justify-center px-5 sm:px-8">
          <div
            className="relative mx-auto h-[220px] w-full max-w-xl sm:h-[260px]"
            style={{ writingMode: "horizontal-tb", textOrientation: "mixed" }}
          >
            <motion.div
              style={{ opacity: firstOpacity }}
              className="absolute inset-0 flex items-center justify-center text-center"
            >
              <div className="space-y-3">
                <p
                  className="text-[1.8rem] font-semibold leading-snug tracking-tight text-slate-900 sm:text-[2rem] md:text-[2.2rem] break-keep"
                >
                  대치루트는 공신폰이 아닙니다
                </p>
              </div>
            </motion.div>

            <motion.div
              style={{ opacity: secondOpacity }}
              className="absolute inset-0 flex items-center justify-center"
            >
              <div className="mx-auto flex max-w-xl flex-col gap-2 text-sm text-slate-800 sm:text-base">
                <motion.div
                  style={{ opacity: concern1Opacity }}
                  className="rounded-full bg-slate-100 px-4 py-2 text-center"
                >
                  인터넷은 막고 싶은데 인강은 써야 해요.
                </motion.div>
                <motion.div
                  style={{ opacity: concern2Opacity }}
                  className="rounded-full bg-slate-100 px-4 py-2 text-center"
                >
                  공신폰이나 피처폰은 솔직히 좀… 쪽팔려요.
                </motion.div>
                <motion.div
                  style={{ opacity: concern3Opacity }}
                  className="rounded-full bg-slate-100 px-4 py-2 text-center"
                >
                  시간대별로 휴대폰을 차단하고 싶어요.
                </motion.div>
                <motion.div
                  style={{ opacity: concern4Opacity }}
                  className="rounded-full bg-slate-100 px-4 py-2 text-center"
                >
                  자녀의 공부 현황이 궁금해요.
                </motion.div>
                <motion.div
                  style={{ opacity: concern5Opacity }}
                  className="rounded-full bg-slate-100 px-4 py-2 text-center"
                >
                  약정 기간 때문에 공신폰으로 못 바꾸겠어요.
                </motion.div>
              </div>
            </motion.div>

            <motion.div
              style={{ opacity: thirdOpacity }}
              className="absolute inset-0 flex flex-col items-center justify-center text-center"
            >
              <p className="text-[11px] font-medium uppercase tracking-[0.25em] text-violet-500 sm:text-xs">
                Solution
              </p>
              <p
                className="mt-4 text-[1.9rem] font-semibold leading-snug tracking-tight text-slate-900 sm:text-[2.1rem] md:text-[2.4rem] break-keep"
              >
                대치루트는
                <br />
                이런 고민을 모두 해결합니다
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen bg-[#fafafa] text-slate-900">
      <AppHeader>
        <Link href="/gillo-phone-rental" className="transition hover:text-slate-900">대치폰 대여</Link>
        <Link href="/gillo-tab-rental" className="transition hover:text-slate-900">대치탭 대여</Link>
        <Link href="/faq" className="transition hover:text-slate-900">자주 묻는 질문</Link>
        <Link
          href="/inquiry"
          className="rounded-full bg-slate-900 px-4 py-2 text-[13px] font-medium text-white transition hover:bg-slate-800"
        >
          문의하기
        </Link>
      </AppHeader>

      <main>
        {/* Hero – minimal Apple-style */}
        <section className="border-b border-slate-200/60 bg-white">
          <div className="mx-auto flex min-h-[calc(100vh-64px)] max-w-5xl flex-col items-center justify-center px-5 py-10 sm:px-8 sm:py-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.22, 0.61, 0.36, 1] }}
              className="text-center"
            >
              <p className="text-[11px] font-medium uppercase tracking-[0.25em] text-slate-400 sm:text-xs">
                대치루트 솔루션 · 월 10명 한정
              </p>
              <h1 className="mt-4 text-[2.8rem] font-semibold leading-tight tracking-tight text-slate-900 sm:text-[3rem] md:text-[3.4rem] lg:text-[3.6rem]">
                전교 1등의
                <br className="block sm:hidden" />
                <span className="sm:ml-2">디지털 독서실</span>
              </h1>
              <p className="mt-5 max-w-xl mx-auto text-base text-slate-600 sm:text-lg">
                시간표와 목표에 맞춰 설계된 디지털 환경을 대여해 드립니다
              </p>
              <PlansGraphic />
            </motion.div>
          </div>
        </section>

        <ProblemNarrative />

        {/* 서비스 소개 – 대치폰 구독이 만드는 환경 + 왜 대치루트인가요 */}
        <section className="border-b border-slate-200/60 bg-white">
          <div className="mx-auto max-w-5xl px-5 py-16 sm:px-8 sm:py-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5 }}
              className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8"
            >
             
             
             
             
             
             
             
             
             
              <div className="mt-2">
                {/* 공신폰 vs 대치루트 – 비교표 (서비스 소개 내 배치) */}
                <p className="text-[11px] font-medium tracking-[0.2em] text-slate-400">
              서비스 소개
              </p>
                <div className="mt-4">
                  
                  <h3 className="text-lg font-semibold tracking-tight text-slate-900 sm:text-xl">
                    일반 공신폰과 뭐가 다른가요?
                  </h3>
                  <p className="mt-2 text-xs text-slate-600 sm:text-sm">
                    공신폰과 대치루트를 한눈에 비교해보세요
                  </p>

                  <div className="mt-5 grid gap-4 text-sm sm:mt-6">
                    <div className="grid grid-cols-2 items-end gap-2 rounded-xl border border-slate-200 bg-white px-3 py-3 sm:px-4 sm:py-4">
                      <div className="px-2 text-center">
                        <div className="mx-auto mb-2 flex h-10 w-10 items-center justify-center rounded-xl border border-slate-300 bg-slate-50 shadow-sm sm:h-12 sm:w-12">
                          <div className="flex h-8 w-5 flex-col justify-between rounded-[6px] border border-slate-300 bg-slate-100 p-0.5 sm:h-9 sm:w-6">
                            <div className="h-2 rounded-[3px] bg-slate-200" />
                            <div className="grid grid-cols-3 gap-0.5">
                              <span className="h-1.5 rounded-[2px] bg-slate-200" />
                              <span className="h-1.5 rounded-[2px] bg-slate-200" />
                              <span className="h-1.5 rounded-[2px] bg-slate-200" />
                              <span className="h-1.5 rounded-[2px] bg-slate-200" />
                              <span className="h-1.5 rounded-[2px] bg-slate-200" />
                              <span className="h-1.5 rounded-[2px] bg-slate-200" />
                            </div>
                          </div>
                        </div>
                        <p className="text-[11px] font-medium text-slate-500 sm:text-xs">일반 공신폰</p>
                      </div>
                      <div className="border-l border-slate-200 px-2 text-center">
                        <div className="mx-auto mb-2 flex h-10 w-10 items-center justify-center rounded-2xl bg-slate-900 shadow-sm sm:h-12 sm:w-12">
                          {/* 아이폰 12 실루엣 */}
                          <div className="relative h-8 w-4 rounded-[1rem] border border-slate-400 bg-black sm:h-9 sm:w-5">
                            {/* 측면 프레임 하이라이트 */}
                            <div className="pointer-events-none absolute inset-[1px] rounded-[0.9rem] border border-slate-800" />
                            {/* 상단 노치 */}
                            <div className="absolute left-1/2 top-0.5 h-1 w-2 -translate-x-1/2 rounded-b-xl bg-black sm:h-1.5 sm:w-2.5" />
                            {/* 화면 */}
                            <div className="absolute inset-[2px] rounded-[0.8rem] bg-gradient-to-b from-slate-800 via-slate-950 to-black">
                              <div className="absolute inset-x-1 bottom-1 flex justify-between">
                                <span className="h-1 w-2 rounded-full bg-slate-600/70 sm:w-2.5" />
                                <span className="h-1 w-1.5 rounded-full bg-slate-700/70 sm:w-2" />
                              </div>
                            </div>
                          </div>
                        </div>
                        <p className="text-[11px] font-medium text-slate-900 sm:text-xs">대치루트</p>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 items-start rounded-xl border border-slate-200 bg-white">
                      <div className="border-r border-slate-200 px-3 py-3 text-xs text-slate-500 sm:px-4 sm:text-sm">
                        저가형 피처폰, 보급형 휴대폰
                      </div>
                      <div className="px-3 py-3 text-xs text-slate-800 sm:px-4 sm:text-sm">
                        S급 애플 제품만 사용합니다
                      </div>
                    </div>

                    <div className="grid grid-cols-2 items-start rounded-xl border border-slate-200 bg-white">
                      <div className="border-r border-slate-200 px-3 py-3 text-xs text-slate-500 sm:px-4 sm:text-sm">
                        일괄 차단·잠금
                      </div>
                      <div className="px-3 py-3 text-xs text-slate-800 sm:px-4 sm:text-sm">
                        1대1 상담을 통한 맞춤 세팅
                      </div>
                    </div>

                    <div className="grid grid-cols-2 items-start rounded-xl border border-slate-200 bg-white">
                      <div className="border-r border-slate-200 px-3 py-3 text-xs text-slate-500 sm:px-4 sm:text-sm">
                        약정 기간 2년 이상, 중도 해지 시 위약금이 발생할 수 있습니다.
                      </div>
                      <div className="px-3 py-3 text-xs text-slate-800 sm:px-4 sm:text-sm">
                        약정 없이 이용 가능한 렌탈 방식으로, 필요 기간만 사용 후 부담 없이 반납할 수 있습니다.
                      </div>
                    </div>

                    <div className="grid grid-cols-2 items-start rounded-xl border border-slate-200 bg-white">
                      <div className="border-r border-slate-200 px-3 py-3 text-xs text-slate-500 sm:px-4 sm:text-sm">
                        단순 앱 잠금·차단 위주의 설정. 기기 초기화나 우회 방법에 따라 쉽게 풀릴 수 있습니다.
                      </div>
                      <div className="px-3 py-3 text-xs text-slate-800 sm:px-4 sm:text-sm">
                        기업용 보안 소프트웨어를 활용해 세팅합니다. 어떤 우회 방법도 없음을 보장합니다.
                      </div>
                    </div>

                    <div className="grid grid-cols-2 items-start rounded-xl border border-slate-200 bg-white">
                      <div className="border-r border-slate-200 px-3 py-3 text-xs text-slate-500 sm:px-4 sm:text-sm">
                        “나는 폰도 빼앗긴 문제아인가?”라는 패배감.
                      </div>
                      <div className="px-3 py-3 text-xs text-slate-800 sm:px-4 sm:text-sm">
                        “나는 공부에 진지한 상위 0.1%다”라는 자부심.
                      </div>
                    </div>



                    <div className="grid grid-cols-2 items-start rounded-xl border border-slate-200 bg-white">
                      <div className="border-r border-slate-200 px-3 py-3 text-xs text-slate-500 sm:px-4 sm:text-sm">
                        잠깐은 막혀도 결국 뚫리거나 반발하는 “통제 전쟁”.
                      </div>
                      <div className="px-3 py-3 text-xs text-slate-800 sm:px-4 sm:text-sm">
                        공부·휴식 모두 아이가 만족하는 몰입 환경.
                      </div>
                    </div>
                  </div>
                </div>

                {/* 여기부터는 비교표 이후 섹션 없음 – 상단 비교표와 외부 권위자 섹션으로 자연스럽게 연결 */}
              </div>
            </motion.div>
          </div>
        </section>

        {/* 선발 기준 – 상위 0.1% 전용 서비스 안내 카드 */}
        <section className="border-b border-slate-200/60 bg-[#fafafa]">
          <div className="mx-auto max-w-5xl px-5 py-14 sm:px-8 sm:py-18">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5 }}
              className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8"
            >
              <p className="text-[11px] font-medium tracking-[0.2em] text-slate-400">
                선발 기준
              </p>
              <h2 className="mt-3 text-xl font-semibold tracking-tight text-slate-900 sm:text-2xl">
                매월 10명의 학생만 선발합니다.
              </h2>
              <p className="mt-3 text-sm text-slate-600 sm:text-[15px]">
                대치폰·대치탭 대여는 상위권 수험생만을 위한 소수정예 서비스입니다.
                한 달에 최대 10명까지만, 생활 패턴과 목표에 맞춘 환경을 맞춤 제작해 드립니다.
              </p>

              <div className="mt-5 grid gap-6 md:grid-cols-2">
                <div className="rounded-2xl border border-slate-100 bg-slate-50 px-4 py-4 text-left text-sm text-slate-800 sm:px-5">
                  <p className="text-[11px] font-semibold tracking-[0.18em] text-slate-500">
                    성적 기준
                  </p>
                  <p className="mt-2 text-sm text-slate-700">
                    최근 모의고사 기준 <span className="font-semibold">국·수·탐 3합 10 이내</span> 이상 학생을
                    우선 선발합니다.
                  </p>
                  <p className="mt-2 text-xs text-slate-500">
                    ※ 학년·시험 난이도와 상담 내용에 따라 유연하게 적용됩니다.
                  </p>
                </div>

                <div className="rounded-2xl border border-slate-100 bg-slate-50 px-4 py-4 text-sm text-slate-800 sm:px-5">
                  <p className="text-[11px] font-semibold tracking-[0.18em] text-slate-500">
                    선발 단계
                  </p>
                  <ol className="mt-3 space-y-2 text-sm text-slate-700">
                    <li className="flex gap-2">
                      <span className="mt-0.5 inline-flex h-6 w-6 flex-none items-center justify-center rounded-full bg-slate-900 text-[11px] font-semibold text-white">
                        1
                      </span>
                      <div>
                        <p className="text-sm font-semibold text-slate-900">성적·목표 확인</p>
                        <p className="text-xs text-slate-600">최근 모의고사 성적·학년·목표 대학을 간단히 확인합니다.</p>
                      </div>
                    </li>
                    <li className="flex gap-2">
                      <span className="mt-0.5 inline-flex h-6 w-6 flex-none items-center justify-center rounded-full bg-slate-900 text-[11px] font-semibold text-white">
                        2
                      </span>
                      <div>
                        <p className="text-sm font-semibold text-slate-900">학생 몰입 서약</p>
                        <p className="text-xs text-slate-600">자녀가 직접 짧은 몰입 서약서를 작성합니다.</p>
                      </div>
                    </li>
                    <li className="flex gap-2">
                      <span className="mt-0.5 inline-flex h-6 w-6 flex-none items-center justify-center rounded-full bg-slate-900 text-[11px] font-semibold text-white">
                        3
                      </span>
                      <div>
                        <p className="text-sm font-semibold text-slate-900">승인 후 맞춤 컨설팅</p>
                        <p className="text-xs text-slate-600">학부모·학생과 1:1 상담으로 세팅 방향을 정합니다.</p>
                      </div>
                    </li>
                    <li className="flex gap-2">
                      <span className="mt-0.5 inline-flex h-6 w-6 flex-none items-center justify-center rounded-full bg-slate-900 text-[11px] font-semibold text-white">
                        4
                      </span>
                      <div>
                        <p className="text-sm font-semibold text-slate-900">서비스 제공</p>
                        <p className="text-xs text-slate-600">설계된 내용대로 세팅한 뒤, 대치폰·대치탭을 대여·관리합니다.</p>
                      </div>
                    </li>
                  </ol>
                </div>
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
              대여 서비스로 도와드립니다
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
