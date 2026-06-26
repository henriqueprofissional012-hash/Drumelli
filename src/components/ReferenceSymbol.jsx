import React, { useRef, useState } from "react";
import { motion } from "framer-motion";

export function ReferenceSymbol() {
  const wrapRef = useRef(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const handleMove = (event) => {
    const bounds = wrapRef.current?.getBoundingClientRect();
    if (!bounds) return;

    const relX = (event.clientX - bounds.left) / bounds.width - 0.5;
    const relY = (event.clientY - bounds.top) / bounds.height - 0.5;
    setTilt({
      x: Number((-relY * 7).toFixed(2)),
      y: Number((relX * 9).toFixed(2)),
    });
  };

  return (
    <motion.div
      ref={wrapRef}
      className="reference-symbol"
      onMouseMove={handleMove}
      onMouseLeave={() => setTilt({ x: 0, y: 0 })}
      animate={{
        rotateX: tilt.x,
        rotateY: tilt.y,
      }}
      transition={{ type: "spring", stiffness: 90, damping: 18, mass: 0.8 }}
    >
      <motion.img
        className="symbol-image"
        src="/assets/drumelli-symbol-reference.png"
        alt=""
        draggable="false"
        animate={{
          y: [0, -12, 0],
          scale: [1, 1.018, 1],
          filter: [
            "drop-shadow(0 28px 70px rgba(232, 18, 26, 0.3))",
            "drop-shadow(0 34px 86px rgba(232, 18, 26, 0.48))",
            "drop-shadow(0 28px 70px rgba(232, 18, 26, 0.3))",
          ],
        }}
        transition={{ duration: 5.8, repeat: Infinity, ease: "easeInOut" }}
      />
      <span className="symbol-red-scan" />
      <span className="planet-track track-one" />
      <span className="planet-track track-two" />
      <span className="planet-track track-three" />
      <span className="symbol-orbit orbit-one" />
      <span className="symbol-orbit orbit-two" />
      <span className="symbol-orbit orbit-three" />
      <span className="symbol-orbit orbit-four" />
      <span className="symbol-glow" />
    </motion.div>
  );
}
