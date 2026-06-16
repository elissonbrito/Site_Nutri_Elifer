import { useState } from "react";
import { PLANS, WA_LINK } from "../data";

export default function Planos({ visible }) {
  const [active, setActive] = useState(1);

  return (
    <section id="planos" style={{ padding: "90px 32px", background: "#FAF7F2" }}>
      <div style={{ maxWidth: 1180, margin: "0 auto" }}>

        <div className={`fade-up ${visible ? "visible" : ""}`} style={{ textAlign: "center", marginBottom: 56 }}>
          <div style={{
            fontSize: "0.73rem", fontWeight: 700, letterSpacing: "0.12em",
            textTransform: "uppercase", color: "#C9A84C", marginBottom: 10,
          }}>Planos de investimento</div>
          <h2 style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)",
            fontWeight: 700, color: "#2E5240", marginBottom: 10,
          }}>Escolha o plano ideal<br />para a sua jornada</h2>
          <p style={{ color: "#6B6B6B", fontWeight: 300, fontSize: "0.95rem" }}>
            Parcelamento disponível para os programas de 60 e 90 dias.
          </p>
        </div>

        <div className={`fade-up delay-1 ${visible ? "visible" : ""}`}
          style={{
            display: "flex", gap: 24, alignItems: "stretch", flexWrap: "wrap",
          }}
        >
          {PLANS.map((plan) => (
            <div
              key={plan.id}
              className="card-hover"
              onClick={() => setActive(plan.id)}
              style={{
                flex: 1, minWidth: 240,
                borderRadius: 24,
                background: active === plan.id ? plan.color : "#fff",
                border: active === plan.id ? `2px solid ${plan.color}` : "2px solid #F0EBE1",
                padding: "36px 28px",
                boxShadow: active === plan.id
                  ? `0 16px 48px ${plan.color}44`
                  : "0 4px 20px rgba(0,0,0,0.06)",
                cursor: "pointer", position: "relative", transition: "all 0.3s",
              }}
            >
              {plan.highlight && (
                <div style={{
                  position: "absolute", top: -14, left: "50%", transform: "translateX(-50%)",
                  background: "#C9A84C", color: "#fff", borderRadius: 50,
                  padding: "6px 20px", fontSize: "0.7rem", fontWeight: 700,
                  whiteSpace: "nowrap", boxShadow: "0 4px 14px rgba(201,168,76,0.4)",
                }}>⭐ Mais escolhido</div>
              )}

              <div style={{
                fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.1em",
                color: active === plan.id ? "rgba(255,255,255,0.7)" : "#C9A84C",
                textTransform: "uppercase", marginBottom: 8,
              }}>{plan.tag}</div>

              <h3 style={{
                fontFamily: "'Playfair Display', serif", fontSize: "1.25rem",
                color: active === plan.id ? "#fff" : "#2E5240",
                marginBottom: 28, fontWeight: 700, lineHeight: 1.25,
              }}>{plan.name}</h3>

              <div style={{ display: "flex", flexDirection: "column", gap: 13, marginBottom: 32 }}>
                {plan.items.map((item) => (
                  <div key={item} style={{ display: "flex", gap: 10, alignItems: "flex-start" }}>
                    <span style={{
                      color: active === plan.id ? "#E8D5A0" : "#4A7C59",
                      fontWeight: 700, flexShrink: 0, fontSize: "0.9rem",
                    }}>✓</span>
                    <span style={{
                      fontSize: "0.88rem", lineHeight: 1.5,
                      color: active === plan.id ? "rgba(255,255,255,0.85)" : "#6B6B6B",
                    }}>{item}</span>
                  </div>
                ))}
              </div>

              <a
                href={WA_LINK} target="_blank" rel="noopener noreferrer"
                className="btn-hover"
                onClick={(e) => e.stopPropagation()}
                style={{
                  display: "block", textAlign: "center",
                  background: active === plan.id ? "rgba(255,255,255,0.18)" : "#4A7C59",
                  color: "#fff", padding: "14px 24px", borderRadius: 50,
                  textDecoration: "none", fontWeight: 700, fontSize: "0.9rem",
                  border: active === plan.id ? "1.5px solid rgba(255,255,255,0.3)" : "none",
                }}
              >Quero este plano →</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
