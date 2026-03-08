"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useAnimation, useInView, useMotionValue, useTransform } from "framer-motion";
import { ShieldCheck, Smartphone, Timer } from "lucide-react";
import Link from "next/link";

const fadeInUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 0.61, 0.36, 1] } }
};

const staggerContainer = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } }
};

export default function GilloPage() {
  return (
    <div className="min-h-screen bg-[#fafafa] text-slate-900">
      <header className="sticky top-0 z-50 border-b border-slate-200/60 bg-[#fafafa]/90 backdrop-blur-xl">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-5 py-3 sm:px-8">
          <Link href="/" className="flex items-center gap-2">
            <img src="/daechiroot-logo.png" alt="대치루트" className="h-6 w-6 object-contain" />
            <span className="text-sm font-semibold tracking-tight text-slate-900">대치루트</span>
          </Link>
          <nav className="flex items-center gap-6 text-[13px] text-slate-600">
            <Link href="/" className="transition hover:text-slate-900">홈</Link>
            <Link href="/#products" className="transition hover:text-slate-900">서비스</Link>
            <a href="#pricing" className="transition hover:text-slate-900">요금</a>
            <Link href="/contact" className="rounded-full bg-slate-900 px-4 py-2 text-[13px] font-medium text-white transition hover:bg-slate-800">
              상담 신청
            </Link>
          </nav>
        </div>
      </header>

      <main className="mx-auto max-w-5xl px-5 py-12 sm:px-8 sm:py-16">
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate="show"
          className="mb-14 text-center"
        >
          <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-blue-600">대치폰 세팅</p>
          <h1 className="mt-2 text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
            공신폰 세팅 서비스
          </h1>
          <p className="mt-3 text-sm text-slate-600">
            전화·문자·인강만 남기고 나머지는 차단합니다.
          </p>
        </motion.div>

        {/* 불필요한 앱 0개 */}
        <section className="mb-16">
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="flex flex-col items-start gap-6 sm:flex-row sm:items-end sm:justify-between"
          >
            <h2 className="text-xl font-bold tracking-tight text-slate-900 sm:text-2xl">
              불필요한 앱은 줄이고, 학습용만 남깁니다
            </h2>
            <AppsCount />
          </motion.div>
          <div className="mt-8">
            <PlatformToggleSection />
          </div>
        </section>

        {/* 설정은 대치루트가 대신 관리 */}
        <section className="mb-16">
          <div className="grid gap-8 lg:grid-cols-[1fr,1.2fr] lg:items-start">
            <motion.div variants={fadeInUp} initial="hidden" whileInView="show" viewport={{ once: true }} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
              <SettingStepsPhone />
            </motion.div>
            <motion.div variants={staggerContainer} initial="hidden" whileInView="show" viewport={{ once: true }} className="space-y-5">
              <motion.div variants={fadeInUp}>
                <h2 className="text-xl font-bold tracking-tight text-slate-900 sm:text-2xl">
                  설정은 대치루트가 대신 관리합니다
                </h2>
                <p className="mt-2 text-sm text-slate-600">
                  목표만 알려주시면, 사용 습관에 맞춰 기기에 적용합니다.
                </p>
              </motion.div>
              {[
                { icon: <Smartphone className="h-4 w-4" />, title: "01. 상담 & 진단", desc: "사용 패턴을 파악해 맞춤 프로필을 설계합니다." },
                { icon: <ShieldCheck className="h-4 w-4" />, title: "02. 초기화 & 구조 설계", desc: "기기 초기화 후 전화·문자·인강만 남도록 재배치합니다." },
                { icon: <Timer className="h-4 w-4" />, title: "03. 화이트리스트 세팅", desc: "학습용 앱만 남기고 우회 경로를 차단합니다." },
                { icon: <Timer className="h-4 w-4" />, title: "04. 검수 & 출고", desc: "검수 후 전달하고, 학년·목표 변경 시 재조정 가능합니다." }
              ].map((item) => (
                <motion.div
                  key={item.title}
                  variants={fadeInUp}
                  className="flex gap-3 rounded-xl border border-slate-200 bg-white px-4 py-3"
                >
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-blue-50 text-blue-500">{item.icon}</div>
                  <div>
                    <p className="text-sm font-semibold text-slate-900">{item.title}</p>
                    <p className="text-sm text-slate-600">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* 기존 공신폰과 다른 세 가지 */}
        <section className="mb-16">
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8"
          >
            <h2 className="text-xl font-bold tracking-tight text-slate-900 sm:text-2xl">
              기존 공신폰과 다른 세 가지
            </h2>
            <div className="mt-5 grid gap-4 sm:grid-cols-3">
              <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
                <p className="text-[11px] font-semibold uppercase tracking-wider text-slate-500">01 공장초기화로도 뚫기 어려움</p>
                <p className="mt-2 text-sm text-slate-700">초기화 후에도 정책이 유지되도록 설계합니다.</p>
              </div>
              <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
                <p className="text-[11px] font-semibold uppercase tracking-wider text-slate-500">02 인강만 열고 웹은 막기</p>
                <p className="mt-2 text-sm text-slate-700">인강 앱만 허용하고 나머지 인터넷은 차단합니다.</p>
              </div>
              <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
                <p className="text-[11px] font-semibold uppercase tracking-wider text-slate-500">03 지금 쓰는 기기 그대로 세팅</p>
                <p className="mt-2 text-sm text-slate-700">별도 단말 없이 현재 아이폰·안드로이드를 사용합니다.</p>
              </div>
            </div>
          </motion.div>
        </section>

        {/* 요금 + 무료 진단 */}
        <section id="pricing" className="scroll-mt-24">
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8"
          >
            <h2 className="text-lg font-semibold text-slate-900 sm:text-xl">요금</h2>
            <p className="mt-1 text-xs text-slate-600">기본 구조만 안내. 금액은 상담 후 확정.</p>
            <div className="mt-4 overflow-hidden rounded-lg border border-slate-200">
              <div className="grid grid-cols-3 bg-slate-50 px-3 py-2 text-[11px] font-medium text-slate-500">
                <span>구성</span>
                <span>기준</span>
                <span className="text-right">요금 안내</span>
              </div>
              <div className="divide-y divide-slate-200 text-xs sm:text-[13px]">
                <div className="grid grid-cols-3 items-center px-3 py-2.5 sm:px-4">
                  <span className="font-medium text-slate-900">기본 세팅</span>
                  <span className="text-slate-600">수험생 1인·1대</span>
                  <span className="text-right text-slate-700">상담 후 확정</span>
                </div>
                <div className="grid grid-cols-3 items-center px-3 py-2.5 sm:px-4">
                  <span className="font-medium text-slate-900">추가 기기</span>
                  <span className="text-slate-600">가족·형제 추가</span>
                  <span className="text-right text-slate-700">기본 대비 할인</span>
                </div>
                <div className="grid grid-cols-3 items-center px-3 py-2.5 sm:px-4">
                  <span className="font-medium text-slate-900">방문/출장</span>
                  <span className="text-slate-600">센터 방문 어려운 경우</span>
                  <span className="text-right text-slate-700">지역·일정에 따라 상이</span>
                </div>
              </div>
            </div>

            <div className="mt-6 border-t border-slate-200 pt-6">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <h3 className="font-bold text-slate-900">무료 진단받기</h3>
                  <p className="mt-0.5 text-xs text-slate-600">기기 상태만 알려주시면 막을 수 있는 범위를 안내합니다.</p>
                </div>
                <Link
                  href="/contact"
                  className="inline-flex justify-center rounded-full bg-slate-900 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-slate-800"
                >
                  상담 신청
                </Link>
              </div>
            </div>
          </motion.div>
        </section>
      </main>

      <footer className="mt-16 border-t border-slate-200 bg-white py-6">
        <div className="mx-auto max-w-5xl px-5 text-center text-[12px] text-slate-500 sm:px-8">
          <p>대표: 정현우 | 사업자등록번호: 150-07-03484 | 서울특별시 강남구 개포동</p>
          <p className="mt-1 text-slate-400">© {new Date().getFullYear()} Daechiroot.</p>
        </div>
      </footer>
    </div>
  );
}

function PlatformToggleSection() {
  const [selectedPlatform, setSelectedPlatform] = useState<"ios" | "android">("ios");
  const isIOS = selectedPlatform === "ios";

  return (
    <div className="grid gap-6 rounded-2xl border border-slate-200 bg-white p-5 sm:grid-cols-[1fr,1fr] sm:items-center sm:p-6">
      <div className="space-y-4 text-sm text-slate-700">
        <p className="text-xs font-medium text-slate-500">
          {isIOS ? "iOS 공신폰 · 정리 중심 설정" : "Android 공신폰 · 통제/차단 중심 설정"}
        </p>
        <div className="inline-flex rounded-full border border-slate-200 bg-slate-50 p-1 text-[11px]">
          <button
            type="button"
            onClick={() => setSelectedPlatform("ios")}
            className={`rounded-full px-4 py-1.5 font-semibold transition ${isIOS ? "bg-blue-500 text-white" : "text-slate-600 hover:text-slate-900"}`}
          >
            iOS 공신폰
          </button>
          <button
            type="button"
            onClick={() => setSelectedPlatform("android")}
            className={`rounded-full px-4 py-1.5 font-semibold transition ${!isIOS ? "bg-blue-500 text-white" : "text-slate-600 hover:text-slate-900"}`}
          >
            Android 공신폰
          </button>
        </div>
        <ul className="space-y-1.5 text-slate-700">
          {isIOS ? (
            <>
              <li>✓ 홈 화면: 전화·문자·학습용만 남기고 정리</li>
              <li>✓ 우회 브라우저·앱 설치 경로 차단</li>
              <li>✓ 학원/학교 일정 알림만 남기기</li>
            </>
          ) : (
            <>
              <li>✓ 우회 경로·런처 점검 후 통제</li>
              <li>✓ 알림 바·위젯까지 완전 차단</li>
              <li>✓ 초기화 방지 락, 기종별 통제</li>
            </>
          )}
        </ul>
      </div>
      <div className="flex h-64 items-center justify-center rounded-xl border border-dashed border-slate-200 bg-slate-50 text-center text-sm text-slate-500 sm:h-72">
        {isIOS ? "iOS 공신폰 세팅 이미지 영역" : "Android 공신폰 세팅 이미지 영역"}
      </div>
    </div>
  );
}

function SettingStepsPhone() {
  const controls = useAnimation();
  const [step, setStep] = useState(0);

  useEffect(() => {
    controls.start({ opacity: [0, 1], y: [12, 0] });
    const id = setInterval(() => setStep((prev) => (prev + 1) % 3), 2200);
    return () => clearInterval(id);
  }, [controls]);

  const configs = [
    { label: "기본 홈 화면 정리", highlight: "필수 앱만 남기기" },
    { label: "알림 · 배너 정리", highlight: "집중 방해 요소 제거" },
    { label: "마지막 검수", highlight: "공부 전용 모드 확인" }
  ];
  const current = configs[step];

  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
      <div className="mb-3 flex items-center justify-between text-xs text-slate-500">
        <span>대치폰 세팅</span>
        <span className="rounded-full bg-blue-50 px-2 py-0.5 text-[11px] text-blue-600">진행 중</span>
      </div>
      <motion.div animate={controls} className="space-y-2 text-xs">
        <p className="text-slate-400">지금 적용 중인 단계</p>
        <p className="font-semibold text-slate-900">{current.label}</p>
        <p className="text-slate-600">
          <span className="font-semibold text-blue-500">{current.highlight}</span> 단계입니다.
        </p>
      </motion.div>
      <div className="mt-4 flex gap-1.5">
        {configs.map((_, i) => (
          <div key={i} className={`h-1 flex-1 rounded-full ${i <= step ? "bg-blue-500" : "bg-slate-200"}`} />
        ))}
      </div>
    </div>
  );
}

function AppsCount() {
  const ref = useRef<HTMLDivElement | null>(null);
  const inView = useInView(ref, { once: true, amount: 0.5 });
  const count = useMotionValue(100);
  const rounded = useTransform(count, (v) => Math.round(v));

  useEffect(() => {
    if (inView) {
      count.set(100);
      const start = performance.now();
      const step = (now: number) => {
        const progress = Math.min((now - start) / 1200, 1);
        count.set(100 - progress * 100);
        if (progress < 1) requestAnimationFrame(step);
      };
      requestAnimationFrame(step);
    }
  }, [inView, count]);

  return (
    <motion.div ref={ref} className="inline-flex flex-col items-center rounded-2xl border border-slate-200 bg-white px-6 py-4 text-center">
      <span className="text-[11px] font-medium uppercase tracking-wider text-slate-500">설치된 앱 개수</span>
      <motion.span className="mt-1 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">{rounded as unknown as number}</motion.span>
      <p className="mt-1 text-xs text-slate-500">세팅 후 <span className="font-semibold text-blue-500">불필요한 앱 0개</span></p>
    </motion.div>
  );
}
