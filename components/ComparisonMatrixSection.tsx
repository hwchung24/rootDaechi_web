"use client";

import { motion } from "framer-motion";
import { Check, X } from "lucide-react";

const ROWS: { label: string; general: string; daechiroot: string }[] = [
  { label: "기기", general: "저가 피처폰·보급형", daechiroot: "S급 아이폰·아이패드" },
  { label: "관리", general: "일률 차단·잠금", daechiroot: "생활 맞춤 1:1" },
  { label: "약정", general: "2년+ · 위약금", daechiroot: "약정 없음" },
  { label: "보안", general: "우회에 취약", daechiroot: "Apple MDM" },
  { label: "경험", general: "갈등·피로", daechiroot: "몰입 환경" }
];

export function ComparisonMatrixSection() {
  return (
    <section className="snap-none border-b border-slate-200/60 bg-white" aria-labelledby="comparison-matrix-heading">
      <div className="mx-auto max-w-5xl px-5 py-12 sm:px-8 sm:py-16">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.45 }}
        >
          <h2 id="comparison-matrix-heading" className="text-lg font-semibold tracking-tight text-slate-900 sm:text-xl">
            기존의 공부폰 vs 대치루트
          </h2>

          <div className="mt-5 overflow-x-auto rounded-xl border border-slate-200">
            <table className="w-full min-w-[600px] border-collapse text-left text-sm">
              <thead>
                <tr className="border-b border-slate-200 bg-slate-50">
                  <th className="whitespace-nowrap px-4 py-3 font-semibold text-slate-900">항목</th>
                  <th className="whitespace-nowrap px-4 py-3 font-semibold text-slate-600">기존의 공부폰</th>
                  <th className="whitespace-nowrap border-l-2 border-navy-200 bg-navy-50 px-4 py-3 font-semibold text-navy-900">
                    대치루트
                  </th>
                </tr>
              </thead>
              <tbody>
                {ROWS.map((row) => (
                  <tr key={row.label} className="border-b border-slate-100 last:border-0">
                    <td className="bg-slate-50/80 px-4 py-3.5 font-medium text-slate-800">{row.label}</td>
                    <td className="px-4 py-3.5 text-slate-600">
                      <span className="flex items-start gap-2">
                        <X className="mt-0.5 h-4 w-4 shrink-0 text-red-500" strokeWidth={2.5} aria-hidden />
                        <span>{row.general}</span>
                      </span>
                    </td>
                    <td className="border-l-2 border-navy-100 bg-navy-50/90 px-4 py-3.5 text-slate-800">
                      <span className="flex items-start gap-2">
                        <Check className="mt-0.5 h-4 w-4 shrink-0 text-navy-600" strokeWidth={2.5} aria-hidden />
                        <span>{row.daechiroot}</span>
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
