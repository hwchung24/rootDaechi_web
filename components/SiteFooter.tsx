"use client";

import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="snap-none border-t border-slate-200 bg-[#f4f6f8]">
      <div className="mx-auto max-w-6xl px-5 py-12 sm:px-8 sm:py-14">
        <div className="grid gap-10 border-b border-slate-200/90 pb-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-2.5">
              <img src="/daechiroot-logo.png" alt="대치루트 로고" className="h-6 w-6 object-contain opacity-90" />
              <span className="text-sm font-semibold tracking-tight text-slate-900">대치루트</span>
            </div>
            <p className="mt-4 text-[13px] leading-relaxed text-slate-600">수험생의 학습 환경을 설계합니다</p>
          </div>

          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.08em] text-slate-500">제품</p>
            <ul className="mt-4 space-y-2.5 text-[13px] text-slate-700">
              <li>
                <Link href="/phone" className="transition hover:text-slate-900">
                  대치폰
                </Link>
              </li>
              <li>
                <Link href="/management-subscription" className="transition hover:text-slate-900">
                  학습 관리 구독 연장
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.08em] text-slate-500">회사소개</p>
            <ul className="mt-4 space-y-2.5 text-[13px] text-slate-700">
              <li>
                <Link href="/about" className="transition hover:text-slate-900">
                  회사소개
                </Link>
              </li>
              <li>
                <a
                  href="https://blog.naver.com/matchooo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition hover:text-slate-900"
                >
                  블로그
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/daechiroot/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition hover:text-slate-900"
                >
                  인스타그램
                </a>
              </li>
            </ul>
          </div>

          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.08em] text-slate-500">문의하기</p>
            <ul className="mt-4 space-y-2.5 text-[13px] text-slate-700">
              <li>
                <Link href="/inquiry" className="transition hover:text-slate-900">
                  문의하기
                </Link>
              </li>
              <li>
                <Link href="/b2b" className="transition hover:text-slate-900">
                  B2B 제휴
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-5 text-[11px] leading-relaxed text-slate-500 sm:flex sm:items-start sm:justify-between">
          <div>
            <p className="mt-1 text-[12px] text-[#9CA3AF]">특허 출원 중 · 출원번호 10-2026-0068593</p>
            <p className="mt-2 text-[12px] text-[#9CA3AF]">사업자등록번호: 150-07-03484</p>
            <p className="text-[12px] text-[#9CA3AF]">대표: 정현우</p>
            <p className="text-[12px] text-[#9CA3AF]">대표 연락처: 01055810436</p>
            <p className="text-[12px] text-[#9CA3AF]">주소: 서울특별시 강남구 개포로 310</p>
            <p className="text-[12px] text-[#9CA3AF]">이메일: contact@daechiroot.com</p>
            <p className="text-[12px] text-[#9CA3AF]">카카오톡 상담: 평일 10:00 - 19:00</p>
          </div>
          <p className="mt-2 sm:mt-0">© {new Date().getFullYear()} daechiroot. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
