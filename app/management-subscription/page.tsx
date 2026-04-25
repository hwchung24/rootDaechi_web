"use client";

import Link from "next/link";
import { AppHeader } from "@/components/AppHeader";
import { SiteFooter } from "@/components/SiteFooter";

export default function ManagementSubscriptionPage() {
  return (
    <div className="min-h-screen bg-[#f8f9fa] text-slate-900">
      <AppHeader>
        <Link href="/phone" className="transition hover:text-slate-900">
          대치폰
        </Link>
        <Link href="/parents" className="transition hover:text-slate-900">
          학부모
        </Link>
        <Link href="/management-subscription" className="transition hover:text-slate-900">
          학습 관리 구독 연장
        </Link>
      </AppHeader>

      <main>
        <section className="border-b border-white/10 bg-[#1B2A4A] py-14 md:py-20">
          <div className="mx-auto max-w-6xl px-6 text-center sm:px-12">
            <p className="inline-flex rounded-[8px] bg-white/10 px-[14px] py-[6px] text-[13px] font-medium text-white">
              대치폰 사용자 전용
            </p>
            <h1 className="mt-5 break-keep text-[32px] font-bold leading-[1.15] tracking-[-0.03em] text-white md:text-[46px]">
              학습 관리 구독 연장
            </h1>
            <p className="mx-auto mt-4 max-w-[760px] break-keep text-[15px] leading-[1.8] text-white/80 md:text-[18px]">
              기기는 그대로 두고, 지금의 관리 원칙을 수능까지 이어갑니다.
              <br />
              기본 플랜부터 프리미엄 코칭 플랜까지 상황에 맞게 선택할 수 있습니다.
            </p>
          </div>
        </section>

        <section className="bg-white py-14 md:py-24">
          <div className="mx-auto max-w-6xl px-6 sm:px-12">
            <p className="text-center text-[13px] uppercase tracking-[0.05em] text-[#9CA3AF]">구독 플랜</p>
            <h2 className="mt-3 text-center text-2xl font-semibold tracking-[-0.02em] text-[#111827] md:text-4xl">원하는 방식으로 연장하세요</h2>
            <p className="mt-3 text-center text-[15px] text-[#6B7280]">
              학습 루틴 유지가 목표라면 기본 플랜, 밀착 전략 코칭까지 원하면 프리미엄 플랜을 선택하면 됩니다.
            </p>

            <div className="mx-auto mt-12 grid max-w-[980px] grid-cols-1 gap-4 lg:grid-cols-2">
              <article className="rounded-2xl border border-[#E5E7EB] bg-white p-7 md:p-8">
                <span className="inline-flex rounded-md bg-[#EEF2FF] px-2.5 py-1 text-[12px] font-semibold text-[#1B2A4A]">기본 플랜</span>
                <p className="mt-4 text-[32px] font-bold tracking-tight text-[#111827] md:text-[40px]">49,000원</p>
                <p className="text-[13px] text-[#9CA3AF]">월 / 부가세 별도</p>
                <ul className="mt-6 space-y-2.5 text-[15px] leading-[1.65] text-[#4B5563]">
                  <li>· Apple MDM 기반 앱/웹 허용·차단</li>
                  <li>· 요일·시간대별 시간표 연동 제어</li>
                  <li>· 주간 학습 리포트, 학부모 피드백</li>
                  <li>· 부모 앱으로 원격 모드 조정</li>
                </ul>
              </article>

              <article className="rounded-2xl border-2 border-[#1B2A4A] bg-[#EEF2FF] p-7 md:p-8">
                <span className="inline-flex rounded-md bg-[#1B2A4A] px-2.5 py-1 text-[12px] font-semibold text-white">프리미엄 플랜</span>
                <p className="mt-4 text-[32px] font-bold tracking-tight text-[#1B2A4A] md:text-[40px]">299,000원</p>
                <p className="text-[13px] text-[#6B7280]">월 / 부가세 별도</p>
                <ul className="mt-6 space-y-2.5 text-[15px] leading-[1.65] text-[#374151]">
                  <li>· 기본 플랜 포함 기능 전체</li>
                  <li>· 학습 플랜 심화 점검 및 전략 코칭</li>
                  <li>· 우선 응대 채널 기반 밀착 피드백</li>
                  <li>· 학생 상황 맞춤 운영 리듬 최적화</li>
                </ul>
              </article>
            </div>

            <p className="mx-auto mt-5 max-w-[980px] text-[12px] text-[#9CA3AF]">
              ※ 학습 관리 구독은 대치폰·대치탭 공식 기기 기준으로 제공되며, 패키지 이력과 학생 상황에 따라 세부 운영은 상담 시 확정됩니다.
            </p>
          </div>
        </section>

        <section className="bg-[#FAFAFA] py-14 md:py-24">
          <div className="mx-auto max-w-6xl px-6 sm:px-12">
            <p className="text-center text-[13px] uppercase tracking-[0.05em] text-[#9CA3AF]">이용 대상</p>
            <h2 className="mt-3 text-center text-2xl font-semibold tracking-[-0.02em] text-[#111827] md:text-4xl">이런 분께 추천합니다</h2>

            <div className="mx-auto mt-12 grid max-w-[980px] grid-cols-1 gap-4 lg:grid-cols-2">
              <article className="rounded-2xl border border-[#E5E7EB] bg-white p-7">
                <p className="text-[18px] font-semibold text-[#111827]">기본 플랜 추천</p>
                <ul className="mt-4 space-y-2.5 text-[15px] leading-[1.7] text-[#6B7280]">
                  <li>· 기존 관리 원칙을 같은 방식으로 유지하고 싶은 경우</li>
                  <li>· 월 단위로 안정적으로 루틴을 이어가고 싶은 경우</li>
                  <li>· 자녀의 패턴을 리포트 중심으로 관리하고 싶은 경우</li>
                </ul>
              </article>
              <article className="rounded-2xl border border-[#E5E7EB] bg-white p-7">
                <p className="text-[18px] font-semibold text-[#111827]">프리미엄 플랜 추천</p>
                <ul className="mt-4 space-y-2.5 text-[15px] leading-[1.7] text-[#6B7280]">
                  <li>· 성적 구간 상승을 위한 맞춤 전략 코칭이 필요한 경우</li>
                  <li>· 시험 일정에 맞춘 촘촘한 피드백 체계를 원하는 경우</li>
                  <li>· 학습 운영을 더 밀착형으로 관리하고 싶은 경우</li>
                </ul>
              </article>
            </div>
          </div>
        </section>

        <section className="bg-white py-14 md:py-24">
          <div className="mx-auto max-w-4xl px-6 sm:px-8">
            <div className="rounded-2xl border border-[#E5E7EB] bg-white p-7 md:p-8">
              <h2 className="text-[20px] font-semibold text-[#111827]">이렇게 진행됩니다</h2>
              <ul className="mt-4 space-y-2.5 text-[15px] leading-[1.7] text-[#6B7280]">
                <li>· 기존 대치폰·대치탭 사용 이력과 현재 성적·목표를 공유합니다.</li>
                <li>· 연장 시점과 운영 방식을 상담으로 확정하고, 기본/프리미엄 중 원하는 플랜을 선택합니다.</li>
                <li>· 동의 후 기존 기기에 관리 기간을 반영해 즉시 연장 운영합니다.</li>
              </ul>
            </div>

            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link
                href="/inquiry"
                className="inline-flex items-center justify-center rounded-[10px] bg-[#1B2A4A] px-7 py-3.5 text-[15px] font-semibold text-white"
              >
                카카오톡으로 구독 연장 상담하기
              </Link>
              <Link
                href="/parents"
                className="inline-flex items-center justify-center rounded-[10px] border-[1.5px] border-[#1B2A4A] px-7 py-3.5 text-[15px] font-semibold text-[#1B2A4A]"
              >
                학부모 페이지 보기
              </Link>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}

