import type { Metadata } from "next";
import { AboutPreview, FinalCta } from "@/components/sections";

export const metadata: Metadata = {
  title: "À propos | AFRO-TECH",
  description:
    "Découvrez AFRO-TECH, entreprise d'électricité et plomberie au Cameroun.",
};

export default function AproposPage() {
  return (
    <>
      <AboutPreview />
      <FinalCta />
    </>
  );
}
