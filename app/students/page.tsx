"use client";

import Link from "next/link";
import { AppHeader } from "@/components/AppHeader";
import { LandingHeroIPadVisual } from "@/components/LandingHeroIPadVisual";
import { SiteFooter } from "@/components/SiteFooter";
import { studentsEvidenceSection } from "@/lib/evidenceSections";

const statCardClass = "rounded-2xl border border-[#E5E7EB] bg-white px-8 py-8 text-center";
const testimonialCardClass = "rounded-2xl border border-[#E5E7EB] bg-white px-8 py-8";
const featureCardClass = "rounded-2xl border border-[#E5E7EB] bg-white px-8 py-8";

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

      <main className="[--section-spacing:80px] md:[--section-spacing:120px]">
        <section className="relative left-1/2 right-1/2 w-screen -translate-x-1/2 border-b border-white/10 bg-[#13223F]">
          <div className="mx-auto min-h-auto max-w-6xl bg-[#13223F] px-6 py-12 md:min-h-screen md:px-6 md:py-14 sm:px-12">
            <div className="grid min-h-0 items-center gap-10 md:min-h-[calc(100vh-7rem)] lg:grid-cols-[55fr_45fr] lg:items-center lg:gap-12">
            <div className="order-1 mt-5 flex h-full w-full flex-col items-start justify-center text-left lg:order-1 lg:mt-0">
              <p className="inline-block w-fit rounded-md bg-white/10 px-3 py-[5px] text-[13px] font-medium text-white">
                학생 페이지
              </p>
              <h1 className="mt-5 break-keep text-[30px] font-bold leading-[1.25] tracking-[-0.03em] text-white md:text-[44px] md:leading-[1.15] lg:text-[52px]">
                부끄럽지 않은, 불편하지 않은
                <br />
                공부폰
              </h1>
              <p className="mt-5 break-keep text-[17px] leading-[1.7] text-white">
                시간대별 자유도 조정,
                <br />
                아이폰으로 생활까지 지키는 공부폰
              </p>
              <div className="mt-8 flex flex-col gap-3 md:flex-row md:items-center md:gap-5">
                <Link
                  href="/inquiry"
                  className="inline-flex w-full items-center justify-center rounded-[10px] bg-white px-7 py-3.5 text-[15px] font-semibold text-[#1B2A4A] md:w-auto"
                >
                  지금 시작하기 →
                </Link>
                <Link
                  href="/phone"
                  className="mt-3 block text-center text-[15px] font-medium text-white/80 hover:underline md:mt-0 md:inline-flex md:text-left"
                >
                  대치폰 자세히 보기
                </Link>
              </div>
            </div>

            <div className="order-2 hidden h-full w-full items-center justify-center self-center lg:order-2 lg:flex lg:justify-end">
              <div className="w-full max-w-[420px] md:max-w-[620px]">
                <LandingHeroIPadVisual />
              </div>
            </div>
            </div>
          </div>
        </section>

        <section id="student-features" className="bg-white py-[var(--section-spacing)]">
          <div className="mx-auto max-w-6xl px-6 sm:px-12">
          <p className="text-center text-[13px] font-medium uppercase tracking-[0.05em] text-[#9CA3AF]">대치폰의 차별점</p>
          <h2 className="mt-3 text-center text-2xl md:text-4xl leading-snug break-keep font-semibold tracking-[-0.02em] text-[#111827]">기존 공부폰과 뭐가 다를까요</h2>
          <p className="mt-3 text-center text-[16px] text-[#6B7280]">일상은 살리고, 집중은 지킵니다</p>

          <div className="hide-scrollbar mx-auto mb-14 mt-12 max-w-[980px] overflow-x-auto pb-2">
            <div className="flex min-w-max gap-4 lg:min-w-0 lg:justify-center">
              {[1, 2, 3].map((n) => (
                <div
                  key={n}
                  className="w-[220px] shrink-0 overflow-hidden rounded-2xl border border-[#E5E7EB] bg-white shadow-[0_8px_24px_rgba(17,24,39,0.06)] sm:w-[250px] lg:w-[300px]"
                >
                  <div className="aspect-[9/19.5] w-full bg-gradient-to-b from-[#EEF2FF] via-[#F8FAFC] to-[#E5E7EB]">
                    <div className="flex h-full items-center justify-center">
                      <p className="rounded-md bg-white/80 px-3 py-1.5 text-[12px] font-medium text-[#6B7280]">
                        샘플 이미지 {n}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mx-auto mt-12 w-full max-w-[900px] overflow-hidden rounded-2xl border border-[#E5E7EB]">
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
              { item: "SNU-AI 학습 코칭", old: "✗", new: "✓" },
              { item: "학부모 리포트", old: "✗", new: "✓" },
              { item: "우회 불가능 (Apple 공식 기업 보안용 MDM)", old: "✗", new: "✓" }
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

          <p className="mt-5 text-center text-[14px] text-[#6B7280]">기존 공부폰이 불편했던 이유, 대치폰이 전부 해결했습니다</p>
          </div>
        </section>

        <section className="bg-[#FAFAFA] py-[var(--section-spacing)]">
          <div className="mx-auto max-w-6xl px-6 sm:px-12">
          <p className="text-center text-[13px] font-medium uppercase tracking-[0.05em] text-[#9CA3AF]">실제 사용자 변화</p>
          <h2 className="text-center text-2xl font-semibold tracking-[-0.02em] text-[#111827] md:text-4xl">
            {studentsEvidenceSection.impact.title}
          </h2>
          <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-3">
            {studentsEvidenceSection.impact.stats.map((stat) => (
              <article key={stat.label} className={statCardClass}>
                <p className="text-[13px] font-medium text-[#9CA3AF]">{stat.label}</p>
                <p className="mt-2 text-[22px] font-semibold text-[#111827]">{stat.value}</p>
                <p className="mt-2 text-[13px] text-[#6B7280]">{stat.sub}</p>
              </article>
            ))}
          </div>
          </div>
        </section>

        <section className="bg-white py-[var(--section-spacing)]">
          <div className="mx-auto max-w-6xl px-6 sm:px-12">
          <p className="text-center text-[13px] font-medium uppercase tracking-[0.05em] text-[#9CA3AF]">실제 사용자 후기</p>
          <h2 className="mt-3 text-center text-2xl md:text-4xl leading-snug break-keep font-semibold tracking-[-0.02em] text-[#111827]">
            공부폰인데 오히려 자유로워졌습니다
          </h2>

          <div className="mx-auto mt-14 grid max-w-[1100px] grid-cols-1 gap-4 lg:grid-cols-3">
            <article className={testimonialCardClass}>
              <p className="mt-3.5 text-[15px] leading-[1.7] text-[#374151]">&ldquo;AI가 계획을 잡아주니까 4개월째 페이스가 무너지지 않았어요. 의지력 문제가 아니라 구조 문제였던 거예요.&rdquo;</p>
              <div className="mt-5 border-t border-[#F3F4F6]" />
              <p className="mt-3.5 text-[13px] text-[#9CA3AF]">강남구 고3 · 4개월 사용</p>
            </article>

            <article className={testimonialCardClass}>
              <p className="mt-3.5 text-[15px] leading-[1.7] text-[#374151]">&ldquo;플래너 미작성 시 폰이 잠기는 게 처음엔 불편했는데, 지금은 그게 루틴을 지켜줘요. 6개월째 한 번도 무너진 적 없습니다.&rdquo;</p>
              <div className="mt-5 border-t border-[#F3F4F6]" />
              <p className="mt-3.5 text-[13px] text-[#9CA3AF]">대치동 재수생 · 6개월 사용</p>
            </article>

            <article className={testimonialCardClass}>
              <p className="mt-3.5 whitespace-pre-line text-[15px] leading-[1.7] text-[#374151]">
                &ldquo;예전엔 공부 끝나고도 폰 언제 쓰나 신경 쓰였는데,
                {"\n"}지금은 자유 시간이 정해져 있으니까 오히려 쉴 때 제대로 쉬게 됐어요.&rdquo;
              </p>
              <div className="mt-5 border-t border-[#F3F4F6]" />
              <p className="mt-3.5 text-[13px] text-[#9CA3AF]">목동 고2 · 3개월 사용</p>
            </article>
          </div>
          </div>
        </section>

        <section className="mt-8 bg-[#FAFAFA] py-[var(--section-spacing)]">
          <div className="mx-auto max-w-6xl px-6 sm:px-12">
            <h2 className="text-2xl md:text-4xl leading-snug break-keep text-center font-semibold tracking-[-0.02em] text-[#111827]">
              공부폰이 창피하지 않아도 됩니다
            </h2>
            <div className="mx-auto mt-12 max-w-[760px]">
              <article className="pb-7 pt-6 border-b border-[#E5E7EB]">
                <p className="mb-2.5 text-[16px] font-semibold text-[#111827]">친구들한테 공부폰 쓴다고 티 나지 않나요?</p>
                <p className="whitespace-pre-line break-keep text-[15px] leading-[1.8] text-[#6B7280]">
                  전혀요. 갤럭시나 구형 단말로 바꾸는 게 아니라, 지금 쓰는 아이폰에 세팅만 올라갑니다.
                  {"\n"}겉모습은 완전히 똑같은 아이폰이라 옆에서 봐도 공부폰인지 알 수 없습니다.
                </p>
              </article>
              <article className="pb-7 pt-6 border-b border-[#E5E7EB]">
                <p className="mb-2.5 text-[16px] font-semibold text-[#111827]">카카오톡이나 지도 같은 것도 다 막히나요?</p>
                <p className="whitespace-pre-line break-keep text-[15px] leading-[1.8] text-[#6B7280]">
                  아니요. 생활에 필요한 앱은 그대로 씁니다.
                  {"\n"}공부 시간에는 유튜브, 인스타, 게임만 자동으로 차단되고,
                  {"\n"}카카오톡, 지도, 택시, 뱅킹은 항상 사용 가능합니다.
                </p>
              </article>
              <article className="pb-7 pt-6 border-b border-[#E5E7EB]">
                <p className="mb-2.5 text-[16px] font-semibold text-[#111827]">부모님이 폰으로 제 행동을 실시간으로 보고 있는 건가요?</p>
                <p className="whitespace-pre-line break-keep text-[15px] leading-[1.8] text-[#6B7280]">
                  아니요. 부모님은 매일 카카오톡으로 리포트를 받는 방식입니다.
                  {"\n"}부모님이 앱에 들어와서 실시간으로 들여다보는 구조가 아니라,
                  {"\n"}순공 시간·플래너 달성률 같은 숫자가 자동으로 전송됩니다.
                </p>
              </article>
              <article className="pb-7 pt-6 border-b border-[#E5E7EB]">
                <p className="mb-2.5 text-[16px] font-semibold text-[#111827]">플래너를 강제로 써야 하나요?</p>
                <p className="whitespace-pre-line break-keep text-[15px] leading-[1.8] text-[#6B7280]">
                  플래너를 작성하지 않으면 기기가 잠깁니다.
                  {"\n"}하지만 작성하고 나면 바로 풀립니다.
                  {"\n"}처벌이 아니라, 루틴이 끊기지 않게 잡아주는 구조입니다.
                </p>
              </article>
              <article className="pb-7 pt-6">
                <p className="mb-2.5 text-[16px] font-semibold text-[#111827]">자유 시간에는 유튜브나 SNS를 쓸 수 있나요?</p>
                <p className="whitespace-pre-line break-keep text-[15px] leading-[1.8] text-[#6B7280]">
                  네. 부모님이 설정한 자유 시간에는 모든 앱을 제한 없이 사용할 수 있습니다.
                  {"\n"}공부 시간과 자유 시간이 명확하게 나뉘기 때문에,
                  {"\n"}오히려 쉴 때 더 편하게 쉬게 된다는 반응이 많습니다.
                </p>
              </article>
            </div>
          </div>
        </section>

        <section className="bg-white py-[var(--section-spacing)] text-center">
          <div className="mx-auto max-w-6xl px-6 sm:px-12">
          <p className="text-center text-[13px] font-medium uppercase tracking-[0.05em] text-[#9CA3AF]">시작 안내</p>
          <h2 className="text-2xl md:text-4xl leading-snug break-keep font-semibold tracking-[-0.02em] text-[#111827]">
            지금 시작해도 늦지 않았습니다
          </h2>
          <div className="mt-6">
            <Link
              href="/inquiry"
              className="inline-flex w-auto items-center justify-center rounded-[10px] bg-[#1B2A4A] px-8 py-3.5 text-[15px] font-semibold text-white"
            >
              지금 상담 신청 →
            </Link>
          </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
