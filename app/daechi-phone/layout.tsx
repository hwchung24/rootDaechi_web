import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "대치폰 | 수험생 전용 차단 환경",
  description:
    "애플·삼성 공식 기업용 MDM으로 자녀 앱·웹을 원격 관리합니다. 기기 세팅 39,000원, 월 12,900원(부가세 별도)."
};

export default function DaechiPhoneLayout({ children }: { children: React.ReactNode }) {
  return children;
}
