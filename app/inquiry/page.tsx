"use client";

import { useState } from "react";
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
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorDetail, setErrorDetail] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!name.trim() || !phone.trim()) {
      setStatus("error");
      setErrorDetail("이름과 연락처를 입력해 주세요.");
      return;
    }
    setStatus("loading");
    setErrorDetail("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: name.trim(),
          phone: phone.trim(),
          concerns: message.trim() || "(문의 페이지 폼)",
          channel: "etc",
          grade: "문의 페이지",
          devices: "",
          preferredTime: ""
        })
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) {
        setStatus("error");
        setErrorDetail(
          typeof data.error === "string"
            ? data.error
            : "접수에 실패했습니다. 카카오톡으로 문의해 주세요."
        );
        return;
      }
      setStatus("success");
      setName("");
      setPhone("");
      setMessage("");
    } catch {
      setStatus("error");
      setErrorDetail("네트워크 오류가 발생했습니다. 카카오톡으로 문의해 주세요.");
    }
  }

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

        <div className="grid gap-8 lg:grid-cols-2 lg:gap-10">
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

          <motion.section
            variants={fadeInUp}
            initial="hidden"
            animate="show"
            className="rounded-3xl border border-slate-200 bg-white p-6 shadow-md sm:p-8"
          >
            <h2 className="text-sm font-semibold text-slate-900">문의 남기기</h2>
            <p className="mt-1 text-xs text-slate-500">이름·연락처·문의 내용을 남겨 주시면 순차적으로 연락드립니다.</p>

            {status === "success" ? (
              <div
                className="mt-6 rounded-xl border border-navy-200 bg-navy-50 px-4 py-4 text-sm text-navy-900"
                role="status"
              >
                문의가 접수되었습니다. 1영업일 내 연락드리겠습니다.
              </div>
            ) : null}

            {status === "error" && errorDetail ? (
              <div className="mt-6 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-800" role="alert">
                {errorDetail}
              </div>
            ) : null}

            <form onSubmit={handleSubmit} className="mt-6 space-y-4">
              <div>
                <label htmlFor="inquiry-name" className="block text-xs font-medium text-slate-700">
                  이름
                </label>
                <input
                  id="inquiry-name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="mt-1.5 w-full rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none ring-navy-500/0 transition focus:border-navy-400 focus:ring-2 focus:ring-navy-500/20"
                  placeholder="홍길동"
                />
              </div>
              <div>
                <label htmlFor="inquiry-phone" className="block text-xs font-medium text-slate-700">
                  연락처
                </label>
                <input
                  id="inquiry-phone"
                  name="phone"
                  type="tel"
                  autoComplete="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="mt-1.5 w-full rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none transition focus:border-navy-400 focus:ring-2 focus:ring-navy-500/20"
                  placeholder="010-0000-0000"
                />
              </div>
              <div>
                <label htmlFor="inquiry-message" className="block text-xs font-medium text-slate-700">
                  문의 내용
                </label>
                <textarea
                  id="inquiry-message"
                  name="message"
                  rows={4}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="mt-1.5 w-full resize-y rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none transition focus:border-navy-400 focus:ring-2 focus:ring-navy-500/20"
                  placeholder="학년, 관심 패키지, 상담 희망 시간 등을 적어 주세요."
                />
              </div>
              <button
                type="submit"
                disabled={status === "loading"}
                className="w-full rounded-full bg-navy-700 py-3.5 text-[14px] font-semibold text-white shadow-sm transition hover:bg-navy-800 disabled:opacity-60"
              >
                {status === "loading" ? "전송 중…" : "문의 보내기"}
              </button>
            </form>
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
