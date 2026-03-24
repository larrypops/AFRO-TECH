import Image from "next/image";
import Link from "next/link";
import { MobileNav } from "@/components/mobile-nav";
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
  return (
    <header className="site-header">
      <div className="container header-inner">
        <Link href="/" className="brand">
          <Image
            src="/images/logo.png"
            alt="Logo AFRO-TECH"
            width={58}
            height={58}
            priority
          />
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

        <MobileNav links={navLinks} />

        <a className="button button-primary header-cta" href={`tel:${phoneNumber}`}>
          {displayPhone}
        </a>
      </div>
    </header>
  );
}
