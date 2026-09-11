import Nav from "@/components/Nav";
import Progress from "@/components/Progress";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Philosophy from "@/components/Philosophy";
import Kerala from "@/components/Kerala";
import Portfolio from "@/components/Portfolio";
import International from "@/components/International";
import SelectiveByDesign from "@/components/SelectiveByDesign";
import Standard from "@/components/Standard";
import Closing from "@/components/Closing";

export default function Page() {
  return (
    <>
      <Progress />
      <Nav />
      <main>
        <Hero />
        <About />
        <Philosophy />
        <Kerala />
        <Portfolio />
        <International />
        <Standard />
        <SelectiveByDesign />
        <Closing />
      </main>
    </>
  );
}
