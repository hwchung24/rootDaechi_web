"use client";

import { useState, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import Link from "next/link";
import { motion } from "framer-motion";
import { AppHeader } from "@/components/AppHeader";

const SETTINGS: Record<string, { label: string; subtitle: string; price: string }> = {
  a: { label: "세팅 A", subtitle: "기본앱만", price: "4만 원 (3월 한정)" },
  b: { label: "세팅 B", subtitle: "기본앱 + 추가앱 옵션", price: "5만 원 (3월 한정)" },
  c: { label: "세팅 C", subtitle: "기본앱 + 앱 맞춤선택", price: "6만 원 (3월 한정)" }
};

const SETTING_B_APPS = [
  "vFlatscan",
  "메가스터디",
  "대성마이맥",
  "이투스",
  "오르비클래스",
  "큐브",
  "콴다",
  "토스",
  "카카오택시",
  "월렛 (삼성페이)",
  "카카오맵",
  "네이버 사전",
  "패스",
  "병무청"
];

const fadeInUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 0.61, 0.36, 1] } }
};

export default function GilloPhoneApplyPage() {
  const params = useParams();
  const router = useRouter();
  const settingId = typeof params.setting === "string" ? params.setting.toLowerCase() : "";
  const config = settingId ? SETTINGS[settingId] : null;

  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [errorDetail, setErrorDetail] = useState("");
  const [form, setForm] = useState({
    desiredDevice: "",
    name: "",
    grade: "",
    phone: "",
    channel: "kakao" as "kakao" | "phone" | "etc",
    deviceIos: false,
    deviceAndroid: false,
    settingBOptions: [] as string[],
    concerns: "",
    preferredTime: "",
    referrer: ""
  });

  function toggleSettingBApp(app: string) {
    setForm((p) => ({
      ...p,
      settingBOptions: p.settingBOptions.includes(app)
        ? p.settingBOptions.filter((x) => x !== app)
        : [...p.settingBOptions, app]
    }));
  }

  useEffect(() => {
    if (!config) router.replace("/gillo-phone");
  }, [config, router]);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!config) return;
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
          referrer: form.referrer,
          setting: config.label,
          applicationType: "대치폰 매입",
          desiredDevice: form.desiredDevice.trim(),
          ...(settingId === "b" && form.settingBOptions.length > 0
            ? { settingBOptions: form.settingBOptions.join(", ") }
            : {})
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
        desiredDevice: "",
        name: "",
        grade: "",
        phone: "",
        channel: "kakao",
        deviceIos: false,
        deviceAndroid: false,
        settingBOptions: [],
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

  if (!config) return null;

  return (
    <div className="min-h-screen bg-[#fafafa] text-slate-900">
      <AppHeader>
        <Link href="/" className="transition hover:text-slate-900">홈</Link>
        <Link href="/gillo-phone" className="transition hover:text-slate-900">대치폰</Link>
        <Link
          href="/inquiry"
          className="rounded-full bg-navy-800 px-4 py-2 text-[13px] font-medium text-white transition hover:bg-navy-900"
        >
          카카오톡 문의
        </Link>
      </AppHeader>

      <main className="mx-auto max-w-3xl px-5 pb-24 pt-10 sm:px-8 sm:pt-14">
        <motion.section
          variants={fadeInUp}
          initial="hidden"
          animate="show"
          className="space-y-8 rounded-3xl border border-slate-200 bg-white px-6 py-8 shadow-sm sm:px-10 sm:py-10"
        >
          <div className="space-y-3">
            <p className="text-xs font-medium uppercase tracking-[0.18em] text-navy-700">
              대치폰 매입 신청 · {config.label}
            </p>
            <h1 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
              {config.label} · {config.subtitle}
            </h1>
            <p className="text-lg font-semibold text-navy-600">{config.price}</p>
            <p className="text-sm leading-relaxed text-slate-600">
              매입 희망 기종과 연락처를 남겨주시면 해당 세팅으로 매입·세팅 상담 안내 드립니다.
            </p>
          </div>

          {status === "success" ? (
            <div className="rounded-2xl border border-navy-200 bg-navy-50 p-6 text-center">
              <p className="font-semibold text-navy-800">매입 신청이 접수되었습니다.</p>
              <p className="mt-2 text-sm text-navy-700">
                남겨주신 연락처로 {config.label} 매입·세팅 상담 안내 드리겠습니다.
              </p>
              <Link
                href="/gillo-phone"
                className="mt-4 inline-block text-sm font-medium text-navy-700 underline hover:text-navy-800"
              >
                대치폰 매입 소개로 돌아가기
              </Link>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="rounded-xl border-2 border-navy-200 bg-navy-50/50 p-4 sm:p-5">
                <label className="block text-sm font-semibold text-slate-900">
                  매입 희망 기종 <span className="text-red-500">*</span>
                </label>
                <p className="mt-0.5 text-xs text-slate-600">
                  어떤 기기를 매입해 세팅받을지 기종·용량을 적어 주세요.
                </p>
                <input
                  type="text"
                  name="desiredDevice"
                  value={form.desiredDevice}
                  onChange={(e) => setForm((p) => ({ ...p, desiredDevice: e.target.value }))}
                  className="mt-3 w-full rounded-xl border border-slate-200 bg-white px-3 py-2.5 text-sm text-slate-900 outline-none ring-0 transition focus:border-navy-500 focus:ring-2 focus:ring-navy-100"
                  placeholder="예: 갤럭시 S23 256GB, 아이폰 14 128GB"
                />
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-1.5">
                  <label className="text-xs font-medium text-slate-700">이름</label>
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={(e) => setForm((p) => ({ ...p, name: e.target.value }))}
                    className="w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-sm text-slate-900 outline-none ring-0 transition focus:border-navy-500 focus:bg-white focus:ring-2 focus:ring-navy-100"
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
                    className="w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-sm text-slate-900 outline-none ring-0 transition focus:border-navy-500 focus:bg-white focus:ring-2 focus:ring-navy-100"
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
                    className="w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-sm text-slate-900 outline-none ring-0 transition focus:border-navy-500 focus:bg-white focus:ring-2 focus:ring-navy-100"
                    placeholder="예) 010-1234-5678"
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="text-xs font-medium text-slate-700">선호 상담 채널</label>
                  <select
                    name="channel"
                    value={form.channel}
                    onChange={(e) =>
                      setForm((p) => ({ ...p, channel: e.target.value as "kakao" | "phone" | "etc" }))
                    }
                    className="w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-sm text-slate-900 outline-none ring-0 transition focus:border-navy-500 focus:bg-white focus:ring-2 focus:ring-navy-100"
                  >
                    <option value="kakao">카카오톡 (추천)</option>
                    <option value="phone">전화 통화</option>
                    <option value="etc">기타 (메모에 적기)</option>
                  </select>
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-medium text-slate-700">선호하는 기기 종류 (참고용)</label>
                <div className="grid gap-2 sm:grid-cols-2">
                  <label className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-xs text-slate-700">
                    <input
                      type="checkbox"
                      checked={form.deviceIos}
                      onChange={(e) => setForm((p) => ({ ...p, deviceIos: e.target.checked }))}
                      className="rounded border-slate-300 text-navy-600"
                    />
                    <span>아이폰 (iOS)</span>
                  </label>
                  <label className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-xs text-slate-700">
                    <input
                      type="checkbox"
                      checked={form.deviceAndroid}
                      onChange={(e) => setForm((p) => ({ ...p, deviceAndroid: e.target.checked }))}
                      className="rounded border-slate-300 text-navy-600"
                    />
                    <span>안드로이드 (갤럭시 등)</span>
                  </label>
                </div>
              </div>

              {settingId === "b" && (
                <div className="space-y-3">
                  <label className="block text-xs font-medium text-slate-700">
                    추가로 넣을 앱 선택 (원하는 것만 체크)
                  </label>
                  <div className="grid gap-2 rounded-xl border border-slate-200 bg-slate-50/50 p-3 sm:grid-cols-2 sm:gap-2 sm:p-4">
                    {SETTING_B_APPS.map((app) => (
                      <label
                        key={app}
                        className="inline-flex cursor-pointer items-center gap-2 rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm text-slate-700 transition hover:bg-slate-50"
                      >
                        <input
                          type="checkbox"
                          checked={form.settingBOptions.includes(app)}
                          onChange={() => toggleSettingBApp(app)}
                          className="rounded border-slate-300 text-navy-600"
                        />
                        <span>{app}</span>
                      </label>
                    ))}
                  </div>
                </div>
              )}

              <div className="space-y-1.5">
                <label className="text-xs font-medium text-slate-700">추가로 하고 싶은 말 (선택)</label>
                <textarea
                  name="concerns"
                  value={form.concerns}
                  onChange={(e) => setForm((p) => ({ ...p, concerns: e.target.value }))}
                  className="min-h-[80px] w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-sm text-slate-900 outline-none ring-0 transition focus:border-navy-500 focus:bg-white focus:ring-2 focus:ring-navy-100"
                  placeholder="예) 가능하면 256GB 이상으로 구하고 싶어요"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-medium text-slate-700">선호 상담 시간대 (선택)</label>
                <input
                  type="text"
                  name="preferredTime"
                  value={form.preferredTime}
                  onChange={(e) => setForm((p) => ({ ...p, preferredTime: e.target.value }))}
                  className="w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-sm text-slate-900 outline-none ring-0 transition focus:border-navy-500 focus:bg-white focus:ring-2 focus:ring-navy-100"
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
                  className="w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-sm text-slate-900 outline-none ring-0 transition focus:border-navy-500 focus:bg-white focus:ring-2 focus:ring-navy-100"
                  placeholder="추천해 주신 분 이름 또는 연락처"
                />
              </div>

              {status === "error" && (
                <div className="rounded-xl bg-red-50 px-3 py-2 text-sm text-red-700">
                  <p className="font-medium">{errorMessage}</p>
                  {errorDetail && <p className="mt-1 text-red-600">{errorDetail}</p>}
                </div>
              )}

              <div className="flex flex-col gap-3 pt-2 sm:flex-row sm:items-center">
                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="inline-flex w-full items-center justify-center rounded-full bg-navy-700 px-6 py-3 text-sm font-semibold tracking-tight text-white shadow-sm transition hover:bg-navy-800 disabled:opacity-60 sm:w-auto"
                >
                  {status === "sending" ? "전송 중…" : `${config.label} 매입 신청하기`}
                </button>
                <Link href="/gillo-phone" className="text-center text-sm text-slate-500 hover:text-slate-700">
                  세팅 선택으로 돌아가기
                </Link>
              </div>
              <p className="text-[11px] leading-relaxed text-slate-500">
                남겨주신 연락처로 1:1 상담 안내드립니다. 입력 내용은 Notion에 정리됩니다.
              </p>
            </form>
          )}
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
