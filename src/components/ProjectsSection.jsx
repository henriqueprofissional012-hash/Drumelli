import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "./Icons.jsx";
import { TEMPLATES } from "./templateMockups.jsx";

// Real client logos go here. `dark` flips the slot to a dark chip for
// logos exported in white/light (otherwise invisible on the light card).
const CLIENTS = [
  { name: "Casateliê", logo: "/assets/clients/casatelie.png" },
  { name: "Alltentico", logo: "/assets/clients/alltentico.png" },
  { name: "DRK Bombas e Filtros", logo: "/assets/clients/drk.png" },
  { name: "T Company", logo: "/assets/clients/tcompany.png" },
  { name: "Frigideira Italiana", logo: "/assets/clients/frigideira.png" },
  { name: "Purven", logo: "/assets/clients/purven.png" },
];

// The track renders the template list twice back-to-back and the
// auto-scroll wraps scrollLeft from the midpoint back to 0 -- since both
// halves are identical, the wrap is invisible and the belt reads as an
// endless loop instead of snapping back to the start.
export function ProjectsSection() {
  const trackRef = useRef(null);
  const pausedRef = useRef(false);
  const resumeTimer = useRef(null);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return undefined;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion) return undefined;

    let raf = requestAnimationFrame(tick);
    function tick() {
      if (!pausedRef.current) {
        const half = track.scrollWidth / 2;
        track.scrollLeft += 0.5;
        if (track.scrollLeft >= half) {
          track.scrollLeft -= half;
        }
      }
      raf = requestAnimationFrame(tick);
    }

    return () => cancelAnimationFrame(raf);
  }, []);

  const pauseThenResume = (ms = 2600) => {
    pausedRef.current = true;
    clearTimeout(resumeTimer.current);
    resumeTimer.current = setTimeout(() => {
      pausedRef.current = false;
    }, ms);
  };

  const scrollByCard = (dir) => {
    const track = trackRef.current;
    if (!track) return;
    const card = track.querySelector(".template-card");
    const distance = card ? card.getBoundingClientRect().width + 20 : 320;
    pauseThenResume();
    track.scrollBy({ left: dir * distance, behavior: "smooth" });
  };

  return (
    <section className="projects" id="projetos" aria-labelledby="projects-title">
      <div className="section-kicker">Projetos</div>
      <motion.div
        className="section-heading"
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      >
        <h2 id="projects-title">
          Modelos para todo tipo
          <br />
          de <span>negócio.</span>
        </h2>
        <p>
          Arraste para o lado e veja exemplos do que construímos para diferentes segmentos —
          de sites e sistemas a aplicativos, clínicas, lojas e imobiliárias.
        </p>
      </motion.div>

      <div className="template-carousel">
        <div
          className="template-track"
          ref={trackRef}
          onMouseEnter={() => {
            pausedRef.current = true;
          }}
          onMouseLeave={() => {
            clearTimeout(resumeTimer.current);
            pausedRef.current = false;
          }}
          onPointerDown={() => pauseThenResume(4000)}
        >
          {[...TEMPLATES, ...TEMPLATES].map(({ tag, accent, render: Render, extras }, index) => (
            <article className="template-card" key={`${tag}-${index}`}>
              <div className="mock-topbar">
                <span className="mock-dot-group">
                  <i />
                  <i />
                  <i />
                </span>
                <span className="mock-url">drumelli.studio</span>
              </div>
              <Render accent={accent} />
              <div className="template-tag">{tag}</div>
              <ul className="template-extras">
                {extras.map((extra) => (
                  <li key={extra}>
                    <span className="template-extras-dot" style={{ background: accent }} />
                    {extra}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <div className="template-nav">
          <button type="button" aria-label="Modelo anterior" onClick={() => scrollByCard(-1)}>
            <span className="flip">
              <ArrowRight />
            </span>
          </button>
          <button type="button" aria-label="Próximo modelo" onClick={() => scrollByCard(1)}>
            <ArrowRight />
          </button>
        </div>
      </div>

      <div className="projects-note-row">
        <p className="projects-note">
          Cada modelo é só um ponto de partida — esses são alguns recursos que podem entrar.
          Conta pra gente sua ideia: o projeto é moldado do seu jeito.
        </p>
        <a
          className="projects-whatsapp-btn"
          href="https://wa.me/5511991574407"
          target="_blank"
          rel="noopener noreferrer"
        >
          Falar com um especialista
          <ArrowRight />
        </a>
      </div>

      <div className="clients-strip" aria-label="Marcas que confiam na Drumelli">
        <span className="clients-label">Marcas que já confiam na Drumelli</span>
        <div className="clients-grid">
          {CLIENTS.map((client) => (
            <div className={`client-slot${client.dark ? " is-dark" : ""}`} key={client.name}>
              {client.logo ? (
                <img src={client.logo} alt={client.name} className="client-logo" />
              ) : (
                client.name
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
