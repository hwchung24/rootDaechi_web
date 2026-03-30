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
    <div className="min-h-screen bg-[#f8f9fa] text-slate-900">
      <AppHeader>
        <Link href="/" className="transition hover:text-slate-900">
          홈
        </Link>
      </AppHeader>

      <main className="mx-auto max-w-5xl px-5 py-16 sm:px-8 sm:py-20">
        <motion.div variants={fadeInUp} initial="hidden" animate="show" className="mb-10 text-center sm:mb-12">
          <h1 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">무료 상담 신청</h1>
          <p className="mx-auto mt-3 max-w-xl text-sm text-slate-600 sm:text-[15px]">
            대치루트 전문 상담사가 학생의 상황에 맞는 패키지·구독 연장 방안을 안내해 드립니다.
          </p>
          <p className="mt-4 text-xs text-slate-500">
            평일 오전 10시 ~ 오후 7시 운영 · 주말·공휴일 휴무
          </p>
        </motion.div>

        <div className="grid gap-8">
          <motion.section
            variants={fadeInUp}
            initial="hidden"
            animate="show"
            className="rounded-3xl border border-slate-200 bg-white p-6 shadow-md sm:p-8"
          >
            <h2 className="text-sm font-semibold text-slate-900">카카오톡으로 빠른 문의</h2>
            <div className="mt-4 rounded-2xl border border-slate-200 bg-[#f8f9fa] p-6">
              <p className="text-center text-xs font-medium uppercase tracking-wider text-slate-500">
                카카오톡 플러스 친구
              </p>
              <p className="mt-2 text-center text-xl font-bold text-slate-900">{KAKAO_PLUS_FRIEND_NAME}</p>
              <p className="mt-3 text-center text-sm text-slate-600">
                카카오톡에서 <strong className="text-slate-800">「{KAKAO_PLUS_FRIEND_NAME}」</strong> 플러스 친구를 검색해
                추가해 주세요.
              </p>
              {KAKAO_PLUS_FRIEND_URL ? (
                <a
                  href={KAKAO_PLUS_FRIEND_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 flex w-full items-center justify-center gap-2 rounded-full bg-[#FEE500] px-6 py-3.5 text-[15px] font-semibold text-[#191919] transition hover:bg-[#fcdc00]"
                >
                  카카오톡 친구 추가하기
                </a>
              ) : null}
            </div>
            <p className="mt-6 text-center text-xs leading-relaxed text-slate-500">
              세팅·매입 신청은 서비스 페이지에서 해당 세팅을 선택해 신청해 주시면, 연락처로 상담 안내를 드립니다.
            </p>
          </motion.section>
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
