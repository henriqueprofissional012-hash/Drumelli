import React from "react";
import { motion } from "framer-motion";
import { GraduationCap, Handshake, InfinityMark } from "./Icons.jsx";

const FOUNDERS = [
  {
    photo: "/assets/team/henrique-drummond.webp",
    name: "Henrique Drummond",
    role: "Sócio-administrador",
    focus: "Estratégia & Relacionamento",
    quote: "Cada cliente que fecha com a gente sai com mais do que um site — sai com um parceiro.",
    accent: "#e8121a",
  },
  {
    photo: "/assets/team/gustavo-celestino.webp",
    name: "Gustavo Celestino",
    role: "Sócio-administrador",
    focus: "Tecnologia & Produto",
    quote: "Gosto de resolver problema de verdade — não só entregar uma tela bonita.",
    accent: "#101012",
  },
];

const STORY = [
  {
    icon: <GraduationCap />,
    title: "Colegas de faculdade",
    text: "Se conheceram estudando e descobriram a mesma obsessão por resolver problemas.",
  },
  {
    icon: <Handshake />,
    title: "Sócios de verdade",
    text: "Transformaram uma amizade em parceria — cada um cuidando do que faz de melhor.",
  },
  {
    icon: <InfinityMark />,
    title: "Drumelli Studio",
    text: "Hoje constroem presença digital estratégica para fazer a diferença em cada cliente.",
  },
];

export function AboutSection() {
  return (
    <section className="about" id="sobre" aria-labelledby="about-title">
      <div className="section-kicker">Quem somos</div>
      <motion.div
        className="section-heading about-heading"
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      >
        <h2 id="about-title">
          Dois amigos.
          <br />
          Uma <span>obsessão por resultado.</span>
        </h2>
        <p>
          A Drumelli nasceu da amizade entre Henrique Drummond e Gustavo Celestino — colegas de
          faculdade que decidiram unir experiência técnica e visão de negócio numa empresa só,
          criada pra fazer a diferença real em cada cliente.
        </p>
      </motion.div>

      <div className="founders-grid">
        {FOUNDERS.map((founder, index) => (
          <motion.article
            className="founder-card"
            key={founder.name}
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: index * 0.12, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="founder-avatar" style={{ "--founder-accent": founder.accent }}>
              <img src={founder.photo} alt={founder.name} />
            </span>
            <h3>{founder.name}</h3>
            <span className="founder-role">{founder.role}</span>
            <span className="founder-focus">{founder.focus}</span>
            <p className="founder-quote">“{founder.quote}”</p>
          </motion.article>
        ))}

        <span className="founders-connector" aria-hidden="true">
          <InfinityMark size={28} />
        </span>
      </div>

      <div className="story-line">
        {STORY.map((step, index) => (
          <motion.div
            className="story-step"
            key={step.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.55, delay: index * 0.12, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="story-icon">{step.icon}</span>
            <h4>{step.title}</h4>
            <p>{step.text}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
