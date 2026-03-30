"use client";

import { useEffect, useState, type FC } from "react";
import { motion } from "framer-motion";
import { ShoppingBag } from "lucide-react";

type SceneProps = { reduceMotion: boolean };

const loopTransition = (reduce: boolean) =>
  reduce
    ? { duration: 0 }
    : { duration: 2.8, repeat: Infinity, ease: "easeInOut" as const };

function PhoneFrame({ children, label }: { children: React.ReactNode; label: string }) {
  return (
    <div
      className="relative mx-auto flex h-full min-h-[280px] w-full flex-col overflow-hidden rounded-[1.75rem] bg-gradient-to-b from-slate-100 to-slate-50 sm:min-h-[320px] sm:rounded-[2rem]"
      role="img"
      aria-label={label}
    >
      <div className="flex shrink-0 items-center justify-center gap-1 pt-3">
        <span className="h-1 w-10 rounded-full bg-slate-300/90" aria-hidden />
      </div>
      <div className="flex min-h-0 flex-1 flex-col p-3 sm:p-4">{children}</div>
    </div>
  );
}

/** 학부모 설정 웹뷰 — 브라우저 + 토글이 순서대로 켜짐 */
function ScenePolicyWebview({ reduceMotion }: SceneProps) {
  const rows = ["인강 앱", "메모 앱", "카카오톡 (쉬는 시간)"];
  return (
    <PhoneFrame label="웹 브라우저에서 규칙 토글이 켜지는 애니메이션">
      <div className="flex h-full flex-col rounded-xl border border-slate-200 bg-white shadow-sm">
        <div className="flex items-center gap-2 border-b border-slate-100 px-3 py-2">
          <div className="flex gap-1">
            <span className="h-2 w-2 rounded-full bg-red-400" />
            <span className="h-2 w-2 rounded-full bg-amber-400" />
            <span className="h-2 w-2 rounded-full bg-emerald-400" />
          </div>
          <div className="flex-1 rounded-md bg-slate-100 px-2 py-1 text-[9px] text-slate-500">parents.daechiroot.kr</div>
        </div>
        <div className="flex flex-1 flex-col gap-2 p-3">
          <p className="text-[10px] font-semibold text-slate-700">자녀 기기 허용</p>
          {rows.map((label, i) => (
            <motion.div
              key={label}
              initial={reduceMotion ? false : { opacity: 0, x: -12 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: reduceMotion ? 0 : 0.15 + i * 0.35, duration: 0.35 }}
              className="flex items-center justify-between rounded-lg bg-slate-50 px-2 py-2"
            >
              <span className="text-[10px] text-slate-700">{label}</span>
              <motion.span
                className="relative h-5 w-9 rounded-full bg-emerald-500"
                initial={reduceMotion ? false : { backgroundColor: "#cbd5e1" }}
                animate={{ backgroundColor: "#0d9488" }}
                transition={{
                  delay: reduceMotion ? 0 : 0.4 + i * 0.35,
                  duration: 0.35
                }}
              >
                <motion.span
                  className="absolute right-0.5 top-0.5 h-4 w-4 rounded-full bg-white shadow"
                  initial={reduceMotion ? false : { x: 0 }}
                  animate={{ x: reduceMotion ? 0 : -14 }}
                  transition={{ delay: reduceMotion ? 0 : 0.45 + i * 0.35, type: "spring", stiffness: 400 }}
                />
              </motion.span>
            </motion.div>
          ))}
        </div>
      </div>
    </PhoneFrame>
  );
}

const TIME_SLOTS = [
  { t: "09–12", apps: ["인강", "메모"] },
  { t: "12–13", apps: ["카톡"] },
  { t: "13–18", apps: ["인강", "사전"] }
];

/** 시간대별 슬롯이 순서대로 하이라이트 */
function SceneTimeSlots({ reduceMotion }: SceneProps) {
  const [active, setActive] = useState(0);
  useEffect(() => {
    if (reduceMotion) return;
    const id = window.setInterval(() => setActive((a) => (a + 1) % TIME_SLOTS.length), 1600);
    return () => window.clearInterval(id);
  }, [reduceMotion]);
  return (
    <PhoneFrame label="시간대별로 허용 앱 블록이 바뀌는 애니메이션">
      <div className="flex h-full flex-col gap-2">
        <p className="text-center text-[10px] font-semibold text-slate-600">요일별 시간표</p>
        <div className="flex flex-1 flex-col gap-2">
          {TIME_SLOTS.map((s, i) => (
            <motion.div
              key={s.t}
              animate={{
                scale: !reduceMotion && i === active ? 1.02 : 1,
                boxShadow:
                  !reduceMotion && i === active
                    ? "0 0 0 2px rgba(26, 42, 68, 0.35)"
                    : "0 0 0 0px rgba(0,0,0,0)"
              }}
              transition={{ duration: 0.35 }}
              className={`rounded-xl border px-2 py-2 ${i === active ? "border-navy-600 bg-navy-50" : "border-slate-200 bg-white"}`}
            >
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-bold text-navy-900">{s.t}</span>
                <span className="text-[9px] text-slate-500">허용</span>
              </div>
              <div className="mt-1 flex flex-wrap gap-1">
                {s.apps.map((a) => (
                  <span key={a} className="rounded bg-white px-1.5 py-0.5 text-[9px] text-slate-700 shadow-sm">
                    {a}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </PhoneFrame>
  );
}

/** 서버 동기화 — 패킷이 왕복 */
function SceneServerSync({ reduceMotion }: SceneProps) {
  return (
    <PhoneFrame label="학부모 설정에서 서버로, 서버에서 기기로 동기화되는 애니메이션">
      <div className="relative flex h-full flex-col items-center justify-center gap-3">
        <div className="rounded-xl border border-violet-200 bg-violet-50 px-4 py-2 text-[10px] font-semibold text-violet-900">
          학부모 정책
        </div>
        <motion.div
          className="flex h-8 w-8 items-center justify-center rounded-lg bg-navy-800 text-[9px] font-bold text-white"
          animate={reduceMotion ? {} : { scale: [1, 1.06, 1] }}
          transition={loopTransition(reduceMotion)}
        >
          MDM
        </motion.div>
        <div className="relative flex h-20 w-full flex-col items-center">
          <div className="relative h-12 w-0.5 overflow-hidden rounded-full bg-slate-200">
            {!reduceMotion && (
              <motion.div
                className="absolute left-1/2 h-2 w-2 -translate-x-1/2 rounded-full bg-navy-800 shadow"
                animate={{ top: ["0%", "calc(100% - 8px)", "0%"] }}
                transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
              />
            )}
          </div>
          <div className="mt-1 flex flex-col items-center">
            <span className="text-[9px] text-slate-500">자녀 기기</span>
            <div className="mt-1 h-10 w-14 rounded-lg border-2 border-navy-700 bg-white shadow-inner" />
          </div>
        </div>
      </div>
    </PhoneFrame>
  );
}

/** MDM 프로파일 설치 진행 */
function SceneMdmInstall({ reduceMotion }: SceneProps) {
  return (
    <PhoneFrame label="MDM 프로파일이 기기에 설치되는 진행 애니메이션">
      <div className="flex h-full flex-col items-center justify-center gap-4">
        <motion.div
          className="relative h-20 w-20 rounded-full border-4 border-slate-200"
          animate={reduceMotion ? {} : { rotate: 360 }}
          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
        >
          <motion.div
            className="absolute inset-0 rounded-full border-4 border-transparent border-t-navy-700"
            style={{ borderRightColor: "transparent" }}
          />
        </motion.div>
        <motion.p
          className="text-center text-[11px] font-semibold text-navy-900"
          animate={reduceMotion ? {} : { opacity: [0.6, 1, 0.6] }}
          transition={loopTransition(reduceMotion)}
        >
          프로파일 구성 중…
        </motion.p>
        <motion.p
          className="text-[9px] font-medium text-emerald-700"
          animate={reduceMotion ? {} : { opacity: [0.4, 1, 0.4] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          ✓ 관리 등록 완료
        </motion.p>
      </div>
    </PhoneFrame>
  );
}

/** 계획표 줄이 채워짐 */
function SceneTimetableWrite({ reduceMotion }: SceneProps) {
  const lines = ["국어 인강 2h", "수학 문제집", "영어 단어"];
  return (
    <PhoneFrame label="계획표 항목이 하나씩 작성되는 애니메이션">
      <div className="flex h-full flex-col rounded-xl border border-slate-200 bg-white p-3">
        <p className="mb-2 text-[10px] font-bold text-slate-800">오늘 계획</p>
        <div className="flex flex-1 flex-col gap-2">
          {lines.map((line, i) => (
            <motion.div
              key={line}
              className="h-8 overflow-hidden rounded border border-slate-100 bg-slate-50"
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{ delay: reduceMotion ? 0 : 0.4 + i * 0.5, duration: 0.6, ease: "easeOut" }}
            >
              <motion.span
                className="block px-2 py-1.5 text-[10px] text-slate-700"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: reduceMotion ? 0 : 0.7 + i * 0.5 }}
              >
                {line}
              </motion.span>
            </motion.div>
          ))}
        </div>
        <motion.div
          className="mt-2 text-center text-[9px] font-medium text-navy-700"
          animate={reduceMotion ? {} : { opacity: [0.5, 1, 0.5] }}
          transition={loopTransition(reduceMotion)}
        >
          서버로 전송됨
        </motion.div>
      </div>
    </PhoneFrame>
  );
}

/** 잠금 + 앱 차단 */
function SceneLocked({ reduceMotion }: SceneProps) {
  const apps = ["A", "B", "C", "D"];
  return (
    <PhoneFrame label="잠금 시 앱이 비활성화되는 애니메이션">
      <div className="relative flex h-full flex-col items-center justify-center gap-3">
        <div className="grid grid-cols-2 gap-2">
          {apps.map((_, i) => (
            <motion.div
              key={i}
              className="flex h-12 w-14 items-center justify-center rounded-lg bg-slate-200 text-[10px] text-slate-500"
              animate={reduceMotion ? {} : { opacity: [1, 0.28, 0.28] }}
              transition={{ delay: i * 0.08, duration: 1.2, repeat: reduceMotion ? 0 : Infinity, repeatDelay: 1.5 }}
            />
          ))}
        </div>
        <motion.div
          className="absolute flex h-16 w-16 items-center justify-center rounded-full bg-rose-500/95 text-white shadow-lg"
          animate={reduceMotion ? {} : { scale: [0.85, 1, 0.85] }}
          transition={loopTransition(reduceMotion)}
        >
          <svg className="h-8 w-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
            <rect x="5" y="9" width="14" height="11" rx="2" />
            <path d="M9 9V7a3 3 0 016 0v2" />
          </svg>
        </motion.div>
      </div>
    </PhoneFrame>
  );
}

/** 해제 */
function SceneUnlocked({ reduceMotion }: SceneProps) {
  return (
    <PhoneFrame label="조건 충족 시 잠금이 풀리는 애니메이션">
      <div className="flex h-full flex-col items-center justify-center gap-4">
        <motion.div
          animate={reduceMotion ? {} : { scale: [1, 1.08, 1] }}
          transition={{ duration: 1.2, repeat: reduceMotion ? 0 : Infinity, repeatDelay: 1.8 }}
          className="flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100 text-emerald-600"
        >
          <svg className="h-9 w-9" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <path d="M20 6L9 17l-5-5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </motion.div>
        <p className="text-center text-[11px] font-semibold text-emerald-800">잠금 해제 · 정책 적용 대기</p>
      </div>
    </PhoneFrame>
  );
}

/** 현재 시간대 조회 */
function ScenePolicyLookup({ reduceMotion }: SceneProps) {
  return (
    <PhoneFrame label="현재 시각에 맞는 규칙만 골라 적용하는 애니메이션">
      <div className="flex h-full flex-col items-center justify-center gap-3">
        <motion.div
          className="relative h-24 w-24 rounded-full border-4 border-slate-200"
          animate={reduceMotion ? {} : { rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        >
          <motion.div
            className="absolute left-1/2 top-1/2 h-[38%] w-0.5 origin-bottom bg-navy-800"
            style={{ translateX: "-50%", translateY: "-100%" }}
            animate={reduceMotion ? {} : { rotate: 360 }}
            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-[11px] font-bold text-navy-900">NOW</span>
          </div>
        </motion.div>
        <motion.div
          className="rounded-lg border border-navy-200 bg-navy-50 px-3 py-2 text-[10px] font-medium text-navy-900"
          animate={reduceMotion ? {} : { opacity: [0.7, 1, 0.7] }}
          transition={loopTransition(reduceMotion)}
        >
          이 시간대 규칙 적용 중
        </motion.div>
      </div>
    </PhoneFrame>
  );
}

/** 허용 앱만 */
function SceneAllowedApps({ reduceMotion }: SceneProps) {
  const states = [true, true, false, false, true, false];
  return (
    <PhoneFrame label="허용 목록에 있는 앱만 강조되는 애니메이션">
      <div className="grid grid-cols-3 gap-2 p-1">
        {states.map((ok, i) => (
          <motion.div
            key={i}
            className={`flex aspect-square items-center justify-center rounded-xl border-2 text-[9px] font-semibold ${
              ok ? "border-emerald-500 bg-emerald-50 text-emerald-900" : "border-slate-200 bg-slate-100 text-slate-400 line-through"
            }`}
            animate={
              reduceMotion
                ? {}
                : {
                    scale: ok ? [1, 1.05, 1] : 1,
                    opacity: ok ? [0.85, 1, 0.85] : 0.45
                  }
            }
            transition={{ delay: i * 0.1, duration: 1.8, repeat: Infinity, repeatDelay: 0.8 }}
          >
            앱
          </motion.div>
        ))}
      </div>
    </PhoneFrame>
  );
}

/** AI 리포트 + 말풍선 */
function SceneAiReport({ reduceMotion }: SceneProps) {
  return (
    <PhoneFrame label="데이터가 차트로 쌓이고 카카오 말풍선으로 전달되는 애니메이션">
      <div className="flex h-full flex-col gap-3">
        <div className="flex h-20 items-end justify-between gap-1 rounded-lg bg-white px-2 pb-1 pt-2 shadow-inner">
          {[40, 65, 45, 80, 55, 90].map((h, i) => (
            <motion.div
              key={i}
              className="w-full rounded-t bg-gradient-to-t from-navy-700 to-navy-500"
              initial={{ height: 0 }}
              animate={{ height: `${h}%` }}
              transition={{ delay: reduceMotion ? 0 : i * 0.12, duration: 0.5, repeat: reduceMotion ? 0 : Infinity, repeatDelay: 3 }}
            />
          ))}
        </div>
        <motion.div
          className="ml-auto max-w-[90%] rounded-2xl rounded-tr-sm bg-[#FEE500] px-3 py-2 shadow-sm"
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ repeat: reduceMotion ? 0 : Infinity, repeatDelay: 2.2, duration: 0.4 }}
        >
          <p className="text-[9px] font-medium text-slate-900">오늘 집중 4.2h · 인강 68%</p>
        </motion.div>
      </div>
    </PhoneFrame>
  );
}

/** 마켓 차단 */
function SceneStoreBlock({ reduceMotion }: SceneProps) {
  return (
    <PhoneFrame label="앱 마켓은 막고 교육 앱만 통과하는 애니메이션">
      <div className="relative flex h-full flex-col items-center justify-center gap-4">
        <div className="relative">
          <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-slate-200 text-slate-600">
            <ShoppingBag className="h-8 w-8" strokeWidth={1.5} aria-hidden />
          </div>
          <motion.div
            className="absolute inset-0 flex items-center justify-center"
            animate={reduceMotion ? {} : { rotate: [0, 5, -5, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <div className="h-20 w-1 rotate-45 rounded bg-red-500 shadow-sm" />
          </motion.div>
        </div>
        <div className="flex items-center gap-2 rounded-full border border-emerald-300 bg-emerald-50 px-3 py-1.5 text-[10px] font-semibold text-emerald-900">
          <motion.span
            animate={reduceMotion ? {} : { scale: [1, 1.15, 1] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            ✓
          </motion.span>
          교육 인증 앱만 설치
        </div>
      </div>
    </PhoneFrame>
  );
}

const SCENES: Record<string, FC<SceneProps>> = {
  "policy-1": ScenePolicyWebview,
  "policy-2": SceneTimeSlots,
  "policy-3": SceneServerSync,
  "dev-1": SceneMdmInstall,
  "dev-2": SceneTimetableWrite,
  "dev-3": SceneLocked,
  "dev-4": SceneUnlocked,
  "ap-1": ScenePolicyLookup,
  "ap-2": SceneAllowedApps,
  "ap-3": SceneAiReport,
  "ap-4": SceneStoreBlock
};

export function FeatureFlowScene({ sceneId, reduceMotion }: { sceneId: string; reduceMotion: boolean }) {
  const Comp = SCENES[sceneId] ?? ScenePolicyWebview;
  return <Comp reduceMotion={reduceMotion} />;
}
