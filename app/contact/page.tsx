import type { Metadata } from "next";
import { ContactSection, FinalCta } from "@/components/sections";

export const metadata: Metadata = {
  title: "Contact | AFRO-TECH",
  description:
    "Contactez AFRO-TECH pour un devis gratuit ou une intervention rapide en electricite et plomberie.",
};

export default function ContactPage() {
  return (
    <>
      <ContactSection />
      <FinalCta />
    </>
  );
}
