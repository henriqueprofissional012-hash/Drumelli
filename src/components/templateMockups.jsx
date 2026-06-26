import React from "react";
import {
  Dumbbell,
  Home,
  HeartPulse,
  ShoppingCart,
  Smartphone,
  Star,
  Utensils,
  LayoutTemplate,
} from "./Icons.jsx";

// Every card is a hand-built mini "website" (no external screenshots --
// nothing to break, nothing to license). Each niche gets its own realistic
// micro-layout (nav, photo block, prices, stats...) instead of a reused
// generic skeleton, so it actually reads as a different product. Shared
// between the Projects carousel and the zero-cost preview demo -- both
// just pick a niche from TEMPLATES and optionally pass a real `logoSrc`.
function NavBar({ accent, logoSrc }) {
  return (
    <div className="mk-nav">
      {logoSrc ? (
        <img src={logoSrc} alt="" className="mk-logo-img" />
      ) : (
        <span className="mk-logo" style={{ background: accent }} />
      )}
      <span className="mk-nav-lines">
        <i />
        <i />
        <i />
      </span>
      <span className="mk-nav-cta" style={{ borderColor: accent, color: accent }} />
    </div>
  );
}

function Photo({ accent, icon, tall }) {
  return (
    <div
      className={`mk-photo${tall ? " mk-photo-tall" : ""}`}
      style={{ background: `linear-gradient(140deg, ${accent}, ${accent}cc)` }}
    >
      <span className="mk-photo-icon">{icon}</span>
    </div>
  );
}

function Heading({ wide }) {
  return (
    <div className="mk-heading">
      <span style={{ width: wide ? "78%" : "62%" }} />
      <span style={{ width: "40%" }} />
    </div>
  );
}

function Stars() {
  return (
    <span className="mk-stars">
      {[0, 1, 2, 3, 4].map((i) => (
        <Star key={i} size={9} filled={i < 4} />
      ))}
    </span>
  );
}

function InstitutionalCard({ accent, logoSrc }) {
  return (
    <>
      <NavBar accent={accent} logoSrc={logoSrc} />
      <div className="mk-body">
        <Photo accent={accent} icon={<LayoutTemplate />} />
        <Heading wide />
        <div className="mk-cta-pill" style={{ background: accent }} />
        <div className="mk-feature-row">
          {[0, 1, 2].map((i) => (
            <div className="mk-feature" key={i}>
              <span className="mk-feature-dot" style={{ background: accent }} />
              <span className="mk-feature-line" />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

function EcommerceCard({ accent, logoSrc }) {
  return (
    <>
      <NavBar accent={accent} logoSrc={logoSrc} />
      <div className="mk-body">
        <div className="mk-banner" style={{ background: accent }} />
        <div className="mk-product-grid">
          {[0, 1].map((i) => (
            <div className="mk-product" key={i}>
              <Photo accent={accent} icon={<ShoppingCart />} />
              <span className="mk-line" style={{ width: "70%" }} />
              <div className="mk-price-row">
                <span className="mk-price" style={{ color: accent }}>
                  R$ {i === 0 ? "189" : "249"}
                </span>
                <Stars />
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

function FinanceCard({ accent, logoSrc }) {
  return (
    <>
      <NavBar accent={accent} logoSrc={logoSrc} />
      <div className="mk-body mk-finance">
        <div className="mk-sidebar">
          {[0, 1, 2, 3].map((i) => (
            <span key={i} className="mk-side-dot" style={{ background: i === 0 ? accent : undefined }} />
          ))}
        </div>
        <div className="mk-finance-main">
          <div className="mk-stat-row">
            {["R$ 48k", "+12%", "312"].map((v) => (
              <div className="mk-stat" key={v}>
                <strong style={{ color: accent }}>{v}</strong>
                <span />
              </div>
            ))}
          </div>
          <div className="mk-chart">
            {[38, 62, 48, 80, 56, 70, 44].map((h, i) => (
              <span key={i} style={{ height: `${h}%`, background: accent }} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

function ClinicCard({ accent, logoSrc }) {
  return (
    <>
      <NavBar accent={accent} logoSrc={logoSrc} />
      <div className="mk-body">
        <Photo accent={accent} icon={<HeartPulse />} />
        <Heading />
        <div className="mk-calendar">
          {Array.from({ length: 7 }).map((_, i) => (
            <span key={i} className={i === 3 ? "is-active" : ""} style={i === 3 ? { background: accent } : undefined} />
          ))}
        </div>
        <div className="mk-cta-pill" style={{ background: accent }} />
      </div>
    </>
  );
}

function RealEstateCard({ accent, logoSrc }) {
  return (
    <>
      <NavBar accent={accent} logoSrc={logoSrc} />
      <div className="mk-body">
        <div className="mk-search">
          <span className="mk-search-line" />
          <span className="mk-search-btn" style={{ background: accent }} />
        </div>
        <div className="mk-product-grid">
          {[0, 1].map((i) => (
            <div className="mk-product" key={i}>
              <Photo accent={accent} icon={<Home />} />
              <span className="mk-price" style={{ color: accent }}>
                R$ {i === 0 ? "620k" : "890k"}
              </span>
              <span className="mk-line" style={{ width: "80%" }} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

function RestaurantCard({ accent, logoSrc }) {
  return (
    <>
      <NavBar accent={accent} logoSrc={logoSrc} />
      <div className="mk-body">
        <Photo accent={accent} icon={<Utensils />} tall />
        <Heading />
        <div className="mk-menu">
          {["Combo executivo", "Prato do dia"].map((label) => (
            <div className="mk-menu-row" key={label}>
              <span className="mk-menu-thumb" style={{ background: accent }} />
              <span className="mk-line" style={{ width: "50%" }} />
              <span className="mk-price small" style={{ color: accent }}>
                R$ 39
              </span>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

function FitnessCard({ accent, logoSrc }) {
  return (
    <>
      <NavBar accent={accent} logoSrc={logoSrc} />
      <div className="mk-body">
        <Photo accent={accent} icon={<Dumbbell />} />
        <Heading />
        <div className="mk-schedule">
          {Array.from({ length: 15 }).map((_, i) => (
            <span
              key={i}
              className={[4, 9, 11].includes(i) ? "is-active" : ""}
              style={[4, 9, 11].includes(i) ? { background: accent } : undefined}
            />
          ))}
        </div>
      </div>
    </>
  );
}

function LawCard({ accent, logoSrc }) {
  return (
    <>
      <NavBar accent={accent} logoSrc={logoSrc} />
      <div className="mk-body mk-law">
        <Heading wide />
        <div className="mk-feature-row column">
          {["01", "02", "03"].map((n) => (
            <div className="mk-feature" key={n}>
              <span className="mk-feature-num" style={{ color: accent }}>
                {n}
              </span>
              <span className="mk-feature-line" />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

function AppCard({ accent, logoSrc }) {
  return (
    <>
      <NavBar accent={accent} logoSrc={logoSrc} />
      <div className="mk-body mk-app-body">
        <div className="mk-app-frame">
          <span className="mk-app-notch" />
          <span className="mk-app-icon" style={{ background: accent }}>
            <Smartphone />
          </span>
          <div className="mk-app-lines">
            <span style={{ width: "70%" }} />
            <span style={{ width: "45%" }} />
          </div>
          <div className="mk-app-tabbar">
            {[0, 1, 2, 3].map((i) => (
              <span key={i} className={i === 0 ? "is-active" : ""} style={i === 0 ? { background: accent } : undefined} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export const TEMPLATES = [
  {
    tag: "Sites institucionais",
    accent: "#e8121a",
    render: InstitutionalCard,
    extras: ["Blog integrado", "Chat no WhatsApp", "Versão em inglês"],
  },
  {
    tag: "Lojas virtuais",
    accent: "#101012",
    render: EcommerceCard,
    extras: ["Pagamento via Pix", "Cupons de desconto", "Frete automático"],
  },
  {
    tag: "Aplicativos",
    accent: "#5a0008",
    render: AppCard,
    extras: ["iOS e Android", "Notificações push", "Login social"],
  },
  {
    tag: "Sistemas financeiros",
    accent: "#5a0008",
    render: FinanceCard,
    extras: ["Relatórios automáticos", "Múltiplos usuários", "Exportar para contador"],
  },
  {
    tag: "Clínicas & estética",
    accent: "#b3242b",
    render: ClinicCard,
    extras: ["Lembrete por WhatsApp", "Prontuário do paciente", "Pagamento antecipado"],
  },
  {
    tag: "Imobiliárias",
    accent: "#1a1a1c",
    render: RealEstateCard,
    extras: ["Tour virtual 360°", "Simulador de financiamento", "Lista de favoritos"],
  },
  {
    tag: "Restaurantes & delivery",
    accent: "#e8121a",
    render: RestaurantCard,
    extras: ["Pedido via WhatsApp", "Programa de fidelidade", "Integração com apps de entrega"],
  },
  {
    tag: "Academias & fitness",
    accent: "#5a0008",
    render: FitnessCard,
    extras: ["Check-in por QR Code", "App do aluno", "Cobrança recorrente"],
  },
  {
    tag: "Advocacia & consultoria",
    accent: "#101012",
    render: LawCard,
    extras: ["Área do cliente", "Agenda de consultas", "Assinatura digital"],
  },
];
