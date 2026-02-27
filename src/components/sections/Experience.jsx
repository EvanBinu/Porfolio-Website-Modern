import { useState } from "react";
import { ME } from "../../data/portfolio";
import { Section, SectionTitle, FadeIn, Label } from "../ui";

export function Experience() {
  const [hovered, setHovered] = useState(null);
  return (
    <Section id="experience">
      <SectionTitle num="03" title="Experience" />
      <div>
        {ME.experience.map((e, i) => (
          <FadeIn key={e.company} delay={i * 0.1}>
            <div
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
              style={{ display: "grid", gridTemplateColumns: "1fr auto", gap: 24, padding: "32px 20px", borderTop: "1px solid var(--border)", cursor: "default", transition: "all 0.2s", background: hovered === i ? "var(--bg-secondary)" : "transparent", margin: "0 -20px" }}>
              <div>
                <div style={{ display: "flex", alignItems: "baseline", gap: 16, marginBottom: 12 }}>
                  <h3 style={{ fontFamily: "var(--font-display)", fontSize: 22, fontWeight: 700, letterSpacing: "-0.02em", margin: 0 }}>{e.company}</h3>
                  <span style={{ fontFamily: "var(--font-mono)", fontSize: 10, color: "var(--accent)", letterSpacing: "0.1em", border: "1px solid var(--accent)", borderRadius: 3, padding: "2px 8px", textTransform: "uppercase" }}>{e.type}</span>
                </div>
                <div style={{ fontFamily: "var(--font-mono)", fontSize: 11, color: "var(--fg-muted)", marginBottom: 12, letterSpacing: "0.05em" }}>{e.role}</div>
                <p style={{ fontSize: 14, color: "var(--fg-secondary)", lineHeight: 1.7, maxWidth: 560, margin: 0 }}>{e.desc}</p>
              </div>
              <div style={{ textAlign: "right", paddingTop: 4 }}>
                <Label>{e.period}</Label>
              </div>
            </div>
          </FadeIn>
        ))}
        <div style={{ borderTop: "1px solid var(--border)" }} />
      </div>
    </Section>
  );
}
