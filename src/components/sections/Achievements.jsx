import { ME } from "../../data/portfolio";
import { Section, SectionTitle, FadeIn } from "../ui";

export function Achievements() {
  return (
    <Section id="achievements">
      <SectionTitle num="05" title="Achievements & Events" />
      <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 24 }}>
        {ME.achievements.map((a, i) => (
          <FadeIn key={a.title} delay={i * 0.1}>
            <div style={{ padding: "32px", border: "1px solid var(--border)", borderRadius: 8, transition: "all 0.3s", position: "relative", overflow: "hidden" }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = "var(--accent)"; e.currentTarget.style.background = "var(--bg-secondary)"; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = "var(--border)"; e.currentTarget.style.background = "transparent"; }}>
              <div style={{ fontFamily: "var(--font-display)", fontSize: 48, fontWeight: 900, color: "var(--bg-secondary-alt)", lineHeight: 1, marginBottom: 16, letterSpacing: "-0.05em" }}>{a.icon}</div>
              <h3 style={{ fontFamily: "var(--font-display)", fontSize: 17, fontWeight: 700, letterSpacing: "-0.02em", marginBottom: 10, margin: "0 0 10px" }}>{a.title}</h3>
              <p style={{ fontFamily: "var(--font-mono)", fontSize: 11, color: "var(--fg-muted)", lineHeight: 1.7, margin: 0 }}>{a.body}</p>
            </div>
          </FadeIn>
        ))}
      </div>
    </Section>
  );
}
