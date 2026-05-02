import { CaseStudyTunnel } from "@/components/sections/v2/CaseStudyTunnel";
import { CinematicHero } from "@/components/sections/v2/CinematicHero";
import { FinalContact } from "@/components/sections/v2/FinalContact";
import { ProductUniverse } from "@/components/sections/v2/ProductUniverse";
import { ProofCockpit } from "@/components/sections/v2/ProofCockpit";

export default function Home() {
  return (
    <main className="relative z-10">
      <CinematicHero />
      <ProductUniverse />
      <CaseStudyTunnel />
      <ProofCockpit />
      <FinalContact />
    </main>
  );
}
