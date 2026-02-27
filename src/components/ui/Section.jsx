export function Section({ id, children, style }) {
  return (
    <section id={id} style={{ padding: "120px 0", borderTop: "1px solid var(--border)", position: "relative", ...style }}>
      {children}
    </section>
  );
}
