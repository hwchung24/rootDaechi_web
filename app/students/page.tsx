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
        <section className="relative left-1/2 right-1/2 w-screen -translate-x-1/2 border-b border-white/10 bg-[#1B2A4A] py-10 md:py-12 lg:min-h-screen lg:pb-12 lg:pt-20">
          <div className="mx-auto max-w-6xl px-6 sm:px-8">
            <div className="grid items-center gap-8 lg:min-h-[calc(100vh-80px)] lg:grid-cols-[55fr_45fr] lg:gap-10">
            <div className="order-2 flex flex-col justify-center lg:order-1">
              <p className="inline-block w-fit rounded-md bg-white/10 px-3 py-[5px] text-[13px] font-medium text-white">
                학생 페이지
              </p>
              <h1 className="mt-5 text-[32px] font-bold leading-[1.15] tracking-[-0.03em] text-white md:text-[36px] lg:text-[48px]">
                투박한 공부폰은 이제 그만,
                <br />
                아이폰 그대로 집중까지
              </h1>
              <p className="mt-5 text-[15px] leading-[1.7] text-white md:text-[17px]">
                친구들이랑 똑같은 아이폰.
                <br />
                공부할 땐 자동으로 집중 모드, 쉴 땐 제대로 쉽니다.
              </p>
              <div className="mt-8 flex flex-col gap-3 md:flex-row md:items-center md:gap-5">
                <Link
                  href="/pricing"
                  className="inline-flex w-full items-center justify-center rounded-[10px] bg-white px-7 py-3.5 text-[15px] font-semibold text-[#1B2A4A] md:w-auto"
                >
                  패키지 보기 →
                </Link>
                <Link href="#student-features" className="mt-3 block text-center text-[15px] font-medium text-white/80 hover:underline md:mt-0 md:inline-flex md:text-left">
                  기능 살펴보기
                </Link>
              </div>
            </div>

            <div className="order-1 hidden items-center justify-center self-center lg:order-2 lg:flex lg:justify-end">
              <div className="w-full max-w-[420px] md:max-w-[500px]">
                <LandingHeroIPadVisual />
              </div>
            </div>
            </div>
          </div>
        </section>

        <section id="student-features" className="bg-white py-24">
          <p className="text-center text-[13px] uppercase tracking-[0.05em] text-[#9CA3AF]">기존 공부폰과 뭐가 다른가요</p>
          <h2 className="mt-3 text-center text-2xl md:text-4xl leading-snug break-keep font-semibold tracking-[-0.02em] text-[#111827]">들고 다니기 싫지 않은 유일한 공부폰</h2>
          <p className="mt-3 text-center text-[16px] text-[#6B7280]">막는 것만이 능사가 아닙니다. 일상은 살리고, 집중은 지킵니다.</p>

          <div className="mx-auto mt-12 max-w-[680px] overflow-hidden rounded-2xl border border-[#E5E7EB]">
            <div className="grid grid-cols-[2fr_1fr_1fr] bg-[#F9FAFB] px-5 py-3.5 text-[13px] font-semibold text-[#6B7280]">
              <p>기능 항목</p>
              <p className="text-center">기존 공부폰</p>
              <p className="-my-3.5 -mr-5 bg-[rgba(238,242,255,0.6)] px-5 py-3.5 text-center font-bold text-[#1B2A4A]">대치폰</p>
            </div>

            {[
              { item: "아이폰 사용", old: "X", new: "O" },
              { item: "택시·지도·뱅킹", old: "X", new: "O" },
              { item: "카카오택시 호출", old: "X", new: "O" },
              { item: "공부 시간 자동 잠금", old: "O", new: "O" },
              { item: "AI 학습 코칭", old: "X", new: "O" },
              { item: "학부모 리포트", old: "X", new: "O" }
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

          <p className="mt-5 text-center text-[14px] text-[#6B7280]">기존 공부폰이 불편했던 이유, 대치폰이 해결합니다.</p>
        </section>

        <section className="bg-[#FAFAFA] py-24">
          <p className="text-center text-[13px] uppercase tracking-[0.05em] text-[#9CA3AF]">하루 3가지 모드</p>
          <h2 className="mt-3 text-center text-2xl md:text-4xl leading-snug break-keep font-semibold tracking-[-0.02em] text-[#111827]">
            공부할 땐 공부만, 쉴 땐 제대로
          </h2>
          <div className="mx-auto mt-14 grid max-w-[1000px] grid-cols-1 gap-4 lg:grid-cols-3">
            <article className="rounded-2xl border border-[#E5E7EB] bg-white px-8 py-8">
              <p className="inline-block rounded-md bg-[#EEF2FF] px-2.5 py-1 text-[12px] font-semibold text-[#1B2A4A]">집중 모드</p>
              <p className="mt-5 text-[20px] font-semibold text-[#111827]">공부 시간엔 공부만 보입니다</p>
              <p className="mt-2.5 whitespace-pre-line text-[15px] leading-[1.7] text-[#6B7280]">
                유튜브, SNS, 게임은 전부 사라집니다.
                {"\n"}인강 앱과 메모만 켜져 있습니다.
                {"\n"}의지 없이도 집중이 됩니다.
              </p>
              <p className="mt-5 border-t border-[#F3F4F6] pt-4 text-[13px] leading-[1.8] text-[#9CA3AF]">
                허용: 인강 앱 · 메모 · 계산기 · 시계
              </p>
            </article>

            <article className="rounded-2xl border border-[#E5E7EB] bg-white px-8 py-8">
              <p className="inline-block rounded-md bg-[#F0FDF4] px-2.5 py-1 text-[12px] font-semibold text-[#15803D]">유틸리티 모드</p>
              <p className="mt-5 text-[20px] font-semibold text-[#111827]">이동할 땐 필요한 건 다 됩니다</p>
              <p className="mt-2.5 whitespace-pre-line text-[15px] leading-[1.7] text-[#6B7280]">
                카카오택시, 지도, 뱅킹.
                {"\n"}공부폰이라고 불편할 필요 없습니다.
                {"\n"}일상 기능은 그대로입니다.
              </p>
              <p className="mt-5 border-t border-[#F3F4F6] pt-4 text-[13px] leading-[1.8] text-[#9CA3AF]">
                허용: 카카오택시 · 지도 · 뱅킹 · 카카오톡
              </p>
            </article>

            <article className="rounded-2xl border border-[#E5E7EB] bg-white px-8 py-8">
              <p className="inline-block rounded-md bg-[#FFF7ED] px-2.5 py-1 text-[12px] font-semibold text-[#C2410C]">자유시간 모드</p>
              <p className="mt-5 text-[20px] font-semibold text-[#111827]">자유 시간엔 눈치 없이 마음껏</p>
              <p className="mt-2.5 whitespace-pre-line text-[15px] leading-[1.7] text-[#6B7280]">
                부모님이 직접 설정한 자유 시간.
                {"\n"}이 시간만큼은 아무 제한 없이 씁니다.
                {"\n"}통제가 아니라 선물입니다.
              </p>
              <p className="mt-5 border-t border-[#F3F4F6] pt-4 text-[13px] leading-[1.8] text-[#9CA3AF]">허용: 모든 앱 자유 사용</p>
            </article>
          </div>
        </section>

        <section className="mt-8 bg-[#1B2A4A] py-24">
          <div className="mx-auto max-w-[680px] px-6 text-center sm:px-8">
            <p className="text-[13px] uppercase tracking-[0.05em] text-white/50">만든 사람 이야기</p>

            <div className="mt-8">
              <span className="mb-[-8px] block text-[48px] leading-none text-white/25">&ldquo;</span>
              <p className="whitespace-pre-line text-[26px] font-semibold leading-[1.55] text-white">
                달라진 건 의지가 아니었습니다.
                {"\n"}휴대폰의 모든 유혹을 차단한 것.
                {"\n"}그 3개월이 전국 상위 0.3%를 만들었습니다.
              </p>
            </div>

            <p className="mt-7 text-[14px] text-white/50">오진혁 · 대치루트 창업자 · 서울대학교 재학 · 전국 상위 0.3%</p>

            <div className="mt-12 flex flex-wrap items-center justify-center gap-2">
              {[
                { label: "중학교", value: "게임만" },
                { label: "고1", value: "전교 100등대" },
                { label: "고1 말", value: "전교 5등" },
                { label: "현역", value: "연세대 합격" },
                { label: "재수 3개월", value: "서울대 · 0.3%" }
              ].map((step, idx, arr) => (
                <div key={step.label} className="flex items-center gap-2">
                  <div className="rounded-[10px] border border-white/10 bg-white/10 px-4 py-3">
                    <p className="mb-1.5 text-[11px] text-white/45">{step.label}</p>
                    <p className="text-[14px] font-semibold text-white">{step.value}</p>
                  </div>
                  {idx < arr.length - 1 ? <span className="text-[14px] text-white/30">→</span> : null}
                </div>
              ))}
            </div>

            <Link href="/story" className="mt-10 block text-[15px] text-white/60 underline">
              자세한 이야기 보기 →
            </Link>
          </div>
        </section>

        <section className="mt-8 bg-[#FAFAFA] py-24">
          <p className="text-center text-[13px] uppercase tracking-[0.05em] text-[#9CA3AF]">학생 후기</p>
          <h2 className="mt-3 text-center text-2xl md:text-4xl leading-snug break-keep font-semibold tracking-[-0.02em] text-[#111827]">
            6개월째 루틴이 무너진 적 없습니다
          </h2>

          <div className="mx-auto mt-14 grid max-w-[1100px] grid-cols-1 gap-4 lg:grid-cols-3">
            <article className="rounded-2xl border border-[#E5E7EB] bg-white px-8 py-7">
              <p className="text-[14px] text-[#F59E0B]">★★★★★</p>
              <p className="mt-3.5 whitespace-pre-line text-[15px] leading-[1.7] text-[#374151]">
                &ldquo;시간 계획을 AI가 잡아주니
                {"\n"}4개월째 페이스가 무너지지 않았어요.
                {"\n"}의지력 문제가 아니라 구조 문제였던 거예요.&rdquo;
              </p>
              <div className="mt-5 border-t border-[#F3F4F6]" />
              <p className="mt-3.5 text-[13px] text-[#9CA3AF]">강남구 고3 · 4개월 사용</p>
            </article>

            <article className="rounded-2xl border border-[#E5E7EB] bg-white px-8 py-7">
              <p className="text-[14px] text-[#F59E0B]">★★★★★</p>
              <p className="mt-3.5 whitespace-pre-line text-[15px] leading-[1.7] text-[#374151]">
                &ldquo;플래너 미작성 시 잠금이
                {"\n"}처음엔 불편했는데 지금은 그게 루틴을 지켜줘요.
                {"\n"}6개월째 한 번도 무너진 적 없습니다.&rdquo;
              </p>
              <div className="mt-5 border-t border-[#F3F4F6]" />
              <p className="mt-3.5 text-[13px] text-[#9CA3AF]">대치동 재수생 · 5개월 사용</p>
            </article>

            <article className="rounded-2xl border border-[#E5E7EB] bg-white px-8 py-7">
              <p className="text-[14px] text-[#F59E0B]">★★★★★</p>
              <p className="mt-3.5 whitespace-pre-line text-[15px] leading-[1.7] text-[#374151]">
                &ldquo;새벽에 수학 문제 막혔을 때
                {"\n"}AI한테 물어보니 바로 풀렸어요.
                {"\n"}복습이 밀리지 않게 됐습니다.&rdquo;
              </p>
              <div className="mt-5 border-t border-[#F3F4F6]" />
              <p className="mt-3.5 text-[13px] text-[#9CA3AF]">서초구 고2 · 6개월 사용</p>
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
