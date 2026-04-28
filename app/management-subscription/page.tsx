"use client";

import Link from "next/link";
import { AppHeader } from "@/components/AppHeader";
import { LandingHeroIPadVisual } from "@/components/LandingHeroIPadVisual";
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
        <section className="snap-none border-b border-white/10 bg-[#13223F]">
          <div className="mx-auto min-h-auto max-w-6xl bg-[#13223F] px-6 py-12 md:min-h-screen md:px-6 md:py-14 sm:px-12">
            <div className="grid min-h-0 items-center gap-10 md:min-h-[calc(100vh-7rem)] lg:grid-cols-[55fr_45fr] lg:items-center lg:gap-12">
              <div className="order-1 mt-5 flex h-full w-full flex-col items-start justify-center text-left lg:mt-0">
                <p className="inline-flex rounded-[8px] bg-white/10 px-[14px] py-[6px] text-[13px] font-medium text-white">
                  대치폰·대치탭 사용자 전용
                </p>
                <h1 className="mt-5 break-keep text-[30px] font-bold leading-[1.25] tracking-[-0.03em] text-white md:text-[44px] md:leading-[1.15] lg:text-[52px]">
                  기기는 그대로
                  <br />
                  관리만 이어갑니다
                </h1>
                <p className="mt-5 max-w-[760px] break-keep text-[15px] leading-[1.8] text-white/80 md:text-[18px]">
                  3개월 기본 관리 이후에도 학습 루틴을 유지하고 싶다면
                  <br />
                  기본 플랜부터 밀착 코칭 플랜까지 선택할 수 있습니다
                </p>
              </div>

              <div className="order-2 hidden h-full w-full items-center justify-center self-center lg:flex lg:justify-end">
                <div className="w-full max-w-[420px] md:max-w-[620px]">
                  <LandingHeroIPadVisual />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white py-14 md:py-24">
          <div className="mx-auto max-w-6xl px-6 sm:px-12">
            <p className="text-center text-[13px] uppercase tracking-[0.05em] text-[#9CA3AF]">구독 플랜</p>
            <h2 className="mt-3 text-center text-2xl font-semibold tracking-[-0.02em] text-[#111827] md:text-4xl">원하는 방식으로 연장하세요</h2>
            <p className="mt-3 text-center text-[15px] text-[#6B7280]">
              기본 플랜을 통한 학습 루틴 · 프리미엄 플랜을 통한 밀착 코칭
            </p>

            <div className="mx-auto mt-12 grid max-w-[980px] grid-cols-1 gap-4 lg:grid-cols-2">
              <article className="rounded-2xl border border-[#E5E7EB] bg-white p-7 md:p-8">
                <span className="inline-flex rounded-md bg-[#EEF2FF] px-2.5 py-1 text-[12px] font-semibold text-[#1B2A4A]">기본 플랜</span>
                <p className="mt-4 text-[32px] font-bold tracking-tight text-[#111827] md:text-[40px]">29,000원</p>
                <p className="text-[13px] text-[#9CA3AF]">월 / 부가세 별도</p>
                <ul className="mt-6 space-y-2.5 text-[15px] leading-[1.65] text-[#4B5563]">
                  <li>✓ Apple 공식 MDM 기반 앱·웹 관리</li>
                  <li>✓ 매일 학습 · 생활 리포트 발송</li>
                  <li>✓ 독서실 입퇴실 문자 발송</li>
                  <li>✓ SNU-AI 학습 · 생활 코칭</li>
                  <li>✓ 위약금 없음 · 언제든 해지 가능</li>
                </ul>
              </article>

              <article className="rounded-2xl border-2 border-[#1B2A4A] bg-[#EEF2FF] p-7 md:p-8">
                <span className="inline-flex rounded-md bg-[#1B2A4A] px-2.5 py-1 text-[12px] font-semibold text-white">프리미엄 플랜</span>
                <p className="mt-4 text-[32px] font-bold tracking-tight text-[#1B2A4A] md:text-[40px]">299,000원</p>
                <p className="text-[13px] text-[#6B7280]">월 / 부가세 별도</p>
                <ul className="mt-6 space-y-2.5 text-[15px] leading-[1.65] text-[#374151]">
                  <li>✓ 기본 플랜 포함 기능 전체</li>
                  <li>✓ 전담 메디컬 · 서연고 멘토 배정</li>
                  <li>✓ 전담 멘토의 학습 · 생활 코칭</li>
                  <li>✓ 전담 멘토의 월간 종합 리포트 발송</li>
                  <li>✓ 위약금 없음 · 언제든 해지 가능</li>
                </ul>
              </article>
            </div>

            <p className="mx-auto mt-5 max-w-[980px] text-[12px] text-[#9CA3AF]">
              ※ 학습 관리 구독은 대치폰·대치탭 공식 기기 기준으로 제공되며, 학생 상황에 따라 세부 운영은 상담 시 확정됩니다.
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
                  <li>· 루틴 유지와 학습 집중 환경이 목표인 경우</li>
                  <li>· 부모님이 학생의 학습 · 생활 현황 파악만 원하는 경우</li>
                  <li>· 자기주도 학습이 어느 정도 되는 학생인 경우</li>
                </ul>
              </article>
              <article className="rounded-2xl border border-[#E5E7EB] bg-white p-7">
                <p className="text-[18px] font-semibold text-[#111827]">프리미엄 플랜 추천</p>
                <ul className="mt-4 space-y-2.5 text-[15px] leading-[1.7] text-[#6B7280]">
                  <li>· 수능까지 전략적 계획 관리가 필요한 경우</li>
                  <li>· 밀착 피드백으로 빠른 성적 향상이 목표인 경우</li>
                  <li>· 학부모님이 더 촘촘한 관리를 원하는 경우</li>
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
                <li>· 대치폰·대치탭 소지 여부와 현재 성적·목표를 공유합니다</li>
                <li>· 연장 시점과 운영 방식을 상담으로 확정하고, 기본/프리미엄 중 원하는 플랜을 선택합니다</li>
                <li>· 합의 후 기존 기기에 관리를 반영해 연장 운영합니다</li>
              </ul>
            </div>

            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link
                href="/inquiry"
                className="inline-flex items-center justify-center rounded-[10px] bg-[#1B2A4A] px-7 py-3.5 text-[15px] font-semibold text-white"
              >
                카카오톡으로 구독 연장 상담하기
              </Link>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}

