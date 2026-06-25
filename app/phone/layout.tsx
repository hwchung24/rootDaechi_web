import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "DOS EDU | 수험생 전용 관리 환경",
  description:
    "공부 시간 집중 모드, 독서실 입퇴실 문자, 서울대 AI 코칭, 학부모 리포트까지. 대치동 학습 환경을 아이폰에 담았습니다."
};

export default function PhoneEduLayout({ children }: { children: React.ReactNode }) {
  return children;
}
