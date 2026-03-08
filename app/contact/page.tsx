 "use client";

import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 0.61, 0.36, 1] } }
};

export default function ContactPage() {
  return (
    <main className="mx-auto max-w-3xl px-4 pb-32 pt-20 sm:px-6 sm:pt-24 lg:px-8">
      <motion.section
        variants={fadeInUp}
        initial="hidden"
        animate="show"
        className="space-y-8 rounded-3xl border border-slate-200 bg-white px-6 py-8 shadow-soft sm:px-10 sm:py-10"
      >
        <div className="space-y-3">
          <p className="text-xs font-medium uppercase tracking-[0.18em] text-slate-500">
            상담 신청
          </p>
          <h1 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
            학습용 공신폰 세팅을 위해
            <br />
            몇 가지만 확인하겠습니다.
          </h1>
          <p className="text-sm leading-relaxed text-slate-600 sm:text-[15px]">
            아래 항목은 모두 필수가 아닙니다. 가능한 범위에서만 적어 주시면, 남겨주신 정보를 기반으로{" "}
            <span className="font-semibold text-slate-900">
              적용 가능한 공신폰 세팅 범위와 방식
            </span>
            을 정리해 드립니다.
          </p>
        </div>

        <form className="space-y-6">
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="space-y-1.5">
              <label className="text-xs font-medium text-slate-700">
                이름
              </label>
              <input
                type="text"
                className="w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-sm text-slate-900 outline-none ring-0 transition focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-100"
                placeholder="예) 홍길동"
              />
            </div>
            <div className="space-y-1.5">
              <label className="text-xs font-medium text-slate-700">
                학년 / 수험생 단계
              </label>
              <input
                type="text"
                className="w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-sm text-slate-900 outline-none ring-0 transition focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-100"
                placeholder="예) 중2 / 고1"
              />
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="space-y-1.5">
              <label className="text-xs font-medium text-slate-700">
                연락 가능한 번호
              </label>
              <input
                type="tel"
                className="w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-sm text-slate-900 outline-none ring-0 transition focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-100"
                placeholder="예) 010-1234-5678"
              />
            </div>
            <div className="space-y-1.5">
              <label className="text-xs font-medium text-slate-700">
                선호 상담 채널
              </label>
              <select
                className="w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-sm text-slate-900 outline-none ring-0 transition focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-100"
                defaultValue="kakao"
              >
                <option value="kakao">카카오톡 (추천)</option>
                <option value="phone">전화 통화</option>
                <option value="etc">기타 (메모에 적기)</option>
              </select>
            </div>
          </div>

          <div className="space-y-1.5">
            <label className="text-xs font-medium text-slate-700">
              사용 중인 기기
            </label>
            <div className="grid gap-2 sm:grid-cols-2">
              <label className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-xs text-slate-700">
                <input type="checkbox" className="rounded border-slate-300 text-blue-500" />
                <span>아이폰 (iOS)</span>
              </label>
              <label className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-xs text-slate-700">
                <input type="checkbox" className="rounded border-slate-300 text-blue-500" />
                <span>안드로이드 (갤럭시 등)</span>
              </label>
            </div>
          </div>

          <div className="space-y-1.5">
            <label className="text-xs font-medium text-slate-700">
              현재 걱정되는 점
            </label>
            <textarea
              className="min-h-[96px] w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-sm text-slate-900 outline-none ring-0 transition focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-100"
              placeholder="예) 새벽까지 유튜브/틱톡을 봅니다, 인강 앱을 켜둔 채로 다른 앱으로 자주 넘어갑니다 등"
            />
          </div>

          <div className="space-y-1.5">
            <label className="text-xs font-medium text-slate-700">
              선호 상담 시간대 (선택)
            </label>
            <input
              type="text"
              className="w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-sm text-slate-900 outline-none ring-0 transition focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-100"
              placeholder="예) 평일 저녁 7시 이후, 토요일 오후 등"
            />
          </div>

          <div className="pt-2">
            <button
              type="button"
              className="inline-flex w-full items-center justify-center rounded-full bg-blue-500 px-6 py-3 text-sm font-semibold tracking-tight text-white shadow-soft transition hover:bg-blue-600 sm:w-auto"
            >
              상담 신청 요청 보내기
            </button>
            <p className="mt-2 text-[11px] leading-relaxed text-slate-500">
              실제 상담은 남겨주신 연락처로 1:1로 진행됩니다. 이 페이지는{" "}
              <span className="font-semibold text-slate-700">사전 정보를 정리하는 용도</span>로
              활용하셔도 좋습니다.
            </p>
          </div>
        </form>
      </motion.section>
    </main>
  );
}

