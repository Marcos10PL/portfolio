import About from "@/components/website/about";
import Contact from "@/components/website/contact";
import Home from "@/components/website/home";
import Projects from "@/components/website/projects";
import { Suspense } from "react";

export default function Page() {
  return (
    <div>
      <Home />
      <About />
      <Suspense>
        <Projects />
      </Suspense>
      <Contact />
    </div>
  );
}
