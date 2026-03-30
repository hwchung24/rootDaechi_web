"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { AppHeader } from "@/components/AppHeader";
import { ComparisonMatrixSection } from "@/components/ComparisonMatrixSection";
import { ShieldCheck, CalendarClock, FileBarChart2, MessagesSquare } from "lucide-react";

const CORE_VALUES: { title: string; description: string; Icon: typeof ShieldCheck }[] = [
  {
    title: "시간표 기반 정책",
    description: "학원·인강·휴식 시간을 기준으로 앱 허용 정책을 세밀하게 설계합니다.",
    Icon: CalendarClock
  },
  {
    title: "Apple MDM 보안",
    description: "우회가 어려운 MDM 구조로 공부 시간에는 허용된 앱만 열립니다.",
    Icon: ShieldCheck
  },
  {
    title: "AI 학습 리포트",
    description: "사용 패턴을 요약해 부모님과 학생이 같은 정보를 보고 대화할 수 있게 돕습니다.",
    Icon: FileBarChart2
  }
];

const ONBOARDING_STEPS = [
  {
    title: "1대1 상담",
    description: "학생 일정, 현재 기기 사용 습관, 부모님 관리 선호도를 먼저 파악합니다."
  },
  {
    title: "초기 정책 설계",
    description: "시간표·앱 허용·연락 규칙을 함께 정하고, 실제 수험 루틴에 맞춰 세팅합니다."
  },
  {
    title: "세팅 및 안내",
    description: "기기 세팅 이후 보호자/학생에게 사용 방법을 안내하고 운영을 시작합니다."
  },
  {
    title: "운영 점검",
    description: "리포트를 바탕으로 월별 점검 및 필요 시 정책을 조정합니다."
  }
];

export default function ServiceIntroPage() {
  return (
    <div className="min-h-screen bg-[#f8f9fa] text-slate-900">
      <AppHeader>
        <Link href="/gillo-phone-rental" className="transition hover:text-slate-900">
          대치폰 패키지
        </Link>
        <Link href="/gillo-tab-rental" className="transition hover:text-slate-900">
          대치탭 패키지
        </Link>
        <Link href="/b2b" className="transition hover:text-slate-900">
          학원·교육기관 제휴
        </Link>
        <Link href="/management-subscription" className="transition hover:text-slate-900">
          학습 관리 구독 연장
        </Link>
      </AppHeader>

      <main>
        <section className="border-b border-slate-200/70 bg-[#f8fafc]">
          <div className="mx-auto max-w-5xl px-5 py-12 sm:px-8 sm:py-16">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45 }}
              className="text-center"
            >
              <h2 className="text-xl font-semibold tracking-tight text-slate-900 sm:text-2xl">대치루트가 설계하는 핵심</h2>
              <p className="mx-auto mt-3 max-w-2xl text-sm text-slate-600 sm:text-base">
                공부를 방해하는 요소를 줄이고, 실제 수험 루틴을 지키기 위한 구조를 만듭니다.
              </p>
            </motion.div>

            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {CORE_VALUES.map((value, i) => {
                const Icon = value.Icon;
                return (
                  <motion.article
                    key={value.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.15 }}
                    transition={{ duration: 0.45, delay: i * 0.08 }}
                    className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6"
                  >
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-navy-800 text-white">
                      <Icon className="h-5 w-5" strokeWidth={2} aria-hidden />
                    </div>
                    <h3 className="mt-4 text-[17px] font-semibold tracking-tight text-slate-900">{value.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-slate-600">{value.description}</p>
                  </motion.article>
                );
              })}
            </div>
          </div>
        </section>

        <ComparisonMatrixSection />

        <section className="border-b border-slate-200/70 bg-white">
          <div className="mx-auto max-w-5xl px-5 py-12 sm:px-8 sm:py-16">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45 }}
              className="text-center"
            >
              <h2 className="text-xl font-semibold tracking-tight text-slate-900 sm:text-2xl">도입은 이렇게 진행됩니다</h2>
              <p className="mx-auto mt-3 max-w-2xl text-sm text-slate-600 sm:text-base">
                첫 상담부터 운영 점검까지, 학생에게 맞는 방식으로 단계별로 함께 설계합니다.
              </p>
            </motion.div>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {ONBOARDING_STEPS.map((step, i) => (
                <motion.article
                  key={step.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{ duration: 0.45, delay: i * 0.08 }}
                  className="rounded-2xl border border-slate-200 bg-slate-50/70 p-5 sm:p-6"
                >
                  <p className="text-[11px] font-semibold uppercase tracking-wide text-navy-700">Step {i + 1}</p>
                  <h3 className="mt-2 text-base font-semibold tracking-tight text-slate-900 sm:text-lg">{step.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">{step.description}</p>
                </motion.article>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="mt-10 rounded-2xl border border-slate-200 bg-slate-50 px-5 py-6 sm:px-6"
            >
              <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
                <div className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-9 w-9 items-center justify-center rounded-full bg-navy-800 text-white">
                    <MessagesSquare className="h-4 w-4" aria-hidden />
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-slate-900">도입 전, 현재 상황부터 함께 점검해 보세요.</p>
                    <p className="mt-1 text-xs text-slate-600 sm:text-sm">상담 시 학생 루틴과 목표에 맞춘 추천 구성을 안내해 드립니다.</p>
                  </div>
                </div>
                <Link
                  href="/inquiry"
                  className="inline-flex min-h-[44px] items-center justify-center rounded-full bg-navy-800 px-6 text-sm font-semibold text-white transition hover:bg-navy-900"
                >
                  무료 상담 신청
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <footer className="border-t border-slate-200/80 bg-white">
        <div className="mx-auto flex max-w-5xl flex-col gap-4 px-5 py-8 text-[11px] text-slate-500 sm:flex-row sm:items-center sm:justify-between sm:px-8">
          <div className="flex items-center gap-2">
            <img src="/daechiroot-logo.png" alt="" className="h-5 w-5 opacity-80" />
            <span className="font-medium text-slate-700">대치루트</span>
          </div>
          <p>
            정현우 · 150-07-03484 · 강남구 개포동 · © {new Date().getFullYear()}
          </p>
        </div>
      </footer>
    </div>
  );
}
