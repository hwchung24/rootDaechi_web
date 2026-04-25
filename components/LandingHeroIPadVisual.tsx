"use client";

/**
 * 히어로 — 사용자 제공 이미지를 그대로 렌더링
 */
export function LandingHeroIPadVisual() {
  return (
    <div className="mx-auto h-full w-full min-w-0 max-w-full select-none">
      <div className="mx-auto h-[240px] max-h-[240px] w-full max-w-none overflow-hidden rounded-[16px] bg-[#1B2A4A] md:h-auto md:max-h-none md:max-w-[420px] md:rounded-[72px]">
        <img
          src="/daechiphon-splash.png"
          alt="대치루트 아이폰 스플래시 화면"
          className="block h-full max-h-[240px] w-full object-cover object-[center_top] md:h-auto md:max-h-none md:object-contain"
        />
      </div>
    </div>
  );
}
