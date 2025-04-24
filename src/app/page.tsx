import About from "@/sections/about";
import Contact from "@/sections/contact";
import Home from "@/sections/home";
import Projects from "@/sections/projects";
import Skills from "@/sections/skills";
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
    </>
  );
}
