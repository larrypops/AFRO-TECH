import type { Metadata } from "next";
import { ContactSection, ZonesPreview } from "@/components/sections";

export const metadata: Metadata = {
  title: "Zones d'intervention | AFRO-TECH",
  description:
    "AFRO-TECH intervient à Douala, Yaoundé, Bafoussam, Dschang et dans d'autres villes du Cameroun.",
};

export default function ZonesPage() {
  return (
    <>
      <ZonesPreview />
      <ContactSection />
    </>
  );
}
