"use client";

import { useCallback, useEffect, useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { Pause, Play } from "lucide-react";
import { FEATURE_FLOW_STEPS } from "@/lib/featureFlowContent";
import { FeatureFlowScene } from "@/components/feature-flow/FeatureFlowScenes";

const AUTO_MS = 4500;

export function FeatureFlowSection() {
  const reduceMotion = useReducedMotion();
  const [mainIdx, setMainIdx] = useState(0);
  const [subIdx, setSubIdx] = useState(0);
  const [paused, setPaused] = useState(false);
  const main = FEATURE_FLOW_STEPS[mainIdx];
  const items = main?.items ?? [];
  const current = items[subIdx];
  const DetailIcon = current?.Icon;

  useEffect(() => {
    setSubIdx(0);
  }, [mainIdx]);

  useEffect(() => {
    if (reduceMotion || paused) return;
    const len = FEATURE_FLOW_STEPS[mainIdx]?.items.length ?? 0;
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
      className="snap-none border-b border-slate-200/70 bg-white py-14 sm:py-20"
      aria-labelledby="feature-flow-heading"
    >
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="text-center">
          <h2
            id="feature-flow-heading"
            className="text-balance text-[1.65rem] font-bold tracking-tight text-slate-900 sm:text-3xl md:text-[2rem]"
          >
            똑똑하게 관리합니다
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-slate-600 sm:text-base">
            특허 출원 진행 중인 기술로 수험생 맞춤형 디지털 환경을 제공합니다
          </p>
        </div>

        {/* 메인 탭 (PLAUD형 필) */}
        <div
          className="mt-10 flex flex-wrap items-center justify-center gap-2 sm:mt-12"
          role="tablist"
          aria-label="관리 단계"
        >
          {FEATURE_FLOW_STEPS.map((step, i) => {
            const selected = i === mainIdx;
            return (
              <button
                key={step.id}
                type="button"
                role="tab"
                aria-selected={selected}
                aria-controls="feature-flow-panel"
                id={`feature-flow-tab-${step.id}`}
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

        {/* 서브 하이라이트 한 줄 */}
        {main && (
          <p className="mt-5 text-center text-[13px] text-slate-500 sm:mt-6 sm:text-sm">{main.highlightLine}</p>
        )}

        <div
          id="feature-flow-panel"
          role="tabpanel"
          aria-labelledby={main ? `feature-flow-tab-${main.id}` : undefined}
          className="mt-10 sm:mt-12"
        >
          {current && DetailIcon && main && (
            <div className="grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-14">
              {/* 좌측: 현재 서브 스텝 설명 */}
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
                        <DetailIcon className="h-5 w-5 sm:h-6 sm:w-6" strokeWidth={2} aria-hidden />
                      </span>
                      <div className="min-w-0 pt-0.5">
                        <h3 className="text-lg font-bold tracking-tight text-slate-900 sm:text-xl">{current.title}</h3>
                        <p className="mt-2 text-[15px] leading-relaxed text-slate-600 sm:text-base">{current.description}</p>
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>

                {/* 도트 — 수동 이동 */}
                <div className="mt-8 flex flex-wrap gap-2" role="group" aria-label="세부 단계">
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

              {/* 우측: 설명 맞춤 SVG·CSS 애니메이션 + 재생/일시정지 */}
              <div className="relative order-1 flex justify-center lg:order-2 lg:justify-end">
                <div className="relative w-full max-w-[300px] sm:max-w-[320px]">
                  <div className="relative z-10 mx-auto aspect-[9/16] w-full max-w-[280px]">
                    <div className="relative h-full w-full rounded-[2.5rem] border-[10px] border-slate-900 bg-slate-900 shadow-2xl shadow-slate-900/25 ring-1 ring-white/10">
                      <div className="absolute inset-0 overflow-hidden rounded-[2rem] bg-slate-100">
                        <AnimatePresence mode="wait">
                          <motion.div
                            key={`${main.id}-${current.id}`}
                            initial={reduceMotion ? { opacity: 1, x: 0 } : { opacity: 0, x: 24 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={reduceMotion ? { opacity: 1, x: 0 } : { opacity: 0, x: -18 }}
                            transition={{ duration: 0.4, ease: [0.22, 0.61, 0.36, 1] }}
                            className="relative h-full w-full"
                          >
                            <FeatureFlowScene sceneId={current.id} reduceMotion={!!reduceMotion} />
                          </motion.div>
                        </AnimatePresence>
                      </div>
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
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
