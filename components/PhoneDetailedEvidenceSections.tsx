import { Bell, CalendarCheck, MessageCircle, Moon, ShieldCheck } from "lucide-react";
import { homeEvidenceSection, phoneEvidenceSection } from "@/lib/evidenceSections";

export function PhoneDetailedEvidenceSections() {
  return (
    <>
      <section className="bg-white py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-6 sm:px-12">
          <p className="text-center text-[13px] font-medium uppercase tracking-[0.05em] text-[#9CA3AF]">실제 변화 데이터</p>
          <h2 className="mt-3 text-center text-2xl md:text-4xl leading-snug break-keep font-semibold tracking-[-0.02em] text-[#111827]">
            {phoneEvidenceSection.featureImpact.title}
          </h2>
          <p className="mx-auto mt-4 max-w-[820px] whitespace-pre-line break-keep text-center text-[15px] leading-[1.8] text-[#6B7280]">
            {phoneEvidenceSection.featureImpact.description}
          </p>
          <div className="mx-auto mt-12 grid max-w-[1100px] grid-cols-1 gap-4 lg:grid-cols-3">
            {phoneEvidenceSection.featureImpact.cards.map((card, index) => {
              const Icon = index === 0 ? ShieldCheck : index === 1 ? Bell : CalendarCheck;

              return (
              <article key={card.title} className="rounded-2xl border border-[#E5E7EB] bg-white px-8 py-8 transition hover:border-[#D1D5DB]">
                <Icon className="mb-5 h-7 w-7 text-[#1B2A4A]" strokeWidth={1.5} aria-hidden />
                <h3 className="break-keep text-[20px] font-semibold leading-[1.5] text-[#111827]">{card.title}</h3>
                <p className="mt-3 whitespace-pre-line break-keep text-[15px] leading-[1.8] text-[#6B7280]">{card.body}</p>
                <div className="mt-5 border-t border-[#F3F4F6] pt-4">
                  {card.metrics.map((metric) => (
                    <div key={`${card.title}-${metric.label}`} className="mb-2.5 last:mb-0">
                      <p className="text-[12px] text-[#9CA3AF]">{metric.label}</p>
                      <p className="mt-1 text-[18px] font-semibold text-[#111827]">{metric.value}</p>
                    </div>
                  ))}
                </div>
                <p className="mt-5 border-t border-[#F3F4F6] pt-4 text-[13px] text-[#9CA3AF]">{card.sub}</p>
              </article>
            )})}
          </div>
        </div>
      </section>

      <section className="bg-[#FAFAFA] py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-6 sm:px-12">
          <p className="text-center text-[13px] font-medium uppercase tracking-[0.05em] text-[#9CA3AF]">사용자 사례</p>
          <h2 className="mt-3 text-center text-2xl md:text-4xl leading-snug break-keep font-semibold tracking-[-0.02em] text-[#111827]">
            {homeEvidenceSection.cases.title}
          </h2>
          <p className="mx-auto mt-4 max-w-[820px] whitespace-pre-line break-keep text-center text-[15px] leading-[1.8] text-[#6B7280]">
            {phoneEvidenceSection.socialProof.intro}
          </p>
          <div className="mx-auto mt-12 grid max-w-[1100px] grid-cols-1 gap-4 lg:grid-cols-3">
            {homeEvidenceSection.cases.items.map((item, index) => {
              const CaseIcon = index === 0 ? Moon : index === 1 ? MessageCircle : CalendarCheck;

              return (
              <article key={item.title} className="rounded-2xl border border-[#E5E7EB] bg-white px-7 py-7 transition hover:border-[#D1D5DB]">
                <CaseIcon className="mb-5 h-7 w-7 text-[#1B2A4A]" strokeWidth={1.5} aria-hidden />
                <h3 className="mt-4 break-keep text-[19px] font-semibold leading-[1.5] text-[#111827]">{item.title}</h3>
                <div className="mt-5 space-y-4">
                  <div>
                    <p className="text-[11px] font-semibold uppercase tracking-wide text-[#9CA3AF]">사용 전</p>
                    <p className="mt-1.5 break-keep text-[14px] leading-[1.7] text-[#6B7280]">{item.before}</p>
                  </div>
                  <div>
                    <p className="text-[11px] font-semibold uppercase tracking-wide text-[#1B2A4A]">사용 후</p>
                    <p className="mt-1.5 break-keep text-[14px] leading-[1.7] text-[#6B7280]">{item.after}</p>
                  </div>
                </div>
                <p className="mt-5 border-t border-[#E5E7EB] pt-4 text-[14px] font-semibold text-[#111827]">{item.metric}</p>
                <p className="mt-1 text-[13px] text-[#6B7280]">가장 만족한 기능: {item.bestFeature}</p>
              </article>
            )})}
          </div>

        </div>
      </section>
    </>
  );
}
