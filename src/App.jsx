import { useState, useEffect } from "react";
import { ThemeCtx } from "./contexts/ThemeContext";
import { NAV } from "./data/portfolio";
import { Cursor, Sidebar } from "./components/ui";
import { Hero, About, Skills, Experience, Projects, Achievements, Education, Contact, Footer } from "./components/sections";

// ─── Constants ────────────────────────────────────────────────────────────────
const SIDEBAR_W = "220px";
const CONTENT_PAD = "80px";

const lightVars = {
  "--bg": "#f5f4ef",
  "--bg-secondary": "#ebe9e2",
  "--bg-secondary-alt": "#d8d5cc",
  "--fg": "#111108",
  "--fg-secondary": "#4a4940",
  "--fg-muted": "#8a877e",
  "--border": "#d0cdc4",
  "--accent": "#c17c2a",
};

const darkVars = {
  "--bg": "#0c0c0a",
  "--bg-secondary": "#161612",
  "--bg-secondary-alt": "#2a2a24",
  "--fg": "#f0ede6",
  "--fg-secondary": "#a09c94",
  "--fg-muted": "#5c5950",
  "--border": "#252520",
  "--accent": "#e8a847",
};

// ─── App ──────────────────────────────────────────────────────────────────────
export default function App() {
  const [dark, setDark] = useState(true);
  const [activeSection, setActiveSection] = useState("hero");

  // Track active section
  useEffect(() => {
    const sections = ["hero", ...NAV.map(n => n.toLowerCase())];
    const ios = sections.map(id => {
      const el = document.getElementById(id);
      if (!el) return null;
      const io = new IntersectionObserver(([e]) => { if (e.isIntersecting) setActiveSection(id); }, { threshold: 0.3 });
      io.observe(el);
      return io;
    });
    return () => ios.forEach(io => io?.disconnect());
  }, []);

  const vars = dark ? darkVars : lightVars;

  return (
    <ThemeCtx.Provider value={{ dark, toggle: () => setDark(d => !d) }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700;800;900&family=DM+Mono:wght@300;400;500&display=swap');
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        html { scroll-behavior: smooth; }
        body { cursor: none; }
        a { cursor: none; }
        button { cursor: none; }
        :root {
          --font-display: 'Playfair Display', Georgia, serif;
          --font-mono: 'DM Mono', 'Courier New', monospace;
          --sidebar-w: ${SIDEBAR_W};
        }
        @keyframes pulse-green {
          0%, 100% { opacity: 1; box-shadow: 0 0 6px #22c55e; }
          50% { opacity: 0.5; box-shadow: 0 0 12px #22c55e; }
        }
        @keyframes scroll-line {
          0%, 100% { transform: scaleY(1); transform-origin: top; }
          50% { transform: scaleY(0.5); transform-origin: bottom; }
        }
        ::selection { background: var(--accent); color: var(--bg); }
        ::-webkit-scrollbar { width: 4px; }
        ::-webkit-scrollbar-track { background: var(--bg); }
        ::-webkit-scrollbar-thumb { background: var(--border); border-radius: 2px; }
        ::-webkit-scrollbar-thumb:hover { background: var(--fg-muted); }
      `}</style>

      {/* CSS variable injection */}
      <div style={{ ...vars, position: "fixed", inset: 0, pointerEvents: "none", zIndex: -1, background: "var(--bg)", transition: "background 0.4s" }} />

      <div style={{ ...vars, minHeight: "100vh", background: "var(--bg)", color: "var(--fg)", transition: "background 0.4s, color 0.4s", fontFamily: "Georgia, serif", fontSize: 15 }}>
        <Cursor />
        <Sidebar activeSection={activeSection} />

        {/* Main content */}
        <main style={{ marginLeft: SIDEBAR_W, padding: `0 ${CONTENT_PAD} 0 ${CONTENT_PAD}`, maxWidth: `calc(${SIDEBAR_W} + 960px)`, minHeight: "100vh" }}>
          <Hero />
          <About />
          <Skills />
          <Experience />
          <Projects />
          <Achievements />
          <Education />
          <Contact />
          <Footer />
        </main>
      </div>
    </ThemeCtx.Provider>
  );
}