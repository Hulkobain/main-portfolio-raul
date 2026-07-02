import {
  AboutPreview,
  Gratitude,
  Hero,
  Projects,
  StackBento,
} from "@/components";

export default function Home() {
  return (
    <main id="main-content">
      <Hero />
      <StackBento />
      <Projects />
      <AboutPreview />
      <Gratitude />
    </main>
  );
}
