import { ME } from "../../data/portfolio";
import { Label } from "../ui";

export function Footer() {
  return (
    <footer style={{ borderTop: "1px solid var(--border)", padding: "28px 0", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
      <Label>© 2026 {ME.name}. All rights reserved.</Label>
      <Label>Designed & Built with React · Vite</Label>
    </footer>
  );
}
