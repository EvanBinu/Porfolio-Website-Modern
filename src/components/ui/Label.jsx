export function Label({ children }) {
  return <span style={{ fontFamily: "var(--font-mono)", fontSize: 10, letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--fg-muted)", display: "inline-block" }}>{children}</span>;
}
