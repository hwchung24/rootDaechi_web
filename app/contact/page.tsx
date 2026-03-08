"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 0.61, 0.36, 1] } }
};

export default function ContactPage() {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [errorDetail, setErrorDetail] = useState("");
  const [form, setForm] = useState({
    name: "",
    grade: "",
    phone: "",
    channel: "kakao",
    deviceIos: false,
    deviceAndroid: false,
    concerns: "",
    preferredTime: "",
    referrer: ""
  });

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("sending");
    setErrorMessage("");
    setErrorDetail("");

    const devices = [
      form.deviceIos && "아이폰 (iOS)",
      form.deviceAndroid && "안드로이드 (갤럭시 등)"
    ]
      .filter(Boolean)
      .join(", ");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name,
          grade: form.grade,
          phone: form.phone,
          channel: form.channel,
          devices,
          concerns: form.concerns,
          preferredTime: form.preferredTime,
          referrer: form.referrer
        })
      });

      const data = await res.json().catch(() => ({}));

      if (!res.ok) {
        setErrorMessage(data.error || "전송에 실패했습니다.");
        setErrorDetail(data.detail || "");
        setStatus("error");
        return;
      }

      setStatus("success");
      setForm({
        name: "",
        grade: "",
        phone: "",
        channel: "kakao",
        deviceIos: false,
        deviceAndroid: false,
        concerns: "",
        preferredTime: "",
        referrer: ""
      });
    } catch {
      setErrorMessage("네트워크 오류가 발생했습니다.");
      setErrorDetail("");
      setStatus("error");
    }
  }

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

        {status === "success" ? (
          <div className="rounded-2xl border border-green-200 bg-green-50 p-6 text-center">
            <p className="font-semibold text-green-800">요청이 접수되었습니다.</p>
            <p className="mt-2 text-sm text-green-700">
              남겨주신 연락처로 1:1 상담 안내 드리겠습니다.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="space-y-1.5">
                <label className="text-xs font-medium text-slate-700">이름</label>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={(e) => setForm((p) => ({ ...p, name: e.target.value }))}
                  className="w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-sm text-slate-900 outline-none ring-0 transition focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-100"
                  placeholder="예) 홍길동"
                />
              </div>
              <div className="space-y-1.5">
                <label className="text-xs font-medium text-slate-700">학년 / 수험생 단계</label>
                <input
                  type="text"
                  name="grade"
                  value={form.grade}
                  onChange={(e) => setForm((p) => ({ ...p, grade: e.target.value }))}
                  className="w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-sm text-slate-900 outline-none ring-0 transition focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-100"
                  placeholder="예) 중2 / 고1"
                />
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="space-y-1.5">
                <label className="text-xs font-medium text-slate-700">연락 가능한 번호</label>
                <input
                  type="tel"
                  name="phone"
                  value={form.phone}
                  onChange={(e) => setForm((p) => ({ ...p, phone: e.target.value }))}
                  className="w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-sm text-slate-900 outline-none ring-0 transition focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-100"
                  placeholder="예) 010-1234-5678"
                />
              </div>
              <div className="space-y-1.5">
                <label className="text-xs font-medium text-slate-700">선호 상담 채널</label>
                <select
                  name="channel"
                  value={form.channel}
                  onChange={(e) => setForm((p) => ({ ...p, channel: e.target.value }))}
                  className="w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-sm text-slate-900 outline-none ring-0 transition focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-100"
                >
                  <option value="kakao">카카오톡 (추천)</option>
                  <option value="phone">전화 통화</option>
                  <option value="etc">기타 (메모에 적기)</option>
                </select>
              </div>
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-medium text-slate-700">사용 중인 기기</label>
              <div className="grid gap-2 sm:grid-cols-2">
                <label className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-xs text-slate-700">
                  <input
                    type="checkbox"
                    checked={form.deviceIos}
                    onChange={(e) => setForm((p) => ({ ...p, deviceIos: e.target.checked }))}
                    className="rounded border-slate-300 text-blue-500"
                  />
                  <span>아이폰 (iOS)</span>
                </label>
                <label className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-xs text-slate-700">
                  <input
                    type="checkbox"
                    checked={form.deviceAndroid}
                    onChange={(e) => setForm((p) => ({ ...p, deviceAndroid: e.target.checked }))}
                    className="rounded border-slate-300 text-blue-500"
                  />
                  <span>안드로이드 (갤럭시 등)</span>
                </label>
              </div>
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-medium text-slate-700">현재 걱정되는 점</label>
              <textarea
                name="concerns"
                value={form.concerns}
                onChange={(e) => setForm((p) => ({ ...p, concerns: e.target.value }))}
                className="min-h-[96px] w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-sm text-slate-900 outline-none ring-0 transition focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-100"
                placeholder="예) 새벽까지 유튜브/틱톡을 봅니다, 인강 앱을 켜둔 채로 다른 앱으로 자주 넘어갑니다 등"
              />
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-medium text-slate-700">선호 상담 시간대 (선택)</label>
              <input
                type="text"
                name="preferredTime"
                value={form.preferredTime}
                onChange={(e) => setForm((p) => ({ ...p, preferredTime: e.target.value }))}
                className="w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-sm text-slate-900 outline-none ring-0 transition focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-100"
                placeholder="예) 평일 저녁 7시 이후, 토요일 오후 등"
              />
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-medium text-slate-700">추천인 (선택)</label>
              <input
                type="text"
                name="referrer"
                value={form.referrer}
                onChange={(e) => setForm((p) => ({ ...p, referrer: e.target.value }))}
                className="w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-sm text-slate-900 outline-none ring-0 transition focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-100"
                placeholder="추천해 주신 분 이름 또는 연락처"
              />
            </div>

            {status === "error" && (
              <div className="rounded-xl bg-red-50 px-3 py-2 text-sm text-red-700">
                <p className="font-medium">{errorMessage}</p>
                {errorDetail && <p className="mt-1 text-red-600">{errorDetail}</p>}
              </div>
            )}

            <div className="pt-2">
              <button
                type="submit"
                disabled={status === "sending"}
                className="inline-flex w-full items-center justify-center rounded-full bg-blue-500 px-6 py-3 text-sm font-semibold tracking-tight text-white shadow-soft transition hover:bg-blue-600 disabled:opacity-60 sm:w-auto"
              >
                {status === "sending" ? "전송 중…" : "상담 신청 요청 보내기"}
              </button>
              <p className="mt-2 text-[11px] leading-relaxed text-slate-500">
                실제 상담은 남겨주신 연락처로 1:1로 진행됩니다. 입력 내용은 Notion에 정리됩니다.
              </p>
            </div>
          </form>
        )}
      </motion.section>
    </main>
  );
}
