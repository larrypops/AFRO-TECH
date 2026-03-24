import Link from "next/link";
import { Reveal } from "@/components/reveal";
import { SiteImage } from "@/components/site-image";
import {
  cities,
  displayPhone,
  electricalItems,
  phoneNumber,
  plumbingItems,
  testimonials,
  whatsappUrl,
} from "@/lib/site-data";

export function HomeSections() {
  return (
    <>
      <section className="hero section">
        <div className="container grid-2 hero-grid">
          <Reveal className="hero-copy">
            <span className="eyebrow">Intervention rapide au Cameroun</span>
            <h1>
              Électricien et plombier de confiance à Douala, Yaoundé, Bafoussam,
              Dschang et dans d&apos;autres villes du Cameroun
            </h1>
            <p className="lead">
              AFRO-TECH accompagne particuliers, entreprises, commerces et
              chantiers avec un service fiable, rapide et professionnel en
              électricité et plomberie.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href={`tel:${phoneNumber}`}>
                Contactez-nous
              </a>
              <a
                className="button button-secondary"
                href={whatsappUrl}
                target="_blank"
                rel="noreferrer"
              >
                Demander sur WhatsApp
              </a>
            </div>
            <div className="hero-proof">
              <div className="proof-chip">
                <strong>Disponibilité rapide</strong>
                <span>Une prise en charge simple et une intervention organisée</span>
              </div>
              <div className="proof-chip">
                <strong>Devis gratuit</strong>
                <span>Un premier échange clair par appel ou WhatsApp</span>
              </div>
              <div className="proof-chip">
                <strong>Zones larges</strong>
                <span>À Douala, Yaoundé, Bafoussam, Dschang et autres villes</span>
              </div>
            </div>
          </Reveal>

          <Reveal className="hero-visual">
            <div className="image-stack">
              <SiteImage
                src="/images/electricite-4.JPG"
                alt="Technicien électricité en intervention au Cameroun"
                priority
                className="hero-image-tall"
              />
              <SiteImage
                src="/images/plomberie-4.JPG"
                alt="Intervention plomberie sanitaire au Cameroun"
                priority
                className="hero-image-offset"
              />
            </div>
            <div className="hero-badge">
              <strong>AFRO-TECH</strong>
              <span>Électricité • Plomberie • Dépannage</span>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section problem-section">
        <div className="container">
          <Reveal className="section-heading">
            <span className="eyebrow">Pourquoi agir vite</span>
            <h2>
              Pannes électriques, fuites d&apos;eau et installations
              défaillantes peuvent vite coûter cher
            </h2>
            <p>
              Une panne électrique ou une fuite non traitée peut rapidement
              provoquer des dommages et perturber votre activité.
            </p>
          </Reveal>
          <div className="problem-grid">
            <Reveal className="feature-card" as="article">
              <span className="card-kicker">Sécurité</span>
              <h3>Électricité</h3>
              <p>
                Pannes, disjonctions, branchements à reprendre, éclairage
                défectueux et travaux de mise en sécurité.
              </p>
            </Reveal>
            <Reveal className="feature-card" as="article">
              <span className="card-kicker">Confort</span>
              <h3>Plomberie</h3>
              <p>
                Fuites, canalisations bouchées, robinetterie, sanitaires,
                évacuation et alimentation en eau.
              </p>
            </Reveal>
            <Reveal className="feature-card" as="article">
              <span className="card-kicker">Réactivité</span>
              <h3>Urgence et fiabilité</h3>
              <p>
                Nous privilégions des interventions claires, propres et
                efficaces pour remettre vos installations en service.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <Reveal className="section-heading">
            <span className="eyebrow">Nos services</span>
            <h2>
              Deux expertises complémentaires pour traiter vos besoins avec
              sérieux
            </h2>
          </Reveal>

          <div className="service-showcase">
            <Reveal className="service-card">
              <div className="service-card-copy">
                <h3>Électricité</h3>
                <p>
                  Installations électriques, dépannages, remises en état et
                  opérations de maintenance pour logements, commerces et
                  bureaux.
                </p>
                <ul>
                  <li>Installation de prises, tableaux et luminaires</li>
                  <li>Diagnostic, recherche de panne et réparation</li>
                  <li>Maintenance et fiabilisation des installations</li>
                </ul>
                <Link className="text-link" href="/electricite">
                  Découvrir le service
                </Link>
              </div>
              <SiteImage src="/images/electricite-1.JPG" alt="Service électricien" />
            </Reveal>

            <Reveal className="service-card reverse">
              <div className="service-card-copy">
                <h3>Plomberie</h3>
                <p>
                  Recherche de fuite, débouchage, remplacement
                  d&apos;équipements, pose sanitaire et remise en état.
                </p>
                <ul>
                  <li>Fuites et dépannages urgents</li>
                  <li>Installation de cuisine, salle d&apos;eau et sanitaires</li>
                  <li>Entretien et remise en état des réseaux</li>
                </ul>
                <Link className="text-link" href="/plomberie">
                  Découvrir le service
                </Link>
              </div>
              <SiteImage src="/images/plomberie-1.JPG" alt="Service plomberie" />
            </Reveal>
          </div>
        </div>
      </section>

      <ZonesPreview />
      <TestimonialsSection />
      <AboutPreview />
      <FinalCta />
      <ContactSection />
    </>
  );
}

export function ServicePage({
  eyebrow,
  title,
  intro,
  description,
  items,
  image,
  imageAlt,
  primaryCta,
  secondaryCta,
}: {
  eyebrow: string;
  title: string;
  intro: string;
  description: string;
  items: string[];
  image: string;
  imageAlt: string;
  primaryCta: { href: string; label: string };
  secondaryCta: { href: string; label: string };
}) {
  return (
    <section className="section">
      <div className="container grid-2 detail-grid">
        <Reveal className="detail-copy">
          <span className="eyebrow">{eyebrow}</span>
          <h1 className="page-title">{title}</h1>
          <p>{intro}</p>
          <p>{description}</p>
          <ul className="check-list">
            {items.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <div className="inline-actions">
            <a className="button button-primary" href={primaryCta.href}>
              {primaryCta.label}
            </a>
            <a className="button button-secondary" href={secondaryCta.href}>
              {secondaryCta.label}
            </a>
          </div>
        </Reveal>

        <Reveal className="portrait-frame">
          <SiteImage src={image} alt={imageAlt} />
        </Reveal>
      </div>
    </section>
  );
}

export function ZonesPreview() {
  return (
    <section className="section alt-section">
      <div className="container">
        <Reveal className="section-heading">
          <span className="eyebrow">Zones d&apos;intervention</span>
          <h2>Nous intervenons dans les principales villes du Cameroun</h2>
          <p>
            AFRO-TECH accompagne ses clients à Douala, Yaoundé, Bafoussam,
            Dschang et dans d&apos;autres villes du Cameroun.
          </p>
        </Reveal>
        <div className="city-grid">
          {cities.map((city) => (
            <Reveal className="city-card" key={city.name} as="article">
              <h3>{city.name}</h3>
              <p>{city.description}</p>
              <span>{city.detail}</span>
            </Reveal>
          ))}
        </div>
        <Reveal className="zones-cta">
          <p>
            Vous êtes dans une autre ville ? Contactez-nous pour vérifier
            rapidement la possibilité d&apos;intervention.
          </p>
          <Link className="button button-primary" href="/zones">
            Voir les zones desservies
          </Link>
        </Reveal>
      </div>
    </section>
  );
}

export function TestimonialsSection() {
  return (
    <section className="section">
      <div className="container">
        <Reveal className="section-heading">
          <span className="eyebrow">Confiance</span>
          <h2>Des messages clairs pour rassurer avant meme le premier contact</h2>
        </Reveal>
        <div className="testimonial-grid">
          {testimonials.map((testimonial) => (
            <Reveal className="testimonial" key={testimonial.author} as="article">
              <p>&quot;{testimonial.quote}&quot;</p>
              <strong>{testimonial.author}</strong>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function AboutPreview() {
  return (
    <section className="section about-section">
      <div className="container grid-2 detail-grid">
        <Reveal className="detail-copy">
          <span className="eyebrow">À propos</span>
          <h2>
            Un service sérieux pour vos travaux et dépannages en électricité et
            plomberie
          </h2>
          <p>
            AFRO-TECH intervient pour les besoins du quotidien, les urgences et
            les travaux d&apos;installation avec une approche simple.
          </p>
          <p>
            Nous mettons l&apos;accent sur la réactivité, le travail soigné et une
            communication claire afin que chaque client sache à quoi
            s&apos;attendre dès le premier contact.
          </p>
          <Link className="text-link" href="/a-propos">
            En savoir plus
          </Link>
        </Reveal>
        <Reveal className="stats-panel">
          <div className="stat">
            <strong>Deux services essentiels</strong>
            <span>Électricité et plomberie pour habitat, commerce et chantier</span>
          </div>
          <div className="stat">
            <strong>Intervention dans plusieurs villes</strong>
            <span>Douala, Yaoundé, Bafoussam, Dschang et autres zones</span>
          </div>
          <div className="stat">
            <strong>Une priorité</strong>
            <span>Vous apporter une solution fiable, rapide et adaptée</span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function FinalCta() {
  return (
    <section className="section final-cta">
      <Reveal className="container final-cta-box">
        <div>
          <span className="eyebrow">Appel a l&apos;action</span>
          <h2>Besoin d&apos;un électricien ou d&apos;un plombier au Cameroun ?</h2>
          <p>
            Contactez-nous pour une intervention rapide, un devis gratuit ou
            une prise de rendez-vous adaptée à votre besoin.
          </p>
        </div>
        <div className="hero-actions">
          <a className="button button-primary" href={`tel:${phoneNumber}`}>
            Contactez-nous
          </a>
          <a
            className="button button-secondary"
            href={whatsappUrl}
            target="_blank"
            rel="noreferrer"
          >
            Ouvrir WhatsApp
          </a>
        </div>
      </Reveal>
    </section>
  );
}

export function ContactSection() {
  return (
    <section className="section">
      <div className="container contact-grid">
        <Reveal className="detail-copy">
          <span className="eyebrow">Contact</span>
          <h2>Demandez votre devis gratuit</h2>
          <p>
            Appelez-nous, écrivez-nous sur WhatsApp ou laissez votre demande via
            le formulaire.
          </p>
          <div className="contact-list">
            <a href={`tel:${phoneNumber}`}>Téléphone: {displayPhone}</a>
            <a href={whatsappUrl} target="_blank" rel="noreferrer">
              WhatsApp: {displayPhone}
            </a>
            <span>
              Zones: Douala, Yaoundé, Bafoussam, Dschang et autres villes du
              Cameroun
            </span>
          </div>
        </Reveal>

        <Reveal className="contact-form" as="form">
          <label>
            Nom
            <input type="text" name="name" placeholder="Votre nom" />
          </label>
          <label>
            Téléphone
            <input type="tel" name="phone" placeholder="+237..." />
          </label>
          <label>
            Service
            <select name="service" defaultValue="Électricité">
              <option>Électricité</option>
              <option>Plomberie</option>
              <option>Électricité + Plomberie</option>
            </select>
          </label>
          <label>
            Message
            <textarea name="message" rows={5} placeholder="Expliquez votre besoin" />
          </label>
          <button type="button" className="button button-primary">
            Envoyer la demande
          </button>
        </Reveal>
      </div>
    </section>
  );
}

export const servicePageProps = {
  electricite: {
    eyebrow: "Page électricité",
    title: "Électricien à Douala, Yaoundé, Bafoussam, Dschang et autres villes",
    intro:
      "AFRO-TECH prend en charge les installations neuves, les remises aux normes, les dépannages urgents et la maintenance de vos réseaux électriques avec une approche centrée sur la sécurité, la fiabilité et la qualité d'exécution.",
    description:
      "Que vous soyez un particulier, un gestionnaire d'immeuble, un responsable de commerce ou un professionnel du chantier, nous vous aidons à sécuriser vos installations et à retrouver un fonctionnement stable.",
    items: electricalItems,
    image: "/images/electricite-6.JPG",
    imageAlt: "Travaux d'installation électrique en intérieur",
    primaryCta: { href: `tel:${phoneNumber}`, label: "Demander une intervention" },
    secondaryCta: { href: "/contact", label: "Demander un devis" },
  },
  plomberie: {
    eyebrow: "Page plomberie",
    title: "Plombier à Douala, Yaoundé, Bafoussam, Dschang et autres villes",
    intro:
      "Une fuite, une évacuation bouchée ou une installation sanitaire mal réalisée peut rapidement perturber votre quotidien. Nous intervenons pour identifier le problème, corriger la panne et remettre votre installation en bon état.",
    description:
      "Nous réalisons également les installations de cuisine, salle d'eau, toilettes, raccordements et remplacement d'équipements avec un rendu propre et durable.",
    items: plumbingItems,
    image: "/images/plomberie-6.JPG",
    imageAlt: "Installation et dépannage plomberie au Cameroun",
    primaryCta: { href: whatsappUrl, label: "Parler à un technicien" },
    secondaryCta: { href: "/contact", label: "Demander un devis" },
  },
};
