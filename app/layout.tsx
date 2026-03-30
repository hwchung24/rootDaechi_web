import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "대치루트 | 수험생 맞춤 기기 관리",
  description:
    "대치폰·대치탭 기기와 1년 학습 관리가 포함된 패키지, 그리고 1년 이후에도 이어갈 수 있는 학습 관리 구독 서비스를 제공합니다. 대치동 상위권 수험생을 위한 학습폰·학습 태블릿, 기존의 공부폰 대안을 확인해 보세요."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="bg-[#f8f9fa] text-slate-900 antialiased font-sans overflow-x-hidden">{children}</body>
    </html>
  );
}