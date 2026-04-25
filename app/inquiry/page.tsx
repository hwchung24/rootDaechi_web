import Link from "next/link";
import { AppHeader } from "@/components/AppHeader";
import { SiteFooter } from "@/components/SiteFooter";

const KAKAO_PLUS_FRIEND_URL = process.env.NEXT_PUBLIC_KAKAO_PLUS_FRIEND_URL || "";
const KAKAO_PLUS_FRIEND_NAME = process.env.NEXT_PUBLIC_KAKAO_PLUS_FRIEND_NAME || "대치루트";

export default function InquiryPage() {
  return (
    <div className="min-h-screen bg-[#f8f9fa] text-slate-900">
      <AppHeader>
        <Link href="/" className="transition hover:text-slate-900">
          홈
        </Link>
      </AppHeader>

      <main className="mx-auto max-w-[1280px] px-6 py-16 md:px-12 md:py-20">
        <div className="mb-10 text-center sm:mb-12">
          <h1 className="text-3xl font-bold tracking-tight text-[#111827] sm:text-4xl">무료 상담 신청</h1>
          <p className="mx-auto mt-3 max-w-xl whitespace-pre-line text-sm text-[#6B7280] sm:text-[15px]">
            {"패키지 선택부터 세팅까지, 전문 상담사가 직접 안내드립니다.\n평일 오전 10시 ~ 오후 7시 운영 · 주말·공휴일 휴무"}
          </p>
        </div>

        <section className="rounded-3xl border border-[#E5E7EB] bg-white p-6 sm:p-8">
          <h2 className="text-lg font-semibold text-[#111827]">카카오톡으로 바로 문의하기</h2>
          <p className="mt-2 text-sm text-[#6B7280]">카카오톡에서 '대치루트'를 검색하거나 아래 채널을 추가해 주세요.</p>
          <div className="mt-5 rounded-2xl border border-[#E5E7EB] bg-[#f8f9fa] p-6 text-center">
            <p className="text-[13px] font-medium tracking-wide text-[#6B7280]">채널명</p>
            <p className="mt-2 text-2xl font-bold text-[#111827]">「{KAKAO_PLUS_FRIEND_NAME}」</p>
            {KAKAO_PLUS_FRIEND_URL ? (
              <a
                href={KAKAO_PLUS_FRIEND_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mx-auto mt-5 inline-flex rounded-full bg-[#FEE500] px-6 py-3 text-[15px] font-semibold text-[#191919] transition hover:bg-[#fcdc00]"
              >
                카카오톡 채널 추가하기
              </a>
            ) : null}
          </div>
          <p className="mt-5 text-center text-xs text-[#6B7280]">세팅·매입 신청은 각 서비스 페이지에서 진행해주세요.</p>
          <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link href="/phone" className="inline-flex rounded-[10px] bg-[#1B2A4A] px-6 py-3 text-sm font-semibold text-white">
              대치폰 패키지 보기 →
            </Link>
            <Link href="/gillo-tab-rental" className="inline-flex rounded-[10px] border border-[#E5E7EB] px-6 py-3 text-sm font-semibold text-[#111827]">
              대치탭 패키지 보기 →
            </Link>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
