import { ME } from "../../data/portfolio";
import { Section, SectionTitle, FadeIn, Label } from "../ui";

export function Contact() {
  return (
    <Section id="contact" style={{ borderBottom: "none" }}>
      <SectionTitle num="07" title="Contact" />
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "center" }}>
        <div>
          <FadeIn>
            <div style={{ overflow: "hidden", marginBottom: 16 }}>
              <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(32px, 5vw, 60px)", fontWeight: 800, letterSpacing: "-0.04em", lineHeight: 1.1, margin: 0 }}>
                Let's build something<br /><span style={{ color: "var(--accent)" }}>remarkable.</span>
              </h2>
            </div>
            <p style={{ fontSize: 15, color: "var(--fg-secondary)", lineHeight: 1.7, marginBottom: 32 }}>
Actively seeking Software Engineering roles focused on building scalable, impactful systems. Open to meaningful challenges and collaborations.            </p>
            <a href={`mailto:${ME.email}`}
              style={{ display: "inline-flex", alignItems: "center", gap: 12, padding: "14px 32px", background: "var(--fg)", color: "var(--bg)", fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: "0.15em", textTransform: "uppercase", textDecoration: "none", borderRadius: 4, transition: "all 0.2s" }}
              onMouseEnter={e => { e.currentTarget.style.background = "var(--accent)"; }}
              onMouseLeave={e => { e.currentTarget.style.background = "var(--fg)"; }}>
              Send Email <span>→</span>
            </a>
          </FadeIn>
        </div>
        <FadeIn delay={0.2}>
          <div style={{ border: "1px solid var(--border)", borderRadius: 8, overflow: "hidden" }}>
            {[["Email", ME.email], ["GitHub", ME.github], ["LinkedIn", ME.linkedin]].map(([k, v], i) => (
              <div key={k} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "20px 24px", borderBottom: i < 2 ? "1px solid var(--border)" : "none" }}>
                <Label>{k}</Label>
                <span style={{ fontFamily: "var(--font-mono)", fontSize: 11, color: "var(--fg-secondary)" }}>{v}</span>
              </div>
            ))}
          </div>
        </FadeIn>
      </div>
    </Section>
  );
}
