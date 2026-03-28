import { useEffect, useState } from "react";
import "./Loader.css";

export default function Loader() {
  const [phase, setPhase] = useState(0);
  const text = "YATHIRAI INFOTECH";

  useEffect(() => {
    const t1 = setTimeout(() => setPhase(1), 400);
    const t2 = setTimeout(() => setPhase(2), 1800);
    const t3 = setTimeout(() => setPhase(3), 2700);
    return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); };
  }, []);

  return (
    <div className={`loader ${phase >= 3 ? "loader--exit" : ""}`}>
      <div className="loader__bg-grid" />
      <div className="loader__orb loader__orb--1" />
      <div className="loader__orb loader__orb--2" />

      <div className="loader__center">
        <div className={`loader__logo-ring ${phase >= 1 ? "active" : ""}`}>
          <div className="loader__ring-inner">
            <div className="loader__shield">🛡️</div>
          </div>
          <svg className="loader__ring-svg" viewBox="0 0 200 200">
            <circle className="loader__ring-track" cx="100" cy="100" r="90" />
            <circle className={`loader__ring-fill ${phase >= 1 ? "active" : ""}`} cx="100" cy="100" r="90" />
          </svg>
        </div>

        <div className={`loader__text-wrap ${phase >= 2 ? "active" : ""}`}>
          <div className="loader__brand">
            {text.split("").map((char, i) => (
              <span
                key={i}
                className="loader__char"
                style={{ animationDelay: `${i * 0.06}s` }}
              >
                {char === " " ? "\u00A0" : char}
              </span>
            ))}
          </div>
          <div className="loader__tagline">Skill Enhancement Platform</div>
        </div>

        <div className={`loader__progress ${phase >= 2 ? "active" : ""}`}>
          <div className="loader__bar" />
        </div>
      </div>

      <div className="loader__particles">
        {[...Array(12)].map((_, i) => (
          <div key={i} className={`loader__particle loader__particle--${i + 1}`} />
        ))}
      </div>
    </div>
  );
}
