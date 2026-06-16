import { useState, useEffect } from "react";
import Navbar      from "./components/Navbar";
import Hero        from "./components/Hero";
import Sobre       from "./components/Sobre";
import ComoFunciona from "./components/ComoFunciona";
import Planos      from "./components/Planos";
import Artigos     from "./components/Artigos";
import Dicas       from "./components/Dicas";
import Contato     from "./components/Contato";
import Footer      from "./components/Footer";
import FloatWA     from "./components/FloatWA";

export default function App() {
  const [activeSection, setActiveSection]   = useState("inicio");
  const [visibleSections, setVisibleSections] = useState(new Set(["inicio"]));

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleSections((prev) => new Set([...prev, entry.target.id]));
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.15, rootMargin: "-60px 0px" }
    );

    const sections = document.querySelectorAll("section[id]");
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  const v = (id) => visibleSections.has(id);

  return (
    <>
      <Navbar activeSection={activeSection} />
      <main>
        <Hero />
        <Sobre        visible={v("sobre")} />
        <ComoFunciona visible={v("consulta")} />
        <Planos       visible={v("planos")} />
        <Artigos      visible={v("artigos")} />
        <Dicas        visible={v("dicas-section")} />
        <Contato      visible={v("contato")} />
      </main>
      <Footer />
      <FloatWA />
    </>
  );
}
