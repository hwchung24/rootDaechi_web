"use client";

/**
 * 히어로 — 사용자 제공 이미지를 그대로 렌더링
 */
export function LandingHeroIPadVisual() {
  return (
    <div className="mx-auto w-full min-w-0 max-w-full select-none">
      <div className="mx-auto w-full max-w-[420px] overflow-hidden rounded-[72px] bg-[#1B2A4A]">
        <img
          src="/daechiphon-splash.png"
          alt="대치루트 아이폰 스플래시 화면"
          className="block h-auto w-full object-contain"
        />
      </div>
    </div>
  );
}
