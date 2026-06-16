import eliferBlazer from "../assets/elifer-blazer.jpg";
import eliferConsultorio from "../assets/elifer-consultorio.jpg";

const highlights = [
  ["🎓", "Formação Sólida",        "Nutricionista CRN-4 26101559 formada pela Universidade de Vassouras"],
  ["🌿", "Abordagem Humanizada",   "Sem dietas restritivas, sem culpa — resultado real e duradouro"],
  ["📱", "Suporte Contínuo",       "Acompanhamento via WhatsApp entre as consultas"],
  ["🤝", "Atendimento Integrado",  "Parceria com fisioterapia e pilates no Espaço Jéssica Cunha, Maricá/RJ"],
];

export default function Sobre({ visible }) {
  return (
    <section id="sobre" style={{ padding: "90px 32px" }}>
      <div style={{ maxWidth: 1180, margin: "0 auto" }}>

        <div className={`fade-up ${visible ? "visible" : ""}`} style={{ marginBottom: 52 }}>
          <div style={{
            fontSize: "0.73rem", fontWeight: 700, letterSpacing: "0.12em",
            textTransform: "uppercase", color: "#C9A84C", marginBottom: 10,
          }}>Sobre mim</div>
          <h2 style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)",
            fontWeight: 700, color: "#2E5240",
          }}>Uma nutrição que faz<br />sentido para a sua vida</h2>
        </div>

        <div style={{
          display: "flex", gap: 64, alignItems: "flex-start", flexWrap: "wrap",
        }}>
          {/* Text */}
          <div style={{ flex: 1, minWidth: 280 }}>
            {[
              <>Sou <strong style={{ color: "#4A7C59" }}>Élifer Brito</strong>, nutricionista clínica formada pela <strong style={{ color: "#4A7C59" }}>Universidade de Vassouras</strong>, apaixonada por ajudar pessoas a reconstruírem a relação com a comida e com o próprio corpo de forma leve, possível e sem extremismos.</>,
              <>Acredito que saúde não deve ser sinônimo de sofrimento. Atuo com foco em emagrecimento, reeducação alimentar e melhora da qualidade de vida, sempre com condutas individualizadas, escuta ativa e estratégias alinhadas à realidade de cada paciente.</>,
              <>Em parceria com o <strong style={{ color: "#4A7C59" }}>Espaço Jéssica Cunha Fisioterapia e Pilates</strong>, ofereço um cuidado integrado para o seu bem-estar em Flamengo, Maricá/RJ.</>,
            ].map((txt, i) => (
              <p
                key={i}
                className={`fade-up delay-${i + 1} ${visible ? "visible" : ""}`}
                style={{
                  fontSize: "1rem", color: "#6B6B6B",
                  lineHeight: 1.85, marginBottom: 18, fontWeight: 300,
                }}
              >{txt}</p>
            ))}

            <div className={`fade-up delay-3 ${visible ? "visible" : ""}`}
              style={{ marginTop: 32, display: "flex", flexDirection: "column", gap: 18 }}
            >
              {highlights.map(([icon, title, desc]) => (
                <div key={title} style={{ display: "flex", gap: 14, alignItems: "flex-start" }}>
                  <div style={{
                    width: 42, height: 42, borderRadius: 13,
                    background: "#F0EBE1", display: "flex", alignItems: "center",
                    justifyContent: "center", fontSize: "1.1rem", flexShrink: 0,
                  }}>{icon}</div>
                  <div>
                    <div style={{ fontWeight: 600, fontSize: "0.9rem", color: "#2E5240", marginBottom: 2 }}>{title}</div>
                    <div style={{ fontSize: "0.82rem", color: "#6B6B6B", lineHeight: 1.5 }}>{desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Photos */}
          <div className={`fade-up delay-2 ${visible ? "visible" : ""}`}
            style={{ flex: "0 0 320px", maxWidth: "100%", display: "flex", flexDirection: "column", gap: 16 }}
          >
            <div className="img-zoom" style={{ borderRadius: 20, overflow: "hidden" }}>
              <img
                src={eliferBlazer}
                alt="Élifer Brito"
                style={{ width: "100%", height: 300, objectFit: "cover", objectPosition: "top" }}
              />
            </div>
            <div className="img-zoom" style={{ borderRadius: 20, overflow: "hidden" }}>
              <img
                src={eliferConsultorio}
                alt="Élifer Brito no consultório"
                style={{ width: "100%", height: 220, objectFit: "cover", objectPosition: "top" }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
