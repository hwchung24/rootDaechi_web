"use client";

import { IPadMockup } from "react-device-mockup";
import {
  Activity,
  BarChart3,
  Battery,
  Brain,
  Clock,
  Coffee,
  FileBarChart,
  HeartHandshake,
  Lock,
  MessageCircle,
  Moon,
  Sparkles,
  StickyNote,
  Sun,
  Wifi
} from "lucide-react";

const font = "font-[system-ui,-apple-system,BlinkMacSystemFont,'SF_Pro_Text',sans-serif]";

/**
 * 히어로 — react-device-mockup iPad Pro 스타일 베젤 + iPadOS 느낌 내부 UI
 * 「대치루트 소개」브릿지 7개 테마 요약
 */
export function LandingHeroIPadVisual() {
  return (
    <div className={`relative mx-auto w-full max-w-[min(100%,640px)] select-none ${font}`}>
      <div
        className="pointer-events-none absolute inset-[-12%] rounded-[40%] bg-gradient-to-br from-navy-200/35 via-white/0 to-slate-200/25 blur-3xl"
        aria-hidden
      />
      <div className="relative z-10 mx-auto flex w-full justify-center overflow-visible px-1">
        <div className="origin-top scale-[0.78] drop-shadow-[0_36px_72px_-16px_rgba(15,23,42,0.38)] sm:scale-[0.88] md:scale-100">
          <IPadMockup
            screenWidth={460}
            screenType="modern"
            isLandscape
            frameColor="#4a4a4d"
            statusbarColor="#f2f2f7"
            hideStatusBar
            transparentNavBar
            hideNavBar={false}
          >
            <div className="flex h-full min-h-0 w-full flex-col bg-[#f2f2f7] antialiased">
              <IPadStatusBar />
              <div className="flex min-h-0 flex-1 gap-0 overflow-hidden">
                <aside className="flex w-[52px] shrink-0 flex-col items-center gap-2 border-r border-black/[0.06] bg-white/85 py-3 backdrop-blur-md sm:w-[58px]">
                  <SidebarPill active icon={BarChart3} label="학습" />
                  <SidebarPill icon={Activity} label="생활" />
                  <SidebarPill icon={HeartHandshake} label="가족" />
                </aside>
                <div className="flex min-h-0 flex-1 flex-col overflow-hidden p-2 sm:p-2.5">
                  <div className="mb-2 shrink-0 px-0.5">
                    <h2 className="text-[17px] font-bold leading-tight tracking-tight text-[#000] sm:text-[19px]">대치루트</h2>
                    <p className="mt-0.5 text-[11px] leading-snug text-slate-500 sm:text-[12px]">학습 · 생활 · 리포트 한 화면에</p>
                  </div>
                  <div className="grid min-h-0 flex-1 grid-cols-2 grid-rows-2 gap-2 sm:gap-2.5">
                    <PanelStudy />
                    <PanelAI />
                    <PanelLife />
                    <PanelParent />
                  </div>
                </div>
              </div>
            </div>
          </IPadMockup>
        </div>
      </div>
      <p className="sr-only">
        대치루트 소개 요약 대시보드를 담은 아이패드 목업입니다. 학습·AI·생활·학부모 영역이 표시됩니다.
      </p>
    </div>
  );
}

function IPadStatusBar() {
  return (
    <div className="flex h-[22px] shrink-0 items-center justify-between bg-white/80 px-3 pt-1 backdrop-blur-xl sm:h-[24px]">
      <span className="text-[10px] font-semibold tabular-nums text-[#000] sm:text-[11px]">9:41</span>
      <div className="flex items-center gap-1.5 pr-0.5 text-[#000]">
        <Wifi className="h-3 w-3 sm:h-3.5 sm:w-3.5" strokeWidth={2} aria-hidden />
        <Battery className="h-3 w-3 sm:h-3.5 sm:w-3.5" strokeWidth={2} aria-hidden />
      </div>
    </div>
  );
}

function SidebarPill({
  icon: Icon,
  label,
  active
}: {
  icon: typeof BarChart3;
  label: string;
  active?: boolean;
}) {
  return (
    <button
      type="button"
      className={`flex w-10 flex-col items-center gap-0.5 rounded-xl py-1.5 transition-colors sm:w-11 ${
        active ? "bg-[#007aff]/12 text-[#007aff]" : "text-slate-500 hover:bg-black/[0.04]"
      }`}
      aria-current={active ? "true" : undefined}
    >
      <Icon className="h-[18px] w-[18px]" strokeWidth={active ? 2.25 : 1.75} aria-hidden />
      <span className="max-w-full truncate px-0.5 text-[7px] font-semibold sm:text-[8px]">{label}</span>
    </button>
  );
}

function PanelStudy() {
  return (
    <section className="relative flex flex-col overflow-hidden rounded-[14px] bg-white p-2.5 shadow-[0_1px_3px_rgba(0,0,0,0.06)] ring-1 ring-black/[0.05] sm:p-3">
      <CornerTag label="학습 관리" />
      <h3 className="mb-2 text-[11px] font-semibold uppercase tracking-wide text-slate-500 sm:text-[12px]">취약 진단</h3>
      <div className="mb-2 flex h-11 items-end justify-between gap-1 px-0.5 sm:h-12">
        {[40, 65, 35, 78, 52].map((h, i) => (
          <div
            key={i}
            className="w-full max-w-[18%] rounded-t-[3px] bg-gradient-to-t from-[#0f172a] to-[#334e68]"
            style={{ height: `${h}%` }}
          />
        ))}
      </div>
      <div className="mt-auto space-y-0 border-t border-slate-200/90 pt-2">
        <RowLine icon={StickyNote} title="플래너" detail="미제출 시 제한" right={<Lock className="h-3.5 w-3.5 text-[#ff3b30]" strokeWidth={2} />} />
        <RowLine icon={Sparkles} title="개인화" detail="맞춤 계획" iconClassName="text-violet-600" />
      </div>
    </section>
  );
}

function PanelAI() {
  return (
    <section className="relative flex flex-col overflow-hidden rounded-[14px] bg-white p-2.5 shadow-[0_1px_3px_rgba(0,0,0,0.06)] ring-1 ring-black/[0.05] sm:p-3">
      <CornerTag label="SNU-AI" tone="violet" />
      <h3 className="mb-1.5 flex items-center gap-1.5 text-[11px] font-semibold text-[#000] sm:text-[12px]">
        <Brain className="h-4 w-4 text-violet-600" strokeWidth={2} aria-hidden />
        튜터링
      </h3>
      <div className="mb-2 flex h-8 items-end justify-center gap-px rounded-[10px] bg-slate-100 px-1.5 sm:h-9">
        {Array.from({ length: 16 }).map((_, i) => (
          <div key={i} className="w-0.5 rounded-full bg-[#007aff]" style={{ height: `${28 + (i % 5) * 10}%` }} />
        ))}
      </div>
      <div className="mt-auto space-y-1.5">
        <div className="ml-auto max-w-[90%] rounded-[18px] rounded-tr-[4px] bg-[#007aff] px-2 py-1.5 text-[10px] leading-snug text-white shadow-sm sm:text-[11px]">
          적분 풀이 맞나요?
        </div>
        <div className="mr-auto max-w-[92%] rounded-[18px] rounded-tl-[4px] bg-slate-100 px-2 py-1.5 text-[10px] leading-snug text-[#000] sm:text-[11px]">
          <span className="flex items-center gap-1 font-semibold text-[#1a2a44]">
            <MessageCircle className="h-3.5 w-3.5" strokeWidth={2} aria-hidden />
            24/7 해설
          </span>
        </div>
      </div>
    </section>
  );
}

function PanelLife() {
  return (
    <section className="relative flex flex-col overflow-hidden rounded-[14px] bg-white p-2.5 shadow-[0_1px_3px_rgba(0,0,0,0.06)] ring-1 ring-black/[0.05] sm:p-3">
      <CornerTag label="생활" tone="teal" />
      <h3 className="mb-2 text-[11px] font-semibold uppercase tracking-wide text-slate-500 sm:text-[12px]">루틴</h3>
      {[
        { Icon: Moon, w: 72, l: "수면" },
        { Icon: Sun, w: 58, l: "순공" },
        { Icon: Coffee, w: 36, l: "휴식" }
      ].map(({ Icon, w, l }) => (
        <div key={l} className="mb-2 last:mb-0">
          <div className="mb-1 flex items-center justify-between text-[10px] font-medium text-slate-700 sm:text-[11px]">
            <span className="flex items-center gap-1">
              <Icon className="h-3.5 w-3.5 text-slate-400" strokeWidth={2} aria-hidden />
              {l}
            </span>
          </div>
          <div className="h-[5px] w-full overflow-hidden rounded-full bg-slate-200">
            <div className="h-full rounded-full bg-gradient-to-r from-teal-500 to-emerald-400" style={{ width: `${w}%` }} />
          </div>
        </div>
      ))}
      <div className="mt-auto flex items-center gap-1.5 border-t border-slate-200/90 pt-2 text-[10px] text-slate-600 sm:text-[11px]">
        <Clock className="h-3.5 w-3.5 shrink-0 text-slate-400" strokeWidth={2} aria-hidden />
        <span className="truncate">타임라인 잠금</span>
        <Lock className="ml-auto h-3.5 w-3.5 text-slate-800" strokeWidth={2} aria-hidden />
      </div>
    </section>
  );
}

function PanelParent() {
  return (
    <section className="relative flex flex-col overflow-hidden rounded-[14px] bg-white p-2.5 shadow-[0_1px_3px_rgba(0,0,0,0.06)] ring-1 ring-black/[0.05] sm:p-3">
      <CornerTag label="학부모" tone="amber" />
      <h3 className="mb-2 flex items-center gap-1.5 text-[11px] font-semibold text-[#000] sm:text-[12px]">
        <FileBarChart className="h-4 w-4 text-[#007aff]" strokeWidth={2} aria-hidden />
        리포트
      </h3>
      <div className="mb-2 flex rounded-[9px] bg-slate-200/90 p-[3px]">
        {["일", "주", "월"].map((t, i) => (
          <span
            key={t}
            className={`flex-1 rounded-[7px] py-1 text-center text-[10px] font-semibold sm:text-[11px] ${
              i === 1 ? "bg-white text-[#000] shadow-sm" : "text-slate-600"
            }`}
          >
            {t}
          </span>
        ))}
      </div>
      <div className="mb-2 flex h-9 items-end gap-0.5 sm:h-10">
        {[35, 55, 42, 68, 50, 72, 45].map((h, i) => (
          <div key={i} className="w-full rounded-t-[2px] bg-[#007aff]" style={{ height: `${h}%` }} />
        ))}
      </div>
      <div className="mt-auto flex items-start gap-2 rounded-[12px] bg-amber-50 p-2 ring-1 ring-amber-200/70">
        <HeartHandshake className="mt-0.5 h-4 w-4 shrink-0 text-amber-700" strokeWidth={2} aria-hidden />
        <div>
          <p className="text-[10px] font-semibold text-amber-950 sm:text-[11px]">칭찬 가이드</p>
          <p className="mt-0.5 text-[9px] leading-snug text-amber-900/90 sm:text-[10px]">격려 문장 · 잔소리 대신</p>
        </div>
      </div>
    </section>
  );
}

function RowLine({
  icon: Icon,
  title,
  detail,
  right,
  iconClassName = "text-amber-600"
}: {
  icon: typeof StickyNote;
  title: string;
  detail: string;
  right?: React.ReactNode;
  iconClassName?: string;
}) {
  return (
    <div className="flex items-center gap-2 py-1.5 first:pt-0">
      <Icon className={`h-4 w-4 shrink-0 ${iconClassName}`} strokeWidth={2} aria-hidden />
      <div className="min-w-0 flex-1">
        <p className="text-[10px] font-semibold text-[#000] sm:text-[11px]">{title}</p>
        <p className="text-[9px] text-slate-500 sm:text-[10px]">{detail}</p>
      </div>
      {right}
    </div>
  );
}

function CornerTag({
  label,
  tone = "slate"
}: {
  label: string;
  tone?: "slate" | "violet" | "teal" | "amber";
}) {
  const map = {
    slate: "bg-slate-500/10 text-slate-700",
    violet: "bg-violet-500/12 text-violet-800",
    teal: "bg-teal-500/12 text-teal-800",
    amber: "bg-amber-500/14 text-amber-950"
  };
  return (
    <span
      className={`absolute right-2.5 top-2.5 rounded-lg px-2 py-0.5 text-[8px] font-bold uppercase tracking-wide sm:right-3 sm:top-3 sm:text-[9px] ${map[tone]}`}
    >
      {label}
    </span>
  );
}
