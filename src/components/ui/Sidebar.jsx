import { useTheme } from "../../contexts/ThemeContext";
import { ME, NAV } from "../../data/portfolio";
import { Label } from "./Label";

export function Sidebar({ activeSection }) {
  const { dark, toggle } = useTheme();
  return (
    <aside style={{
      position: "fixed", left: 0, top: 0, bottom: 0, width: "var(--sidebar-w)",
      display: "flex", flexDirection: "column", justifyContent: "space-between",
      padding: "40px 32px", borderRight: "1px solid var(--border)", zIndex: 50,
      background: "var(--bg)"
    }}>
      <div>
        {/* Logo */}
        <div style={{ marginBottom: 48 }}>
          <div style={{ fontFamily: "var(--font-display)", fontSize: 22, fontWeight: 700, letterSpacing: "-0.04em", lineHeight: 1 }}>
            {ME.initials}<span style={{ color: "var(--accent)" }}>.</span>
          </div>
          <div style={{ fontFamily: "var(--font-mono)", fontSize: 9, letterSpacing: "0.15em", textTransform: "uppercase", color: "var(--fg-muted)", marginTop: 4 }}>
            Portfolio
          </div>
        </div>

        {/* Nav links */}
        <nav style={{ display: "flex", flexDirection: "column", gap: 4 }}>
          {NAV.map((item, i) => {
            const id = item.toLowerCase();
            const isActive = activeSection === id;
            return (
              <a key={item} href={`#${id}`}
                style={{ display: "flex", alignItems: "center", gap: 10, padding: "6px 0", textDecoration: "none", transition: "all 0.2s", color: isActive ? "var(--fg)" : "var(--fg-muted)" }}>
                <span style={{ fontFamily: "var(--font-mono)", fontSize: 9, color: isActive ? "var(--accent)" : "var(--fg-muted)", letterSpacing: "0.1em", minWidth: 18 }}>
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span style={{ fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: "0.1em", textTransform: "uppercase", fontWeight: isActive ? 500 : 400 }}>
                  {item}
                </span>
                {isActive && <span style={{ marginLeft: "auto", width: 24, height: 1, background: "var(--accent)" }} />}
              </a>
            );
          })}
        </nav>
      </div>

      {/* Bottom */}
      <div>
        {/* Availability badge */}
        {ME.available && (
          <div style={{ display: "flex", alignItems: "center", gap: 6, marginBottom: 20 }}>
            <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#22c55e", boxShadow: "0 0 6px #22c55e", animation: "pulse-green 2s infinite" }} />
            <span style={{ fontFamily: "var(--font-mono)", fontSize: 9, letterSpacing: "0.15em", textTransform: "uppercase", color: "var(--fg-muted)" }}>Available</span>
          </div>
        )}

        {/* Theme toggle */}
        <button onClick={toggle} aria-label="Toggle theme"
          style={{ display: "flex", alignItems: "center", gap: 8, background: "none", border: "1px solid var(--border)", borderRadius: 6, padding: "7px 10px", cursor: "pointer", color: "var(--fg-muted)", fontFamily: "var(--font-mono)", fontSize: 10, letterSpacing: "0.1em", transition: "all 0.2s", width: "100%", marginBottom: 16 }}>
          <span style={{ fontSize: 12 }}>{dark ? "☀" : "☾"}</span>
          {dark ? "Light" : "Dark"}
        </button>

        {/* Social */}
        <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
          {[["GH", "https://github.com"], ["LI", "https://linkedin.com"], ["EM", `mailto:${ME.email}`]].map(([label, href]) => (
            <a key={label} href={href} style={{ fontFamily: "var(--font-mono)", fontSize: 9, letterSpacing: "0.2em", color: "var(--fg-muted)", textDecoration: "none", transition: "color 0.2s" }}
              onMouseEnter={e => e.currentTarget.style.color = "var(--accent)"}
              onMouseLeave={e => e.currentTarget.style.color = "var(--fg-muted)"}>
              {label}
            </a>
          ))}
        </div>
      </div>
    </aside>
  );
}
