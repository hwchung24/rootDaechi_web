"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const fadeInUp = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4 } }
};

const FAQ_ITEMS = [
  {
    q: "대치폰 세팅은 어떤 기기에 받을 수 있나요?",
    a: "아이폰(iOS)과 갤럭시 등 안드로이드 기기 모두 가능합니다. 지금 쓰시는 기기를 그대로 가져오시면 됩니다."
  },
  {
    q: "세팅 A, B, C의 차이는 무엇인가요?",
    a: "세팅 A는 기본앱만, B는 기본앱에 인강·생활 앱 등을 추가한 옵션, C는 필요한 앱만 골라 넣는 맞춤 세팅입니다. 서비스 소개 페이지에서 각 세팅별 포함 앱을 확인하실 수 있습니다."
  },
  {
    q: "대치폰(매입·판매)은 어떻게 신청하나요?",
    a: "대치폰 페이지에서 원하는 세팅(A/B/C)을 선택한 뒤 매입 희망 기종을 입력해 신청하시면 됩니다. 기기값은 별도이며, 세팅 비용만 표시된 금액입니다."
  },
  {
    q: "상담은 어떻게 받나요?",
    a: "신청 시 남겨주신 연락처(카카오톡 또는 전화)로 1:1 상담 안내를 드립니다. 빠른 문의는 상단 '문의하기'에서 카카오톡 플러스 친구를 이용해 주세요."
  }
];

export default function FAQPage() {
  return (
    <div className="min-h-screen bg-[#fafafa] text-slate-900">
      <header className="sticky top-0 z-50 border-b border-slate-200/60 bg-[#fafafa]/90 backdrop-blur-xl">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-5 py-3 sm:px-8">
          <Link href="/" className="flex items-center gap-2">
            <img src="/daechiroot-logo.png" alt="대치루트" className="h-6 w-6 object-contain" />
            <span className="text-sm font-semibold tracking-tight text-slate-900">대치루트</span>
          </Link>
          <nav className="flex items-center gap-6 text-[13px] text-slate-600">
            <Link href="/" className="transition hover:text-slate-900">홈</Link>
            <a href="/#products" className="transition hover:text-slate-900">서비스</a>
            <Link href="/faq" className="transition hover:text-slate-900">자주 묻는 질문</Link>
            <Link
              href="/inquiry"
              className="rounded-full bg-slate-900 px-4 py-2 text-[13px] font-medium text-white transition hover:bg-slate-800"
            >
              문의하기
            </Link>
          </nav>
        </div>
      </header>

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

        <div className="mt-12 text-center">
          <Link
            href="/inquiry"
            className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-slate-800"
          >
            문의하기 (카카오톡)
          </Link>
        </div>
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
