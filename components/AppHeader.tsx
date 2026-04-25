"use client";

import React, { useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

type AppHeaderProps = {
  children?: React.ReactNode;
};

const ENTERPRISE_PATHS = new Set(["/", "/about", "/blog", "/b2b"]);
const PRODUCT_BASE_PATHS = ["/phone", "/tab", "/parents", "/students", "/pricing"];

export function AppHeader({ children }: AppHeaderProps) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [productMenuOpen, setProductMenuOpen] = useState(false);
  const productMenuRef = useRef<HTMLDivElement | null>(null);

  const isProductNav = useMemo(() => {
    if (!pathname) return false;
    return PRODUCT_BASE_PATHS.some((prefix) => pathname === prefix || pathname.startsWith(`${prefix}/`));
  }, [pathname]);

  const isEnterpriseNav = !isProductNav && (ENTERPRISE_PATHS.has(pathname || "") || !pathname);
  const navType = isProductNav ? "product" : isEnterpriseNav ? "enterprise" : "enterprise";

  useEffect(() => {
    setOpen(false);
    setProductMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!productMenuOpen) return;
    const handlePointerDown = (event: MouseEvent) => {
      const target = event.target as Node;
      if (!productMenuRef.current?.contains(target)) {
        setProductMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handlePointerDown);
    return () => {
      document.removeEventListener("mousedown", handlePointerDown);
    };
  }, [productMenuOpen]);

  const closeAll = () => {
    setOpen(false);
    setProductMenuOpen(false);
  };

  return (
    <>
      <header className="sticky top-0 z-50 border-b border-[#E5E7EB] bg-white">
        <div className="mx-auto flex h-[60px] max-w-[1280px] items-center justify-between px-6 md:px-12">
          <Link href="/" className="flex items-center gap-2.5" onClick={closeAll}>
            <img src="/daechiroot-logo.png" alt="대치루트" className="h-6 w-6 object-contain" />
            <span className="text-sm font-semibold tracking-tight text-[#111827]">대치루트</span>
            {navType === "product" ? (
              <>
                <span className="ml-1 text-[#D1D5DB]">|</span>
                <span className="text-[13px] font-semibold text-[#1B2A4A]">대치폰</span>
              </>
            ) : null}
          </Link>

          <nav className="hidden items-center text-[14px] text-[#6B7280] md:flex">
            {navType === "enterprise" ? (
              <>
                <div ref={productMenuRef} className="relative z-[60]">
                  <button
                    type="button"
                    className="inline-flex items-center gap-1.5 px-4 py-2 transition hover:text-[#111827]"
                    onClick={() => setProductMenuOpen((v) => !v)}
                    aria-expanded={productMenuOpen}
                  >
                    제품
                    <svg className="h-4 w-4" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                      <path d="M6.5 8L10 11.5L13.5 8" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </button>
                  {productMenuOpen ? (
                    <div className="absolute left-0 top-[calc(100%+8px)] z-[70] min-w-[180px] rounded-xl border border-[#E5E7EB] bg-white p-1.5 shadow-[0_10px_24px_rgba(17,24,39,0.08)]">
                      <Link
                        href="/phone"
                        className="block rounded-lg px-3 py-2 text-[14px] text-[#374151] hover:bg-[#F3F4F6]"
                        onClick={() => setProductMenuOpen(false)}
                      >
                        대치폰
                      </Link>
                      <Link
                        href="/tab"
                        className="block rounded-lg px-3 py-2 text-[14px] text-[#374151] hover:bg-[#F3F4F6]"
                        onClick={() => setProductMenuOpen(false)}
                      >
                        대치탭
                      </Link>
                    </div>
                  ) : null}
                </div>
                <Link href="/about" className="px-4 py-2 transition hover:text-[#111827]">
                  회사 소개
                </Link>
                <a
                  href="https://blog.naver.com/matchooo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 transition hover:text-[#111827]"
                >
                  블로그
                </a>
                <Link href="/b2b" className="px-4 py-2 transition hover:text-[#111827]">
                  B2B 제휴
                </Link>
              </>
            ) : (
              <>
                <Link href="/phone/parents" className="px-4 py-2 transition hover:text-[#111827]">
                  학부모
                </Link>
                <Link href="/phone/students" className="px-4 py-2 transition hover:text-[#111827]">
                  학생
                </Link>
                <Link href="/phone/pricing" className="px-4 py-2 transition hover:text-[#111827]">
                  패키지·가격
                </Link>
              </>
            )}
          </nav>

          <div className="hidden md:block">
            {navType === "enterprise" ? (
              <Link
                href="/phone"
                className="inline-flex items-center rounded-lg bg-[#1B2A4A] px-[18px] py-2 text-[13px] font-semibold text-white"
              >
                대치폰 보러가기 →
              </Link>
            ) : null}
          </div>

          <button
            type="button"
            aria-label={open ? "메뉴 닫기" : "메뉴 열기"}
            aria-expanded={open}
            className="flex h-10 w-10 items-center justify-center rounded-lg text-[#6B7280] transition hover:bg-slate-100 md:hidden"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? (
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </header>

      {open ? (
        <div className="fixed inset-0 z-[9999] bg-white md:hidden">
          <div className="flex h-[60px] items-center justify-between border-b border-[#E5E7EB] px-5">
            <span className="text-sm font-semibold text-[#111827]">{navType === "enterprise" ? "기업 메뉴" : "제품 메뉴"}</span>
            <button
              type="button"
              aria-label="메뉴 닫기"
              className="flex h-10 w-10 items-center justify-center rounded-lg text-[#6B7280]"
              onClick={closeAll}
            >
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <div className="flex h-[calc(100%-60px)] flex-col justify-between px-6 py-6">
            <nav className="space-y-1">
              {navType === "enterprise" ? (
                <>
                  <p className="pb-2 text-xs font-semibold uppercase tracking-[0.08em] text-[#9CA3AF]">제품</p>
                  <Link href="/phone" className="block rounded-lg px-3 py-3 text-[16px] text-[#111827]" onClick={closeAll}>
                    대치폰
                  </Link>
                  <Link href="/tab" className="block rounded-lg px-3 py-3 text-[16px] text-[#111827]" onClick={closeAll}>
                    대치탭
                  </Link>
                  <div className="my-3 border-t border-[#E5E7EB]" />
                  <Link href="/about" className="block rounded-lg px-3 py-3 text-[16px] text-[#111827]" onClick={closeAll}>
                    회사 소개
                  </Link>
                  <a
                    href="https://blog.naver.com/matchooo"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block rounded-lg px-3 py-3 text-[16px] text-[#111827]"
                    onClick={closeAll}
                  >
                    블로그
                  </a>
                  <Link href="/b2b" className="block rounded-lg px-3 py-3 text-[16px] text-[#111827]" onClick={closeAll}>
                    B2B 제휴
                  </Link>
                </>
              ) : (
                <>
                  <Link href="/phone/parents" className="block rounded-lg px-3 py-3 text-[16px] text-[#111827]" onClick={closeAll}>
                    학부모
                  </Link>
                  <Link href="/phone/students" className="block rounded-lg px-3 py-3 text-[16px] text-[#111827]" onClick={closeAll}>
                    학생
                  </Link>
                  <Link href="/phone/pricing" className="block rounded-lg px-3 py-3 text-[16px] text-[#111827]" onClick={closeAll}>
                    패키지·가격
                  </Link>
                </>
              )}
              {children ? <div className="hidden">{children}</div> : null}
            </nav>

            <div className="pb-2">
              {navType === "enterprise" ? (
                <Link
                  href="/phone"
                  onClick={closeAll}
                  className="inline-flex w-full items-center justify-center rounded-lg bg-[#1B2A4A] px-5 py-3 text-[14px] font-semibold text-white"
                >
                  대치폰 보러가기 →
                </Link>
              ) : null}
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
