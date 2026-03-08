"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import {
  Phone,
  MessageCircle,
  BookOpen,
  FileText,
  Share2,
  Video,
  Gamepad2,
  ShoppingCart
} from "lucide-react";

/* 공신폰 애니메이션 (Hero 전용) – 앱은 아이콘만 */
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

const products = [
  {
    id: "gillo",
    name: "대치폰 세팅",
    subtitle: "공신폰 세팅 서비스",
    desc: "전화·문자·인강만 남기고 나머지는 차단. 기기를 학습 전용으로 세팅합니다.",
    href: "/gillo",
    accent: "text-blue-600"
  },
  {
    id: "gillo-phone",
    name: "대치폰",
    subtitle: "중고 매입 후 세팅·판매",
    desc: "중고 기기를 매입해 대치폰으로 세팅한 뒤, 바로 사용 가능한 상태로 판매합니다.",
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
            <Link href="/faq" className="transition hover:text-slate-900">자주 묻는 질문</Link>
            <Link
              href="/inquiry"
              className="rounded-full bg-slate-900 px-4 py-2 text-[13px] font-medium text-white transition hover:bg-slate-800"
            >
              문의하기
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
                휴대폰, 공부에만
              </h1>
              <p className="mt-5 max-w-xl mx-auto text-base text-slate-600 sm:text-lg">
                공부에 필요한 앱만 남기고 나머지는 차단합니다
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

        {/* 서비스 소개 – 기존 공신폰과 다른 점 + 왜 대치루트인가요 */}
        <section className="border-b border-slate-200/60 bg-white">
          <div className="mx-auto max-w-5xl px-5 py-16 sm:px-8 sm:py-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5 }}
              className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8"
            >
              <h2 className="text-xl font-bold tracking-tight text-slate-900 sm:text-2xl">
                서비스 소개
              </h2>

              <div className="mt-8">
                <h3 className="text-base font-semibold text-slate-800 sm:text-lg">기존 공신폰과 다른 세 가지</h3>
                <div className="mt-4 grid gap-4 sm:grid-cols-3">
                  <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
                    <p className="text-[11px] font-semibold uppercase tracking-wider text-slate-500">01 뚫는 방법이 없습니다</p>
                    <p className="mt-2 text-sm text-slate-700">기기 조작, 외부 장치를 통한 우회 등 모든 경로를 원천 차단합니다.</p>
                  </div>
                  <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
                    <p className="text-[11px] font-semibold uppercase tracking-wider text-slate-500">02 인강만 열고 웹은 막기</p>
                    <p className="mt-2 text-sm text-slate-700">필요한 앱은 허용하고 불필요한 앱은 차단합니다.</p>
                  </div>
                  <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
                    <p className="text-[11px] font-semibold uppercase tracking-wider text-slate-500">03 최신 기종 사용</p>
                    <p className="mt-2 text-sm text-slate-700">현재 사용하시는 폰 또는 최신형 단말기를 사용합니다.</p>
                  </div>
                </div>
              </div>

              <div className="mt-10 pt-8 border-t border-slate-200">
                <h3 className="text-base font-semibold text-slate-800 sm:text-lg">왜 대치루트인가요</h3>
                <div className="mt-4 grid gap-4 sm:grid-cols-3">
                  <div className="rounded-xl border border-slate-200 bg-slate-50/50 p-5">
                    <p className="text-[11px] font-semibold uppercase tracking-wider text-blue-600">기업 보안 수준의 기술</p>
                    <p className="mt-2 text-sm text-slate-700">
                      기업용 보안·관리 소프트웨어를 활용해 세팅합니다. 단순 잠금이 아닌 시스템단에서 정책이 유지되는 구조라, 믿고 맡기실 수 있습니다.
                    </p>
                  </div>
                  <div className="rounded-xl border border-slate-200 bg-slate-50/50 p-5">
                    <p className="text-[11px] font-semibold uppercase tracking-wider text-blue-600">대치동 수험생의 선택</p>
                    <p className="mt-2 text-sm text-slate-700">
                      대치동에서 수많은 수험생과 학부모님이 선택한 세팅입니다. 목표에 맞춰 필요한 앱만 남기는 방식으로 세팅해 드립니다.
                    </p>
                  </div>
                  <div className="rounded-xl border border-slate-200 bg-slate-50/50 p-5">
                    <p className="text-[11px] font-semibold uppercase tracking-wider text-blue-600">1:1 맞춤 상담</p>
                    <p className="mt-2 text-sm text-slate-700">
                      기기와 목표만 알려주시면, 적용 가능한 범위와 세팅 옵션을 안내합니다.
                    </p>
                  </div>
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
              두 가지 방식으로 도와드립니다.
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
