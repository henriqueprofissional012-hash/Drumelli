import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Instagram, WhatsApp } from "./Icons.jsx";

const CHANNELS = [
  {
    icon: <WhatsApp />,
    label: "WhatsApp",
    value: "(11) 99157-4407",
    href: "https://wa.me/5511991574407",
    className: "is-whatsapp",
  },
  {
    icon: <Instagram />,
    label: "Instagram",
    value: "@studiodrumelli",
    href: "https://instagram.com/studiodrumelli",
    className: "is-instagram",
  },
];

export function ContactSection() {
  return (
    <section className="contact" id="contato" aria-labelledby="contact-title">
      <div className="section-kicker">Contato</div>
      <motion.div
        className="section-heading contact-heading"
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      >
        <h2 id="contact-title">
          Vamos construir
          <br />
          sua <span>presença digital?</span>
        </h2>
        <p>
          Manda uma mensagem agora mesmo — sem formulário, sem espera. A gente responde direto
          no WhatsApp ou no Instagram.
        </p>
      </motion.div>

      <div className="contact-grid">
        {CHANNELS.map((channel, index) => (
          <motion.a
            className={`contact-card ${channel.className}`}
            key={channel.label}
            href={channel.href}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
            whileHover={{ y: -4 }}
          >
            <span className="contact-icon">{channel.icon}</span>
            <span className="contact-text">
              <strong>{channel.label}</strong>
              <span>{channel.value}</span>
            </span>
            <span className="contact-arrow">
              <ArrowRight />
            </span>
          </motion.a>
        ))}
      </div>
    </section>
  );
}
