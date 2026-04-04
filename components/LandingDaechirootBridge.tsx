"use client";

import { useCallback, useEffect, useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import {
  Activity,
  Brain,
  FileBarChart,
  HeartHandshake,
  Lock,
  MessageCircle,
  Pause,
  Play,
  Sparkles
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { DaechirootBridgeScene } from "@/components/daechiroot-bridge/DaechirootBridgeScenes";
import { IPhone12MockupShell } from "@/components/device/IPhone12MockupShell";

const AUTO_MS = 4500;

type BridgeItem = {
  id: string;
  title: string;
  description: string;
  Icon: LucideIcon;
};

type BridgeStep = {
  id: string;
  label: string;
  items: BridgeItem[];
};

const BRIDGE_STEPS: BridgeStep[] = [
  {
    id: "study",
    label: "1. 하이엔드 학습 관리",
    items: [
      {
        id: "bridge-p1-1",
        title: "개인화 플래닝",
        description:
          "단순한 계획표가 아닙니다. 학습 데이터를 추적해 취약점을 진단하고 맞춤 계획을 세웁니다. 지정된 시간 안에 플래너를 작성하지 않으면 스마트폰 사용이 즉시 제한됩니다.",
        Icon: Sparkles
      },
      {
        id: "bridge-p1-2",
        title: "메타인지 평가 (SNU-AI 튜터링)",
        description:
          "서울대 출신 멘토진이 설계한 AI 코칭이 매일 공부한 내용을 듣고, 이해도를 날카롭게 검증합니다. 주관을 줄인 객관적인 메타인지 훈련입니다.",
        Icon: Brain
      },
      {
        id: "bridge-p1-3",
        title: "24/7 무제한 질의응답",
        description:
          "수능 전 과목, 막히는 문제는 새벽이어도 괜찮습니다. 상위 0.1% 수준의 풀이 로직을 탑재한 대치루트 전용 AI가 즉시 명쾌한 해설을 제공합니다.",
        Icon: MessageCircle
      }
    ]
  },
  {
    id: "life",
    label: "2. 빈틈없는 생활 관리",
    items: [
      {
        id: "bridge-p2-1",
        title: "데이터 기반 생활 코칭",
        description:
          "수면·순수 공부 시간·휴식 패턴을 분석해 수험생에게 맞는 루틴으로 교정합니다.",
        Icon: Activity
      },
      {
        id: "bridge-p2-2",
        title: "타임라인 잠금",
        description:
          "학습 계획표와 연동되어, 정해진 시간에만 허용된 앱과 웹에 접근할 수 있도록 환경을 원천 통제합니다.",
        Icon: Lock
      }
    ]
  },
  {
    id: "parent",
    label: "3. 상위권 학부모의 새로운 여유",
    items: [
      {
        id: "bridge-p3-1",
        title: "프리미엄 리포트",
        description:
          "매일·매주·매월 자녀의 학습·생활 데이터를 객관적으로 정리해 전달합니다.",
        Icon: FileBarChart
      },
      {
        id: "bridge-p3-2",
        title: "감정 소모 제로",
        description:
          "잔소리는 시스템이 맡고, 학부모에게는 언제·어떻게 칭찬하고 독려할지 명확한 가이드만 제공합니다.",
        Icon: HeartHandshake
      }
    ]
  }
];

export function LandingDaechirootBridge() {
  const reduceMotion = useReducedMotion();
  const [mainIdx, setMainIdx] = useState(0);
  const [subIdx, setSubIdx] = useState(0);
  const [paused, setPaused] = useState(false);
  const main = BRIDGE_STEPS[mainIdx];
  const items = main?.items ?? [];
  const current = items[subIdx];
  const DetailIcon = current?.Icon;

  useEffect(() => {
    setSubIdx(0);
  }, [mainIdx]);

  useEffect(() => {
    if (reduceMotion || paused) return;
    const len = BRIDGE_STEPS[mainIdx]?.items.length ?? 0;
    if (len <= 1) return;
    const id = window.setInterval(() => {
      setSubIdx((i) => (i + 1) % len);
    }, AUTO_MS);
    return () => window.clearInterval(id);
  }, [mainIdx, subIdx, paused, reduceMotion]);

  const setMain = useCallback((i: number) => {
    setMainIdx(i);
  }, []);

  const togglePause = useCallback(() => {
    setPaused((p) => !p);
  }, []);

  return (
    <section
      className="snap-none border-b border-slate-200/80 bg-gradient-to-b from-white to-[#f8f9fa]"
      aria-label="대치루트 서비스 구성"
    >
      <div className="mx-auto max-w-6xl px-5 py-12 sm:px-8 sm:py-16 lg:py-20">
        <div
          className="flex flex-wrap items-center justify-center gap-2"
          role="tablist"
          aria-label="대치루트 소개 구성"
        >
          {BRIDGE_STEPS.map((step, i) => {
            const selected = i === mainIdx;
            return (
              <button
                key={step.id}
                type="button"
                role="tab"
                aria-selected={selected}
                aria-controls="daechiroot-bridge-panel"
                id={`daechiroot-bridge-tab-${step.id}`}
                className={`rounded-full px-5 py-2.5 text-sm font-semibold transition sm:text-[15px] ${
                  selected
                    ? "bg-navy-800 text-white shadow-md shadow-navy-900/20"
                    : "bg-slate-100 text-slate-600 hover:bg-slate-200/90 hover:text-slate-900"
                }`}
                onClick={() => setMain(i)}
              >
                {step.label}
              </button>
            );
          })}
        </div>

        <div
          id="daechiroot-bridge-panel"
          role="tabpanel"
          aria-labelledby={main ? `daechiroot-bridge-tab-${main.id}` : undefined}
          className="mt-10 sm:mt-12"
        >
          {current && DetailIcon && main && (
            <div className="grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-14">
              <div className="order-2 lg:order-1">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={`${main.id}-${current.id}`}
                    initial={reduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={reduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: -8 }}
                    transition={{ duration: 0.35, ease: [0.22, 0.61, 0.36, 1] }}
                    className="text-left"
                  >
                    <div className="flex items-start gap-3 sm:gap-4">
                      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-navy-800 text-white shadow-sm sm:h-12 sm:w-12">
                        <DetailIcon className="h-5 w-5 sm:h-6 sm:h-6" strokeWidth={2} aria-hidden />
                      </span>
                      <div className="min-w-0 pt-0.5">
                        <h3 className="text-lg font-bold tracking-tight text-slate-900 sm:text-xl">{current.title}</h3>
                        <p className="mt-2 text-[15px] leading-relaxed text-slate-600 sm:text-base">{current.description}</p>
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>

                <div className="mt-8 flex flex-wrap gap-2" role="group" aria-label="세부 항목">
                  {items.map((it, i) => (
                    <button
                      key={it.id}
                      type="button"
                      aria-label={`${it.title} 보기`}
                      aria-current={i === subIdx ? "true" : undefined}
                      className={`h-2 rounded-full transition-all ${
                        i === subIdx ? "w-8 bg-navy-800" : "w-2 bg-slate-300 hover:bg-slate-400"
                      }`}
                      onClick={() => {
                        setSubIdx(i);
                        setPaused(true);
                      }}
                    />
                  ))}
                </div>
              </div>

              <div className="relative order-1 flex justify-center lg:order-2 lg:justify-end">
                <div className="relative w-full max-w-[min(100%,340px)]">
                  <div className="relative z-10 mx-auto w-fit max-w-full">
                    <IPhone12MockupShell>
                      <AnimatePresence mode="wait">
                        <motion.div
                          key={`${main.id}-${current.id}`}
                          initial={reduceMotion ? { opacity: 1, x: 0 } : { opacity: 0, x: 24 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={reduceMotion ? { opacity: 1, x: 0 } : { opacity: 0, x: -18 }}
                          transition={{ duration: 0.4, ease: [0.22, 0.61, 0.36, 1] }}
                          className="relative h-full min-h-0 w-full"
                        >
                          <DaechirootBridgeScene sceneId={current.id} reduceMotion={!!reduceMotion} />
                        </motion.div>
                      </AnimatePresence>
                    </IPhone12MockupShell>
                  </div>

                  {!reduceMotion && items.length > 1 && (
                    <button
                      type="button"
                      onClick={togglePause}
                      aria-pressed={paused}
                      aria-label={paused ? "자동 재생 시작" : "자동 재생 일시정지"}
                      className="absolute -bottom-1 -right-1 z-20 flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-800 shadow-md transition hover:bg-slate-50 sm:bottom-0 sm:right-0"
                    >
                      {paused ? <Play className="ml-0.5 h-4 w-4" fill="currentColor" /> : <Pause className="h-4 w-4" />}
                    </button>
                  )}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
