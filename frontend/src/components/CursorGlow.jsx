import { useEffect, useState } from "react";

export default function CursorGlow() {
  const [pos, setPos] = useState({ x: -1000, y: -1000 });
  const [coarse, setCoarse] = useState(false);

  useEffect(() => {
    const isCoarse = window.matchMedia("(pointer: coarse)").matches;
    setCoarse(isCoarse);
    if (isCoarse) return;
    const onMove = (e) => setPos({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  if (coarse) return null;

  return (
    <div
      aria-hidden
      className="cursor-glow"
      style={{ left: pos.x, top: pos.y }}
      data-testid="cursor-glow"
    />
  );
}
