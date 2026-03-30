"use client";

import React, { useState } from "react";
import { createPortal } from "react-dom";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { BRAND_LINK_ITEMS, isExternalBrandHref } from "@/lib/brandLinks";
import { SUPPORT_LINK_ITEMS } from "@/lib/supportLinks";

type AppHeaderProps = {
  children: React.ReactNode;
};

export function AppHeader({ children }: AppHeaderProps) {
  const [open, setOpen] = useState(false);
  const [serviceDropdownOpen, setServiceDropdownOpen] = useState(false);
  const [brandDropdownOpen, setBrandDropdownOpen] = useState(false);
  const [supportDropdownOpen, setSupportDropdownOpen] = useState(false);

  const closeMenu = () => setOpen(false);
  const closeServiceDropdown = () => setServiceDropdownOpen(false);
  const closeBrandDropdown = () => setBrandDropdownOpen(false);
  const closeSupportDropdown = () => setSupportDropdownOpen(false);

  const childrenArray = React.Children.toArray(children);
  // 앞 4개: 대치폰·대치탭·제휴·학습 관리 구독 연장 → 서비스 드롭다운. 4개 미만이면 앞 3개만(구 패턴).
  const serviceChildren =
    childrenArray.length >= 4
      ? childrenArray.slice(0, 4)
      : childrenArray.length >= 3
        ? childrenArray.slice(0, 3)
        : [];
  const restChildren =
    childrenArray.length >= 4
      ? childrenArray.slice(4)
      : childrenArray.length >= 3
        ? childrenArray.slice(3)
        : childrenArray;

  const fullscreenMenu = (
    <AnimatePresence>
      {open && (
        <motion.div
          key="fullscreen-menu"
          className="fixed inset-0 z-[9999] flex flex-col bg-[#f8f9fa] md:hidden"
          role="dialog"
          aria-label="메뉴"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          <div className="flex flex-none items-center justify-between border-b border-slate-200/70 bg-white/90 px-5 py-3 backdrop-blur-xl">
            <span className="text-sm font-semibold text-slate-900">메뉴</span>
            <button
              type="button"
              aria-label="메뉴 닫기"
              className="flex h-10 w-10 items-center justify-center rounded-lg text-slate-600 transition hover:bg-slate-100"
              onClick={closeMenu}
            >
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <nav className="flex flex-1 flex-col gap-1 px-5 py-6">
            <div className="mb-4 border-b border-slate-200 pb-4">
              <p className="mb-2 text-xs font-semibold text-slate-500">소개</p>
              <div className="flex flex-col gap-1">
                <Link
                  href="/service-intro"
                  className="rounded-lg py-3 text-[16px] font-medium text-slate-800 no-underline transition hover:bg-slate-100"
                  onClick={closeMenu}
                >
                  서비스 소개
                </Link>
                {BRAND_LINK_ITEMS.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="rounded-lg py-3 text-[16px] text-slate-800 no-underline transition hover:bg-slate-100"
                    onClick={closeMenu}
                    {...(isExternalBrandHref(item.href)
                      ? { target: "_blank", rel: "noopener noreferrer" }
                      : {})}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
            <div className="mb-4 border-b border-slate-200 pb-4">
              <p className="mb-2 text-xs font-semibold text-slate-500">고객 지원</p>
              <div className="flex flex-col gap-1">
                {SUPPORT_LINK_ITEMS.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="rounded-lg py-3 text-[16px] text-slate-800 no-underline transition hover:bg-slate-100"
                    onClick={closeMenu}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
            {React.Children.map(children, (child) => (
              <div
                className="[&>a]:block [&>a]:w-full [&>a]:py-3.5 [&>a]:text-[16px] [&>a]:no-underline [&>a.rounded-full]:text-center [&>a.rounded-full]:font-medium"
                onClick={closeMenu}
              >
                {child}
              </div>
            ))}
          </nav>
        </motion.div>
      )}
    </AnimatePresence>
  );

  return (
    <>
      <header className="sticky top-0 z-50 border-b border-slate-200/70 bg-[#f8f9fa]/80 shadow-header backdrop-blur-xl sm:bg-[#f8f9fa]/88">
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-gold-400/35 to-transparent" aria-hidden />
        <div className="relative mx-auto flex max-w-5xl items-center justify-between px-5 py-3 sm:px-8">
          <Link href="/" className="flex items-center gap-2.5" onClick={closeMenu}>
            <img src="/daechiroot-logo.png" alt="대치루트" className="h-6 w-6 object-contain drop-shadow-sm" />
            <span className="text-sm font-semibold tracking-tight text-navy-800">대치루트</span>
          </Link>

          <nav className="hidden items-center gap-6 text-[13px] text-slate-600 md:flex">
            {serviceChildren.length > 0 ? (
              <div className="relative">
                <button
                  type="button"
                  className="inline-flex items-center gap-2 rounded-full px-3 py-2 text-[13px] font-medium text-slate-600 transition hover:bg-slate-100"
                  onClick={() => {
                    setBrandDropdownOpen(false);
                    setSupportDropdownOpen(false);
                    setServiceDropdownOpen((v) => !v);
                  }}
                  aria-expanded={serviceDropdownOpen}
                  aria-label="서비스 메뉴"
                >
                  서비스
                  <svg className="h-4 w-4" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                    <path d="M6.5 8L10 11.5L13.5 8" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>

                <AnimatePresence>
                  {serviceDropdownOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: -6 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -6 }}
                      transition={{ duration: 0.18 }}
                      className="absolute left-0 top-[calc(100%+10px)] z-50 min-w-[220px] overflow-hidden rounded-2xl border border-slate-200/90 bg-white/95 shadow-card backdrop-blur-md"
                      onMouseLeave={closeServiceDropdown}
                      role="menu"
                      aria-label="서비스 드롭다운"
                    >
                      <div className="py-1">
                        {serviceChildren.map((child, idx) => (
                          <div
                            // eslint-disable-next-line react/no-array-index-key
                            key={idx}
                            className="px-4 py-2"
                            onClick={closeServiceDropdown}
                          >
                            <div className="[&>a]:block [&>a]:w-full [&>a]:no-underline [&>a]:text-[13px] [&>a]:text-slate-700 [&>a]:px-0 [&>a]:py-0 transition hover:[&>a]:text-slate-900 hover:bg-slate-50">
                              {child}
                            </div>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ) : null}

            <div className="relative">
              <button
                type="button"
                className="inline-flex items-center gap-2 rounded-full px-3 py-2 text-[13px] font-medium text-slate-600 transition hover:bg-slate-100"
                onClick={() => {
                  setServiceDropdownOpen(false);
                  setSupportDropdownOpen(false);
                  setBrandDropdownOpen((v) => !v);
                }}
                aria-expanded={brandDropdownOpen}
                aria-label="소개 메뉴"
              >
                소개
                <svg className="h-4 w-4" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                  <path d="M6.5 8L10 11.5L13.5 8" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>

              <AnimatePresence>
                {brandDropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -6 }}
                    transition={{ duration: 0.18 }}
                    className="absolute left-0 top-[calc(100%+10px)] z-50 min-w-[220px] overflow-hidden rounded-2xl border border-slate-200/90 bg-white/95 shadow-card backdrop-blur-md"
                    onMouseLeave={closeBrandDropdown}
                    role="menu"
                    aria-label="소개 드롭다운"
                  >
                    <div className="py-1">
                      <div className="px-4 py-2" onClick={closeBrandDropdown}>
                        <Link
                          href="/service-intro"
                          className="block w-full rounded-lg px-0 py-0 text-[13px] font-medium text-slate-800 no-underline transition hover:bg-slate-50 hover:text-slate-900"
                        >
                          서비스 소개
                        </Link>
                      </div>
                      <div className="mx-3 border-t border-slate-100" role="separator" aria-hidden />
                      <p className="px-4 pb-1 pt-2 text-[10px] font-semibold uppercase tracking-wide text-slate-400">브랜드</p>
                      {BRAND_LINK_ITEMS.map((item) => (
                        <div key={item.href} className="px-4 py-2" onClick={closeBrandDropdown}>
                          <Link
                            href={item.href}
                            className="block w-full rounded-lg px-0 py-0 text-[13px] text-slate-700 no-underline transition hover:bg-slate-50 hover:text-slate-900"
                            {...(isExternalBrandHref(item.href)
                              ? { target: "_blank", rel: "noopener noreferrer" }
                              : {})}
                          >
                            {item.label}
                          </Link>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <div className="relative">
              <button
                type="button"
                className="inline-flex items-center gap-2 rounded-full px-3 py-2 text-[13px] font-medium text-slate-600 transition hover:bg-slate-100"
                onClick={() => {
                  setServiceDropdownOpen(false);
                  setBrandDropdownOpen(false);
                  setSupportDropdownOpen((v) => !v);
                }}
                aria-expanded={supportDropdownOpen}
                aria-label="고객 지원 메뉴"
              >
                고객 지원
                <svg className="h-4 w-4" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                  <path d="M6.5 8L10 11.5L13.5 8" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>

              <AnimatePresence>
                {supportDropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -6 }}
                    transition={{ duration: 0.18 }}
                    className="absolute left-0 top-[calc(100%+10px)] z-50 min-w-[220px] overflow-hidden rounded-2xl border border-slate-200/90 bg-white/95 shadow-card backdrop-blur-md"
                    onMouseLeave={closeSupportDropdown}
                    role="menu"
                    aria-label="고객 지원 드롭다운"
                  >
                    <div className="py-1">
                      {SUPPORT_LINK_ITEMS.map((item) => (
                        <div key={item.href} className="px-4 py-2" onClick={closeSupportDropdown}>
                          <Link
                            href={item.href}
                            className="block w-full rounded-lg px-0 py-0 text-[13px] text-slate-700 no-underline transition hover:bg-slate-50 hover:text-slate-900"
                          >
                            {item.label}
                          </Link>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {restChildren.map((child, idx) => (
              // eslint-disable-next-line react/no-array-index-key
              <div key={idx}>{child}</div>
            ))}
          </nav>

          <button
            type="button"
            aria-label={open ? "메뉴 닫기" : "메뉴 열기"}
            aria-expanded={open}
            className="flex h-10 w-10 items-center justify-center rounded-lg text-slate-600 transition hover:bg-slate-100 md:hidden"
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
      {typeof document !== "undefined" && createPortal(fullscreenMenu, document.body)}
    </>
  );
}
