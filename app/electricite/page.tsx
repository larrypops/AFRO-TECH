import type { Metadata } from "next";
import { FinalCta, ServicePage, servicePageProps } from "@/components/sections";

export const metadata: Metadata = {
  title: "Électricité | AFRO-TECH",
  description:
    "Services d'électricité, dépannage, maintenance et installation à Douala, Yaoundé, Bafoussam, Dschang et autres villes.",
};

export default function ElectricitePage() {
  return (
    <>
      <ServicePage {...servicePageProps.electricite} />
      <FinalCta />
    </>
  );
}
