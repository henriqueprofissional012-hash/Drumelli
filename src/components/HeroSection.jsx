import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowRight } from "./Icons.jsx";
import { VideoSymbol } from "./VideoSymbol.jsx";
import { FloatingCards } from "./FloatingCards.jsx";

gsap.registerPlugin(ScrollTrigger);

const navItems = ["Início", "Serviços", "Projetos", "Sobre", "Contato"];

export function HeroSection() {
  const heroRef = useRef(null);
  const visualRef = useRef(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    if (!heroRef.current || !visualRef.current) return undefined;

    const ctx = gsap.context(() => {
      gsap.to(visualRef.current, {
        y: "7vh",
        scale: 0.94,
        rotate: -1.5,
        ease: "none",
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 0.75,
          onUpdate: (self) => setScrollProgress(self.progress),
        },
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="hero" ref={heroRef} aria-labelledby="hero-title">
      <div className="hero-grid" />
      <div className="ambient ambient-one" />
      <div className="ambient ambient-two" />

      <header className="topbar">
        <a className="brand" href="#inicio" aria-label="Drumelli Studio">
          <img src="/assets/drumelli-logo.webp" alt="Drumelli Studio" className="brand-logo" />
        </a>

        <nav className="nav" aria-label="Navegação principal">
          {navItems.map((item) => (
            <a
              href={`#${item.toLowerCase()}`}
              className={item === "Início" ? "active" : ""}
              key={item}
            >
              {item}
            </a>
          ))}
        </nav>

        <a className="topbar-cta" href="#contato">
          Fale com a Drumelli
          <ArrowRight />
        </a>
      </header>

      <div className="hero-content" id="inicio">
        <motion.div
          className="hero-copy"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="eyebrow">
            Estratégia <span /> Design <span /> Tecnologia <span /> Resultados
          </p>

          <h1 id="hero-title">
            Presença digital
            <br />
            que posiciona.
            <strong>Experiências que convertem.</strong>
          </h1>

          <div className="title-rule" />

          <p className="lead">
            Desenvolvemos <b>sites</b>, <b>sistemas</b>, <b>aplicativos</b> e o{" "}
            <b>full stack</b> por trás de tudo isso — geramos autoridade, atraímos clientes e
            impulsionamos o crescimento do seu negócio.
          </p>

          <div className="actions">
            <motion.a className="primary-action" href="#contato" whileHover={{ y: -3 }}>
              Solicitar orçamento
              <ArrowRight />
            </motion.a>
            <motion.a className="secondary-action" href="#projetos" whileHover={{ x: 5 }}>
              Ver projetos
            </motion.a>
          </div>
        </motion.div>

        <div
          className="hero-visual"
          ref={visualRef}
          aria-label="Símbolo de infinito animado da Drumelli"
          style={{ "--scroll-progress": scrollProgress }}
        >
          <VideoSymbol />
          <FloatingCards />
        </div>
      </div>

      <div className="hero-bridge" aria-hidden="true">
        <svg viewBox="0 0 1440 420" preserveAspectRatio="none">
          <path
            className="bridge-shadow"
            d="M930 10 C1010 118 923 190 760 222 C590 256 498 290 492 405"
          />
          <path
            className="bridge-line"
            d="M930 10 C1010 118 923 190 760 222 C590 256 498 290 492 405"
          />
          <path
            className="bridge-spark"
            d="M930 10 C1010 118 923 190 760 222 C590 256 498 290 492 405"
          />
        </svg>
      </div>

      <div className="scroll-cue" aria-hidden="true">
        <span />
        <small>Role para descobrir</small>
      </div>
    </section>
  );
}
