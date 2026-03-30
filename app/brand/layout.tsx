import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "브랜드 소개 | 대치루트",
  description:
    "대치루트는 수험생의 학습 환경을 기기·시간표·MDM으로 설계하는 학습관리 브랜드입니다. 대치폰·대치탭과 함께하는 우리의 방향과 가치를 소개합니다.",
  openGraph: {
    title: "브랜드 소개 | 대치루트",
    description:
      "수험생 맞춤 기기 관리와 학부모와의 신뢰를 바탕으로, 대치동 상위권 학습 문화에 맞는 디지털 학습 환경을 만듭니다.",
  },
};

export default function BrandLayout({ children }: { children: React.ReactNode }) {
  return children;
}
