import { WA_LINK, IG_LINK, EMAIL, PHONE } from "../data";
import eliferFormatura from "../assets/elifer-formatura.jpg";

const contactItems = [
  ["📍", "Local", "Espaço Jéssica Cunha Fisioterapia e Pilates\nRua Concessa Colaço Bryner Nunes, 835 – Flamengo, Maricá/RJ"],
  ["📞", "WhatsApp", PHONE],
  ["📧", "E-mail", EMAIL],
  ["📸", "Instagram", "@nutri.elifer"],
];

export default function Contato({ visible }) {
  return (
    <section id="contato" style={{ padding: "90px 32px", background: "#2E5240" }}>
      <div style={{ maxWidth: 1180, margin: "0 auto" }}>
        <div style={{ display: "flex", gap: 64, alignItems: "center", flexWrap: "wrap" }}>

          {/* Info */}
          <div style={{ flex: 1, minWidth: 280 }}>
            <div className={`fade-up ${visible ? "visible" : ""}`}>
              <div style={{
                fontSize: "0.73rem", fontWeight: 700, letterSpacing: "0.12em",
                textTransform: "uppercase", color: "#C9A84C", marginBottom: 12,
              }}>Vamos iniciar hoje?</div>
              <h2 style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)",
                fontWeight: 700, color: "#FAF7F2", marginBottom: 16,
              }}>Dê o primeiro passo<br />rumo ao seu peso ideal</h2>
              <p style={{
                color: "#8FB89A", fontSize: "1rem", fontWeight: 300,
                lineHeight: 1.78, maxWidth: 440, marginBottom: 40,
              }}>
                Sem dieta maluca. Sem terrorismo. Só uma reeducação alimentar
                que cabe na sua vida e te dá resultado de verdade.
              </p>
            </div>

            <div className={`fade-up delay-1 ${visible ? "visible" : ""}`}
              style={{ display: "flex", flexDirection: "column", gap: 18, marginBottom: 40 }}
            >
              {contactItems.map(([icon, label, value]) => (
                <div key={label} style={{ display: "flex", gap: 14, alignItems: "flex-start" }}>
                  <div style={{
                    width: 42, height: 42, borderRadius: 13,
                    background: "rgba(255,255,255,0.1)", display: "flex",
                    alignItems: "center", justifyContent: "center",
                    fontSize: "1rem", flexShrink: 0,
                  }}>{icon}</div>
                  <div>
                    <div style={{
                      fontSize: "0.68rem", color: "#8FB89A",
                      letterSpacing: "0.06em", textTransform: "uppercase", marginBottom: 3,
                    }}>{label}</div>
                    <div style={{
                      fontSize: "0.9rem", color: "#FAF7F2",
                      whiteSpace: "pre-line", lineHeight: 1.55,
                    }}>{value}</div>
                  </div>
                </div>
              ))}
            </div>

            <div className={`fade-up delay-2 ${visible ? "visible" : ""}`}
              style={{ display: "flex", gap: 14, flexWrap: "wrap" }}
            >
              <a href={WA_LINK} target="_blank" rel="noopener noreferrer"
                className="btn-hover"
                style={{
                  background: "#C9A84C", color: "#fff", padding: "16px 32px",
                  borderRadius: 50, textDecoration: "none", fontWeight: 700, fontSize: "0.95rem",
                  boxShadow: "0 4px 20px rgba(201,168,76,0.4)",
                  display: "inline-flex", alignItems: "center", gap: 8,
                }}
              >💬 Agendar pelo WhatsApp</a>
              <a href={IG_LINK} target="_blank" rel="noopener noreferrer"
                className="btn-hover"
                style={{
                  border: "1.5px solid rgba(255,255,255,0.3)", color: "#FAF7F2",
                  padding: "14px 28px", borderRadius: 50, textDecoration: "none",
                  fontWeight: 600, fontSize: "0.95rem",
                  display: "inline-flex", alignItems: "center", gap: 8,
                  background: "transparent",
                }}
              >📸 Instagram</a>
            </div>
          </div>

          {/* Photo */}
          <div className={`fade-up delay-2 ${visible ? "visible" : ""}`}
            style={{ flex: "0 0 320px", maxWidth: "100%" }}
          >
            <div className="img-zoom" style={{ borderRadius: 24, overflow: "hidden" }}>
              <img
                src={eliferFormatura}
                alt="Élifer Brito — Formatura"
                style={{
                  width: "100%", height: 460,
                  objectFit: "cover", objectPosition: "center 10%",
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
