import { useState } from "react";
import { ME } from "../../data/portfolio";
import { Section, SectionTitle, FadeIn, Label } from "../ui";

export function Projects() {
  const [hovered, setHovered] = useState(null);
  return (
    <Section id="projects">
      <SectionTitle num="04" title="Projects" />
      {/* Table header */}
      <div style={{ display: "grid", gridTemplateColumns: "2fr 3fr 2fr auto", gap: 24, padding: "0 0 12px", borderBottom: "1px solid var(--border)" }}>
        {["Project", "Description", "Stack", "Links"].map(h => <Label key={h}>{h}</Label>)}
      </div>
      {ME.projects.map((p, i) => (
        <FadeIn key={p.name} delay={i * 0.08}>
          <div
            onMouseEnter={() => setHovered(i)}
            onMouseLeave={() => setHovered(null)}
            style={{ display: "grid", gridTemplateColumns: "2fr 3fr 2fr auto", gap: 24, padding: "24px 20px", borderBottom: "1px solid var(--border)", alignItems: "start", transition: "background 0.2s", background: hovered === i ? "var(--bg-secondary)" : "transparent", margin: "0 -20px" }}>
            {/* Name + year */}
            <div>
              <div style={{ display: "flex", alignItems: "baseline", gap: 8, marginBottom: 6 }}>
                <span style={{ fontFamily: "var(--font-display)", fontSize: 16, fontWeight: 700, letterSpacing: "-0.02em" }}>{p.name}</span>
              </div>
              <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
                <Label>{p.year}</Label>
                <span style={{ fontFamily: "var(--font-mono)", fontSize: 9, color: p.status === "Live" ? "#22c55e" : p.status === "Open Source" ? "var(--accent)" : "var(--fg-muted)", letterSpacing: "0.15em", textTransform: "uppercase" }}>● {p.status}</span>
              </div>
            </div>
            {/* Desc */}
            <p style={{ fontSize: 13, color: "var(--fg-secondary)", lineHeight: 1.65, margin: 0 }}>{p.desc}</p>
            {/* Stack */}
            <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
              {p.stack.map(t => (
                <span key={t} style={{ fontFamily: "var(--font-mono)", fontSize: 9, padding: "3px 8px", background: "var(--bg-secondary)", borderRadius: 3, color: "var(--fg-muted)", letterSpacing: "0.05em" }}>{t}</span>
              ))}
            </div>
            {/* Links */}
            <div style={{ display: "flex", flexDirection: "column", gap: 6, alignItems: "flex-end" }}>
              <a href={p.github} style={{ fontFamily: "var(--font-mono)", fontSize: 10, color: "var(--fg-muted)", textDecoration: "none", letterSpacing: "0.1em", transition: "color 0.2s" }}
                onMouseEnter={e => e.currentTarget.style.color = "var(--accent)"}
                onMouseLeave={e => e.currentTarget.style.color = "var(--fg-muted)"}>
                Github ↗
              </a>
              {p.live && (
                <a href={p.live} style={{ fontFamily: "var(--font-mono)", fontSize: 10, color: "var(--fg-muted)", textDecoration: "none", letterSpacing: "0.1em", transition: "color 0.2s" }}
                  onMouseEnter={e => e.currentTarget.style.color = "var(--accent)"}
                  onMouseLeave={e => e.currentTarget.style.color = "var(--fg-muted)"}>
                  Live ↗
                </a>
              )}
            </div>
          </div>
        </FadeIn>
      ))}
    </Section>
  );
}
