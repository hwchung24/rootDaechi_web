"use client";

import { IPhoneMockup } from "react-device-mockup";
import type { ReactNode } from "react";

/** 노치형 레이아웃 · 19.5:9 — 아이폰 12 계열과 동일한 스타일 (react-device-mockup) */
const SCREEN_WIDTH = 248;

type Props = {
  children: ReactNode;
  className?: string;
};

export function IPhone12MockupShell({ children, className }: Props) {
  return (
    <div className={`drop-shadow-[0_20px_48px_rgba(15,23,42,0.22)] ${className ?? ""}`}>
      <IPhoneMockup
        screenWidth={SCREEN_WIDTH}
        screenType="notch"
        frameColor="#1c1c1e"
        statusbarColor="#f2f2f7"
        hideStatusBar={false}
        hideNavBar={false}
      >
        <div className="flex h-full min-h-0 w-full flex-col overflow-hidden bg-slate-100">{children}</div>
      </IPhoneMockup>
    </div>
  );
}
