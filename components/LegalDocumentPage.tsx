"use client";

import Link from "next/link";
import { AppHeader } from "@/components/AppHeader";
import { SiteFooter } from "@/components/SiteFooter";
import type { LegalDocumentPart } from "@/lib/splitLegalContentWithTables";

function LegalTable({ rows }: { rows: string[][] }) {
  if (rows.length === 0) return null;
  const [header, ...body] = rows;
  return (
    <div className="my-6 overflow-x-auto rounded-lg border border-[#E5E7EB] bg-white">
      <table className="w-full min-w-[520px] border-collapse text-left text-[14px] leading-snug text-[#374151]">
        <thead>
          <tr className="border-b border-[#E5E7EB] bg-[#F9FAFB]">
            {header.map((cell, i) => (
              <th key={i} className="border-b border-[#E5E7EB] px-3 py-2.5 font-semibold text-[#111827]">
                {cell}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {body.map((row, ri) => (
            <tr key={ri} className="border-b border-[#F3F4F6] last:border-b-0">
              {row.map((cell, ci) => (
                <td key={ci} className="align-top px-3 py-2.5">
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

type LegalDocumentPageProps = {
  title: string;
  parts: LegalDocumentPart[];
};

export function LegalDocumentPage({ title, parts }: LegalDocumentPageProps) {
  return (
    <div className="min-h-screen bg-[#f8f9fa] text-slate-900">
      <AppHeader />
      <main className="py-10 md:py-14">
        <section className="mx-auto max-w-5xl px-6 sm:px-8">
          <div className="rounded-2xl border border-[#E5E7EB] bg-white p-6 md:p-10">
            <h1 className="text-2xl font-bold tracking-tight text-[#111827] md:text-3xl">{title}</h1>
            <p className="mt-2 text-sm text-[#6B7280]">주식회사 대치루트 「대치폰 환경」 문서 기준</p>
            <div className="mt-8 space-y-2">
              {parts.map((part, i) =>
                part.type === "text" ? (
                  <pre key={i} className="whitespace-pre-wrap break-keep font-sans text-[15px] leading-[1.9] text-[#374151]">
                    {part.text}
                  </pre>
                ) : (
                  <LegalTable key={i} rows={part.rows} />
                )
              )}
            </div>
            <div className="mt-8 border-t border-[#E5E7EB] pt-5 text-sm">
              <Link href="/daechi-phone" className="text-[#1B2A4A] underline underline-offset-4">
                대치폰 페이지로 돌아가기
              </Link>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
