import { ME } from "../../data/portfolio";
import { Section, SectionTitle, FadeIn, Label } from "../ui";

export function Education() {
  const edu = ME.education;
  return (
    <Section id="education">
      <SectionTitle num="06" title="Education" />
      <FadeIn>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80 }}>
          <div>
            <div style={{ fontFamily: "var(--font-display)", fontSize: "clamp(48px, 6vw, 80px)", fontWeight: 900, letterSpacing: "-0.05em", lineHeight: 0.9, color: "var(--accent)", marginBottom: 24 }}>
              {edu.short}
            </div>
            <p style={{ fontSize: 17, fontWeight: 600, marginBottom: 8 }}>{edu.degree}</p>
            <Label>{edu.period}</Label>
            <div style={{ marginTop: 20, display: "flex", gap: 24 }}>
              <div>
                <div style={{ fontFamily: "var(--font-display)", fontSize: 28, fontWeight: 800, letterSpacing: "-0.03em" }}>{edu.cgpa}</div>
                <Label>CGPA</Label>
              </div>
            </div>
          </div>
          <div>
            <div style={{ marginBottom: 24 }}>
              <Label>Thesis</Label>
              <p style={{ fontSize: 14, color: "var(--fg-secondary)", marginTop: 8, lineHeight: 1.65 }}>{edu.thesis}</p>
            </div>
            <div>
              <Label>Honors</Label>
              <div style={{ marginTop: 12, display: "flex", flexDirection: "column", gap: 8 }}>
                {edu.honors.map((h, i) => (
                  <div key={i} style={{ display: "flex", gap: 12, alignItems: "center" }}>
                    <span style={{ color: "var(--accent)", fontFamily: "var(--font-mono)", fontSize: 10 }}>—</span>
                    <span style={{ fontSize: 13, color: "var(--fg-secondary)" }}>{h}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </FadeIn>
    </Section>
  );
}
