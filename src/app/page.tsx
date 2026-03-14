import { Header } from "@/components/layout/Header";
import { Hero } from "@/components/sections/Hero";
import { TaglineBanner } from "@/components/sections/TaglineBanner";
import { Projects } from "@/components/sections/Projects";
import { AboutMe } from "@/components/sections/AboutMe";
import { TechStack } from "@/components/sections/TechStack";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/layout/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <TaglineBanner />
        <AboutMe />
        <Projects />
        <TechStack />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
