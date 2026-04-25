"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { AppHeader } from "@/components/AppHeader";
import { SiteFooter } from "@/components/SiteFooter";

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 0.61, 0.36, 1] } }
};

export default function B2BPage() {
  return (
    <div className="min-h-screen bg-[#fafafa] text-slate-900">
      <AppHeader>
        <Link href="/gillo-phone-rental" className="transition hover:text-slate-900">
          대치폰 패키지
        </Link>
        <Link href="/gillo-tab-rental" className="transition hover:text-slate-900">
          대치탭 패키지
        </Link>
        <Link href="/management-subscription" className="transition hover:text-slate-900">
          학습 관리 구독 연장
        </Link>
        <Link href="/b2b" className="transition hover:text-slate-900">
          학원·교육기관 제휴
        </Link>
      </AppHeader>

      <main>
        <section className="bg-[#1B2A4A] py-24">
          <div className="mx-auto max-w-[720px] px-5 text-center sm:px-8">
            <motion.div variants={fadeInUp} initial="hidden" animate="show">
              <p className="text-[13px] font-semibold tracking-[0.08em] text-white/50">FOR ACADEMY &amp; SCHOOL</p>
              <h1 className="mt-5 text-[36px] font-bold leading-[1.15] tracking-[-0.03em] text-white sm:text-[42px] lg:text-[48px]">
                학원·교육기관에서
                <br />
                대치폰을 운영합니다
              </h1>
              <p className="mt-5 whitespace-pre-line text-[16px] leading-[1.7] text-white/70 sm:text-[18px]">
                대치동 상위권 학생들이 실제로 쓰는 시스템을
                {"\n"}귀 기관의 커리큘럼과 연동해 운영합니다.
                {"\n"}도입부터 운영까지 함께합니다.
              </p>
              <Link
                href="/inquiry"
                className="mt-10 inline-block rounded-[10px] bg-white px-9 py-4 text-[16px] font-semibold text-[#1B2A4A]"
              >
                카카오톡으로 제휴 문의하기
              </Link>
              <p className="mt-3.5 text-[13px] text-white/45">담당자가 24시간 내 연락드립니다</p>
            </motion.div>
          </div>
        </section>

        <div className="mx-auto max-w-5xl px-5 py-12 sm:px-8 sm:py-16">

        <section className="bg-[#FAFAFA] py-20">
          <h2 className="text-center text-[28px] font-semibold tracking-[-0.02em] text-[#111827]">
            이런 기관이라면 바로 도입 가능합니다
          </h2>
          <div className="mx-auto mt-9 flex max-w-[720px] flex-wrap justify-center gap-3">
            {[
              "자습 관리형 학원",
              "기숙 캠프·합숙 프로그램",
              "상위권 집중반·독학관리반",
              "수능 전문 학원",
              "스터디카페·독서실 운영 업체",
              "대안학교·홈스쿨링 기관"
            ].map((item) => (
              <span
                key={item}
                className="rounded-[10px] border border-[#E5E7EB] bg-white px-[22px] py-[14px] text-[15px] font-medium text-[#374151]"
              >
                {item}
              </span>
            ))}
          </div>
          <p className="mt-9 text-center text-[14px] text-[#9CA3AF]">
            위 유형 외에도 학습 환경 관리가 필요한 기관이라면 문의 주세요.
          </p>
        </section>

        <section className="bg-white py-20">
          <p className="text-center text-[13px] uppercase tracking-[0.05em] text-[#9CA3AF]">제휴 진행 절차</p>
          <h2 className="mt-3 text-center text-[28px] font-semibold tracking-[-0.02em] text-[#111827]">4단계로 진행됩니다</h2>
          <div className="mx-auto mt-12 grid max-w-[960px] grid-cols-1 gap-4 lg:grid-cols-4">
            {[
              {
                step: "STEP 01",
                title: "사전 상담",
                desc: "기관 규모, 대상 학년, 운영 방식을\n간단히 공유해 주시면 됩니다.\n카카오톡으로 5분이면 충분합니다."
              },
              {
                step: "STEP 02",
                title: "운영 시나리오 설계",
                desc: "학원 시간표·규정에 맞춰\n어떤 시간에 어떤 모드로 동작할지\n함께 설계합니다."
              },
              {
                step: "STEP 03",
                title: "파일럿 운영",
                desc: "일부 반·기수에서 먼저 도입해\n실제 운영 데이터를 확인하고\n필요시 정책을 수정합니다."
              },
              {
                step: "STEP 04",
                title: "정식 계약 및 확장",
                desc: "파일럿 결과를 바탕으로\n정식 제휴를 체결하고\n전체 반·캠프·지점으로 확장합니다."
              }
            ].map((item) => (
              <article key={item.step} className="rounded-2xl border border-[#E5E7EB] bg-[#FAFAFA] px-6 py-7">
                <p className="mb-3 text-[13px] font-bold text-[#1B2A4A]">{item.step}</p>
                <h3 className="mb-2 text-[17px] font-semibold text-[#111827]">{item.title}</h3>
                <p className="whitespace-pre-line text-[14px] leading-[1.65] text-[#6B7280]">{item.desc}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="bg-[#FAFAFA] py-20">
          <div className="mx-auto max-w-[560px] text-center">
            <h2 className="text-[28px] font-semibold tracking-[-0.02em] text-[#111827]">지금 바로 문의해 주세요</h2>
            <p className="mt-4 whitespace-pre-line text-[16px] leading-[1.7] text-[#6B7280]">
              아래 정보를 카카오톡으로 보내주시면
              {"\n"}담당자가 24시간 내로 연락드립니다.
            </p>

            <div className="mx-auto mt-7 max-w-[400px] rounded-xl border border-[#E5E7EB] bg-white px-6 py-5 text-left">
              <p className="mb-3 text-[14px] font-semibold text-[#111827]">이 내용만 알려주세요</p>
              <ul className="text-[14px] leading-[1.9] text-[#6B7280]">
                <li>· 기관명 / 담당자 성함 / 연락처</li>
                <li>· 학생 수(또는 대략적인 규모)와 대상 학년</li>
                <li>· 희망 도입 형태 (예: 자습실만, 전 학년 등)</li>
              </ul>
            </div>

            <Link
              href="/inquiry"
              className="mx-auto mt-7 block w-fit rounded-[10px] bg-[#1B2A4A] px-9 py-4 text-[16px] font-semibold text-white"
            >
              카카오톡으로 제휴 문의하기 →
            </Link>
            <p className="mt-4 whitespace-pre-line text-[12px] text-[#9CA3AF]">
              ※ 일반 가정용 대치폰·대치탭 문의는
              {"\n"}상단 메뉴의 패키지 페이지를 이용해 주세요.
            </p>
          </div>
        </section>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}

