import { RevealText } from "./RevealText";
import { Label } from "./Label";

export function SectionTitle({ num, title }) {
  return (
    <div style={{ marginBottom: 64, position: "relative" }}>
      <div style={{ position: "absolute", right: 0, top: "50%", transform: "translateY(-50%)", fontFamily: "var(--font-display)", fontSize: "clamp(80px, 12vw, 160px)", fontWeight: 900, color: "var(--bg-secondary)", lineHeight: 1, pointerEvents: "none", userSelect: "none", letterSpacing: "-0.05em" }}>
        {num}
      </div>
      <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
        <span style={{ fontFamily: "var(--font-mono)", fontSize: 10, color: "var(--accent)", letterSpacing: "0.2em" }}>{num}</span>
        <RevealText style={{ fontFamily: "var(--font-display)", fontSize: "clamp(28px, 4vw, 44px)", fontWeight: 700, letterSpacing: "-0.03em", lineHeight: 1 }}>
          {title}
        </RevealText>
      </div>
    </div>
  );
}
