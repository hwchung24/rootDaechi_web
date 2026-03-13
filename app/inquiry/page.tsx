"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { AppHeader } from "@/components/AppHeader";

const KAKAO_PLUS_FRIEND_URL = process.env.NEXT_PUBLIC_KAKAO_PLUS_FRIEND_URL || "";
const KAKAO_PLUS_FRIEND_NAME = process.env.NEXT_PUBLIC_KAKAO_PLUS_FRIEND_NAME || "대치루트";

const fadeInUp = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4 } }
};

export default function InquiryPage() {
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

      <main className="mx-auto max-w-xl px-5 py-16 sm:px-8 sm:py-24">
        <motion.section
          variants={fadeInUp}
          initial="hidden"
          animate="show"
          className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm sm:p-10"
        >
          <div className="text-center">
            <h1 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
              문의하기
            </h1>
            <p className="mt-3 text-sm text-slate-600">
              카카오톡 플러스 친구로 추가하시면 편하게 문의하실 수 있습니다.
            </p>
          </div>

          <div className="mt-8 rounded-2xl border border-slate-200 bg-[#fafafa] p-6">
            <p className="text-center text-xs font-medium uppercase tracking-wider text-slate-500">
              카카오톡 플러스 친구
            </p>
            <p className="mt-2 text-center text-xl font-bold text-slate-900">
              {KAKAO_PLUS_FRIEND_NAME}
            </p>
            {KAKAO_PLUS_FRIEND_URL ? (
              <a
                href={KAKAO_PLUS_FRIEND_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 flex w-full items-center justify-center gap-2 rounded-full bg-[#FEE500] px-6 py-3.5 text-[15px] font-semibold text-[#191919] transition hover:bg-[#fcdc00]"
              >
                <span>카카오톡</span>
                <span>친구 추가하기</span>
              </a>
            ) : (
              <p className="mt-4 text-center text-sm text-slate-500">
                카카오톡에서 <strong className="text-slate-700">「{KAKAO_PLUS_FRIEND_NAME}」</strong> 플러스 친구를 검색해 추가해 주세요.
              </p>
            )}
          </div>

          <p className="mt-6 text-center text-xs text-slate-500">
            세팅·매입 신청은 서비스 페이지에서 해당 세팅을 선택해 신청해 주시면, 연락처로 상담 안내를 드립니다.
          </p>
        </motion.section>
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
