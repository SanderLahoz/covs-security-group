"use client";

import { useEffect, useState } from "react";
import { CloseIcon, MailIcon, MenuIcon } from "@/components/Icons";
import Logo from "@/components/Logo";
import { mailtoHref, site } from "@/lib/site";

export default function Navbar() {
  const [open, setOpen] = useState<boolean>(false);
  const [scrolled, setScrolled] = useState<boolean>(false);

  useEffect(() => {
    const onScroll = (): void => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const close = (): void => setOpen(false);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled || open
          ? "border-b border-cream-300 bg-cream-50/95 backdrop-blur"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <nav
        aria-label="Hovedmenu"
        className="mx-auto flex h-20 max-w-6xl items-center justify-between px-6"
      >
        <a href="#top" aria-label={`${site.brandName}, til toppen`} onClick={close}>
          <Logo />
        </a>

        <ul className="hidden items-center gap-10 md:flex">
          {site.nav.map((link) => (
            <li key={link.href}>
              <a href={link.href} className="link-subtle text-sm font-semibold">
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <a
            href={mailtoHref("Henvendelse om sikkerhedstjek")}
            className="hidden items-center gap-2 rounded-full bg-brand-500 px-5 py-2.5 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-brand-600 hover:shadow-lg hover:shadow-brand-500/25 sm:inline-flex"
          >
            <MailIcon className="h-4 w-4" />
            Kontakt os
          </a>
          <button
            type="button"
            className="grid h-10 w-10 place-items-center rounded-full border border-cream-300 bg-white text-navy-900 transition-all duration-300 hover:border-brand-400 md:hidden"
            aria-expanded={open}
            aria-controls="mobilmenu"
            aria-label={open ? "Luk menu" : "Åbn menu"}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <CloseIcon className="h-5 w-5" /> : <MenuIcon className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      <div
        id="mobilmenu"
        className={`grid transition-[grid-template-rows] duration-300 md:hidden ${
          open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        }`}
      >
        <div className="overflow-hidden">
          <ul className="mx-auto flex max-w-6xl flex-col gap-1 px-6 pb-6">
            {site.nav.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={close}
                  tabIndex={open ? 0 : -1}
                  className="block rounded-lg px-3 py-3 text-base font-semibold text-navy-900 transition-all duration-300 hover:bg-cream-200"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li className="pt-3">
              <a
                href={mailtoHref("Henvendelse om sikkerhedstjek")}
                onClick={close}
                tabIndex={open ? 0 : -1}
                className="btn-primary w-full"
              >
                <MailIcon className="h-5 w-5" />
                Kontakt os via e-mail
              </a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}
