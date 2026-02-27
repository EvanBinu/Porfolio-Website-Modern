import { useInView } from "../../hooks/useInView";

export function RevealText({ children, delay = 0, className, style }) {
  const [ref, vis] = useInView();
  return (
    <span ref={ref} className={className} style={{ display: "block", overflow: "hidden", ...style }}>
      <span style={{ display: "block", transform: vis ? "translateY(0)" : "translateY(105%)", transition: `transform 0.75s cubic-bezier(0.16,1,0.3,1) ${delay}s`, opacity: vis ? 1 : 0 }}>
        {children}
      </span>
    </span>
  );
}
