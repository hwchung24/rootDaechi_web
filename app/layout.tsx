import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "대치루트 | 전교 1등의 디지털 독서실, 대치폰 구독 서비스",
  description:
    "전교 1등의 디지털 독서실처럼, 시간표와 목표에 맞춰 정리된 대치폰 구독 서비스. 학습에 방해되는 요소는 줄이고, 시간표에 맞춘 폰 사용 환경을 만들어 드립니다.",
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
      <head>
        <meta name="naver-site-verification" content="d7ae6f7cceb28c52941ea49187678a81ff6ed628" />
      </head>
      <body className="bg-slate-50 text-slate-900 antialiased font-sans">
        {children}
      </body>
    </html>
  );
}

