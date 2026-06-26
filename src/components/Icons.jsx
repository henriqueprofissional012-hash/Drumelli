import React from "react";

const iconProps = {
  width: 20,
  height: 20,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.8,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  "aria-hidden": true,
};

export function ArrowRight() {
  return (
    <svg {...iconProps}>
      <path d="M5 12h14" />
      <path d="m13 6 6 6-6 6" />
    </svg>
  );
}

export function Rocket() {
  return (
    <svg {...iconProps}>
      <path d="M4.5 16.5c-1 1.4-1.3 2.8-1.3 4.3 1.5 0 3-.4 4.3-1.3" />
      <path d="M9 15 7.5 16.5" />
      <path d="M14.5 4.8c2.1-.8 4.1-.8 5.7-.4.4 1.6.4 3.6-.4 5.7-1.2 3-3.9 5.4-7.8 6.9L7 12c1.5-3.9 3.9-6.6 7.5-7.2Z" />
      <path d="M15 9h.01" />
    </svg>
  );
}

export function Target() {
  return (
    <svg {...iconProps}>
      <circle cx="12" cy="12" r="8" />
      <circle cx="12" cy="12" r="3" />
      <path d="M12 2v3" />
      <path d="M12 19v3" />
      <path d="M2 12h3" />
      <path d="M19 12h3" />
    </svg>
  );
}

export function Gem() {
  return (
    <svg {...iconProps}>
      <path d="M6 3h12l4 6-10 12L2 9l4-6Z" />
      <path d="M2 9h20" />
      <path d="m12 21 4-12" />
      <path d="M12 21 8 9" />
    </svg>
  );
}

export function BarChart3() {
  return (
    <svg {...iconProps} width="16" height="16">
      <path d="M3 3v18h18" />
      <path d="M18 17V9" />
      <path d="M13 17V5" />
      <path d="M8 17v-3" />
    </svg>
  );
}

export function LayoutTemplate() {
  return (
    <svg {...iconProps}>
      <rect width="18" height="18" x="3" y="3" rx="2" />
      <path d="M3 9h18" />
      <path d="M9 21V9" />
    </svg>
  );
}

export function ShoppingCart() {
  return (
    <svg {...iconProps}>
      <circle cx="8" cy="21" r="1" />
      <circle cx="19" cy="21" r="1" />
      <path d="M2.5 3h3l2.4 12.2a2 2 0 0 0 2 1.6h7.7a2 2 0 0 0 2-1.5l1.4-7.3H7" />
    </svg>
  );
}

export function MonitorCog() {
  return (
    <svg {...iconProps}>
      <rect width="18" height="12" x="3" y="4" rx="2" />
      <path d="M8 20h8" />
      <path d="M12 16v4" />
      <path d="M15.6 9.2a2.4 2.4 0 1 0-4.4 1.8 2.4 2.4 0 0 0 4.4-1.8Z" />
      <path d="M14.8 6.8v1" />
      <path d="M14.8 11.6v1" />
      <path d="M17.2 9.2h-1" />
      <path d="M12.4 9.2h-1" />
    </svg>
  );
}

export function Gauge() {
  return (
    <svg {...iconProps}>
      <path d="M21 13a9 9 0 1 0-18 0" />
      <path d="M12 13 17 8" />
      <path d="M7 13h.01" />
      <path d="M17 13h.01" />
      <path d="M12 18h.01" />
    </svg>
  );
}

export function Home({ size = 20 }) {
  return (
    <svg {...iconProps} width={size} height={size}>
      <path d="M3 11.5 12 4l9 7.5" />
      <path d="M5.5 10v9a1 1 0 0 0 1 1H9a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h2.5a1 1 0 0 0 1-1v-9" />
    </svg>
  );
}

export function Utensils({ size = 20 }) {
  return (
    <svg {...iconProps} width={size} height={size}>
      <path d="M3 3v6a2 2 0 0 0 2 2v10" />
      <path d="M7 3v8" />
      <path d="M3 3v8" />
      <path d="M17 3a3 3 0 0 0-3 3v5a2 2 0 0 0 2 2v8" />
    </svg>
  );
}

export function Dumbbell({ size = 20 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <rect x="1.5" y="9" width="3" height="6" rx="1" />
      <rect x="19.5" y="9" width="3" height="6" rx="1" />
      <rect x="4.5" y="10.4" width="2.2" height="3.2" rx="0.6" />
      <rect x="17.3" y="10.4" width="2.2" height="3.2" rx="0.6" />
      <rect x="6.7" y="11.1" width="10.6" height="1.8" rx="0.9" />
    </svg>
  );
}

export function Scale({ size = 20 }) {
  return (
    <svg {...iconProps} width={size} height={size}>
      <path d="M12 3v15" />
      <path d="M5 7h5l-2.5 6a3 3 0 0 0 5 0L10 7" />
      <path d="M14 7h5l-2.5 6a3 3 0 0 0 5 0L19 7" />
      <path d="M5 7h14" />
      <path d="M8 21h8" />
    </svg>
  );
}

export function HeartPulse({ size = 20 }) {
  return (
    <svg {...iconProps} width={size} height={size}>
      <path d="M12 20.5c-5-3.2-8.5-6.6-8.5-10.4A4.6 4.6 0 0 1 8 5.5c1.8 0 3.2 1 4 2.2.8-1.2 2.2-2.2 4-2.2a4.6 4.6 0 0 1 4.5 4.6c0 .7-.1 1.4-.4 2.1H17l-1.6-2.3-2 3.6L12 11h-2.5" />
    </svg>
  );
}

export function Star({ size = 12, filled = true }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill={filled ? "currentColor" : "none"}
      stroke="currentColor"
      strokeWidth="1.5"
      aria-hidden="true"
    >
      <path d="m12 2 2.9 6.3 6.6.6-5 4.6 1.5 6.6L12 16.8 5.9 20.1l1.5-6.6-5-4.6 6.6-.6Z" strokeLinejoin="round" />
    </svg>
  );
}

export function Smartphone() {
  return (
    <svg {...iconProps}>
      <rect x="6" y="2.5" width="12" height="19" rx="2.4" />
      <path d="M10.5 18.5h3" />
    </svg>
  );
}

export function Code2() {
  return (
    <svg {...iconProps}>
      <path d="m9 8-4 4 4 4" />
      <path d="m15 8 4 4-4 4" />
    </svg>
  );
}

export function GraduationCap({ size = 18 }) {
  return (
    <svg {...iconProps} width={size} height={size}>
      <path d="M2 8.5 12 4l10 4.5-10 4.5-10-4.5Z" />
      <path d="M6.5 10.6V16c0 1.4 2.5 2.5 5.5 2.5s5.5-1.1 5.5-2.5v-5.4" />
      <path d="M21 9v5.5" />
    </svg>
  );
}

export function Handshake({ size = 18 }) {
  return (
    <svg {...iconProps} width={size} height={size}>
      <path d="m2 12 4.5-4.5a2 2 0 0 1 2.8 0L11 9.2" />
      <path d="m22 12-4.5-4.5a2 2 0 0 0-2.8 0L13 9.2" />
      <path d="M11 9.2 8.6 11.6a1.6 1.6 0 0 0 0 2.3l.3.3a1.6 1.6 0 0 0 2.3 0L13 12" />
      <path d="m13 9.2 1.8 1.8" />
      <path d="M9 14.5l1.6 1.6a1.6 1.6 0 0 0 2.3 0" />
      <path d="M7 12.5l2 2" />
    </svg>
  );
}

export function InfinityMark({ size = 22 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M6.5 9a3.5 3.5 0 1 0 0 7c1.9 0 3-1.2 5.5-4.5C14.5 8.2 15.6 7 17.5 7a3.5 3.5 0 1 1 0 7c-1.9 0-3-1.2-5.5-4.5"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}
