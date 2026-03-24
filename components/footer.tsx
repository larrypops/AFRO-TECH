import Image from "next/image";
import Link from "next/link";
import { cities, displayPhone, phoneNumber, whatsappUrl } from "@/lib/site-data";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div className="footer-brand">
          <div className="footer-brand-head">
            <Image
              src="/images/logo.png"
              alt="Logo AFRO-TECH"
              width={58}
              height={58}
            />
            <strong className="brand-name">
              <span className="brand-afro">AFRO-</span>
              <span className="brand-tech">TECH</span>
            </strong>
          </div>
          <p>
            AFRO-TECH propose des services d&apos;électricité et de plomberie au
            Cameroun avec une approche sérieuse, réactive et orientée résultat.
          </p>
        </div>

        <div>
          <h3>Liens rapides</h3>
          <Link href="/">Accueil</Link>
          <Link href="/electricite">Électricité</Link>
          <Link href="/plomberie">Plomberie</Link>
          <Link href="/contact">Contact</Link>
        </div>

        <div>
          <h3>Zones desservies</h3>
          {cities.map((city) => (
            <span key={city.name}>{city.name}</span>
          ))}
        </div>

        <div>
          <h3>Contact</h3>
          <a href={`tel:${phoneNumber}`}>{displayPhone}</a>
          <a href={whatsappUrl} target="_blank" rel="noreferrer">
            WhatsApp direct
          </a>
        </div>
      </div>
    </footer>
  );
}
