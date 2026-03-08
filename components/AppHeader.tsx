"use client";

import React, { useState } from "react";
import { createPortal } from "react-dom";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";

type AppHeaderProps = {
  children: React.ReactNode;
};

export function AppHeader({ children }: AppHeaderProps) {
  const [open, setOpen] = useState(false);

  const closeMenu = () => setOpen(false);

  const fullscreenMenu = (
    <AnimatePresence>
      {open && (
        <motion.div
          key="fullscreen-menu"
          className="fixed inset-0 z-[9999] flex flex-col bg-[#fafafa] md:hidden"
          role="dialog"
          aria-label="메뉴"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          <div className="flex flex-none items-center justify-between border-b border-slate-200/60 bg-white/80 px-5 py-3 backdrop-blur-xl">
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
      <header className="sticky top-0 z-50 border-b border-slate-200/60 bg-[#fafafa]/80 backdrop-blur-xl sm:bg-[#fafafa]/90">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-5 py-3 sm:px-8">
          <Link href="/" className="flex items-center gap-2" onClick={closeMenu}>
            <img src="/daechiroot-logo.png" alt="대치루트" className="h-6 w-6 object-contain" />
            <span className="text-sm font-semibold tracking-tight text-slate-900">대치루트</span>
          </Link>

          <nav className="hidden items-center gap-6 text-[13px] text-slate-600 md:flex">
            {children}
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
