import type { Metadata } from "next";
import { AboutPreview, FinalCta } from "@/components/sections";

export const metadata: Metadata = {
  title: "A propos | AFRO-TECH",
  description:
    "Decouvrez AFRO-TECH, entreprise d'electricite et plomberie au Cameroun.",
};

export default function AproposPage() {
  return (
    <>
      <AboutPreview />
      <FinalCta />
    </>
  );
}
