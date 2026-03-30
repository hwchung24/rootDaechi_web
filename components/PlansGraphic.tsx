"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import {
  Phone,
  MessageCircle,
  BookOpen,
  FileText,
  Share2,
  Video,
  Gamepad2,
  ShoppingCart
} from "lucide-react";

/** 서비스 소개 페이지 히어로용 — 플랜별 미니 앱·시간표·리포트 그래픽 */
export function PlansGraphic() {
  const MINI_APPS = [
    { id: "sns", Icon: Share2, isStudy: false },
    { id: "video", Icon: Video, isStudy: false },
    { id: "game", Icon: Gamepad2, isStudy: false },
    { id: "shop", Icon: ShoppingCart, isStudy: false },
    { id: "call", Icon: Phone, isStudy: true },
    { id: "msg", Icon: MessageCircle, isStudy: true },
    { id: "learn", Icon: BookOpen, isStudy: true },
    { id: "memo", Icon: FileText, isStudy: true }
  ];

  const [removedMini, setRemovedMini] = useState<Set<string>>(new Set());
  const miniTimers = useRef<ReturnType<typeof setTimeout>[]>([]);

  useEffect(() => {
    const nonStudy = MINI_APPS.filter((a) => !a.isStudy);
    const run = () => {
      setRemovedMini(new Set());
      nonStudy.forEach((app, i) => {
        miniTimers.current.push(
          setTimeout(
            () => setRemovedMini((prev) => new Set(prev).add(app.id)),
            600 + i * 220
          )
        );
      });
      miniTimers.current.push(setTimeout(run, 2600));
    };
    run();
    return () => miniTimers.current.forEach(clearTimeout);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="mt-8 flex flex-col items-center gap-3">
      <div className="grid max-w-3xl grid-cols-3 gap-4 sm:gap-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          className="relative flex aspect-[9/19] items-center justify-center rounded-3xl border border-slate-200 bg-slate-950/90 shadow-xl"
        >
          <div className="grid grid-cols-4 gap-1.5 p-3">
            {MINI_APPS.map((app) => {
              const Icon = app.Icon;
              const isOff = !app.isStudy;
              const isRemoved = removedMini.has(app.id);
              return (
                <motion.div
                  key={app.id}
                  className={`flex aspect-square items-center justify-center rounded-xl ${
                    isOff ? "bg-slate-700/80" : "bg-navy-600"
                  }`}
                  initial={false}
                  animate={{
                    opacity: isOff && isRemoved ? 0 : 1,
                    scale: isOff && isRemoved ? 0.3 : 1
                  }}
                  transition={{ duration: 0.35, ease: "easeOut" }}
                >
                  <Icon
                    className={`h-4 w-4 ${isOff ? "text-slate-500" : "text-white"}`}
                    strokeWidth={2.1}
                  />
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5, delay: 0.05 }}
          className="relative flex aspect-[9/19] items-center justify-center rounded-3xl border border-slate-200 bg-slate-950/90 shadow-xl"
        >
          <div className="flex w-[82%] flex-col gap-2">
            <motion.div
              className="flex items-center justify-between rounded-2xl bg-slate-900 px-3 py-2"
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex gap-1.5">
                <div className="h-2 w-6 rounded-full bg-navy-400" />
                <div className="h-2 w-2 rounded-full bg-navy-400" />
              </div>
              <div className="h-1.5 w-10 rounded-full bg-slate-600" />
            </motion.div>
            <motion.div
              className="flex items-center justify-between rounded-2xl bg-slate-900 px-3 py-2"
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.12 }}
            >
              <div className="flex gap-1.5">
                <div className="h-2 w-2 rounded-full bg-navy-400" />
                <div className="h-2 w-6 rounded-full bg-navy-400" />
              </div>
              <div className="h-1.5 w-14 rounded-full bg-slate-600" />
            </motion.div>
            <motion.div
              className="flex items-center justify-between rounded-2xl bg-slate-900 px-3 py-2"
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.24 }}
            >
              <div className="flex gap-1.5">
                <div className="h-2 w-5 rounded-full bg-slate-500" />
              </div>
              <div className="h-1.5 w-8 rounded-full bg-slate-700" />
            </motion.div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="relative flex aspect-[9/19] items-center justify-center rounded-3xl border border-slate-200 bg-slate-950/90 shadow-xl"
        >
          <div className="flex w-[70%] items-end justify-between gap-2">
            <motion.div
              className="w-1/4 rounded-full bg-slate-700"
              initial={{ height: 16 }}
              animate={{ height: 30 }}
              transition={{ duration: 1, repeat: Infinity, repeatType: "reverse" }}
            />
            <motion.div
              className="w-1/4 rounded-full bg-slate-600"
              initial={{ height: 22 }}
              animate={{ height: 42 }}
              transition={{ duration: 1, delay: 0.1, repeat: Infinity, repeatType: "reverse" }}
            />
            <motion.div
              className="w-1/4 rounded-full bg-navy-600"
              initial={{ height: 30 }}
              animate={{ height: 60 }}
              transition={{ duration: 1, delay: 0.2, repeat: Infinity, repeatType: "reverse" }}
            />
            <motion.div
              className="w-1/4 rounded-full bg-slate-700"
              initial={{ height: 18 }}
              animate={{ height: 34 }}
              transition={{ duration: 1, delay: 0.3, repeat: Infinity, repeatType: "reverse" }}
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
}
