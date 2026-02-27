import { useEffect, useRef } from "react";

export function Cursor() {
  const pos = useRef({ x: -100, y: -100 });
  const dot = useRef(null);
  const ring = useRef(null);
  const raf = useRef(null);
  const cur = useRef({ x: -100, y: -100 });

  useEffect(() => {
    const move = e => { pos.current = { x: e.clientX, y: e.clientY }; };
    window.addEventListener("mousemove", move);
    const tick = () => {
      cur.current.x += (pos.current.x - cur.current.x) * 0.12;
      cur.current.y += (pos.current.y - cur.current.y) * 0.12;
      if (dot.current) {
        dot.current.style.transform = `translate(${pos.current.x - 4}px, ${pos.current.y - 4}px)`;
      }
      if (ring.current) {
        ring.current.style.transform = `translate(${cur.current.x - 20}px, ${cur.current.y - 20}px)`;
      }
      raf.current = requestAnimationFrame(tick);
    };
    raf.current = requestAnimationFrame(tick);
    return () => { window.removeEventListener("mousemove", move); cancelAnimationFrame(raf.current); };
  }, []);

  return (
    <>
      <div ref={dot} style={{ position: "fixed", top: 0, left: 0, width: 8, height: 8, borderRadius: "50%", background: "var(--accent)", pointerEvents: "none", zIndex: 9999, transition: "opacity 0.3s" }} />
      <div ref={ring} style={{ position: "fixed", top: 0, left: 0, width: 40, height: 40, borderRadius: "50%", border: "1px solid var(--accent)", pointerEvents: "none", zIndex: 9998, opacity: 0.5 }} />
    </>
  );
}
