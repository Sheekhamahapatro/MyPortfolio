/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Link } from 'react-scroll';

const navLinkProps = {
  smooth: true,
  spy: true,
  duration: 500,
  offset: -72,
  activeClass: 'portfolio-nav-active',
  className:
    'cursor-pointer font-sans text-[13.5px] font-normal text-[rgba(245,242,238,0.55)] hover:text-[#f5f2ee] transition-colors',
};

const Header = () => {
  return (
    <header
      className="fixed top-0 left-0 right-0 z-[100] portfolio-header border-b-[0.5px] border-[rgba(255,255,255,0.09)]"
      role="banner"
    >
      <div className="portfolio-header-inner mx-auto flex w-full max-w-[100vw] items-center justify-between">
        <a
          href="#home"
          className="font-display text-[20px] font-normal leading-none tracking-tight text-[#f5f2ee]"
        >
          SM.
        </a>
        <nav
          aria-label="Primary"
          className="flex flex-1 items-center justify-center gap-10 max-[780px]:hidden"
        >
          <Link {...navLinkProps} to="about">
            About
          </Link>
          <Link {...navLinkProps} to="work">
            Work
          </Link>
          <Link {...navLinkProps} to="skills">
            Skills
          </Link>
          <Link {...navLinkProps} to="contact">
            Contact
          </Link>
        </nav>
        <Link
          to="contact"
          smooth
          spy
          duration={500}
          offset={-72}
          className="portfolio-cta-talk inline-flex shrink-0 cursor-pointer items-center rounded-full border-[0.5px] border-[#c8f04a] bg-transparent px-[18px] py-2 font-sans text-[13px] font-medium text-[#f5f2ee] transition-colors hover:bg-[#c8f04a] hover:text-[#0a0a0a]"
        >
          Let&apos;s talk →
        </Link>
      </div>
    </header>
  );
};

export default Header;
