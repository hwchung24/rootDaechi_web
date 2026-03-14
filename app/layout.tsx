import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "대치루트 | 대치폰 대여 · 대치탭 대여 · 대치동 공신폰 대안",
  description:
    "대치루트는 대치동 상위권 수험생을 위한 대치폰 대여·대치탭 대여 서비스입니다. 공신폰 대신 약정 없이 렌탈로 이용하는 대치폰·대치탭으로, 국·수·탐 3합 10 이내 학생을 선발해 집중할 수 있는 디지털 환경을 설계합니다.",
  applicationName: "대치루트",
  manifest: "/manifest.json",
  icons: {
    icon: "/favicon.jpeg",
  },
  openGraph: {
    siteName: "대치루트",
    title: "대치루트 | 대치폰·대치탭 대여, 대치동 공신폰 대안",
    description:
      "대치폰·대치탭 대여로 공신폰을 대신할 무약정 렌탈 솔루션을 제공합니다. 대치동 상위권 수험생을 위한 대치루트의 대치폰, 대치탭, 공신폰 대안을 확인해 보세요.",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <head>
        <meta name="naver-site-verification" content="d7ae6f7cceb28c52941ea49187678a81ff6ed628" />
      </head>
      <body className="bg-slate-50 text-slate-900 antialiased font-sans">
        {children}
      </body>
    </html>
  );
}

