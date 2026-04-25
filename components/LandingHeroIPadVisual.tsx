"use client";

/**
 * 히어로 — 사용자 제공 이미지를 그대로 렌더링
 */
export function LandingHeroIPadVisual() {
  return (
    <div className="mx-auto h-full w-full min-w-0 max-w-full select-none">
      <div className="h-full w-full overflow-hidden rounded-2xl bg-[#1B2A4A] md:rounded-[72px]">
        <img
          src="/daechiphon-splash.png"
          alt="대치루트 아이폰 스플래시 화면"
          className="w-full h-full object-cover object-top"
        />
      </div>
    </div>
  );
}
