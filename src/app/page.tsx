import Hero from "./components/hero";
import Contact from "./components/contact";
import Projects from "./components/projects";
import Services from "./components/services";
import Process from "./components/process";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Services />
      <Projects />
      <Process />
      <Contact />
    </>
  );
}
