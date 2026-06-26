import React from "react";
import { motion } from "framer-motion";
import { Code2, Gauge, LayoutTemplate, MonitorCog, ShoppingCart, Smartphone } from "./Icons.jsx";

const services = [
  {
    icon: <LayoutTemplate />,
    title: "Sites institucionais",
    text: "Sites modernos, responsivos e otimizados para posicionar sua marca com autoridade.",
  },
  {
    icon: <ShoppingCart />,
    title: "Lojas virtuais",
    text: "E-commerces completos, seguros e pensados para transformar navegação em vendas.",
  },
  {
    icon: <MonitorCog />,
    title: "Sistemas web",
    text: "Soluções personalizadas para automatizar processos e escalar sua operação.",
  },
  {
    icon: <Smartphone />,
    title: "Aplicativos",
    text: "Apps iOS e Android nativos ou híbridos, do design à publicação nas lojas.",
  },
  {
    icon: <Code2 />,
    title: "Desenvolvimento full stack",
    text: "Back-end, APIs e front-end sob medida — arquitetura sólida do banco de dados à tela.",
  },
  {
    icon: <Gauge />,
    title: "Estratégia digital",
    text: "Planejamento orientado por dados para atrair, converter e sustentar crescimento.",
  },
];

export function ServicesSection() {
  return (
    <section className="services" id="serviços" aria-labelledby="services-title">
      <div className="section-kicker">O que fazemos</div>
      <motion.div
        className="section-heading"
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      >
        <h2 id="services-title">
          Soluções digitais completas
          <br />
          para <span>negócios ambiciosos.</span>
        </h2>
        <p>
          Sites, sistemas, apps e o back-end por trás de tudo isso — unimos estratégia, design e
          desenvolvimento full stack para criar experiências digitais que fortalecem marcas e
          geram resultados reais.
        </p>
      </motion.div>

      <div className="service-grid">
        {services.map((service, index) => (
          <motion.article
            className="service-card"
            key={service.title}
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="service-icon">{service.icon}</div>
            <h3>{service.title}</h3>
            <p>{service.text}</p>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
