"use client";

import Link from "next/link";
import { useState } from "react";
import { phoneNumber } from "@/lib/site-data";

type NavLink = {
  href: string;
  label: string;
};

export function MobileNav({ links }: { links: NavLink[] }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="mobile-nav-shell">
      <button
        className="mobile-menu-toggle"
        type="button"
        aria-expanded={isOpen}
        aria-controls="mobile-nav"
        onClick={() => setIsOpen((current) => !current)}
      >
        <span />
        <span />
        <span />
        <span className="sr-only">Ouvrir le menu</span>
      </button>

      <div id="mobile-nav" className={`mobile-nav ${isOpen ? "is-open" : ""}`}>
        <div className="container mobile-nav-inner">
          {links.map((item) => (
            <Link key={item.href} href={item.href} onClick={() => setIsOpen(false)}>
              {item.label}
            </Link>
          ))}
          <a className="button button-primary" href={`tel:${phoneNumber}`}>
            Nous appeler
          </a>
        </div>
      </div>
    </div>
  );
}
