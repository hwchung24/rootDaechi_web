"use client";

import { useCallback, useEffect, useRef } from "react";
import Image from "next/image";

const IMG = {
  timetable: "/landing-slides/ipad_timetable_cropped.png",
  iphone: "/landing-slides/iphone_nobg.png",
  usim: "/landing-slides/usim_nobg.png",
  ai: "/landing-slides/ai_report_nobg.png",
  mosyle: "/landing-slides/mosyle_logo.png"
} as const;

const SNAP_HTML_CLASS = "home-feature-snap";
const SLIDE_COUNT = 5;

export function LandingSlideSections() {
  const rootRef = useRef<HTMLDivElement>(null);
  const sectionRefs = useRef<(HTMLElement | null)[]>([]);
  const prevInFeatureRef = useRef(false);

  const setSectionRef = useCallback((index: number) => (el: HTMLElement | null) => {
    sectionRefs.current[index] = el;
  }, []);

  /** 기능 블록을 세로로 지나는 동안만 html 스냅 — 히어로·비교표는 일반 스크롤 */
  const syncSnapMode = useCallback(() => {
    const root = rootRef.current;
    if (!root) return;
    const topDoc = root.getBoundingClientRect().top + window.scrollY;
    const bottomDoc = topDoc + root.offsetHeight;
    const y = window.scrollY;
    const vh = window.innerHeight;
    const inFeature = y >= topDoc && y < bottomDoc - vh + 0.5;

    if (!inFeature) {
      document.documentElement.classList.remove(SNAP_HTML_CLASS);
      prevInFeatureRef.current = false;
      return;
    }

    const entering = inFeature && !prevInFeatureRef.current;

    if (entering) {
      let targetTop: number | null = null;
      for (let i = 0; i < SLIDE_COUNT; i++) {
        const el = sectionRefs.current[i];
        if (!el) continue;
        const slideTop = el.getBoundingClientRect().top + window.scrollY;
        const nextEl = sectionRefs.current[i + 1];
        const slideEnd = nextEl
          ? nextEl.getBoundingClientRect().top + window.scrollY
          : slideTop + el.offsetHeight;
        if (y >= slideTop && y < slideEnd) {
          targetTop = slideTop;
          break;
        }
      }

      /* scrollTo가 같은 틱에 scroll 이벤트를 내보냄 → entering 중복 방지 위해 먼저 true */
      prevInFeatureRef.current = true;
      if (targetTop != null) {
        window.scrollTo(0, targetTop);
      }
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          document.documentElement.classList.add(SNAP_HTML_CLASS);
        });
      });
      return;
    }

    document.documentElement.classList.add(SNAP_HTML_CLASS);
    prevInFeatureRef.current = true;
  }, []);

  useEffect(() => {
    const run = () => {
      syncSnapMode();
    };
    window.addEventListener("scroll", run, { passive: true });
    window.addEventListener("resize", run);
    run();
    return () => {
      window.removeEventListener("scroll", run);
      window.removeEventListener("resize", run);
      document.documentElement.classList.remove(SNAP_HTML_CLASS);
    };
  }, [syncSnapMode]);

  useEffect(() => {
    const root = rootRef.current;
    if (!root || typeof ResizeObserver === "undefined") return;
    const ro = new ResizeObserver(() => syncSnapMode());
    ro.observe(root);
    return () => ro.disconnect();
  }, [syncSnapMode]);

  return (
    <div ref={rootRef} className="landing-slide-root">
      {/* 문서 스크롤에 포함 — 각 100dvh마다 스냅 (건너뛰기 방지) */}
      <section ref={setSectionRef(0)} className="ls-slide ls-snap-slide" aria-label="시간표">
        <div className="ls-inner">
          <div className="ls-device">
            <Image
              src={IMG.timetable}
              alt="대치탭 시간표 앱 화면"
              width={1120}
              height={800}
              className="ls-ipad-img"
              sizes="(max-width: 720px) 100vw, 50vw"
              priority
            />
          </div>
          <div className="ls-text">
            <h2 className="ls-headline">
              &apos;인터넷은 막고 싶은데
              <br />
              인강은 써야해요&apos;
            </h2>
            <p className="ls-sub">
              부모님이 직접 설계하는 맞춤형 시간표.
              <br />
              공부 시간엔 인강만, 쉬는 시간엔 카톡까지 허용하세요.
            </p>
          </div>
        </div>
      </section>

      <section ref={setSectionRef(1)} className="ls-slide ls-snap-slide" aria-label="아이폰">
        <div className="ls-inner">
          <div className="ls-device">
            <Image
              src={IMG.iphone}
              alt="대치폰 아이폰"
              width={1120}
              height={800}
              className="ls-phone-img"
              sizes="(max-width: 720px) 100vw, 50vw"
            />
          </div>
          <div className="ls-text">
            <h2 className="ls-headline">
              &apos;기존의 공부폰은 들고 다니기
              <br />
              쪽팔려요&apos;
            </h2>
            <p className="ls-sub">
              투박한 기존의 공부폰 대신,
              <br />
              세련된 아이폰 감성 그대로
            </p>
          </div>
        </div>
      </section>

      <section ref={setSectionRef(2)} className="ls-slide ls-snap-slide" aria-label="유심">
        <div className="ls-inner">
          <div className="ls-text">
            <h2 className="ls-headline">
              약정 걱정 없이,
              <br />
              기존 유심 그대로
            </h2>
            <p className="ls-sub">
              복잡한 개통 절차 없이
              <br />
              유심만 바꿔 끼우면 대치폰이 시작됩니다.
            </p>
          </div>
          <div className="ls-device">
            <Image
              src={IMG.usim}
              alt="유심 트레이"
              width={1120}
              height={700}
              className="ls-usim-img"
              sizes="(max-width: 720px) 100vw, 50vw"
            />
          </div>
        </div>
      </section>

      <section ref={setSectionRef(3)} className="ls-slide ls-snap-slide" aria-label="AI 리포트">
        <div className="ls-inner">
          <div className="ls-text">
            <h2 className="ls-headline">
              자녀의 공부 현황이
              <br />
              궁금해요?
            </h2>
            <p className="ls-sub">
              계획표를 작성해야 풀리는 잠금 기능과
              <br />
              매일 도착하는 카카오톡 AI 공부 리포트
            </p>
          </div>
          <div className="ls-device">
            <Image
              src={IMG.ai}
              alt="AI 공부 리포트"
              width={1120}
              height={800}
              className="ls-ai-img"
              sizes="(max-width: 720px) 100vw, 50vw"
            />
          </div>
        </div>
      </section>

      <section ref={setSectionRef(4)} className="ls-slide ls-snap-slide" aria-label="Mosyle MDM">
        <div className="ls-inner">
          <div className="ls-text">
            <h2 className="ls-headline">
              절대 뚫리지 않는
              <br />
              강력한 보안
            </h2>
            <p className="ls-sub">
              애플 공식 1등 MDM Mosyle 기반으로
              <br />
              완벽하게 통제합니다.
            </p>
          </div>
          <div className="ls-device">
            <div className="ls-logo-wrap">
              <Image
                src={IMG.mosyle}
                alt="Mosyle MDM"
                width={840}
                height={320}
                className="ls-mosyle-logo"
                sizes="(max-width: 720px) 280px, 420px"
              />
              <span className="ls-badge">Apple 공식 1등 MDM</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
