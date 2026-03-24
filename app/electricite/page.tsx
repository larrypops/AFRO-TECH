import type { Metadata } from "next";
import { FinalCta, ServicePage, servicePageProps } from "@/components/sections";

export const metadata: Metadata = {
  title: "Electricite | AFRO-TECH",
  description:
    "Services d'electricite, depannage, maintenance et installation a Douala, Yaounde, Bafoussam, Dschang et autres villes.",
};

export default function ElectricitePage() {
  return (
    <>
      <ServicePage {...servicePageProps.electricite} />
      <FinalCta />
    </>
  );
}
