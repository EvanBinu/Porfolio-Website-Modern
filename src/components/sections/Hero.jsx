import { useState, useEffect } from "react";
import { ME } from "../../data/portfolio";
import { Label } from "../ui";

export function Hero() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    const timer = setInterval(() => setCount(c => { if (c >= 100) { clearInterval(timer); return 100; } return c + 4; }), 20);
    return () => clearInterval(timer);
  }, []);

  const loaded = count === 100;

  return (
    <section id="hero" style={{ minHeight: "100vh", display: "flex", flexDirection: "column", justifyContent: "flex-end", padding: "0 0 80px 0", position: "relative" }}>
      {/* Large bg number */}
      <div style={{ position: "absolute", right: -20, top: "50%", transform: "translateY(-50%)", fontFamily: "var(--font-display)", fontSize: "clamp(180px, 25vw, 340px)", fontWeight: 900, color: "var(--bg-secondary)", lineHeight: 1, pointerEvents: "none", userSelect: "none", letterSpacing: "-0.06em" }}>
        01
      </div>

      {/* Loading bar */}
      <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 2, background: "var(--border)" }}>
        <div style={{ height: "100%", background: "var(--accent)", width: `${count}%`, transition: "width 0.05s linear" }} />
      </div>

      {/* Content */}
      <div style={{ position: "relative", zIndex: 1 }}>
        {/* Location + role */}
        <div style={{ display: "flex", alignItems: "center", gap: 24, marginBottom: 32, opacity: loaded ? 1 : 0, transition: "opacity 0.6s ease 0.2s" }}>
          <Label>{ME.location}</Label>
          <span style={{ color: "var(--border)" }}>—</span>
          <Label>Full-Stack · AI · Systems</Label>
        </div>

        {/* Name */}
        <div style={{ overflow: "hidden", marginBottom: 8 }}>
          <h1 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(52px, 8vw, 112px)", fontWeight: 800, letterSpacing: "-0.04em", lineHeight: 0.95, transform: loaded ? "translateY(0)" : "translateY(110%)", transition: "transform 1s cubic-bezier(0.16,1,0.3,1) 0.3s", margin: 0 }}>
            {ME.name.split(" ")[0]}
          </h1>
        </div>
        <div style={{ overflow: "hidden", marginBottom: 40 }}>
          <h1 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(52px, 8vw, 112px)", fontWeight: 800, letterSpacing: "-0.04em", lineHeight: 0.95, transform: loaded ? "translateY(0)" : "translateY(110%)", transition: "transform 1s cubic-bezier(0.16,1,0.3,1) 0.45s", margin: 0 }}>
            {ME.name.split(" ")[1]}<span style={{ color: "var(--accent)" }}>.</span>
          </h1>
        </div>

        {/* Tagline */}
        <div style={{ maxWidth: 560, marginBottom: 48, opacity: loaded ? 1 : 0, transition: "opacity 0.8s ease 0.7s" }}>
          <p style={{ fontSize: 18, color: "var(--fg-secondary)", lineHeight: 1.65, margin: 0 }}>{ME.tagline}</p>
        </div>

        {/* CTAs */}
        <div style={{ display: "flex", gap: 16, flexWrap: "wrap", opacity: loaded ? 1 : 0, transition: "opacity 0.8s ease 0.9s" }}>
          <a href="#projects"
            style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "12px 28px", background: "var(--fg)", color: "var(--bg)", fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: "0.15em", textTransform: "uppercase", textDecoration: "none", borderRadius: 4, transition: "all 0.2s" }}
            onMouseEnter={e => { e.currentTarget.style.background = "var(--accent)"; e.currentTarget.style.color = "var(--bg)"; }}
            onMouseLeave={e => { e.currentTarget.style.background = "var(--fg)"; e.currentTarget.style.color = "var(--bg)"; }}>
            View Work <span>→</span>
          </a>
          <a href="#contact"
            style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "12px 28px", background: "transparent", color: "var(--fg)", fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: "0.15em", textTransform: "uppercase", textDecoration: "none", border: "1px solid var(--border)", borderRadius: 4, transition: "all 0.2s" }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = "var(--accent)"; e.currentTarget.style.color = "var(--accent)"; }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = "var(--border)"; e.currentTarget.style.color = "var(--fg)"; }}>
            Get in Touch
          </a>
          <a href="/resume.pdf" download="EvanResume2026.pdf"
            style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "12px 28px", background: "transparent", color: "var(--fg-muted)", fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: "0.15em", textTransform: "uppercase", textDecoration: "none", transition: "all 0.2s" }}
            onMouseEnter={e => e.currentTarget.style.color = "var(--fg)"}
            onMouseLeave={e => e.currentTarget.style.color = "var(--fg-muted)"}>
            ↓ Resume
          </a>
        </div>

        {/* Scroll cue */}
        <div style={{ position: "absolute", right: 0, bottom: 0, opacity: loaded ? 1 : 0, transition: "opacity 1s ease 1.2s" }}>
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 8 }}>
            <span style={{ fontFamily: "var(--font-mono)", fontSize: 9, letterSpacing: "0.25em", textTransform: "uppercase", color: "var(--fg-muted)", writingMode: "vertical-rl" }}>Scroll</span>
            <div style={{ width: 1, height: 48, background: "linear-gradient(to bottom, var(--fg-muted), transparent)", animation: "scroll-line 2s ease-in-out infinite" }} />
          </div>
        </div>
      </div>
    </section>
  );
}
