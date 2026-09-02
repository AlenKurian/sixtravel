import Nav from "@/components/Nav";
import Progress from "@/components/Progress";
import Hero from "@/components/Hero";
import Philosophy from "@/components/Philosophy";
import Portfolio from "@/components/Portfolio";
import Kerala from "@/components/Kerala";
import International from "@/components/International";
import Standard from "@/components/Standard";
import Closing from "@/components/Closing";

export default function Page() {
  return (
    <>
      <Progress />
      <Nav />
      <main>
        <Hero />
        <Philosophy />
        <Portfolio />
        <Kerala />
        <International />
        <Standard />
        <Closing />
      </main>
    </>
  );
}
