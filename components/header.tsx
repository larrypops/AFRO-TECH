"use client";

import Link from "next/link";
import { useState } from "react";
import { displayPhone, phoneNumber } from "@/lib/site-data";

const navLinks = [
  { href: "/", label: "Accueil" },
  { href: "/electricite", label: "Electricite" },
  { href: "/plomberie", label: "Plomberie" },
  { href: "/zones", label: "Zones" },
  { href: "/a-propos", label: "A propos" },
  { href: "/contact", label: "Contact" },
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="container header-inner">
        <Link href="/" className="brand" onClick={() => setIsOpen(false)}>
          <img src="/images/logo.png" alt="Logo AFRO-TECH" />
          <div className="brand-copy">
            <strong className="brand-name">
              <span className="brand-afro">AFRO-</span>
              <span className="brand-tech">TECH</span>
            </strong>
          </div>
        </Link>

        <nav className="main-nav" aria-label="Navigation principale">
          {navLinks.map((item) => (
            <Link key={item.href} href={item.href}>
              {item.label}
            </Link>
          ))}
        </nav>

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

        <a className="button button-primary header-cta" href={`tel:${phoneNumber}`}>
          {displayPhone}
        </a>
      </div>

      <div id="mobile-nav" className={`mobile-nav ${isOpen ? "is-open" : ""}`}>
        <div className="container mobile-nav-inner">
          {navLinks.map((item) => (
            <Link key={item.href} href={item.href} onClick={() => setIsOpen(false)}>
              {item.label}
            </Link>
          ))}
          <a className="button button-primary" href={`tel:${phoneNumber}`}>
            Nous appeler
          </a>
        </div>
      </div>
    </header>
  );
}
