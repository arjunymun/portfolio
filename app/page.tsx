import { CaseStudyChapters } from "@/components/sections/v3/CaseStudyChapters";
import { ChapterRail } from "@/components/sections/v3/ChapterRail";
import { ContactHorizon } from "@/components/sections/v3/ContactHorizon";
import { HeroChapter } from "@/components/sections/v3/HeroChapter";
import { ProductUniverseV3 } from "@/components/sections/v3/ProductUniverseV3";
import { ProofGrid } from "@/components/sections/v3/ProofGrid";

export default function Home() {
  return (
    <main className="relative z-10">
      <ChapterRail />
      <HeroChapter />
      <ProductUniverseV3 />
      <CaseStudyChapters />
      <ProofGrid />
      <ContactHorizon />
    </main>
  );
}
