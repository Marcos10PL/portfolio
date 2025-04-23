import ScrollButtons from "@/components/scroll-buttons";
import About from "@/components/website/about";
import Contact from "@/components/website/contact";
import Home from "@/components/website/home";
import Projects from "@/components/website/projects";
import Skills from "@/components/website/skills";
import { Suspense } from "react";

export default function Page() {
  return (
    <>
      <Home />
      <About />
      <Skills />
      <Suspense>
        <Projects />
      </Suspense>
      <Contact />
      <ScrollButtons />
    </>
  );
}
