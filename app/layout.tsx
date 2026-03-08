import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "대치루트 | GILLO 공신폰·공신패드·공신컴퓨터",
  description:
    "휴대폰을 공부에만 쓰이도록. GILLO 공신폰 세팅, GILLO TIMELINE 시간대별 통제, GILLO PHONE 중고 세팅·판매."
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

