// A court floor drawn in perspective behind the hero, with drifting teal light. Static under reduced motion.
export const CourtFloor = () => (
  <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
    <div className="orb absolute -right-24 -top-24 h-[28rem] w-[28rem] rounded-full bg-[#1cabb0]/20 blur-[110px]" />
    <div className="orb absolute -left-32 top-1/3 h-80 w-80 rounded-full bg-[#3fd6d6]/10 blur-[100px]" style={{ animationDelay: "-7s" }} />
    <div
      className="absolute inset-0 opacity-[0.35]"
      style={{
        backgroundImage: "linear-gradient(rgba(63,214,214,0.07) 1px, transparent 1px), linear-gradient(90deg, rgba(63,214,214,0.07) 1px, transparent 1px)",
        backgroundSize: "56px 56px",
        maskImage: "radial-gradient(70% 60% at 50% 30%, black, transparent)",
        WebkitMaskImage: "radial-gradient(70% 60% at 50% 30%, black, transparent)",
      }}
    />
    <svg
      viewBox="0 0 940 540"
      className="absolute bottom-[-6%] left-1/2 w-[230%] max-w-none -translate-x-1/2 sm:w-[140%] lg:w-[115%]"
      style={{ transform: "translateX(-50%) perspective(900px) rotateX(62deg)", transformOrigin: "50% 100%", maskImage: "linear-gradient(to top, black 30%, transparent 95%)", WebkitMaskImage: "linear-gradient(to top, black 30%, transparent 95%)" }}
      fill="none"
      stroke="rgba(63,214,214,0.45)"
      strokeWidth="2"
    >
      {[
        "M20 20H920V520H20Z",
        "M470 20V520",
        "M410 270a60 60 0 1 0 120 0a60 60 0 1 0 -120 0",
        "M20 190H210V350H20",
        "M150 270a60 60 0 1 0 120 0a60 60 0 1 0 -120 0",
        "M920 190H730V350H920",
        "M670 270a60 60 0 1 0 120 0a60 60 0 1 0 -120 0",
        "M20 50H160A245 245 0 0 1 160 490H20",
        "M920 50H780A245 245 0 0 0 780 490H920",
      ].map((d, i) => (
        <path key={i} d={d} pathLength={1} className="court-line" style={{ animationDelay: `${0.15 * i}s` }} vectorEffect="non-scaling-stroke" />
      ))}
    </svg>
    <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[var(--bg)] to-transparent" />
  </div>
);
