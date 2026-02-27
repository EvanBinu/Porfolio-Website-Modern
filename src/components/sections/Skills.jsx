import { ME } from "../../data/portfolio";
import { Section, SectionTitle, FadeIn, Label } from "../ui";

export function Skills() {
  return (
    <Section id="skills">
      <SectionTitle num="02" title="Skills" />
      <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 1, border: "1px solid var(--border)", borderRadius: 8, overflow: "hidden" }}>
        {ME.skills.map((s, i) => (
          <FadeIn key={s.cat} delay={i * 0.1}>
            <div style={{ padding: "32px 36px", background: "var(--bg)", borderRight: i % 2 === 0 ? "1px solid var(--border)" : "none", borderBottom: i < 2 ? "1px solid var(--border)" : "none" }}>
              <Label>{s.cat}</Label>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginTop: 20 }}>
                {s.list.map(item => (
                  <span key={item} style={{ fontFamily: "var(--font-mono)", fontSize: 11, padding: "5px 12px", border: "1px solid var(--border)", borderRadius: 4, color: "var(--fg-secondary)", transition: "all 0.2s", cursor: "default" }}
                    onMouseEnter={e => { e.currentTarget.style.borderColor = "var(--accent)"; e.currentTarget.style.color = "var(--accent)"; }}
                    onMouseLeave={e => { e.currentTarget.style.borderColor = "var(--border)"; e.currentTarget.style.color = "var(--fg-secondary)"; }}>
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </Section>
  );
}
