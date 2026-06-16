import { WA_LINK, IG_LINK, EMAIL } from "../data";

export default function Footer() {
  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <footer style={{ padding: "40px 32px", borderTop: "1px solid #F0EBE1", background: "#FAF7F2" }}>
      <div style={{
        maxWidth: 1180, margin: "0 auto",
        display: "flex", justifyContent: "space-between",
        alignItems: "center", flexWrap: "wrap", gap: 24,
      }}>

        <div>
          <div
            onClick={() => scrollTo("inicio")}
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "1.2rem", fontWeight: 700, color: "#2E5240", cursor: "pointer",
            }}
          >Élifer <span style={{ color: "#C9A84C" }}>Brito</span></div>
          <div style={{
            fontSize: "0.68rem", color: "#8FB89A",
            letterSpacing: "0.1em", textTransform: "uppercase",
          }}>Nutricionista · CRN-4 26101559</div>
        </div>

        <div style={{ display: "flex", gap: 10 }}>
          {[
            { href: IG_LINK,              label: "📸", title: "Instagram" },
            { href: WA_LINK,              label: "💬", title: "WhatsApp" },
            { href: `mailto:${EMAIL}`,    label: "📧", title: "E-mail" },
          ].map(({ href, label, title }) => (
            <a key={title} href={href} target="_blank" rel="noopener noreferrer"
              title={title}
              className="btn-hover"
              style={{
                width: 42, height: 42, borderRadius: "50%", background: "#F0EBE1",
                display: "flex", alignItems: "center", justifyContent: "center",
                textDecoration: "none", fontSize: "1.1rem",
              }}
            >{label}</a>
          ))}
        </div>

        <div style={{ fontSize: "0.76rem", color: "#6B6B6B", textAlign: "right" }}>
          © {new Date().getFullYear()} Élifer Brito Nutricionista<br />
          Maricá, RJ · Todos os direitos reservados
        </div>
      </div>
    </footer>
  );
}
