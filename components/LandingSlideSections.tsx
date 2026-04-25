"use client";

import { motion } from "framer-motion";
import { BellRing, Brain, CheckCircle2, Lock, MapPin } from "lucide-react";

type FeaturePoint = {
  id: string;
  point: string;
  theme: string;
  title: string;
  desc: string;
  visualTitle: string;
  visualRows: string[];
};

const FEATURE_POINTS: FeaturePoint[] = [
  {
    id: "focus",
    point: "POINT 01",
    theme: "집중 환경",
    title: "플래너 안 쓰면 폰이 안 켜집니다",
    desc: "개인화 플래닝을 계획에서 끝내지 않고 실행까지 연결합니다. 플래너 미작성 시 학습 외 앱 접근이 자동 제한됩니다.",
    visualTitle: "집중 모드",
    visualRows: ["플래너 제출 전 잠금", "인강 앱만 허용", "유튜브·SNS 자동 차단"]
  },
  {
    id: "location",
    point: "POINT 02",
    theme: "위치 추적",
    title: "어디 있어? 이제 묻지 않아도 됩니다",
    desc: "독서실·학원 도착/출발 체크인·아웃이 자동 기록됩니다. 부모에게 실시간 알림이 전달되어 이동 동선이 선명해집니다.",
    visualTitle: "체크인 알림",
    visualRows: ["독서실 도착 18:03", "학원 출발 21:58", "부모 카톡 실시간 전송"]
  },
  {
    id: "report",
    point: "POINT 03",
    theme: "학부모 리포트",
    title: "잔소리 대신 데이터, 갈등이 사라집니다",
    desc: "학습 시간·앱 사용·루틴 지표를 카카오톡 리포트로 전달합니다. 감정이 아닌 데이터로 대화할 수 있게 도와드립니다.",
    visualTitle: "주간 리포트",
    visualRows: ["순공 시간 42h", "앱 우회 시도 0회", "이번 주 루틴 달성률 88%"]
  },
  {
    id: "ai",
    point: "POINT 04",
    theme: "AI 코칭",
    title: "새벽 2시 수학 문제도 즉시 해결",
    desc: "24시간 AI 코칭이 막히는 문제를 즉시 해설하고, 취약 단원을 기반으로 다음 학습까지 이어서 제안합니다.",
    visualTitle: "AI 튜터링",
    visualRows: ["질문 응답 평균 12초", "수능형 풀이 단계 제공", "취약 단원 자동 복습 추천"]
  }
];

function PointVisual({ point }: { point: FeaturePoint }) {
  const Icon = point.id === "focus" ? Lock : point.id === "location" ? MapPin : point.id === "report" ? BellRing : Brain;
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm sm:p-5">
      <div className="flex items-center gap-2">
        <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-navy-50 text-navy-700">
          <Icon className="h-4 w-4" strokeWidth={2} />
        </span>
        <p className="text-sm font-semibold text-slate-900">{point.visualTitle}</p>
      </div>
      <div className="mt-3 space-y-2">
        {point.visualRows.map((row) => (
          <div key={row} className="flex items-center gap-2 rounded-lg bg-slate-50 px-2.5 py-2">
            <CheckCircle2 className="h-3.5 w-3.5 shrink-0 text-emerald-500" strokeWidth={2} />
            <p className="text-[12px] text-slate-600 sm:text-[13px]">{row}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export function LandingSlideSections() {
  return (
    <section className="snap-none border-y border-slate-200/80 bg-white" aria-labelledby="landing-features-heading">
      <div className="mx-auto max-w-6xl px-5 py-12 sm:px-8 sm:py-16 lg:py-20">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.45 }}
          className="text-center"
        >
          <h2 id="landing-features-heading" className="text-2xl font-bold tracking-tight text-slate-900 sm:text-[1.65rem]">
            기능 소개
          </h2>
          <p className="mt-2 text-sm text-slate-500">핵심 4포인트를 스크롤 흐름으로 확인하세요</p>
        </motion.div>

        <div className="mt-10 space-y-5 sm:space-y-6">
          {FEATURE_POINTS.map((point, i) => {
            const reverse = i % 2 === 1;
            return (
              <motion.article
                key={point.id}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.45, delay: i * 0.06 }}
                className="rounded-3xl border border-slate-200/80 bg-[#f8f8f9] p-5 sm:p-7"
              >
                <div className={`grid items-center gap-6 lg:grid-cols-2 ${reverse ? "lg:[&>*:first-child]:order-2" : ""}`}>
                  <div>
                    <p className="text-[12px] font-bold uppercase tracking-[0.08em] text-navy-700">
                      {point.point} · {point.theme}
                    </p>
                    <h3 className="mt-2 text-xl font-bold tracking-tight text-slate-900 sm:text-2xl">{point.title}</h3>
                    <p className="mt-3 text-[15px] leading-relaxed text-slate-600 sm:text-base">{point.desc}</p>
                  </div>
                  <PointVisual point={point} />
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
