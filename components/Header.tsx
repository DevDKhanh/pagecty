"use client";

import { useEffect, useRef, useState } from "react";
import Logo from "./Logo";
import { localeNames, locales, type Locale } from "@/lib/i18n";
import type { Dict } from "@/dictionaries/en";

export default function Header({
  locale,
  nav,
  base = "",
  path = "",
  solid = false,
  quoteHref,
}: {
  locale: Locale;
  nav: Dict["nav"];
  /** prefix for section anchors, e.g. "/vi" on sub-pages so "#products" becomes "/vi#products" */
  base?: string;
  /** path after the locale, kept when switching language */
  path?: string;
  /** always use the white header (pages without a dark hero) */
  solid?: boolean;
  /** where the "Get a quote" buttons point; defaults to the home contact form */
  quoteHref?: string;
}) {
  const quote = quoteHref ?? `${base}#contact`;
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const langRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!langOpen) return;
    const close = (e: MouseEvent | KeyboardEvent) => {
      if (e instanceof KeyboardEvent ? e.key === "Escape" : !langRef.current?.contains(e.target as Node)) setLangOpen(false);
    };
    document.addEventListener("mousedown", close);
    document.addEventListener("keydown", close);
    return () => {
      document.removeEventListener("mousedown", close);
      document.removeEventListener("keydown", close);
    };
  }, [langOpen]);

  const links = [
    { href: `${base}#products`, label: nav.products },
    { href: `${base}#factory`, label: nav.capabilities },
    { href: `${base}#process`, label: nav.process },
    { href: `${base}#industries`, label: nav.industries },
    { href: `${base}#contact`, label: nav.contact },
  ];

  const pick = (l: Locale) => {
    document.cookie = `NEXT_LOCALE=${l}; path=/; max-age=31536000; samesite=lax`;
  };

  return (
    <header className={`header${solid || scrolled || menuOpen ? " header--solid" : ""}`}>
      <div className="container header__inner">
        <a href={base ? `/${locale}` : "#top"} className="header__brand" aria-label="Faruit">
          <Logo light={!(solid || scrolled || menuOpen)} />
        </a>

        <nav className={`nav${menuOpen ? " nav--open" : ""}`} aria-label="Main">
          {links.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setMenuOpen(false)}>
              {l.label}
            </a>
          ))}
          <a href={quote} className="btn btn--primary nav__cta" onClick={() => setMenuOpen(false)}>
            {nav.quote}
          </a>
        </nav>

        <div className="header__tools">
          <div className="lang" ref={langRef}>
            <button
              type="button"
              className="lang__btn"
              aria-haspopup="listbox"
              aria-expanded={langOpen}
              aria-label={nav.language}
              onClick={() => setLangOpen((v) => !v)}
            >
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <circle cx="12" cy="12" r="9" />
                <path d="M3 12h18M12 3c2.5 2.7 3.8 5.7 3.8 9s-1.3 6.3-3.8 9c-2.5-2.7-3.8-5.7-3.8-9S9.5 5.7 12 3z" />
              </svg>
              <span>{localeNames[locale].short}</span>
            </button>
            {langOpen && (
              <ul className="lang__menu" role="listbox" aria-label={nav.language}>
                {locales.map((l) => (
                  <li key={l} role="option" aria-selected={l === locale}>
                    <a href={`/${l}${path}`} lang={l} onClick={() => pick(l)} className={l === locale ? "is-active" : undefined}>
                      <span>{localeNames[l].native}</span>
                      <span className="lang__code">{l.toUpperCase()}</span>
                    </a>
                  </li>
                ))}
              </ul>
            )}
          </div>
          <a href={quote} className="btn btn--primary header__cta">
            {nav.quote}
          </a>
          <button
            type="button"
            className="burger"
            aria-label={nav.menu}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((v) => !v)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>
    </header>
  );
}
