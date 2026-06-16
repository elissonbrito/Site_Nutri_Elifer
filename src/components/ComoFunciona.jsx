import { useState } from "react";
import { STEPS } from "../data";

export default function ComoFunciona({ visible }) {
  const [active, setActive] = useState(0);

  return (
    <section id="consulta" style={{
      padding: "90px 32px",
      background: "#2E5240",
    }}>
      <div style={{ maxWidth: 1180, margin: "0 auto" }}>

        <div className={`fade-up ${visible ? "visible" : ""}`} style={{ marginBottom: 52 }}>
          <div style={{
            fontSize: "0.73rem", fontWeight: 700, letterSpacing: "0.12em",
            textTransform: "uppercase", color: "#C9A84C", marginBottom: 10,
          }}>Como funciona</div>
          <h2 style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)",
            fontWeight: 700, color: "#FAF7F2", marginBottom: 10,
          }}>Sua consulta passo a passo</h2>
          <p style={{ color: "#8FB89A", fontWeight: 300, fontSize: "1rem" }}>
            Um processo claro, humanizado e adaptado à sua realidade.
          </p>
        </div>

        {/* Pills */}
        <div className={`fade-up delay-1 ${visible ? "visible" : ""}`}
          style={{ display: "flex", gap: 10, flexWrap: "wrap", marginBottom: 36 }}
        >
          {STEPS.map((s, i) => (
            <button
              key={i}
              className="step-pill"
              onClick={() => setActive(i)}
              style={{
                padding: "10px 20px", borderRadius: 50,
                background: active === i ? "#C9A84C" : "rgba(255,255,255,0.08)",
                color: active === i ? "#fff" : "#8FB89A",
                fontWeight: 600, fontSize: "0.85rem",
              }}
            >{s.icon} Passo {s.num}</button>
          ))}
        </div>

        {/* Active detail */}
        <div className={`fade-up delay-2 ${visible ? "visible" : ""}`} style={{
          background: "rgba(255,255,255,0.06)",
          border: "1px solid rgba(255,255,255,0.1)",
          borderRadius: 24, padding: 40, marginBottom: 28,
        }}>
          <div style={{ display: "flex", gap: 24, alignItems: "flex-start" }}>
            <div style={{
              width: 64, height: 64, borderRadius: 18,
              background: "#C9A84C", display: "flex", alignItems: "center",
              justifyContent: "center", fontSize: "1.9rem", flexShrink: 0,
            }}>{STEPS[active].icon}</div>
            <div>
              <div style={{
                fontSize: "0.72rem", color: "#C9A84C", fontWeight: 700,
                letterSpacing: "0.1em", marginBottom: 8,
              }}>PASSO {STEPS[active].num}</div>
              <h3 style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "1.4rem", color: "#FAF7F2", marginBottom: 12,
              }}>{STEPS[active].title}</h3>
              <p style={{
                color: "#8FB89A", fontSize: "1rem",
                lineHeight: 1.78, fontWeight: 300, maxWidth: 620,
              }}>{STEPS[active].desc}</p>
            </div>
          </div>
        </div>

        {/* Grid of steps */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: 14,
        }} className="steps-grid">
          {STEPS.map((s, i) => (
            <div
              key={i}
              className="step-pill"
              onClick={() => setActive(i)}
              style={{
                background: active === i ? "rgba(201,168,76,0.15)" : "rgba(255,255,255,0.04)",
                border: active === i ? "1px solid #C9A84C" : "1px solid rgba(255,255,255,0.08)",
                borderRadius: 18, padding: "20px 18px",
              }}
            >
              <div style={{ fontSize: "1.4rem", marginBottom: 10 }}>{s.icon}</div>
              <div style={{
                fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.08em",
                color: active === i ? "#C9A84C" : "#8FB89A", marginBottom: 6,
              }}>PASSO {s.num}</div>
              <div style={{
                fontSize: "0.82rem", lineHeight: 1.4,
                color: active === i ? "#FAF7F2" : "#6B9B7A",
              }}>{s.title}</div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .steps-grid { grid-template-columns: 1fr 1fr !important; }
        }
        @media (max-width: 480px) {
          .steps-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
