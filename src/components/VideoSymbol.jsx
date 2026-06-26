import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

// Pre-rendered boomerang loop: the original clip's first 5s (black fade-in)
// were cut, and the remaining 3s of lit footage were rendered forward then
// reversed back-to-back (via ffmpeg). The two halves share an identical
// frame at every seam -- forward's last frame is reverse's first, and
// reverse's last frame is forward's first -- so native HTML5 video looping
// has nothing to jump across. No runtime JS time manipulation needed.
const SRC = "/assets/infinity-symbol-loop.mp4";

export function VideoSymbol() {
  const videoRef = useRef(null);
  const wrapRef = useRef(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return undefined;

    video.muted = true;
    video.defaultMuted = true;

    const tryPlay = () => video.play().catch(() => {});
    const onCanPlay = () => {
      tryPlay();
      setReady(true);
    };

    video.addEventListener("canplay", onCanPlay);
    video.addEventListener("loadeddata", tryPlay);
    if (video.readyState >= 3) onCanPlay();

    tryPlay();

    const retryOnInteraction = () => tryPlay();
    window.addEventListener("pointerdown", retryOnInteraction, { once: true });
    window.addEventListener("scroll", retryOnInteraction, { once: true, passive: true });

    return () => {
      window.removeEventListener("pointerdown", retryOnInteraction);
      window.removeEventListener("scroll", retryOnInteraction);
      video.removeEventListener("canplay", onCanPlay);
      video.removeEventListener("loadeddata", tryPlay);
    };
  }, []);

  const handleMove = (event) => {
    const bounds = wrapRef.current?.getBoundingClientRect();
    if (!bounds) return;
    const relX = (event.clientX - bounds.left) / bounds.width - 0.5;
    const relY = (event.clientY - bounds.top) / bounds.height - 0.5;
    setTilt({ x: Number((-relY * 6).toFixed(2)), y: Number((relX * 8).toFixed(2)) });
  };

  return (
    <motion.div
      ref={wrapRef}
      className="video-symbol"
      onMouseMove={handleMove}
      onMouseLeave={() => setTilt({ x: 0, y: 0 })}
      animate={{ rotateX: tilt.x, rotateY: tilt.y }}
      transition={{ type: "spring", stiffness: 90, damping: 18, mass: 0.8 }}
    >
      <video
        ref={videoRef}
        src={SRC}
        muted
        loop
        autoPlay
        playsInline
        preload="auto"
        aria-hidden="true"
        className={`video-symbol-source video-symbol-visible${ready ? " is-ready is-active" : ""}`}
      />
    </motion.div>
  );
}
