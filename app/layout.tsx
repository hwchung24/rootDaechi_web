import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "대치루트 | 대치폰 패키지 · 대치탭 패키지 · 학습 관리 구독",
  description:
    "대치루트는 대치폰·대치탭 기기와 1년 학습 관리가 함께 포함된 패키지를 제공합니다. 기존의 공부폰 대신 우리 아이 전용 학습폰·학습 태블릿을 구매하고, 상위권 수험생을 위한 관리 구독으로 디지털 환경을 설계합니다.",
  applicationName: "대치루트",
  manifest: "/manifest.json",
  icons: {
    icon: "/favicon.jpeg",
  },
  openGraph: {
    siteName: "대치루트",
    title: "대치루트 | 대치폰·대치탭 패키지와 학습 관리 구독",
    description:
      "대치폰·대치탭 기기와 1년 학습 관리가 포함된 패키지, 그리고 1년 이후에도 이어갈 수 있는 학습 관리 구독 서비스를 제공합니다. 대치동 상위권 수험생을 위한 학습폰·학습 태블릿, 기존의 공부폰 대안을 확인해 보세요.",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <head>
        <meta name="naver-site-verification" content="d7ae6f7cceb28c52941ea49187678a81ff6ed628" />
      </head>
      <body className="bg-[#f8f9fa] text-slate-900 antialiased font-sans">
        {children}
      </body>
    </html>
  );
}

