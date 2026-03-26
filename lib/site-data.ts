export const phoneNumber = "+237655230440";
export const displayPhone = "+237 6 55 23 04 40";
export const secondaryPhoneNumber = "+237672225703";
export const secondaryDisplayPhone = "+237 6 72 22 57 03";
export const whatsappUrl = `https://wa.me/${phoneNumber.replace("+", "")}`;

export const cities = [
  {
    name: "Douala",
    description: "Interventions rapides pour logements, commerces, bureaux et chantiers.",
    detail: "Disponibilité selon votre zone et votre besoin",
  },
  {
    name: "Yaoundé",
    description: "Services installation, maintenance et dépannage pour particuliers et professionnels.",
    detail: "Accompagnement pour habitat, commerce et bureaux",
  },
  {
    name: "Bafoussam",
    description: "Travaux fiables pour habitat, locations, locaux techniques et points de vente.",
    detail: "Interventions soignées pour particuliers et professionnels",
  },
  {
    name: "Dschang",
    description: "Dépannage, installation et pose d'équipements pour différents types de besoins.",
    detail: "Prise de contact simple par téléphone ou WhatsApp",
  },
];

export const electricalItems = [
  "Étude",
  "Plan 2D",
  "Devis",
  "Installation électrique",
  "Installation des éclairages publics",
  "Maintenance",
  "Prestations diverses",
];

export const plumbingItems = [
  "Étude",
  "Plan 2D",
  "Devis pour l'installation des pompes électriques",
  "Installation des pompes électriques",
  "Maintenance",
  "Installation des chauffe-eaux électriques",
  "Installation des chauffe-eaux solaires",
  "Prestations diverses",
];

export const serviceGalleries = {
  electricite: [
    {
      src: "/images/electricite-1.JPG",
      alt: "Installation électrique en cours de réalisation",
    },
    {
      src: "/images/electricite-4.JPG",
      alt: "Intervention électrique en intérieur",
    },
    {
      src: "/images/electricite-6.JPG",
      alt: "Travaux de maintenance électrique",
    },
    {
      src: "/images/plan2d-1.JPG",
      alt: "Plan 2D pour projet d'électricité",
    },
    {
      src: "/images/plan2d-2.JPG",
      alt: "Schéma technique 2D pour installation électrique",
    },
  ],
  plomberie: [
    {
      src: "/images/plomberie-1.JPG",
      alt: "Installation de plomberie sur chantier",
    },
    {
      src: "/images/plomberie-4.JPG",
      alt: "Intervention plomberie sanitaire",
    },
    {
      src: "/images/plomberie-6.JPG",
      alt: "Maintenance et installation de plomberie",
    },
    {
      src: "/images/plan2d-3.JPG",
      alt: "Plan 2D pour projet de plomberie",
    },
    {
      src: "/images/plan2d-2.JPG",
      alt: "Schéma technique 2D pour installation de plomberie",
    },
  ],
};

export const testimonials = [
  {
    quote:
      "Intervention rapide et travail soigné pour une panne électrique dans notre boutique à Douala. Le contact a été simple et le résultat très professionnel.",
    author: "Commerce local, Douala",
  },
  {
    quote:
      "La fuite a été réparée rapidement et les sanitaires remplacés proprement. La communication était claire du début à la fin.",
    author: "Cliente, Yaoundé",
  },
  {
    quote:
      "On sent une vraie organisation, avec une présentation sérieuse et un service qui inspire confiance dès les premiers échanges.",
    author: "Gestionnaire immobilier, Bafoussam",
  },
];
