import Link from "next/link";
import { Ban, MessageSquareText, ShieldAlert } from "lucide-react";
import { AppHeader } from "@/components/AppHeader";
import { LandingHeroIPadVisual } from "@/components/LandingHeroIPadVisual";
import { SiteFooter } from "@/components/SiteFooter";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#f8f9fa] font-sans text-[#111827]">
      <AppHeader />
      <main>
        <section className="snap-none border-b border-white/10 bg-[#13223F]">
          <div className="mx-auto min-h-auto max-w-6xl bg-[#13223F] px-6 py-12 md:min-h-screen md:px-6 md:py-14 sm:px-12">
            <div className="grid min-h-0 items-center gap-10 md:min-h-[calc(100vh-7rem)] lg:grid-cols-[55fr_45fr] lg:items-center lg:gap-12">
              <div className="order-1 mt-5 flex h-full w-full flex-col items-center justify-center text-center lg:mt-0 lg:items-start lg:text-left">
                <p className="inline-flex w-fit rounded-[8px] bg-white/10 px-[14px] py-[6px] text-[13px] font-medium text-white">
                  ABOUT DAECHIROOT
                </p>
                <h1 className="mt-5 break-keep text-[30px] font-bold leading-[1.25] tracking-[-0.03em] text-white md:text-[44px] md:leading-[1.15] lg:text-[52px]">
                  의지가 아니라
                  <br />
                  환경이 바꿉니다.
                </h1>
                <p className="mx-auto mt-5 max-w-2xl break-keep text-[16px] leading-[1.8] text-white/80 sm:text-[18px] lg:mx-0">
                  대치루트는 수험생이 의지력을 낭비하지 않도록
                  <br />
                  공부 환경 자체를 설계하는 회사입니다.
                </p>
              </div>

              <div className="order-2 hidden h-full w-full items-center justify-center self-center lg:flex lg:justify-end">
                <div className="w-full max-w-[420px] md:max-w-[620px]">
                  <LandingHeroIPadVisual />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white py-20 sm:py-28">
          <div className="mx-auto max-w-[1280px] px-6 sm:px-8">
            <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
              <article className="rounded-2xl border border-[#E5E7EB] p-6 sm:p-7">
                <p className="text-3xl font-bold tracking-tight text-[#111827] sm:text-4xl">2026년</p>
                <p className="mt-3 text-[15px] text-[#6B7280]">서울 강남구 대치동 창업</p>
              </article>
              <article className="rounded-2xl border border-[#E5E7EB] p-6 sm:p-7">
                <p className="text-3xl font-bold tracking-tight text-[#111827] sm:text-4xl">특허 출원 중</p>
                <p className="mt-3 text-[15px] text-[#6B7280]">출원번호 10-2026-0068593</p>
              </article>
              <article className="rounded-2xl border border-[#E5E7EB] p-6 sm:p-7">
                <p className="text-3xl font-bold tracking-tight text-[#111827] sm:text-4xl">베타 6개월</p>
                <p className="mt-3 text-[15px] text-[#6B7280]">루틴 무너진 사용자 없음</p>
              </article>
            </div>
          </div>
        </section>

        <section className="bg-[#f8f9fa] py-20 sm:py-28">
          <div className="mx-auto max-w-[1280px] px-6 sm:px-8">
            <p className="text-[13px] font-semibold tracking-[0.04em] text-[#9CA3AF]">우리의 미션</p>
            <h2 className="mt-4 break-keep text-3xl font-semibold leading-[1.25] tracking-[-0.02em] text-[#111827] sm:text-4xl">
              수험생이 의지력을
              <br />
              공부에만 쓸 수 있도록
            </h2>
            <p className="mt-6 max-w-2xl break-keep text-[16px] leading-[1.85] text-[#6B7280]">
              의지력은 유한합니다. &quot;오늘은 폰 안 본다&quot;고 결심하는 데 써버리면, 정작 수학 문제를 풀 때 쓸 의지력이 남지
              않습니다.
              <br />
              대치루트는 그 소비를 막습니다. 공부 시간엔 구조가 집중을 강제하고, 학부모는 잔소리 대신 데이터로 소통하며, AI가 매 순간
              코칭합니다.
              <br />
              환경이 바뀌면 사람이 바뀝니다.
            </p>
          </div>
        </section>

        <section className="bg-white py-20 sm:py-28">
          <div className="mx-auto max-w-[1280px] px-6 sm:px-8">
            <p className="text-[13px] font-semibold tracking-[0.04em] text-[#9CA3AF]">대치루트가 바꾸는 것</p>
            <h2 className="mt-3 break-keep text-3xl font-semibold tracking-[-0.02em] text-[#111827] sm:text-4xl">
              기존 방식의 한계, 우리가 다시 설계했습니다
            </h2>

            <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
              <article className="rounded-2xl border border-[#E5E7EB] bg-white p-6">
                <span className="inline-flex rounded-lg bg-[#EEF2FF] p-2.5" aria-hidden>
                  <ShieldAlert className="h-5 w-5 text-[#1B2A4A]" strokeWidth={1.8} />
                </span>
                <h3 className="mt-4 text-xl font-semibold text-[#111827]">기존 공부폰의 문제</h3>
                <p className="mt-3 break-keep text-[15px] leading-[1.75] text-[#6B7280]">
                  저가 피처폰·공신폰은 지도도 안 되고, 친구 연락도 안 됩니다. 수험생이 창피함을 느끼고 결국 몰래 스마트폰을 삽니다.
                </p>
              </article>
              <article className="rounded-2xl border border-[#E5E7EB] bg-white p-6">
                <span className="inline-flex rounded-lg bg-[#EEF2FF] p-2.5" aria-hidden>
                  <Ban className="h-5 w-5 text-[#1B2A4A]" strokeWidth={1.8} />
                </span>
                <h3 className="mt-4 text-xl font-semibold text-[#111827]">차단 앱의 한계</h3>
                <p className="mt-3 break-keep text-[15px] leading-[1.75] text-[#6B7280]">
                  스크린타임·유해 사이트 차단은 항상 우회 방법이 존재합니다. 인터넷에 방법이 있고, 수험생은 그걸 찾는 데 오히려 집중력을
                  씁니다.
                </p>
              </article>
              <article className="rounded-2xl border border-[#E5E7EB] bg-white p-6">
                <span className="inline-flex rounded-lg bg-[#EEF2FF] p-2.5" aria-hidden>
                  <MessageSquareText className="h-5 w-5 text-[#1B2A4A]" strokeWidth={1.8} />
                </span>
                <h3 className="mt-4 text-xl font-semibold text-[#111827]">잔소리 대신 데이터</h3>
                <p className="mt-3 break-keep text-[15px] leading-[1.75] text-[#6B7280]">
                  &quot;공부했어?&quot; 대신 앱 사용 시간, 위치 체크인, 집중 리포트를 학부모에게 자동으로 전송합니다. 갈등이
                  사라집니다.
                </p>
              </article>
            </div>
          </div>
        </section>

        <section className="bg-[#1B2A4A] py-20 sm:py-28">
          <div className="mx-auto max-w-[1280px] px-6 sm:px-8">
            <span className="block text-6xl leading-none text-white/25 sm:text-7xl">&quot;</span>
            <p className="mt-2 break-keep text-2xl font-semibold leading-[1.5] text-white sm:text-3xl">
              제가 수험생 때 이게 있었다면, 삼수는 없었을 겁니다.
            </p>
            <p className="mt-5 text-[15px] text-white/65">— 대치루트 창업자 · 서울대학교 재학</p>
            <Link
              href="#founder-story"
              className="mt-8 inline-flex items-center rounded-[10px] border border-white/35 px-5 py-3 text-[15px] font-medium text-white transition hover:bg-white/10"
            >
              창업자 이야기 읽기 →
            </Link>
          </div>
        </section>

        <section id="founder-story" className="bg-white py-20 sm:py-28">
          <div className="mx-auto max-w-[1280px] px-6 sm:px-8">
            <p className="text-[13px] font-semibold tracking-[0.04em] text-[#9CA3AF]">창업자 이야기</p>
            <h2 className="mt-3 break-keep text-3xl font-semibold tracking-[-0.02em] text-[#111827] sm:text-4xl">대치루트는 왜 시작됐을까</h2>

            <article className="mt-10 max-w-3xl space-y-8 text-[15px] leading-[1.85] text-[#374151] sm:text-[16px]">
              <p className="font-semibold text-[#111827]">대치루트 공동 창업자 오진혁입니다.</p>

              <p>
                저는 중학교 시절 하루 종일 게임에 몰두하던 학생이었습니다. 그러나 중학교 3학년 때 고려대학교에 진학하고 싶다는 목표를
                세우면서 삶의 방향이 완전히 바뀌었습니다. 이후 강남 8학군 일반고에 진학하여 꾸준히 노력한 결과, 입학 당시 100등대였던
                성적을 1학년 말에는 전교 5등까지 끌어올릴 수 있었습니다. 그 흐름을 이어 현역으로 연세대학교에 합격하였고, 이후 다시 수능에
                도전하여 수학과 탐구 선택과목을 바꿔서 처음부터 공부하기 시작했음에도 불구하고 약 3개월 동안의 짧은 기간 동안 집중적으로
                학습하여 전국 상위 0.3% 성적으로 서울대학교 학부대학 광역에 입학하게 되었습니다.
              </p>

              <p>
                제가 이러한 성과를 만들어낼 수 있었던 가장 중요한 이유는 생활 관리였습니다. 특히 공신폰을 활용하여 공부에 방해되는 요소를
                차단하고, 하루의 루틴을 강제적으로라도 유지했던 경험이 큰 역할을 했습니다. 다만 기존 공신폰은 분명한 한계도 존재했습니다.
                학습 방향에 대한 구체적인 코칭이나, 개인에게 최적화된 계획, 그리고 실질적인 피드백을 받기에는 부족한 부분이 있었기
                때문입니다.
              </p>

              <p>
                대치루트는 이러한 기존 공신폰의 한계를 보완한, 한 단계 진화된 학습 관리 기기입니다. 단순히 스마트폰 사용을 제한하는 것을
                넘어, 학생 개개인의 수준과 목표에 맞춘 학습 계획을 설계하고, 이를 지속적으로 관리해주는 AI 기반 코칭 시스템이 핵심입니다.
                특히 서울대학교 재학생 멘토진들이 실제로 경험한 학습 루틴과 전략을 바탕으로 방대한 데이터를 구축해 놓았고, 이를 기반으로 1:1
                100% 개인 맞춤형 계획을 제공한다는 점에서 탁월한 강점을 가지고 있습니다.
              </p>

              <p>
                저 역시 수능을 다시 준비하던 시절 폴더폰을 사용하며 생활을 철저히 통제한 경험이 있습니다. 만약 그 시기에 스마트폰을 그대로
                사용했다면, 현재와 같은 결과를 만들어내기 어려웠을 것이라고 확신합니다. 공부에서 중요한 것은 단순한 의지가 아니라, 의지를
                유지할 수 있는 환경과 시스템입니다. 대치루트는 바로 그 환경을 만들어주는 도구를 넘어서, 서울대학교 멘토진들의 노하우로 쌓인
                방대한 데이터를 바탕으로 학습시킨 대치루트AI를 통해 학생들에게 최적의 공부 방향을 제시합니다. 이를 통해 학생이 유혹에 빠질
                틈이나 공부 방향을 고민하는 데 쏟을 불필요한 시간을 아끼며 최상의 결과를 만들어낼 것입니다.
              </p>

              <p>
                앞으로 저는 공동 창업가로서, 이 서비스를 이용하는 학생들에게 단순한 동기부여를 넘어서 실제로 성적을 변화시킬 수 있는 코칭을
                제공할 계획입니다. 저는 여러 번의 기숙학원 캠프를 담임선생님으로 참가하여 누적 학생 수 수십 명의 생활습관과 공부 방법을
                일일이 분석하고 최적의 공부 방향성을 찾아주는 과정을 통해 학생들이 괄목할 만한 성과를 이루도록 도와준 바 있습니다. 저를
                비롯한 다른 서울대학교 멘토진들도 저와 비슷한 경험을 모두 가지고 있습니다. 구체적으로는 학생들의 학습 패턴과 성취도를 AI의
                데이터 분석력과 저를 비롯한 서울대 멘토진들의 경험을 이용하여 정밀하게 분석하여, 각자에게 맞는 현실적인 목표 설정과 시간 관리
                방법을 제시하고, 흔들리는 시기에 어떻게 다시 루틴을 회복할 수 있는지에 대한 전략을 지속적으로 안내할 것입니다. 또한 제가 직접
                겪었던 시행착오와 극복 과정을 바탕으로, 학생들이 불필요한 시간 낭비를 줄이고 가장 효율적인 방향으로 나아갈 수 있도록
                돕겠습니다.
              </p>

              <p>
                대치루트는 단순한 기기가 아니라, 학생의 인생을 바꾸는 시스템입니다. 올바른 방향과 환경이 갖추어진다면, 누구나 자신의 잠재력을
                충분히 끌어낼 수 있습니다. 저 역시 그 과정을 직접 경험한 사람으로서, 대치루트를 통해 더 많은 학생들이 자신의 한계를 넘어설 수
                있도록 함께하겠습니다.
              </p>
            </article>
          </div>
        </section>

        <section className="bg-[#f8f9fa] py-20 sm:py-28">
          <div className="mx-auto grid max-w-[1280px] grid-cols-1 gap-8 px-6 sm:px-8 md:grid-cols-2 md:gap-12">
            <article className="rounded-2xl border border-[#E5E7EB] bg-white p-6 sm:p-8">
              <h2 className="text-2xl font-semibold tracking-tight text-[#111827]">회사 정보</h2>
              <ul className="mt-5 space-y-2.5 text-[15px] leading-[1.7] text-[#6B7280]">
                <li>회사명: 대치루트 (Daechiroot)</li>
                <li>대표: 정현우</li>
                <li>대표 연락처: 01055810436</li>
                <li>설립: 2026년</li>
                <li>주소: 서울특별시 강남구 개포로 310</li>
                <li>이메일: contact@daechiroot.com</li>
                <li>사업자등록번호: 150-07-03484</li>
                <li>특허: 출원 중 (출원번호 10-2026-0068593)</li>
              </ul>
            </article>
            <article className="rounded-2xl border border-[#E5E7EB] bg-white p-6 sm:p-8">
              <h2 className="text-2xl font-semibold tracking-tight text-[#111827]">대치루트 소개</h2>
              <p className="mt-5 break-keep text-[16px] leading-[1.85] text-[#6B7280]">
                대치루트는 수험생 맞춤 기기 관리 플랫폼입니다.
                <br />
                공부폰·태블릿·AI 코칭·리포트를 하나로 묶어,
                <br />
                수험생이 의지 없이도 집중할 수 있는
                <br />
                환경을 만듭니다.
                <br />
                <br />
                현재 대치폰(아이폰 기반) 베타 서비스를 운영 중이며,
                <br />
                대치탭(아이패드 기반) 출시를 준비하고 있습니다.
              </p>
            </article>
          </div>
        </section>

        <section className="bg-white py-20 sm:py-28">
          <div className="mx-auto max-w-[1280px] px-6 text-center sm:px-8">
            <h2 className="break-keep text-3xl font-semibold tracking-[-0.02em] text-[#111827] sm:text-4xl">지금 대치루트를 만나보세요</h2>
            <p className="mt-4 break-keep text-[16px] leading-[1.75] text-[#6B7280]">
              수험생이라면, 학부모라면, 학원이라면
              <br />
              각자에게 맞는 페이지가 준비되어 있습니다.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link
                href="/phone"
                className="inline-flex items-center justify-center rounded-[10px] bg-[#1B2A4A] px-7 py-3.5 text-[15px] font-semibold text-white"
              >
                대치폰 보러가기 →
              </Link>
              <Link
                href="/inquiry"
                className="inline-flex items-center justify-center rounded-[10px] border-[1.5px] border-[#1B2A4A] bg-white px-7 py-3.5 text-[15px] font-semibold text-[#1B2A4A]"
              >
                상담 신청
              </Link>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
