"use client";

import Link from "next/link";
import { AppHeader } from "@/components/AppHeader";
import { LandingHeroIPadVisual } from "@/components/LandingHeroIPadVisual";
import { SiteFooter } from "@/components/SiteFooter";

export default function StudentsPage() {
  return (
    <div className="min-h-screen bg-[#f8f9fa] text-slate-900">
      <AppHeader>
        <Link href="/" className="transition hover:text-slate-900">
          홈
        </Link>
        <Link href="/parents" className="transition hover:text-slate-900">
          학부모 페이지
        </Link>
        <Link href="/pricing" className="transition hover:text-slate-900">
          패키지·가격
        </Link>
      </AppHeader>

      <main className="mx-auto max-w-6xl px-6 sm:px-8">
        <section className="relative left-1/2 right-1/2 w-screen -translate-x-1/2 border-b border-white/10 bg-[#1B2A4A]">
          <div className="mx-auto min-h-auto max-w-6xl bg-[#1B2A4A] px-6 py-12 md:min-h-screen md:px-6 md:py-14 sm:px-12">
            <div className="grid min-h-0 items-center gap-10 md:min-h-[calc(100vh-7rem)] lg:grid-cols-[55fr_45fr] lg:items-center lg:gap-12">
            <div className="order-1 mt-5 flex h-full w-full flex-col items-center justify-center text-center lg:order-1 lg:mt-0 lg:items-start lg:text-left">
              <p className="inline-block w-fit rounded-md bg-white/10 px-3 py-[5px] text-[13px] font-medium text-white">
                학생 페이지
              </p>
              <h1 className="mt-5 break-keep text-[30px] font-bold leading-[1.25] tracking-[-0.03em] text-white md:text-[44px] md:leading-[1.15] lg:text-[52px]">
                공부폰이
                <br />
                창피하지 않아도 됩니다
              </h1>
              <p className="mt-5 break-keep text-[17px] leading-[1.7] text-white">
                친구들이랑 똑같은 아이폰.
                <br />
                공부할 땐 자동으로 집중, 쉴 땐 제대로 쉽니다.
              </p>
            </div>

            <div className="order-2 hidden h-full w-full items-center justify-center self-center lg:order-2 lg:flex lg:justify-end">
              <div className="w-full max-w-[420px] md:max-w-[620px]">
                <LandingHeroIPadVisual />
              </div>
            </div>
            </div>
          </div>
        </section>

        <section id="student-features" className="bg-white py-24">
          <p className="text-center text-[13px] uppercase tracking-[0.05em] text-[#9CA3AF]">기존 공부폰과 뭐가 다른가요</p>
          <h2 className="mt-3 text-center text-2xl md:text-4xl leading-snug break-keep font-semibold tracking-[-0.02em] text-[#111827]">기존 공부폰과 뭐가 다를까요</h2>
          <p className="mt-3 text-center text-[16px] text-[#6B7280]">막는 것만이 능사가 아닙니다. 일상은 살리고, 집중은 지킵니다.</p>

          <div className="mx-auto mt-12 max-w-[680px] overflow-hidden rounded-2xl border border-[#E5E7EB]">
            <div className="grid grid-cols-[2fr_1fr_1fr] bg-[#F9FAFB] px-5 py-3.5 text-[13px] font-semibold text-[#6B7280]">
              <p>기능 항목</p>
              <p className="text-center">기존 공부폰</p>
              <p className="-my-3.5 -mr-5 bg-[rgba(238,242,255,0.6)] px-5 py-3.5 text-center font-bold text-[#1B2A4A]">대치폰</p>
            </div>

            {[
              { item: "아이폰 사용", old: "✗", new: "✓" },
              { item: "지도·택시·뱅킹", old: "✗", new: "✓" },
              { item: "카카오톡 (허용 시간)", old: "✗", new: "✓" },
              { item: "공부 시간 자동 잠금", old: "✗", new: "✓" },
              { item: "AI 학습 코칭", old: "✗", new: "✓" },
              { item: "학부모 리포트", old: "✗", new: "✓" },
              { item: "우회 불가능 (MDM)", old: "✗", new: "✓" }
            ].map((row, idx, arr) => (
              <div
                key={row.item}
                className={`grid grid-cols-[2fr_1fr_1fr] px-5 py-4 ${idx < arr.length - 1 ? "border-b border-[#F3F4F6]" : ""}`}
              >
                <p className="text-[15px] text-[#111827]">{row.item}</p>
                <p className="text-center text-[16px] text-[#D1D5DB]">{row.old}</p>
                <p className="text-center text-[16px] font-semibold text-[#1B2A4A]">{row.new}</p>
              </div>
            ))}
          </div>

          <p className="mt-5 text-center text-[14px] text-[#6B7280]">기존 공부폰이 불편했던 이유, 대치폰이 하나씩 해결합니다.</p>
        </section>

        <section className="mt-8 bg-[#FAFAFA] py-24">
          <p className="text-center text-[13px] uppercase tracking-[0.05em] text-[#9CA3AF]">학생 후기</p>
          <h2 className="mt-3 text-center text-2xl md:text-4xl leading-snug break-keep font-semibold tracking-[-0.02em] text-[#111827]">
            6개월째 루틴이 무너진 적 없습니다
          </h2>

          <div className="mx-auto mt-14 grid max-w-[1100px] grid-cols-1 gap-4 lg:grid-cols-3">
            <article className="rounded-2xl border border-[#E5E7EB] bg-white px-8 py-7">
              <p className="text-[14px] text-[#F59E0B]">★★★★★</p>
              <p className="mt-3.5 text-[15px] leading-[1.7] text-[#374151]">&ldquo;AI가 계획을 잡아주니까 4개월째 페이스가 무너지지 않았어요. 의지력 문제가 아니라 구조 문제였던 거예요.&rdquo;</p>
              <div className="mt-5 border-t border-[#F3F4F6]" />
              <p className="mt-3.5 text-[13px] text-[#9CA3AF]">강남구 고3 · 4개월 사용 · 베타 참여자</p>
            </article>

            <article className="rounded-2xl border border-[#E5E7EB] bg-white px-8 py-7">
              <p className="text-[14px] text-[#F59E0B]">★★★★★</p>
              <p className="mt-3.5 text-[15px] leading-[1.7] text-[#374151]">&ldquo;플래너 미작성 시 폰이 잠기는 게 처음엔 불편했는데, 지금은 그게 루틴을 지켜줘요. 6개월째 한 번도 무너진 적 없습니다.&rdquo;</p>
              <div className="mt-5 border-t border-[#F3F4F6]" />
              <p className="mt-3.5 text-[13px] text-[#9CA3AF]">대치동 재수생 · 6개월 사용 · 베타 참여자</p>
            </article>

            <article className="rounded-2xl border border-[#E5E7EB] bg-white px-8 py-7">
              <p className="text-[14px] text-[#F59E0B]">★★★★★</p>
              <p className="mt-3.5 text-[15px] leading-[1.7] text-[#374151]">&ldquo;데이터로 대화하니까 갈등이 사라졌어요. 독서실에 몇 시간 있었는지 리포트로 보이니까, 처음으로 아이를 의심하지 않고 믿을 수 있게 됐습니다.&rdquo;</p>
              <div className="mt-5 border-t border-[#F3F4F6]" />
              <p className="mt-3.5 text-[13px] text-[#9CA3AF]">대치동 학부모 · 고3 · 5개월 사용 · 베타 참여자</p>
            </article>
          </div>

          <div className="mt-14 text-center">
            <p className="mb-3 text-[14px] text-[#9CA3AF]">기기 세팅 149,000원 · 월 49,000원 · 위약금 없음</p>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
