import type { LucideIcon } from "lucide-react";
import {
  LayoutDashboard,
  Clock,
  RefreshCw,
  Smartphone,
  CalendarClock,
  Lock,
  Unlock,
  Search,
  AppWindow,
  Sparkles,
  ShieldCheck
} from "lucide-react";

export type FlowDetailItem = {
  id: string;
  title: string;
  description: string;
  Icon: LucideIcon;
};

export type FlowMainStep = {
  id: string;
  label: string;
  /** 탭 아래 한 줄 하이라이트 (| 로 구분) */
  highlightLine: string;
  items: FlowDetailItem[];
};

/** 특허 다이어그램 흐름 — 우측 시각화는 `FeatureFlowScenes`에서 id로 매핑 */
export const FEATURE_FLOW_STEPS: FlowMainStep[] = [
  {
    id: "policy",
    label: "정책 설계",
    highlightLine: "학부모 웹뷰 · 시간대별 앱 허용 · MDM 실시간 동기화",
    items: [
      {
        id: "policy-1",
        title: "학부모 설정 웹뷰",
        description:
          "브라우저에서 자녀 기기 규칙을 바로 만집니다. 별도 앱 설치 없이 설정 모듈에 접속합니다.",
        Icon: LayoutDashboard
      },
      {
        id: "policy-2",
        title: "시간대별 앱 허용",
        description:
          "요일·시간마다 열릴 앱만 지정합니다. 인강·메모는 열리고, 쉴 때만 카톡까지 허용하는 식으로요.",
        Icon: Clock
      },
      {
        id: "policy-3",
        title: "제어 서버와 실시간 동기화",
        description: "바뀐 정책이 MDM 제어 서버에 즉시 반영되어, 자녀 기기의 ‘지금’ 규칙이 맞춰집니다.",
        Icon: RefreshCw
      }
    ]
  },
  {
    id: "device",
    label: "기기 집행",
    highlightLine: "MDM 프로파일 · 계획표 · 잠금·해제 신호",
    items: [
      {
        id: "dev-1",
        title: "학생 단말 MDM 프로파일",
        description: "아이폰에 프로파일이 올라가 기기가 관리 대상으로 등록됩니다.",
        Icon: Smartphone
      },
      {
        id: "dev-2",
        title: "지정 시간 계획표 작성",
        description: "매일 정해진 시간에 계획표를 제출해야 하는 흐름입니다. 작성 여부가 서버로 전달됩니다.",
        Icon: CalendarClock
      },
      {
        id: "dev-3",
        title: "미작성 시 잠금·앱 차단",
        description: "제출이 없으면 서버가 잠금 신호를 보내 허용 앱 외 사용이 막힙니다.",
        Icon: Lock
      },
      {
        id: "dev-4",
        title: "작성 완료 시 잠금 해제",
        description: "조건을 충족하면 해제 신호가 가고, 다음 단계인 ‘현재 시간대 정책’ 적용으로 넘어갑니다.",
        Icon: Unlock
      }
    ]
  },
  {
    id: "apply",
    label: "분석·통제",
    highlightLine: "정책 조회 · 허용 앱만 · AI 리포트 · 교육 앱 배포",
    items: [
      {
        id: "ap-1",
        title: "현재 시간대 정책 조회",
        description: "서버가 학부모가 넣은 규칙 중 ‘지금’에 해당하는 것만 꺼내 적용합니다.",
        Icon: Search
      },
      {
        id: "ap-2",
        title: "허용된 앱만 실행",
        description: "정책에 없는 앱은 실행되지 않습니다. 인강·필기 등 허용 목록만 열립니다.",
        Icon: AppWindow
      },
      {
        id: "ap-3",
        title: "AI 분석·리포트",
        description: "계획표·사용 데이터를 모아 패턴을 분석하고, 카카오톡 등으로 학부모에게 요약을 보냅니다.",
        Icon: Sparkles
      },
      {
        id: "ap-4",
        title: "교육 앱만·마켓 차단",
        description: "전용 배포 채널로 검증된 앱만 설치하고, 일반 앱 마켓 접근을 막습니다.",
        Icon: ShieldCheck
      }
    ]
  }
];
