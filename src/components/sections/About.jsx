import { ME } from "../../data/portfolio";
import { Section, SectionTitle, FadeIn, Label } from "../ui";

export function About() {
  return (
    <Section id="about">
      <SectionTitle num="01" title="About" />
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "start" }}>
        <div>
          {ME.about.map((p, i) => (
            <FadeIn key={i} delay={i * 0.15}>
              <p style={{ fontSize: 17, lineHeight: 1.8, color: i === 0 ? "var(--fg)" : "var(--fg-secondary)", marginBottom: 20 }}>{p}</p>
            </FadeIn>
          ))}
          <FadeIn delay={0.3}>
            <div style={{ marginTop: 32, display: "flex", gap: 48 }}>
              {[["5+", "Years"], ["50+", "Projects"], ["12k", "Stars"]].map(([n, l]) => (
                <div key={l}>
                  <div style={{ fontFamily: "var(--font-display)", fontSize: 36, fontWeight: 800, letterSpacing: "-0.03em", lineHeight: 1 }}>{n}<span style={{ color: "var(--accent)" }}>+</span></div>
                  <div style={{ fontFamily: "var(--font-mono)", fontSize: 9, letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--fg-muted)", marginTop: 4 }}>{l}</div>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>

        {/* Right col: compact info */}
        <div>
          <FadeIn delay={0.2}>
            <div style={{ border: "1px solid var(--border)", borderRadius: 8, overflow: "hidden" }}>
              {[
                ["Status", ME.available ? "Open to Work" : "Not Available"],
                ["Location", ME.location],
                ["Email", ME.email],
                ["GitHub", ME.github],
                ["LinkedIn", ME.linkedin],
              ].map(([k, v], i) => (
                <div key={k} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "14px 20px", borderBottom: i < 4 ? "1px solid var(--border)" : "none", background: i % 2 === 0 ? "transparent" : "var(--bg-secondary)" }}>
                  <Label>{k}</Label>
                  <span style={{ fontFamily: "var(--font-mono)", fontSize: 11, color: k === "Status" ? "#22c55e" : "var(--fg-secondary)" }}>{v}</span>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </div>
    </Section>
  );
}
