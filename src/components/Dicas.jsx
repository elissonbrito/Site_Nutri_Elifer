import { DICAS } from "../data";

export default function Dicas({ visible }) {
  return (
    <section style={{ padding: "80px 32px", background: "#FAF7F2" }}>
      <div style={{ maxWidth: 1180, margin: "0 auto" }}>

        <div className={`fade-up ${visible ? "visible" : ""}`} style={{ textAlign: "center", marginBottom: 48 }}>
          <div style={{
            fontSize: "0.73rem", fontWeight: 700, letterSpacing: "0.12em",
            textTransform: "uppercase", color: "#C9A84C", marginBottom: 10,
          }}>Dicas da Nutri</div>
          <h2 style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "clamp(1.6rem, 3vw, 2.2rem)",
            fontWeight: 700, color: "#2E5240",
          }}>Pequenos hábitos, grandes resultados</h2>
        </div>

        <div
          className={`fade-up delay-1 ${visible ? "visible" : ""} dicas-grid`}
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(5, 1fr)",
            gap: 16,
          }}
        >
          {DICAS.map(({ emoji, title, desc }) => (
            <div key={title} style={{
              background: "#fff", borderRadius: 20, padding: "28px 22px",
              textAlign: "center", boxShadow: "0 4px 16px rgba(0,0,0,0.05)",
            }}>
              <div style={{ fontSize: "2.2rem", marginBottom: 14 }}>{emoji}</div>
              <h4 style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "0.9rem", color: "#2E5240", marginBottom: 10, fontWeight: 600,
              }}>{title}</h4>
              <p style={{ fontSize: "0.78rem", color: "#6B6B6B", lineHeight: 1.65 }}>{desc}</p>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) { .dicas-grid { grid-template-columns: repeat(3, 1fr) !important; } }
        @media (max-width: 560px) { .dicas-grid { grid-template-columns: repeat(2, 1fr) !important; } }
        @media (max-width: 380px) { .dicas-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </section>
  );
}
