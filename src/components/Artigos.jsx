import { ARTIGOS, IG_LINK } from "../data";

export default function Artigos({ visible }) {
  return (
    <section id="artigos" style={{ padding: "90px 32px", background: "#F0EBE1" }}>
      <div style={{ maxWidth: 1180, margin: "0 auto" }}>

        <div className={`fade-up ${visible ? "visible" : ""}`} style={{ marginBottom: 52 }}>
          <div style={{
            fontSize: "0.73rem", fontWeight: 700, letterSpacing: "0.12em",
            textTransform: "uppercase", color: "#C9A84C", marginBottom: 10,
          }}>Conteúdo educativo</div>
          <h2 style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)",
            fontWeight: 700, color: "#2E5240", marginBottom: 10,
          }}>Informação que transforma<br />a sua relação com a comida</h2>
          <p style={{ color: "#6B6B6B", fontWeight: 300 }}>
            Baseados em ciência, escritos para você entender — não para confundir.
          </p>
        </div>

        <div className={`fade-up delay-1 articles-grid ${visible ? "visible" : ""}`}
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: 20,
          }}
        >
          {ARTIGOS.map((a, i) => (
            <a
              key={i}
              href={IG_LINK} target="_blank" rel="noopener noreferrer"
              className="card-hover"
              style={{
                background: "#fff", borderRadius: 20, overflow: "hidden",
                boxShadow: "0 4px 20px rgba(0,0,0,0.06)",
                textDecoration: "none", display: "block",
              }}
            >
              <div style={{ padding: "28px 28px 0" }}>
                <div style={{
                  display: "inline-block", background: "#F0EBE1", color: "#4A7C59",
                  fontSize: "0.68rem", fontWeight: 700, letterSpacing: "0.08em",
                  textTransform: "uppercase", padding: "5px 12px", borderRadius: 50, marginBottom: 14,
                }}>{a.tag}</div>
                <div style={{ fontSize: "2rem", marginBottom: 12 }}>{a.emoji}</div>
                <h3 style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: "1.05rem", color: "#2E5240", lineHeight: 1.35, marginBottom: 10,
                }}>{a.title}</h3>
              </div>
              <p style={{ padding: "0 28px 20px", fontSize: "0.82rem", color: "#6B6B6B", lineHeight: 1.75 }}>
                {a.desc}
              </p>
              <div style={{
                padding: "14px 28px", borderTop: "1px solid #F0EBE1",
                display: "flex", justifyContent: "space-between", alignItems: "center",
              }}>
                <span style={{ fontSize: "0.72rem", color: "#8FB89A" }}>📸 @nutri.elifer</span>
                <span style={{ fontSize: "0.8rem", fontWeight: 700, color: "#4A7C59" }}>Ver no Insta →</span>
              </div>
            </a>
          ))}
        </div>

        <div style={{ textAlign: "center", marginTop: 44 }}>
          <a
            href={IG_LINK} target="_blank" rel="noopener noreferrer"
            className="btn-hover"
            style={{
              display: "inline-flex", alignItems: "center", gap: 8,
              border: "1.5px solid #4A7C59", color: "#4A7C59",
              padding: "14px 32px", borderRadius: 50, textDecoration: "none",
              fontWeight: 600, fontSize: "0.95rem", background: "transparent",
            }}
          >📸 Ver todos os conteúdos no Instagram</a>
        </div>
      </div>

      <style>{`
        .articles-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px; }
        @media (max-width: 900px) { .articles-grid { grid-template-columns: repeat(2, 1fr) !important; } }
        @media (max-width: 560px) { .articles-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </section>
  );
}
