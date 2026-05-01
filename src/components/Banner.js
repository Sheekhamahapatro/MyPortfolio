/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Link } from 'react-scroll';

const STATS = [
  { num: '2', suffix: '+', label: 'Years of industry experience' },
  { num: '10', suffix: '+', label: 'Projects shipped end-to-end' },
  { num: '9', suffix: '', label: 'Client collaborations' },
  { num: '6', suffix: '★', label: 'Client testimonials received' },
];

const STACK = [
  'Figma',
  'React.js',
  'Next.js',
  'TypeScript',
  'Angular',
  'Tailwind CSS',
  'Accessibility',
];

const Banner = () => {
  return (
    <div className="portfolio-hero-stack m-0 flex w-full flex-col gap-0 p-0 leading-[normal]">
      <section
        id="home"
        className="portfolio-hero relative m-0 mb-0 box-border flex min-h-screen items-center bg-[var(--bg)] pb-[100px] pl-[52px] pr-[52px] pt-[120px] max-[780px]:px-5 max-[780px]:pb-[100px] max-[780px]:pt-[96px]"
      >
        <div
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_100%_0%,rgba(200,240,74,0.055),transparent)]"
          aria-hidden
        />
        <div className="relative z-[1] grid w-full max-w-[100vw] grid-cols-1 items-center gap-16 lg:grid-cols-[1.1fr_0.9fr] lg:gap-[64px] max-[780px]:flex max-[780px]:flex-col max-[780px]:gap-[42px]">
          <aside className="portfolio-fade-up portfolio-fade-delay-014 order-first w-full lg:col-start-2 lg:row-start-1">
            <div className="grid w-full grid-cols-2 gap-[10px]">
              {STATS.map((s) => (
                <article
                  key={s.label}
                  className="portfolio-stat-card rounded-[14px] border-[0.5px] border-[rgba(255,255,255,0.09)] bg-[var(--surface)] px-5 py-[22px] transition-colors duration-300 hover:border-[rgba(200,240,74,0.28)]"
                >
                  <p className="mb-2 flex flex-wrap items-baseline gap-0 leading-none">
                    <span className="font-display text-[38px] font-normal tracking-tight text-[#f5f2ee]">
                      {s.num}
                    </span>
                    <span className="text-[22px] font-normal text-[#c8f04a]">
                      {s.suffix}
                    </span>
                  </p>
                  <p className="font-sans text-[12.5px] font-normal leading-[1.5] text-[rgba(245,242,238,0.3)]">
                    {s.label}
                  </p>
                </article>
              ))}
            </div>
          </aside>

          <div className="portfolio-fade-up order-last w-full lg:col-start-1 lg:row-start-1 lg:justify-self-start">
            <div className="mb-[30px] inline-flex items-center gap-2 rounded-full border-[0.5px] border-[rgba(255,255,255,0.09)] bg-[var(--surface)] px-[14px] py-[7px]">
              <span
                className="portfolio-avail-dot h-2 w-2 shrink-0 rounded-full bg-[#c8f04a]"
                aria-hidden
              />
              <span className="font-sans text-[12px] font-normal tracking-normal text-[rgba(245,242,238,0.55)]">
                Open to opportunities
              </span>
            </div>
            <h1 className="mb-4 font-display text-[clamp(54px,6.2vw,80px)] font-normal leading-[1] tracking-[-0.03em]">
              <span className="block text-[#f5f2ee]">Sheekha</span>
              <span className="block font-medium italic text-[#c8f04a]">
                Mahapatro
              </span>
            </h1>
            <p className="mb-8 font-sans text-[14px] font-normal uppercase leading-normal tracking-[0.13em] text-[rgba(245,242,238,0.55)]">
              UX / UI Designer · Frontend Developer
            </p>
            <div
              className="mb-7 h-[1.5px] w-9 bg-[#c8f04a] opacity-[0.55]"
              aria-hidden
            />
            <p className="mb-11 max-w-[460px] font-sans text-[17px] font-light leading-[1.8] text-[rgba(245,242,238,0.65)]">
              I bridge the gap between{' '}
              <strong className="font-medium text-[#f5f2ee]">
                design and engineering
              </strong>{' '}
              — turning research into pixel-precise interfaces and accessible,
              production-ready code. Currently designing at{' '}
              <strong className="font-medium text-[#f5f2ee]">
                Software Infotech, Noida
              </strong>
              .
            </p>
            <div className="flex flex-row flex-wrap gap-4">
              <Link
                to="work"
                smooth
                spy
                duration={500}
                offset={-72}
                className="inline-flex cursor-pointer items-center justify-center rounded-full bg-[#c8f04a] px-[30px] py-[14px] font-sans text-[14px] font-medium text-[#0a0a0a] transition-opacity hover:opacity-90"
              >
                View my work →
              </Link>
              <a
                href="/Sheekha_Mahapatro_Resume.pdf"
                download
                className="inline-flex items-center justify-center rounded-full border-[0.5px] border-[rgba(255,255,255,0.09)] bg-transparent px-[30px] py-[14px] font-sans text-[14px] font-medium text-[rgba(245,242,238,0.55)] transition-colors hover:border-[rgba(200,240,74,0.38)] hover:text-[#c8f04a]"
              >
                Download CV
              </a>
            </div>
          </div>
        </div>

        <div
          className="portfolio-fade-up portfolio-fade-delay-05 pointer-events-none absolute bottom-[36px] left-1/2 z-10 -translate-x-1/2 max-[780px]:bottom-[28px]"
          aria-hidden
        >
          <div className="relative box-border h-[44px] w-[28px] rounded-[14px] border-[1.5px] border-[rgba(255,255,255,0.15)] bg-transparent">
            <span className="portfolio-scroll-dot absolute left-1/2 top-2 h-[5px] w-[5px] -translate-x-1/2 rounded-full bg-[#c8f04a]" />
          </div>
        </div>
      </section>

      <div className="portfolio-below-hero portfolio-fade-up portfolio-fade-delay-03 m-0 box-border flex flex-wrap items-center gap-12 border-t-[0.5px] border-[rgba(255,255,255,0.09)] bg-[#141414] px-[52px] py-[28px] max-[780px]:gap-8 max-[780px]:px-5 max-[780px]:py-[24px]">
        <div className="flex flex-wrap items-center gap-12 max-[780px]:gap-8">
          <div className="flex items-center gap-4">
            <div
              className="flex h-[42px] w-[42px] shrink-0 items-center justify-center rounded-lg border-[0.5px] border-[#c8f04a] bg-[rgba(200,240,74,0.1)] font-display text-[13px] font-medium text-[#c8f04a]"
              aria-hidden
            >
              SI
            </div>
            <div>
              <p className="mb-1 font-sans text-[11px] font-normal uppercase tracking-[0.08em] text-[rgba(245,242,238,0.3)]">
                Currently at
              </p>
              <p className="mb-0.5 font-sans text-[14px] font-medium text-[#f5f2ee]">
                Software Infotech, Noida
              </p>
              <p className="font-sans text-[12.5px] font-light text-[rgba(245,242,238,0.55)]">
                UX/UI Designer & Junior Frontend Developer
              </p>
            </div>
          </div>
          <div
            className="portfolio-below-divider hidden h-10 w-px shrink-0 bg-[rgba(255,255,255,0.09)] min-[781px]:block"
            aria-hidden
          />
        </div>
        <div className="min-w-0 flex-1 max-[780px]:w-full">
          <p className="mb-[10px] font-sans text-[11px] font-normal uppercase tracking-[0.08em] text-[rgba(245,242,238,0.3)]">
            Core stack
          </p>
          <div className="flex flex-wrap gap-[7px]">
            {STACK.map((pill) => (
              <span
                key={pill}
                className="inline-flex rounded-[20px] border-[0.5px] border-[rgba(255,255,255,0.09)] px-[13px] py-[5px] font-sans text-[12.5px] font-normal text-[rgba(245,242,238,0.55)] transition-colors hover:border-[rgba(200,240,74,0.38)] hover:text-[#c8f04a]"
              >
                {pill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
