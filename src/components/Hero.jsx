import { WA_LINK, IG_LINK } from "../data";
import eliferJaleco from "../assets/elifer-jaleco.jpg";

export default function Hero() {
  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section id="inicio" style={{
      minHeight: "100vh", display: "flex", alignItems: "center",
      paddingTop: 80,
    }}>
      <div style={{ maxWidth: 1180, margin: "0 auto", padding: "60px 32px", width: "100%" }}>
        <div style={{
          display: "flex", gap: 64, alignItems: "center",
          flexWrap: "wrap",
        }}>
          {/* Text */}
          <div style={{ flex: 1, minWidth: 300 }}>
            <div className="fade-up visible" style={{
              display: "inline-block", fontSize: "0.73rem", fontWeight: 700,
              letterSpacing: "0.11em", textTransform: "uppercase", color: "#C9A84C",
              border: "1px solid #E8D5A0", padding: "6px 18px", borderRadius: 50, marginBottom: 28,
            }}>✦ Nutricionista · CRN-4 26101559</div>

            <h1 className="fade-up visible" style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(2.2rem, 5vw, 3.7rem)",
              fontWeight: 700, lineHeight: 1.14, color: "#2E5240", marginBottom: 22,
            }}>
              Emagrecer<br />
              <em style={{ color: "#4A7C59", fontStyle: "italic" }}>sem sofrimento,</em><br />
              sem dieta maluca
            </h1>

            <p className="fade-up visible delay-1" style={{
              fontSize: "1.05rem", color: "#6B6B6B",
              maxWidth: 460, marginBottom: 38, fontWeight: 300, lineHeight: 1.78,
            }}>
              Te ajudo a conquistar o peso ideal comendo o que gosta,
              sem culpa e sem terrorismo alimentar. Nutrição que faz
              sentido para a sua vida real.
            </p>

            <div className="fade-up visible delay-2" style={{
              display: "flex", gap: 14, flexWrap: "wrap", marginBottom: 48,
            }}>
              <a href={WA_LINK} target="_blank" rel="noopener noreferrer"
                className="btn-hover"
                style={{
                  background: "#4A7C59", color: "#fff", padding: "16px 32px",
                  borderRadius: 50, textDecoration: "none", fontWeight: 700,
                  fontSize: "0.95rem", boxShadow: "0 4px 20px rgba(74,124,89,0.35)",
                  display: "inline-flex", alignItems: "center", gap: 8,
                }}
              >💬 Falar no WhatsApp</a>
              <a href={IG_LINK} target="_blank" rel="noopener noreferrer"
                className="btn-hover"
                style={{
                  border: "1.5px solid #8FB89A", color: "#4A7C59", padding: "14px 28px",
                  borderRadius: 50, textDecoration: "none", fontWeight: 600,
                  fontSize: "0.95rem", display: "inline-flex", alignItems: "center", gap: 8,
                  background: "transparent",
                }}
              >📸 Ver no Instagram</a>
            </div>

            <div className="fade-up visible delay-3" style={{ display: "flex", gap: 32, flexWrap: "wrap" }}>
              {[
                ["Formada em", "Universidade de Vassouras"],
                ["Especialidade", "Nutrição Clínica"],
                ["Atendimento", "Presencial & Online"],
              ].map(([k, v]) => (
                <div key={k}>
                  <div style={{ fontSize: "0.68rem", color: "#8FB89A", letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: 4 }}>{k}</div>
                  <div style={{ fontSize: "0.85rem", fontWeight: 600, color: "#2E5240" }}>{v}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Photo card */}
          <div className="fade-up visible delay-2" style={{ flex: "0 0 360px", maxWidth: "100%", position: "relative" }}>
            <div style={{
              position: "absolute", top: -16, right: -12, zIndex: 2,
              background: "#C9A84C", color: "#fff", borderRadius: 50,
              padding: "9px 18px", fontSize: "0.7rem", fontWeight: 700,
              boxShadow: "0 4px 16px rgba(201,168,76,0.4)", whiteSpace: "nowrap",
            }}>✨ Presencial & Online</div>

            <div className="img-zoom" style={{
              borderRadius: 24, overflow: "hidden",
              boxShadow: "0 24px 64px rgba(0,0,0,0.14)",
            }}>
              <img
                src={eliferJaleco}
                alt="Élifer Brito – Nutricionista"
                style={{ width: "100%", height: 490, objectFit: "cover", objectPosition: "top" }}
              />
            </div>

            <div style={{
              position: "absolute", bottom: -22, left: -20,
              background: "#fff", borderRadius: 18, padding: "16px 22px",
              boxShadow: "0 10px 36px rgba(0,0,0,0.10)", maxWidth: 230,
            }}>
              <div style={{
                fontFamily: "'Playfair Display', serif", fontStyle: "italic",
                fontSize: "0.84rem", color: "#2E5240", lineHeight: 1.55, marginBottom: 8,
              }}>
                "Sua saúde é o seu maior patrimônio."
              </div>
              <div style={{ fontSize: "0.7rem", color: "#8FB89A", fontWeight: 600 }}>— Élifer Brito, Nutricionista</div>
            </div>
          </div>
        </div>

        {/* Scroll hint */}
        <div
          onClick={() => scrollTo("sobre")}
          className="float-anim"
          style={{
            textAlign: "center", marginTop: 80, cursor: "pointer",
            color: "#8FB89A", fontSize: "0.78rem", letterSpacing: "0.06em",
          }}
        >
          ↓ conheça mais
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          #inicio > div > div { flex-direction: column !important; }
          #inicio > div > div > div:last-child { flex: 0 0 auto !important; width: 100% !important; max-width: 340px; align-self: center; }
        }
      `}</style>
    </section>
  );
}
