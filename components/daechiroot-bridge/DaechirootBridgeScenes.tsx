"use client";

import { useEffect, useState, type FC } from "react";
import { motion } from "framer-motion";
import { ChevronRight, Coffee, Lock, Moon, Sparkles, StickyNote, Sun } from "lucide-react";
import {
  IOChatBubble,
  IOGroup,
  IOScreenRoot,
  IOSectionLabel,
  IOSeparator,
  IOListRow,
  IONavBar,
  IOSegmented
} from "@/components/app-ui/mockPhoneIOS";

type SceneProps = { reduceMotion: boolean };

const loop = (reduce: boolean) =>
  reduce ? { duration: 0 } : { duration: 2.4, repeat: Infinity, ease: "easeInOut" as const };

function PhoneFrame({
  children,
  label,
  title,
  navStyle = "large"
}: {
  children: React.ReactNode;
  label: string;
  title?: string;
  navStyle?: "large" | "inline";
}) {
  return (
    <div className="relative flex h-full min-h-0 w-full flex-col overflow-hidden" role="img" aria-label={label}>
      <IOScreenRoot>
        {title && <IONavBar title={title} large={navStyle === "large"} />}
        <div className="flex min-h-0 flex-1 flex-col gap-0 overflow-hidden px-3 py-2">{children}</div>
      </IOScreenRoot>
    </div>
  );
}

/** 개인화 플래닝 */
function ScenePersonalPlanning({ reduceMotion }: SceneProps) {
  const [phase, setPhase] = useState(0);
  useEffect(() => {
    if (reduceMotion) return;
    const id = window.setInterval(() => setPhase((p) => (p + 1) % 3), 2200);
    return () => window.clearInterval(id);
  }, [reduceMotion]);
  const barH = [26, 40, 22, 48, 34];
  return (
    <PhoneFrame label="학습 데이터와 플래너" title="학습" navStyle="large">
      <IOSectionLabel>이번 주 취약 영역</IOSectionLabel>
      <IOGroup className="mb-2">
        <div className="px-3 pb-2 pt-3">
          <p className="text-[11px] text-slate-500">과목별 이해도 추정</p>
          <div className="mt-3 flex h-[72px] items-end justify-between gap-1.5">
            {barH.map((h, i) => (
              <motion.div
                key={i}
                className="w-full max-w-[18%] rounded-t-[3px] bg-gradient-to-t from-[#1a2a44] to-[#3d5a8a]"
                animate={{ height: reduceMotion ? h : phase === 1 ? h + 10 : h }}
                transition={{ duration: 0.45 }}
              />
            ))}
          </div>
        </div>
      </IOGroup>
      <IOSectionLabel>오늘 플래너</IOSectionLabel>
      <IOGroup>
        <IOListRow
          label="국어 · 수학 · 영어"
          sublabel="제출 마감 22:00"
          right={
            <motion.span
              className="text-[13px] font-semibold text-[#ff3b30]"
              animate={reduceMotion ? {} : { opacity: phase === 2 ? [1, 0.45, 1] : 1 }}
              transition={loop(reduceMotion)}
            >
              미제출
            </motion.span>
          }
        />
        <IOSeparator />
        <div className="flex items-center gap-2 px-3 py-3">
          <StickyNote className="h-5 w-5 text-slate-400" strokeWidth={1.5} aria-hidden />
          <p className="text-[12px] text-slate-600">플래너를 제출해야 집중 모드가 유지됩니다.</p>
        </div>
      </IOGroup>
      <div className="mt-auto flex items-center justify-center gap-2 py-3">
        <motion.div
          className="flex h-11 w-11 items-center justify-center rounded-full bg-[#1c1c1e] text-white shadow-lg"
          animate={reduceMotion ? {} : { scale: phase === 2 ? [1, 1.08, 1] : 1 }}
          transition={loop(reduceMotion)}
        >
          <Lock className="h-5 w-5" strokeWidth={2} aria-hidden />
        </motion.div>
        <span className="text-[12px] font-medium text-slate-700">스크린 타임 제한</span>
      </div>
    </PhoneFrame>
  );
}

/** SNU-AI 메타인지 */
function SceneMetaCognition({ reduceMotion }: SceneProps) {
  return (
    <PhoneFrame label="AI 튜터링" title="SNU-AI" navStyle="inline">
      <div className="flex min-h-0 flex-1 flex-col">
        <IOGroup className="mb-2">
          <div className="flex gap-3 px-3 py-3">
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-violet-500 to-indigo-600">
              <Sparkles className="h-4 w-4 text-white" aria-hidden />
            </div>
            <div>
              <p className="text-[13px] font-semibold text-[#000]">오늘의 확인 질문</p>
              <p className="mt-1 text-[12px] leading-snug text-slate-600">
                방금 본 인강에서 핵심 개념을 한 문장으로 요약해 볼까요?
              </p>
            </div>
          </div>
        </IOGroup>
        <div className="mb-2 flex h-12 items-end justify-center gap-px overflow-hidden rounded-xl bg-white px-2 py-2 shadow-sm ring-1 ring-black/[0.06]">
          {Array.from({ length: 20 }).map((_, i) => {
            const base = 6 + (i % 5) * 3;
            return (
              <motion.div
                key={i}
                className="w-0.5 rounded-full bg-[#007aff]"
                animate={reduceMotion ? { height: base } : { height: [base, base + 14, base + 4, base + 10, base] }}
                transition={{ duration: 1.2, repeat: Infinity, delay: i * 0.05, ease: "easeInOut" }}
              />
            );
          })}
        </div>
        <IOGroup>
          <IOListRow
            label="이해도 평가"
            sublabel="객관적 채점 · 메타인지"
            right={
              <span className="flex items-center gap-0.5 text-[13px] font-medium text-[#34c759]">
                완료
                <ChevronRight className="h-4 w-4 text-slate-300" strokeWidth={2} aria-hidden />
              </span>
            }
          />
        </IOGroup>
      </div>
    </PhoneFrame>
  );
}

/** 24/7 질의응답 */
function Scene247QA({ reduceMotion }: SceneProps) {
  const [step, setStep] = useState(0);
  useEffect(() => {
    if (reduceMotion) return;
    const id = window.setInterval(() => setStep((s) => (s + 1) % 2), 2200);
    return () => window.clearInterval(id);
  }, [reduceMotion]);
  return (
    <PhoneFrame label="AI 해설" title="대치루트 AI" navStyle="inline">
      <div className="flex min-h-0 flex-1 flex-col justify-end gap-2 overflow-hidden">
        <div className="text-center text-[10px] font-medium tabular-nums text-slate-400">오전 2:17</div>
        <motion.div key={`q-${step}`} initial={reduceMotion ? false : { opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }}>
          <IOChatBubble align="right" meta="나">
            <span>이 적분 풀이 맞나요?</span>
          </IOChatBubble>
        </motion.div>
        <motion.div key={`a-${step}`} initial={reduceMotion ? false : { opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 }}>
          <IOChatBubble align="left" meta="대치루트 AI">
            <span className="font-medium">중간에 부호만 조정하면 됩니다.</span>
            <span className="mt-1 block text-[11px] text-slate-600">단계별로 짚어 드릴게요.</span>
          </IOChatBubble>
        </motion.div>
      </div>
    </PhoneFrame>
  );
}

/** 생활 데이터 */
function SceneLifestyleData({ reduceMotion }: SceneProps) {
  const rows = [
    { label: "수면", icon: Moon, w: 72, tint: "from-indigo-500 to-indigo-400" },
    { label: "순공", icon: Sun, w: 58, tint: "from-blue-600 to-blue-400" },
    { label: "휴식", icon: Coffee, w: 34, tint: "from-teal-500 to-teal-400" }
  ];
  return (
    <PhoneFrame label="생활 루틴" title="건강" navStyle="large">
      <IOSectionLabel>지난 7일</IOSectionLabel>
      <IOGroup>
        {rows.map((r, i) => {
          const Icon = r.icon;
          return (
            <div key={r.label}>
              {i > 0 && <IOSeparator />}
              <div className="px-3 py-3">
                <div className="flex items-center justify-between">
                  <span className="flex items-center gap-2 text-[13px] font-medium text-[#000]">
                    <Icon className="h-4 w-4 text-slate-400" strokeWidth={1.5} aria-hidden />
                    {r.label}
                  </span>
                  <span className="text-[12px] text-slate-500">목표 대비</span>
                </div>
                <div className="mt-2 h-2 w-full overflow-hidden rounded-full bg-slate-200/90">
                  <motion.div
                    className={`h-full rounded-full bg-gradient-to-r ${r.tint}`}
                    initial={{ width: 0 }}
                    animate={{ width: `${r.w}%` }}
                    transition={{ delay: reduceMotion ? 0 : 0.15 + i * 0.2, duration: 0.65, ease: "easeOut" }}
                  />
                </div>
              </div>
            </div>
          );
        })}
      </IOGroup>
      <p className="mt-2 px-1 text-center text-[11px] text-slate-500">패턴을 분석해 루틴을 제안합니다.</p>
    </PhoneFrame>
  );
}

/** 타임라인 잠금 */
function SceneTimelineLock({ reduceMotion }: SceneProps) {
  const slots = [
    { t: "집중 모드", sub: "09:00 – 12:00", on: true },
    { t: "허용 앱만", sub: "인강 · 메모", on: true },
    { t: "그 외 앱", sub: "차단", on: false }
  ];
  const [active, setActive] = useState(0);
  useEffect(() => {
    if (reduceMotion) return;
    const id = window.setInterval(() => setActive((a) => (a + 1) % slots.length), 1400);
    return () => window.clearInterval(id);
  }, [reduceMotion]);
  return (
    <PhoneFrame label="스크린 타임" title="집중" navStyle="inline">
      <IOSectionLabel>오늘 시간표</IOSectionLabel>
      <IOGroup>
        {slots.map((s, i) => (
          <div key={s.t}>
            {i > 0 && <IOSeparator />}
            <motion.div
              className={`flex min-h-[48px] items-center justify-between px-3 py-2.5 ${
                i === active ? "bg-[#f2f7ff]" : ""
              }`}
              animate={reduceMotion ? {} : { backgroundColor: i === active ? "rgba(242,247,255,1)" : "transparent" }}
            >
              <div>
                <p className="text-[13px] font-medium text-[#000]">{s.t}</p>
                <p className="text-[11px] text-slate-500">{s.sub}</p>
              </div>
              {s.on ? (
                <span className="rounded-full bg-[#e8f5e9] px-2 py-0.5 text-[11px] font-semibold text-[#2e7d32]">허용</span>
              ) : (
                <motion.span
                  className="rounded-full bg-[#ffebee] px-2 py-0.5 text-[11px] font-semibold text-[#c62828]"
                  animate={reduceMotion ? {} : { opacity: [1, 0.5, 1] }}
                  transition={loop(reduceMotion)}
                >
                  잠금
                </motion.span>
              )}
            </motion.div>
          </div>
        ))}
      </IOGroup>
    </PhoneFrame>
  );
}

/** 프리미엄 리포트 */
function ScenePremiumReport({ reduceMotion }: SceneProps) {
  const tabs = ["일간", "주간", "월간"];
  const [tab, setTab] = useState(0);
  useEffect(() => {
    if (reduceMotion) return;
    const id = window.setInterval(() => setTab((t) => (t + 1) % 3), 1800);
    return () => window.clearInterval(id);
  }, [reduceMotion]);
  return (
    <PhoneFrame label="리포트" title="리포트" navStyle="inline">
      <div className="mb-3">
        <IOSegmented options={tabs} value={tab} onChange={setTab} />
      </div>
      <motion.div
        key={tab}
        initial={reduceMotion ? false : { opacity: 0.85, y: 4 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.25 }}
      >
        <IOSectionLabel>요약</IOSectionLabel>
        <IOGroup>
          <div className="px-3 py-3">
            <p className="text-[11px] text-slate-500">집중 시간 추세</p>
            <div className="mt-2 h-16 flex items-end justify-between gap-1">
              {[40, 55, 48, 72, 60, 78].map((h, i) => (
                <motion.div
                  key={i}
                  className="w-full rounded-t-[2px] bg-[#007aff]"
                  initial={{ height: 0 }}
                  animate={{ height: `${h}%` }}
                  transition={{ duration: 0.4, delay: i * 0.04 }}
                  style={{ maxHeight: 56 }}
                />
              ))}
            </div>
          </div>
          <IOSeparator />
          <IOListRow
            label="학부모 알림"
            sublabel="카카오톡으로 요약 전송"
            right={<ChevronRight className="h-[17px] w-[17px] text-slate-300" strokeWidth={2} aria-hidden />}
          />
        </IOGroup>
      </motion.div>
    </PhoneFrame>
  );
}

/** 감정 소모 제로 */
function SceneParentGuide({ reduceMotion: _reduceMotion }: SceneProps) {
  return (
    <PhoneFrame label="학부모 가이드" title="가족" navStyle="inline">
      <IOSectionLabel>시스템 메시지</IOSectionLabel>
      <IOGroup className="mb-3 opacity-70">
        <div className="px-3 py-3">
          <p className="text-center text-[12px] text-slate-400 line-through">공부했니? 폰 그만.</p>
          <p className="mt-2 text-center text-[10px] font-medium uppercase tracking-wide text-slate-400">자동 처리됨</p>
        </div>
      </IOGroup>
      <IOSectionLabel>오늘의 대화 가이드</IOSectionLabel>
      <IOGroup>
        <div className="px-3 py-3">
          <p className="text-[12px] font-semibold text-[#000]">칭찬 한 가지</p>
          <p className="mt-2 text-[12px] leading-relaxed text-slate-600">
            오늘 ○○ 과목에서 스스로 계획을 지킨 점을 구체적으로 말해 보세요.
          </p>
          <p className="mt-3 text-[11px] text-slate-500">예시 문장이 카톡으로 함께 갑니다.</p>
        </div>
      </IOGroup>
    </PhoneFrame>
  );
}

const SCENES: Record<string, FC<SceneProps>> = {
  "bridge-p1-1": ScenePersonalPlanning,
  "bridge-p1-2": SceneMetaCognition,
  "bridge-p1-3": Scene247QA,
  "bridge-p2-1": SceneLifestyleData,
  "bridge-p2-2": SceneTimelineLock,
  "bridge-p3-1": ScenePremiumReport,
  "bridge-p3-2": SceneParentGuide
};

export function DaechirootBridgeScene({ sceneId, reduceMotion }: { sceneId: string; reduceMotion: boolean }) {
  const Comp = SCENES[sceneId] ?? ScenePersonalPlanning;
  return <Comp reduceMotion={reduceMotion} />;
}
