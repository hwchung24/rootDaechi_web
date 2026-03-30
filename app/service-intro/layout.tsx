import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "서비스 소개 | 대치루트",
  description: "대치루트 학습관리 — 시간표·MDM·리포트로 설계하는 수험생 맞춤 기기 관리를 소개합니다."
};

export default function ServiceIntroLayout({ children }: { children: React.ReactNode }) {
  return children;
}
