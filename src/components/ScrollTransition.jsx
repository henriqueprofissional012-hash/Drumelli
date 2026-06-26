import React from "react";

export function ScrollTransition() {
  return (
    <section className="energy-transition" aria-hidden="true">
      <svg viewBox="0 0 1440 260" preserveAspectRatio="none">
        <path
          className="wave-shadow"
          d="M0 126 C220 72 382 72 560 132 C740 194 902 210 1086 136 C1238 76 1332 72 1440 96"
        />
        <path
          className="wave-red"
          d="M0 126 C220 72 382 72 560 132 C740 194 902 210 1086 136 C1238 76 1332 72 1440 96"
        />
        <path
          className="wave-spark"
          d="M0 126 C220 72 382 72 560 132 C740 194 902 210 1086 136 C1238 76 1332 72 1440 96"
        />
      </svg>
    </section>
  );
}
