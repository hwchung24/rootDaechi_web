import Link from "next/link";
import { AppHeader } from "@/components/AppHeader";
import { SiteFooter } from "@/components/SiteFooter";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#f8f9fa] font-sans text-[#111827]">
      <AppHeader />
      <main>
        <section className="bg-[#1B2A4A] py-20 sm:py-28">
          <div className="mx-auto max-w-[1280px] px-6 sm:px-8">
            <p className="text-xs font-semibold uppercase tracking-[0.12em] text-white/65">ABOUT DAECHIROOT</p>
            <h1 className="mt-5 break-keep text-4xl font-bold leading-[1.12] tracking-[-0.03em] text-white sm:text-5xl md:text-6xl">
              의지가 아니라
              <br />
              환경이 바꿉니다.
            </h1>
            <p className="mt-6 max-w-2xl break-keep text-[16px] leading-[1.8] text-white/80 sm:text-[18px]">
              대치루트는 수험생이 의지력을 낭비하지 않도록
              <br />
              공부 환경 자체를 설계하는 회사입니다.
            </p>
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
                <p className="text-2xl" aria-hidden>
                  🚫
                </p>
                <h3 className="mt-4 text-xl font-semibold text-[#111827]">기존 공부폰의 문제</h3>
                <p className="mt-3 break-keep text-[15px] leading-[1.75] text-[#6B7280]">
                  저가 피처폰·공신폰은 지도도 안 되고, 친구 연락도 안 됩니다. 수험생이 창피함을 느끼고 결국 몰래 스마트폰을 삽니다.
                </p>
              </article>
              <article className="rounded-2xl border border-[#E5E7EB] bg-white p-6">
                <p className="text-2xl" aria-hidden>
                  📵
                </p>
                <h3 className="mt-4 text-xl font-semibold text-[#111827]">차단 앱의 한계</h3>
                <p className="mt-3 break-keep text-[15px] leading-[1.75] text-[#6B7280]">
                  스크린타임·유해 사이트 차단은 항상 우회 방법이 존재합니다. 인터넷에 방법이 있고, 수험생은 그걸 찾는 데 오히려 집중력을
                  씁니다.
                </p>
              </article>
              <article className="rounded-2xl border border-[#E5E7EB] bg-white p-6">
                <p className="text-2xl" aria-hidden>
                  💬
                </p>
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
              <blockquote className="border-l-[3px] border-[#1B2A4A] pl-5 text-[#111827]">
                <p className="font-semibold leading-snug">저는 삼수를 했습니다.</p>
                <p className="mt-3">
                  재능이 없어서가 아니었습니다. 의지가 없어서도 아니었습니다. 스마트폰 하나를 이기지 못해서였습니다.
                </p>
              </blockquote>

              <p>
                수능을 처음 준비하던 해, 저는 공신폰으로 바꿨습니다. 대치동에서 그 폰을 들고 다니는 게 창피했습니다. 친구들한테 연락도
                제대로 못 하고, 길을 찾으려면 부모님한테 전화해야 했습니다. 두 달을 버티다 결국 당근마켓에서 아이폰을 샀습니다. 부모님
                몰래.
              </p>

              <p>
                그 다음부터는 스스로와의 싸움이었습니다. 스크린타임을 걸었습니다. 비밀번호를 부모님한테 맡겼습니다. 유해 사이트 차단
                프로그램을 깔았습니다. 그때마다 뚫는 방법을 찾아냈습니다. 인터넷에는 항상 방법이 있었습니다. 저는 공부보다 차단 프로그램
                우회하는 데 더 집중력을 쏟고 있었습니다.
              </p>

              <p>
                더 큰 문제는 따로 있었습니다. 폰을 잠깐 내려놓아도 공부에 완전히 집중하지 못했습니다. 완전히 노는 것도 아니고, 완전히
                집중하는 것도 아닌 그 어딘가를 계속 맴돌았습니다. 플래너를 써야 한다는 건 알았습니다. 하지만 매일 아침 계획표를 펼치는 것
                자체가 너무 어려웠습니다. 작심삼일이 반복됐습니다.
              </p>

              <p>그렇게 재수를 했고, 삼수를 했습니다.</p>

              <p>
                삼수 때 저는 한 가지를 깨달았습니다. 의지력은 유한하다는 것. 매일 아침 &ldquo;오늘은 폰 안 본다&rdquo;고 결심하는 데
                의지력을 쓰면, 정작 공부할 때 쓸 의지력이 남지 않는다는 것. 환경이 바뀌지 않으면 사람은 바뀌지 않는다는 것.
              </p>

              <p>
                <span className="font-semibold text-[#1B2A4A]">대치루트는 그 깨달음에서 시작했습니다.</span>
                <br />
                공신폰처럼 창피하지 않아도 됩니다. 지도도 쓸 수 있고, 카카오톡도 허용된 시간에 쓸 수 있습니다. 하지만 공부 시간에는 어떤
                방법으로도 유튜브를 열 수 없습니다. 매일 아침 계획표를 쓰지 않으면 폰이 켜지지 않습니다. 의지력이 필요 없습니다. 구조가
                대신합니다.
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
                <li>설립: 2026년</li>
                <li>주소: 서울특별시 강남구 대치동</li>
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
