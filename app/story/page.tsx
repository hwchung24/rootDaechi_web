import type { Metadata } from "next";
import Link from "next/link";
import { AppHeader } from "@/components/AppHeader";

export const metadata: Metadata = {
  title: "대치루트 이야기 | 대치루트",
  description:
    "공신폰과 스마트폰 사이에서 재수·삼수를 겪은 창업자의 이야기. 의지가 아니라 구조로 집중을 지키는 대치루트의 시작."
};

export default function StoryPage() {
  return (
    <div className="min-h-screen bg-[#f8f9fa] text-slate-900">
      <AppHeader>
        <Link href="/gillo-phone-rental" className="transition hover:text-slate-900">
          대치폰 패키지
        </Link>
        <Link href="/gillo-tab-rental" className="transition hover:text-slate-900">
          대치탭 패키지
        </Link>
        <Link href="/b2b" className="transition hover:text-slate-900">
          학원·교육기관 제휴
        </Link>
        <Link href="/management-subscription" className="transition hover:text-slate-900">
          학습 관리 구독 연장
        </Link>
      </AppHeader>

      <main className="mx-auto max-w-2xl px-5 py-14 sm:px-8 sm:py-20">
        <p className="text-[11px] font-medium tracking-wide text-navy-700">브랜드</p>
        <h1 className="mt-2 text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">대치루트 이야기</h1>
        <p className="mt-2 text-sm text-slate-500">창업자가 직접 쓴 글입니다.</p>

        <article className="mt-10 space-y-8 text-[15px] leading-[1.85] text-slate-800 sm:text-base sm:leading-[1.9]">
          <blockquote className="border-l-[3px] border-navy-700 pl-5 text-slate-900">
            <p className="font-semibold leading-snug">저는 삼수를 했습니다.</p>
            <p className="mt-3 font-normal">
              재능이 없어서가 아니었습니다. 의지가 없어서도 아니었습니다. 스마트폰 하나를 이기지 못해서였습니다.
            </p>
          </blockquote>

          <p>
            수능을 처음 준비하던 해, 저는 공신폰으로 바꿨습니다. 대치동에서 그 폰을 들고 다니는 게 창피했습니다. 친구들한테
            연락도 제대로 못 하고, 길을 찾으려면 부모님한테 전화해야 했습니다. 두 달을 버티다 결국 당근마켓에서 아이폰을
            샀습니다. 부모님 몰래.
          </p>

          <p>
            그 다음부터는 스스로와의 싸움이었습니다. 스크린타임을 걸었습니다. 비밀번호를 부모님한테 맡겼습니다. 유해 사이트
            차단 프로그램을 깔았습니다. 그때마다 뚫는 방법을 찾아냈습니다. 인터넷에는 항상 방법이 있었습니다. 저는 공부보다
            차단 프로그램 우회하는 데 더 집중력을 쏟고 있었습니다.
          </p>

          <p>
            더 큰 문제는 따로 있었습니다. 폰을 잠깐 내려놓아도 공부에 완전히 집중하지 못했습니다. 완전히 노는 것도 아니고,
            완전히 집중하는 것도 아닌 그 어딘가를 계속 맴돌았습니다. 플래너를 써야 한다는 건 알았습니다. 하지만 매일 아침
            계획표를 펼치는 것 자체가 너무 어려웠습니다. 작심삼일이 반복됐습니다.
          </p>

          <p>그렇게 재수를 했고, 삼수를 했습니다.</p>

          <p>
            삼수 때 저는 한 가지를 깨달았습니다. 의지력은 유한하다는 것. 매일 아침 &ldquo;오늘은 폰 안 본다&rdquo;고
            결심하는 데 의지력을 쓰면, 정작 공부할 때 쓸 의지력이 남지 않는다는 것. 환경이 바뀌지 않으면 사람은 바뀌지
            않는다는 것.
          </p>

          <p>
            <span className="font-semibold text-navy-900">대치루트는 그 깨달음에서 시작했습니다.</span>
            <br />
            공신폰처럼 창피하지 않아도 됩니다. 지도도 쓸 수 있고, 카카오톡도 허용된 시간에 쓸 수 있습니다. 하지만 공부 시간에는
            어떤 방법으로도 유튜브를 열 수 없습니다. 매일 아침 계획표를 쓰지 않으면 폰이 켜지지 않습니다. 의지력이 필요
            없습니다. 구조가 대신합니다.
          </p>

          <p className="text-slate-700">제가 수험생 때 이게 있었다면, 삼수는 없었을 겁니다.</p>

          <p className="pt-4 text-right text-sm text-slate-500 not-italic">— 대치루트 창업자</p>
        </article>

        <div className="mt-12 flex flex-wrap gap-3 border-t border-slate-200/90 pt-10">
          <Link
            href="/inquiry"
            className="inline-flex min-h-[44px] items-center justify-center rounded-full bg-navy-800 px-6 text-sm font-semibold text-white transition hover:bg-navy-900"
          >
            상담 신청
          </Link>
          <Link
            href="/"
            className="inline-flex min-h-[44px] items-center justify-center rounded-full border border-slate-200 bg-white px-6 text-sm font-medium text-slate-800 transition hover:border-slate-300"
          >
            홈으로
          </Link>
        </div>
      </main>

      <footer className="border-t border-slate-200/80 bg-white">
        <div className="mx-auto flex max-w-5xl flex-col gap-4 px-5 py-8 text-[11px] text-slate-500 sm:flex-row sm:items-center sm:justify-between sm:px-8">
          <div className="flex items-center gap-2">
            <img src="/daechiroot-logo.png" alt="" className="h-5 w-5 opacity-80" />
            <span className="font-medium text-slate-700">대치루트</span>
          </div>
          <p>
            정현우 · 150-07-03484 · 강남구 개포동 · © {new Date().getFullYear()}
          </p>
        </div>
      </footer>
    </div>
  );
}
