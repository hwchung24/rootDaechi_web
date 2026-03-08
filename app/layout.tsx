import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "대치루트 | 대치폰 세팅·대치폰",
  description:
    "휴대폰을 공부에만 쓰이도록. 대치폰 세팅, 대치폰(중고 세팅·판매).",
  applicationName: "대치루트",
  manifest: "/manifest.json",
  icons: {
    icon: "/favicon.png",
  },
  openGraph: {
    siteName: "대치루트",
    title: "대치루트 | 대치폰 세팅·대치폰",
    description: "휴대폰을 공부에만 쓰이도록. 대치폰 세팅, 대치폰(중고 세팅·판매).",
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

