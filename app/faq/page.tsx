"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { AppHeader } from "@/components/AppHeader";

const fadeInUp = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4 } }
};

const FAQ_ITEMS = [
  {
    q: "대치폰 구독은 어떤 기기로 제공되나요?",
    a: "현재는 검증된 단말만 선별해 제공하며, 기본 기종은 아이폰 12입니다. 외관·배터리·기능을 모두 체크한 단말만 대여에 사용합니다."
  },
  {
    q: "대치폰 구독 요금제는 어떻게 구성되어 있나요?",
    a: "베이직(월 49,000원), 프로(월 79,000원), 프리미엄(월 99,000원) 세 가지로 구성됩니다. 베이직은 필수 앱만 남기는 기본 모드, 프로는 시간표 기반 자동 제어, 프리미엄은 주간 리포트 제공까지 포함됩니다."
  },
  {
    q: "최소 이용 기간이나 보증금이 있나요?",
    a: "최소 이용 기간, 보증금 및 파손 관련 규정은 학생 상황에 따라 달라질 수 있어 1:1 상담 시 자세히 안내해 드립니다. 문의 페이지에서 카카오톡 또는 전화 상담을 신청해 주세요."
  },
  {
    q: "상담은 어떻게 받나요?",
    a: "신청 시 남겨주신 연락처(카카오톡 또는 전화)로 1:1 상담 안내를 드립니다. 빠른 문의는 상단 '문의하기'에서 카카오톡 플러스 친구를 이용해 주세요."
  }
];

export default function FAQPage() {
  return (
    <div className="min-h-screen bg-[#fafafa] text-slate-900">
      <AppHeader>
        <Link href="/" className="transition hover:text-slate-900">홈</Link>
        <Link href="/faq" className="transition hover:text-slate-900">자주 묻는 질문</Link>
        <Link
          href="/inquiry"
          className="rounded-full bg-slate-900 px-4 py-2 text-[13px] font-medium text-white transition hover:bg-slate-800"
        >
          문의하기
        </Link>
      </AppHeader>

      <main className="mx-auto max-w-3xl px-5 py-16 sm:px-8 sm:py-24">
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate="show"
          className="mb-12 text-center"
        >
          <h1 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
            자주 묻는 질문
          </h1>
          <p className="mt-2 text-sm text-slate-600">
            궁금한 점이 있으면 문의하기에서 카카오톡으로 편하게 남겨 주세요.
          </p>
        </motion.div>

        <ul className="space-y-4">
          {FAQ_ITEMS.map((item, i) => (
            <motion.li
              key={i}
              variants={fadeInUp}
              initial="hidden"
              animate="show"
              transition={{ delay: i * 0.05 }}
              className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6"
            >
              <h2 className="text-sm font-semibold text-slate-900 sm:text-base">{item.q}</h2>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">{item.a}</p>
            </motion.li>
          ))}
        </ul>
      </main>

      <footer className="mt-16 border-t border-slate-200 bg-white py-6">
        <div className="mx-auto max-w-5xl px-5 text-center text-[12px] text-slate-500 sm:px-8">
          <p>대표: 정현우 | 사업자등록번호: 150-07-03484 | 서울특별시 강남구 개포동</p>
          <p className="mt-1 text-slate-400">© {new Date().getFullYear()} Daechiroot.</p>
        </div>
      </footer>
    </div>
  );
}
