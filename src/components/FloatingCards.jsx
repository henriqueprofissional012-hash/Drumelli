import React from "react";
import { motion } from "framer-motion";
import { BarChart3, Gem, Rocket, Target } from "./Icons.jsx";

const cards = [
  {
    className: "strategy",
    icon: <Rocket />,
    title: "Estratégia",
    text: "Planejamento digital focado em resultado",
    metric: "78%",
    caption: "Crescimento médio dos projetos",
  },
  {
    className: "performance",
    icon: <Target />,
    title: "Performance",
    text: "Sites rápidos, otimizados e preparados para escalar",
    metric: "65%",
    caption: "Mais conversões em média",
  },
  {
    className: "design",
    icon: <Gem />,
    title: "Design",
    text: "Experiências visuais que comunicam e convertem",
    metric: "100%",
    caption: "Projetos personalizados",
  },
];

export function FloatingCards() {
  return (
    <div className="floating-cards" aria-hidden="true">
      {cards.map((card, index) => (
        <motion.article
          className={`signal-card ${card.className}`}
          key={card.title}
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35 + index * 0.12, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          whileHover={{ y: -8, rotateX: 3, rotateY: -4 }}
        >
          <div className="signal-icon">{card.icon}</div>
          <h2>{card.title}</h2>
          <p>{card.text}</p>
          <strong>
            <BarChart3 /> {card.metric}
          </strong>
          <span>{card.caption}</span>
        </motion.article>
      ))}
    </div>
  );
}
