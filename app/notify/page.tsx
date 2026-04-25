"use client";

import { FormEvent, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { AppHeader } from "@/components/AppHeader";

type SubmitState = "idle" | "submitting" | "success" | "error";

const fadeInUp = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4 } }
};

export default function NotifyPage() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [state, setState] = useState<SubmitState>("idle");
  const [message, setMessage] = useState("");

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!name.trim() || !phone.trim()) {
      setState("error");
      setMessage("이름과 전화번호를 입력해 주세요.");
      return;
    }

    try {
      setState("submitting");
      setMessage("");
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: name.trim(),
          phone: phone.trim(),
          channel: "phone",
          concerns: "알림 신청",
          preferredTime: "미지정"
        })
      });

      const data = (await response.json()) as { error?: string };
      if (!response.ok) {
        throw new Error(data.error || "알림 신청 접수에 실패했습니다.");
      }

      setState("success");
      setMessage("알림 신청이 완료되었습니다. 곧 연락드릴게요.");
      setName("");
      setPhone("");
    } catch (error) {
      setState("error");
      setMessage(error instanceof Error ? error.message : "알림 신청 접수에 실패했습니다.");
    }
  };

  return (
    <div className="min-h-screen bg-[#f8f9fa] text-slate-900">
      <AppHeader>
        <Link href="/" className="transition hover:text-slate-900">
          홈
        </Link>
      </AppHeader>

      <main className="mx-auto max-w-3xl px-5 py-16 sm:px-8 sm:py-20">
        <motion.div variants={fadeInUp} initial="hidden" animate="show" className="mb-10 text-center sm:mb-12">
          <h1 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">알림 신청</h1>
          <p className="mx-auto mt-3 max-w-xl text-sm text-slate-600 sm:text-[15px]">
            이름과 전화번호를 남겨주시면 출시 및 주요 소식을 먼저 안내해 드립니다.
          </p>
        </motion.div>

        <motion.section
          variants={fadeInUp}
          initial="hidden"
          animate="show"
          className="rounded-3xl border border-slate-200 bg-white p-6 shadow-md sm:p-8"
        >
          <form onSubmit={onSubmit} className="space-y-5">
            <div>
              <label htmlFor="name" className="mb-2 block text-sm font-medium text-slate-700">
                이름
              </label>
              <input
                id="name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="이름을 입력해 주세요"
                className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-navy-700"
                autoComplete="name"
              />
            </div>

            <div>
              <label htmlFor="phone" className="mb-2 block text-sm font-medium text-slate-700">
                전화번호
              </label>
              <input
                id="phone"
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="010-0000-0000"
                className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-navy-700"
                autoComplete="tel"
              />
            </div>

            <button
              type="submit"
              disabled={state === "submitting"}
              className="inline-flex min-h-[48px] w-full items-center justify-center rounded-full bg-navy-800 px-8 text-sm font-semibold text-white shadow-md shadow-navy-900/20 transition hover:bg-navy-900 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {state === "submitting" ? "접수 중..." : "알림 신청하기"}
            </button>
          </form>

          {message ? (
            <p className={`mt-4 text-sm ${state === "success" ? "text-emerald-600" : "text-rose-600"}`}>{message}</p>
          ) : null}
        </motion.section>
      </main>
    </div>
  );
}
