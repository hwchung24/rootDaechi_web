"use client";

import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { AppHeader } from "@/components/AppHeader";
import { ChevronDown } from "lucide-react";

type FaqCategory = "all" | "device" | "pricing" | "management" | "etc";

type FaqItem = {
  id: string;
  q: string;
  a: string;
  category: Exclude<FaqCategory, "all">;
};

const FAQ_ITEMS: FaqItem[] = [
  {
    id: "phone-device",
    category: "device",
    q: "대치폰 구독은 어떤 기기로 제공되나요?",
    a: "현재는 검증된 단말만 선별해 제공하며, 기본 기종은 아이폰 12입니다. 외관·배터리·기능을 모두 체크한 단말만 대여에 사용합니다."
  },
  {
    id: "tab-device",
    category: "device",
    q: "대치탭 패키지는 어떤 기기로 제공되나요?",
    a: "아이패드를 기반으로 제공하며, 인강 시청과 필기에 최적화된 사양의 기기를 선별하여 사용합니다. 자세한 기종은 상담 시 안내해 드립니다."
  },
  {
    id: "pricing-plans",
    category: "pricing",
    q: "1년 이후 학습 관리 구독은 얼마인가요?",
    a: "패키지 1년 만료 후 학습 관리만 이어갈 때 월 19,000원(만 구천 원) 단일 요금입니다. MDM·시간표·리포트·부모 앱 등이 포함됩니다."
  },
  {
    id: "cancel-after-exam",
    category: "pricing",
    q: "수능이 끝나면 구독을 즉시 해지할 수 있나요?",
    a: "네, 통신사 약정과 달리 수험 일정에 맞춰 유연하게 구독을 조정하거나 해지할 수 있습니다. 자세한 해지 절차는 상담을 통해 안내해 드립니다."
  },
  {
    id: "min-term",
    category: "management",
    q: "최소 이용 기간이나 보증금이 있나요?",
    a: "최소 이용 기간, 보증금 및 파손 관련 규정은 학생 상황에 따라 달라질 수 있어 1:1 상담 시 자세히 안내해 드립니다. 문의 페이지에서 카카오톡 또는 전화 상담을 신청해 주세요."
  },
  {
    id: "lost-broken",
    category: "management",
    q: "기기를 분실하거나 파손하면 어떻게 되나요?",
    a: "분실 및 파손 관련 규정은 1:1 상담 시 자세히 안내해 드립니다. MDM을 통해 분실 기기의 원격 잠금 및 데이터 삭제가 가능합니다."
  },
  {
    id: "parent-remote",
    category: "management",
    q: "부모님이 자녀의 기기를 원격으로 제어할 수 있나요?",
    a: "네, 부모 앱을 통해 자녀의 앱 사용 현황을 확인하고, 시간대별 차단 모드를 원격으로 조정할 수 있습니다."
  },
  {
    id: "contact",
    category: "etc",
    q: "상담은 어떻게 받나요?",
    a: "신청 시 남겨주신 연락처(카카오톡 또는 전화)로 1:1 상담 안내를 드립니다. 빠른 문의는 상단 '문의하기'에서 카카오톡 플러스 친구를 이용해 주세요."
  }
];

const TABS: { id: FaqCategory; label: string }[] = [
  { id: "all", label: "전체" },
  { id: "device", label: "기기" },
  { id: "pricing", label: "요금제" },
  { id: "management", label: "관리" },
  { id: "etc", label: "기타" }
];

const fadeInUp = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4 } }
};

export default function FAQPage() {
  const [tab, setTab] = useState<FaqCategory>("all");
  const [openId, setOpenId] = useState<string | null>(null);

  const filtered = useMemo(() => {
    if (tab === "all") return FAQ_ITEMS;
    return FAQ_ITEMS.filter((item) => item.category === tab);
  }, [tab]);

  const toggle = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <div className="min-h-screen bg-[#f8f9fa] text-slate-900">
      <AppHeader>
        <Link href="/" className="transition hover:text-slate-900">
          홈
        </Link>
      </AppHeader>

      <main className="mx-auto max-w-3xl px-5 py-16 sm:px-8 sm:py-20">
        <motion.div variants={fadeInUp} initial="hidden" animate="show" className="mb-10 text-center">
          <h1 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">자주 묻는 질문</h1>
          <p className="mt-2 text-sm text-slate-600">
            카테고리를 선택해 보시거나, 질문을 눌러 답변을 펼쳐 보세요.
          </p>
        </motion.div>

        <div className="mb-8 flex flex-wrap justify-center gap-2">
          {TABS.map((t) => (
            <button
              key={t.id}
              type="button"
              onClick={() => {
                setTab(t.id);
                setOpenId(null);
              }}
              className={`rounded-full px-4 py-2 text-[13px] font-medium transition ${
                tab === t.id
                  ? "bg-navy-700 text-white shadow-sm"
                  : "border border-slate-200 bg-white text-slate-700 hover:border-navy-200 hover:text-navy-800"
              }`}
            >
              {t.label}
            </button>
          ))}
        </div>

        <ul className="space-y-3">
          {filtered.map((item) => {
            const open = openId === item.id;
            return (
              <li
                key={item.id}
                className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-md"
              >
                <button
                  type="button"
                  onClick={() => toggle(item.id)}
                  aria-expanded={open}
                  className="flex w-full items-center justify-between gap-3 px-5 py-4 text-left sm:px-6"
                >
                  <span className="text-sm font-semibold text-slate-900 sm:text-[15px]">{item.q}</span>
                  <ChevronDown
                    className={`h-5 w-5 shrink-0 text-slate-500 transition-transform ${open ? "rotate-180" : ""}`}
                    aria-hidden
                  />
                </button>
                <AnimatePresence initial={false}>
                  {open ? (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.22 }}
                      className="overflow-hidden"
                    >
                      <p className="border-t border-slate-100 px-5 py-4 text-sm leading-relaxed text-slate-600 sm:px-6">
                        {item.a}
                      </p>
                    </motion.div>
                  ) : null}
                </AnimatePresence>
              </li>
            );
          })}
        </ul>

        {filtered.length === 0 ? (
          <p className="mt-8 text-center text-sm text-slate-500">이 카테고리에 등록된 질문이 없습니다.</p>
        ) : null}
      </main>

      <footer className="mt-16 border-t border-slate-200 bg-white py-6">
        <div className="mx-auto max-w-5xl px-5 text-center text-[12px] text-slate-500 sm:px-8">
          <p>대표: 정현우 | 사업자등록번호: 150-07-03484 | 서울특별시 강남구 개포동</p>
          <p className="mt-1 text-slate-400">© {new Date().getFullYear()} Daechiroot.</p>
        </div>
      </footer>
    </div>
  );
}
