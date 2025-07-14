import About from "@/components/sections/about";
import Contact from "@/components/sections/contact";
import Home from "@/components/sections/home";
import Projects from "@/components/sections/projects";
import Skills from "@/components/sections/skills";
import { Suspense } from "react";

export default function Page() {
  return (
    <>
      <Home />
      <About />
      <Skills />
      <Suspense fallback={<div>Loading projects...</div>}>
        <Projects />
      </Suspense>
      <Contact />
    </>
  );
}
