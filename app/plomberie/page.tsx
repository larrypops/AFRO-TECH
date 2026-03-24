import type { Metadata } from "next";
import { FinalCta, ServicePage, servicePageProps } from "@/components/sections";

export const metadata: Metadata = {
  title: "Plomberie | AFRO-TECH",
  description:
    "Services de plomberie, fuites, débouchage et installation sanitaire à Douala, Yaoundé, Bafoussam, Dschang et autres villes.",
};

export default function PlomberiePage() {
  return (
    <>
      <ServicePage {...servicePageProps.plomberie} />
      <FinalCta />
    </>
  );
}
