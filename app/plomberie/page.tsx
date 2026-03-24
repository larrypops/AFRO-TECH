import type { Metadata } from "next";
import { FinalCta, ServicePage, servicePageProps } from "@/components/sections";

export const metadata: Metadata = {
  title: "Plomberie | AFRO-TECH",
  description:
    "Services de plomberie, fuites, debouchage et installation sanitaire a Douala, Yaounde, Bafoussam, Dschang et autres villes.",
};

export default function PlomberiePage() {
  return (
    <>
      <ServicePage {...servicePageProps.plomberie} />
      <FinalCta />
    </>
  );
}
