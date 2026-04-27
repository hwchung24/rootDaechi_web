import Link from "next/link";
import { homePhoneBridgeTeaserSection } from "@/lib/evidenceSections";

export function HomePhoneBridgeTeaser() {
  return (
    <section className="bg-[#FAFAFA] py-12 md:py-16">
      <div className="mx-auto max-w-6xl px-6 sm:px-8">
        <div className="rounded-3xl border border-[#E5E7EB] bg-white px-6 py-8 md:px-10 md:py-10">
          <h2 className="text-center text-[22px] font-semibold tracking-[-0.02em] text-[#111827] md:text-[32px]">
            {homePhoneBridgeTeaserSection.title}
          </h2>
          <p className="mx-auto mt-4 max-w-[900px] break-keep text-center text-[15px] leading-[1.8] text-[#6B7280]">
            {homePhoneBridgeTeaserSection.body}
          </p>

          <div className="mx-auto mt-8 grid max-w-[1000px] grid-cols-1 gap-3 md:grid-cols-3">
            {homePhoneBridgeTeaserSection.cards.map((card) => (
              <article key={card.title} className="rounded-2xl border border-[#E5E7EB] bg-[#FAFAFA] px-5 py-5">
                <p className="text-[13px] font-medium text-[#9CA3AF]">{card.title}</p>
                <p className="mt-2 break-keep text-[17px] font-semibold leading-[1.5] text-[#111827]">{card.value}</p>
              </article>
            ))}
          </div>

          <div className="mt-8 flex justify-center">
            <Link
              href={homePhoneBridgeTeaserSection.cta.href}
              className="inline-flex rounded-[10px] bg-[#1B2A4A] px-7 py-3 text-[14px] font-semibold text-white"
            >
              {homePhoneBridgeTeaserSection.cta.label}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
