import Link from "next/link";
import { AppHeader } from "@/components/AppHeader";
import { LandingHeroIPadVisual } from "@/components/LandingHeroIPadVisual";
import { SiteFooter } from "@/components/SiteFooter";
import { Shield, Smartphone, Wifi } from "lucide-react";

const highlights = [
  {
    title: "공식 기업용 MDM",
    body: "애플·삼성 공식 기업용 MDM 기술로 기기 정책을 안전하게 적용합니다.",
    Icon: Shield
  },
  {
    title: "앱·웹 원격 관리",
    body: "설치 앱과 웹 접근을 부모가 설정한 범위 안에서 관리할 수 있습니다.",
    Icon: Smartphone
  },
  {
    title: "가입형 구독",
    body: "기기 세팅 후 월 구독으로 이어가며, 상황에 맞게 조정할 수 있습니다.",
    Icon: Wifi
  }
];

const heroPrimaryLight =
  "inline-flex w-full items-center justify-center rounded-[10px] bg-white px-7 py-3.5 text-[15px] font-semibold text-[#1B2A4A] transition hover:bg-white/95 sm:w-auto sm:min-w-[11rem]";
const heroOutlineLight =
  "inline-flex w-full items-center justify-center rounded-[10px] border-2 border-white/55 bg-white/5 px-7 py-3.5 text-[15px] font-semibold text-white transition hover:bg-white/10 sm:w-auto sm:min-w-[11rem]";
const ctaPrimaryDark =
  "inline-flex w-full items-center justify-center rounded-[10px] bg-[#1B2A4A] px-7 py-3.5 text-[15px] font-semibold text-white transition hover:bg-[#13223F] sm:w-auto sm:min-w-[11rem]";

export default function DaechiPhonePage() {
  return (
    <div className="min-h-screen bg-[#f8f9fa] text-slate-900">
      <AppHeader>
        <Link href="/phone" className="transition hover:text-slate-900">
          대치폰 에듀
        </Link>
        <Link href="/parents" className="transition hover:text-slate-900">
          학부모
        </Link>
        <Link href="/students" className="transition hover:text-slate-900">
          학생
        </Link>
      </AppHeader>

      <main>
        <section className="snap-none border-b border-white/10 bg-[#13223F]">
          <div className="mx-auto min-h-auto max-w-6xl bg-[#13223F] px-6 py-12 md:min-h-[calc(100vh-7rem)] md:px-6 md:py-14 sm:px-12">
            <div className="grid min-h-0 items-center gap-10 lg:grid-cols-[55fr_45fr] lg:items-center lg:gap-12">
              <div className="order-1 mt-5 flex h-full w-full flex-col items-start justify-center text-left lg:mt-0">
                <div className="flex flex-wrap items-center gap-2">
                  <p className="inline-flex rounded-[8px] bg-white/10 px-[14px] py-[6px] text-[13px] font-medium text-white">대치폰</p>
                  <p className="inline-flex rounded-[8px] bg-[#EEF2FF]/20 px-[10px] py-[5px] text-[12px] font-medium text-white/90">
                    이용 가능
                  </p>
                </div>
                <h1 className="mt-5 break-keep text-[30px] font-bold leading-[1.25] tracking-[-0.03em] text-white md:text-[44px] md:leading-[1.15] lg:text-[52px]">
                  수험생 전용
                  <br />
                  차단 환경
                </h1>
                <p className="mt-5 max-w-xl whitespace-pre-line break-keep text-[17px] leading-[1.7] text-white/85">
                  {"애플 / 삼성 공식 기업용 MDM 기술 세팅\n자녀 앱 · 웹 원격 관리"}
                </p>
                <div className="mt-8 flex flex-col gap-3">
                  <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-stretch sm:gap-3">
                    <Link href="/inquiry" className={heroPrimaryLight}>
                      문의하기 →
                    </Link>
                    <Link href="/management-subscription" className={heroOutlineLight}>
                      구독 연장
                    </Link>
                  </div>
                  <Link href="/phone#phone-detail" className="text-[15px] font-medium text-white/75 underline-offset-4 hover:text-white hover:underline">
                    코칭·리포트까지 필요하다면 대치폰 에듀 보기 →
                  </Link>
                </div>
              </div>
              <div className="order-2 hidden h-full w-full items-center justify-center self-center lg:flex lg:justify-end">
                <div className="w-full max-w-[420px] md:max-w-[620px]">
                  <LandingHeroIPadVisual />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="daechi-phone-detail" className="bg-white py-16 md:py-24">
          <div className="mx-auto max-w-6xl px-6 sm:px-12">
            <p className="text-center text-[13px] font-medium uppercase tracking-[0.05em] text-[#9CA3AF]">대치폰</p>
            <h2 className="mt-3 text-center text-2xl font-semibold tracking-[-0.02em] text-[#111827] md:text-3xl">MDM으로 만드는 차단 환경</h2>
            <div className="mx-auto mt-12 grid max-w-[960px] grid-cols-1 gap-4 md:grid-cols-3 md:gap-5">
              {highlights.map(({ title, body, Icon }) => (
                <article key={title} className="rounded-2xl border border-[#E5E7EB] bg-[#FAFAFA] px-6 py-8">
                  <Icon className="h-7 w-7 text-[#1B2A4A]" strokeWidth={1.5} aria-hidden />
                  <p className="mt-4 text-[17px] font-semibold text-[#111827]">{title}</p>
                  <p className="mt-2 text-[15px] leading-[1.65] text-[#6B7280]">{body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="border-t border-[#E5E7EB] bg-[#FAFAFA] py-16 md:py-24">
          <div className="mx-auto max-w-xl px-6 text-center sm:px-8">
            <p className="text-[13px] font-medium uppercase tracking-[0.05em] text-[#9CA3AF]">이용 요금</p>
            <p className="mt-4 text-[18px] leading-relaxed text-[#374151]">
              기기 세팅 <span className="font-semibold text-[#111827]">39,000원</span>
              <span className="mx-2 text-[#D1D5DB]">·</span>
              월 <span className="font-semibold text-[#111827]">12,900원</span>
              <span className="text-[#9CA3AF]">(부가세 별도)</span>
            </p>
            <p className="mt-3 text-[14px] text-[#6B7280]">세부 조건은 상담 시 안내드립니다.</p>
            <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
              <Link href="/inquiry" className={ctaPrimaryDark}>
                상담 신청 →
              </Link>
              <Link
                href="/management-subscription"
                className="inline-flex w-full items-center justify-center rounded-[10px] border border-[#D1D5DB] bg-white px-7 py-3.5 text-[15px] font-semibold text-[#374151] transition hover:border-[#9CA3AF] sm:w-auto"
              >
                구독 연장 안내
              </Link>
            </div>
          </div>
        </section>

        <section className="bg-white py-12">
          <div className="mx-auto max-w-6xl px-6 sm:px-12">
            <p className="text-center text-[13px] font-medium uppercase tracking-[0.05em] text-[#9CA3AF]">약관 및 정책</p>
            <div className="mx-auto mt-6 grid max-w-[1200px] grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-6">
              <Link href="/daechi-phone/service-terms" className="rounded-xl border border-[#E5E7EB] px-5 py-4 text-center text-[14px] font-semibold text-[#1B2A4A] transition hover:border-[#1B2A4A]">
                서비스 이용약관
              </Link>
              <Link href="/daechi-phone/minor-terms" className="rounded-xl border border-[#E5E7EB] px-5 py-4 text-center text-[14px] font-semibold text-[#1B2A4A] transition hover:border-[#1B2A4A]">
                미성년자 관련 추가 약관
              </Link>
              <Link href="/daechi-phone/privacy-policy" className="rounded-xl border border-[#E5E7EB] px-5 py-4 text-center text-[14px] font-semibold text-[#1B2A4A] transition hover:border-[#1B2A4A]">
                개인정보처리방침
              </Link>
              <Link href="/daechi-phone/mdm-disclaimer" className="rounded-xl border border-[#E5E7EB] px-5 py-4 text-center text-[14px] font-semibold text-[#1B2A4A] transition hover:border-[#1B2A4A]">
                MDM 면책 조항
              </Link>
              <Link href="/daechi-phone/refund-policy" className="rounded-xl border border-[#E5E7EB] px-5 py-4 text-center text-[14px] font-semibold text-[#1B2A4A] transition hover:border-[#1B2A4A]">
                환불 정책
              </Link>
              <Link href="/daechi-phone/location-terms" className="rounded-xl border border-[#E5E7EB] px-5 py-4 text-center text-[14px] font-semibold text-[#1B2A4A] transition hover:border-[#1B2A4A]">
                위치정보 이용약관
              </Link>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
