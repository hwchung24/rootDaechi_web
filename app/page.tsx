"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { AppHeader } from "@/components/AppHeader";
import { LandingHero } from "@/components/LandingHero";
import { LandingSlideSections } from "@/components/LandingSlideSections";
import { StudentLifestyleSection } from "@/components/StudentLifestyleSection";
import { FeatureFlowSection } from "@/components/FeatureFlowSection";
import { RecommendedBySection } from "@/components/RecommendedBySection";
import { ServiceTrustSection } from "@/components/ServiceTrustSection";

const products = [
  {
    id: "gillo-phone-package",
    name: "대치폰 패키지",
    subtitle: "대치폰 기기 + 1년 학습 관리",
    desc: "기기 + 1년 학습 관리",
    href: "/gillo-phone-rental",
    accent: "text-navy-700"
  },
  {
    id: "gillo-tab-package",
    name: "대치탭 패키지",
    subtitle: "대치탭 기기 + 1년 학습 관리",
    desc: "인강·필기용 태블릿 + 1년 관리",
    href: "/gillo-tab-rental",
    accent: "text-navy-700"
  },
  {
    id: "b2b-partnership",
    name: "학원·교육기관 제휴",
    subtitle: "B2B 맞춤 도입·운영",
    desc: "학원·교육기관에 대치폰·대치탭 세팅을 커리큘럼과 연동해 도입합니다.",
    href: "/b2b",
    accent: "text-navy-700"
  },
  {
    id: "management-subscription",
    name: "학습 관리 구독 연장",
    subtitle: "기기는 그대로, 관리만 연장",
    desc: "1년 이후 관리만 월 구독",
    href: "/management-subscription",
    accent: "text-slate-700"
  }
];

export default function Home() {
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
        <LandingHero />

        <LandingSlideSections />

        <FeatureFlowSection />

        <StudentLifestyleSection />

        <RecommendedBySection />

        <ServiceTrustSection />

        {/* 서비스 패키지 */}
        <section id="products" className="snap-none scroll-mt-20 border-t border-slate-200/60 bg-white">
          <div className="mx-auto max-w-5xl px-5 py-12 sm:px-8 sm:py-16">
            <h2 className="text-center text-xl font-semibold tracking-tight text-slate-900 sm:text-2xl">
              패키지
            </h2>

            <div className="mt-8 space-y-4">
              {products.map((product, i) => (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  className="rounded-2xl border border-slate-200/90 bg-white p-5 shadow-sm sm:p-6"
                >
                  <p className={`text-base font-semibold ${product.accent} sm:text-lg`}>{product.name}</p>
                  <p className="mt-0.5 text-sm text-slate-500">{product.subtitle}</p>
                  <p className="mt-2 text-sm text-slate-600">{product.desc}</p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    <Link
                      href={product.href}
                      className="inline-flex items-center justify-center rounded-full border border-slate-200 px-4 py-2.5 text-[13px] font-medium text-slate-800 transition hover:border-slate-300"
                    >
                      자세히
                    </Link>
                    <Link
                      href="/inquiry"
                      className="inline-flex items-center justify-center rounded-full bg-navy-700 px-4 py-2.5 text-[13px] font-medium text-white transition hover:bg-navy-800"
                    >
                      상담
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="snap-none border-t border-slate-200/80 bg-white">
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
