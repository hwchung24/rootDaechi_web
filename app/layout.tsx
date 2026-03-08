import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "대치루트 | 대치폰 공신폰 세팅",
  description:
    "공신폰이 싫어서 직접 만든 아이폰 전용 관리 앱 대치폰. 쓰던 아이폰 그대로, 3월 한정 50% 할인!",
  applicationName: "대치루트",
  manifest: "/manifest.json",
  icons: {
    icon: "/favicon.jpeg",
  },
  openGraph: {
    siteName: "대치루트",
    title: "대치루트: 아이폰을 뺏지 말고 몰입을 설계하세요.",
    description: "대치폰 : 대치동 1%가 선택한 몰입학습의 새로운 트렌드",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="bg-slate-50 text-slate-900 antialiased font-sans">
        {children}
      </body>
    </html>
  );
}

