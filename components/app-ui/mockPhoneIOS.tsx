import type { ReactNode } from "react";

/** 아이폰 미니 스크린용 — SF 느낌의 시스템 폰트 스택 */
const font = "font-[system-ui,-apple-system,BlinkMacSystemFont,'Segoe_UI',sans-serif]";

export function IOScreenRoot({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <div className={`flex h-full min-h-0 w-full flex-col bg-[#f2f2f7] ${font} antialiased ${className}`}>{children}</div>
  );
}

export function IONavBar({
  title,
  large,
  trailing
}: {
  title: string;
  large?: boolean;
  trailing?: ReactNode;
}) {
  if (large) {
    return (
      <div className="px-4 pb-2 pt-2">
        <h1 className="text-[20px] font-bold leading-[1.15] tracking-tight text-[#000]">{title}</h1>
      </div>
    );
  }
  return (
    <div className="relative flex h-11 shrink-0 items-center justify-center border-b border-black/[0.06] bg-[#f7f7f8]/95 px-3 backdrop-blur-sm">
      <span className="max-w-[85%] truncate text-center text-[15px] font-semibold text-[#000]">{title}</span>
      {trailing && <div className="absolute right-3 top-1/2 -translate-y-1/2">{trailing}</div>}
    </div>
  );
}

export function IOSectionLabel({ children }: { children: ReactNode }) {
  return (
    <div className="px-4 pb-1 pt-3 text-[11px] font-semibold uppercase tracking-wide text-slate-500">{children}</div>
  );
}

export function IOGroup({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <div
      className={`overflow-hidden rounded-[12px] bg-white shadow-sm ring-1 ring-black/[0.06] ${className}`}
    >
      {children}
    </div>
  );
}

export function IOSeparator() {
  return <div className="h-px bg-black/[0.08]" role="separator" />;
}

export function IOListRow({
  label,
  sublabel,
  right,
  className = ""
}: {
  label: string;
  sublabel?: string;
  right?: ReactNode;
  className?: string;
}) {
  return (
    <div className={`flex min-h-[44px] items-center justify-between gap-2 px-3 py-2 ${className}`}>
      <div className="min-w-0 flex-1">
        <p className="text-[13px] font-normal text-[#000]">{label}</p>
        {sublabel && <p className="mt-0.5 text-[11px] leading-snug text-slate-500">{sublabel}</p>}
      </div>
      {right && <div className="shrink-0">{right}</div>}
    </div>
  );
}

/** iOS 스타일 스위치 (시각만) */
export function IOSToggleVisual({ on }: { on: boolean }) {
  return (
    <span
      className={`relative inline-flex h-[31px] w-[51px] shrink-0 items-center rounded-full transition-colors duration-200 ${
        on ? "bg-[#34c759]" : "bg-slate-300"
      }`}
      aria-hidden
    >
      <span
        className={`absolute top-[2px] h-[27px] w-[27px] rounded-full bg-white shadow-md transition-transform duration-200 ${
          on ? "left-[22px]" : "left-[2px]"
        }`}
      />
    </span>
  );
}

export function IOSegmented({
  options,
  value,
  onChange,
  compact
}: {
  options: string[];
  value: number;
  onChange?: (i: number) => void;
  compact?: boolean;
}) {
  return (
    <div
      className={`flex rounded-[9px] bg-slate-200/90 p-0.5 ${compact ? "text-[11px]" : "text-[12px]"}`}
      role="tablist"
    >
      {options.map((opt, i) => {
        const sel = i === value;
        return (
          <button
            key={opt}
            type="button"
            role="tab"
            aria-selected={sel}
            className={`relative flex-1 rounded-[7px] py-1.5 font-medium transition-colors ${
              sel ? "bg-white text-[#000] shadow-sm" : "text-slate-600"
            }`}
            onClick={() => onChange?.(i)}
          >
            {opt}
          </button>
        );
      })}
    </div>
  );
}

export function IOChatBubble({
  align,
  children,
  meta
}: {
  align: "left" | "right";
  children: ReactNode;
  meta?: string;
}) {
  const isRight = align === "right";
  return (
    <div className={`flex flex-col gap-0.5 ${isRight ? "items-end" : "items-start"}`}>
      {meta && <span className="px-1 text-[10px] text-slate-400">{meta}</span>}
      <div
        className={`max-w-[88%] rounded-[18px] px-3 py-2 text-[12px] leading-snug ${
          isRight
            ? "rounded-br-[4px] bg-[#007aff] text-white"
            : "rounded-bl-[4px] bg-white text-[#000] shadow-sm ring-1 ring-black/[0.06]"
        }`}
      >
        {children}
      </div>
    </div>
  );
}

export function IOHomeIndicator() {
  return (
    <div className="flex shrink-0 justify-center pb-1 pt-1">
      <div className="h-1 w-[33%] max-w-[96px] rounded-full bg-black/20" aria-hidden />
    </div>
  );
}
