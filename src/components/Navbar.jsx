import { useState } from "react";
import { NAV_LINKS, WA_LINK } from "../data";

export default function Navbar({ activeSection }) {
  const [open, setOpen] = useState(false);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  };

  return (
    <>
      <nav style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 200,
        background: "rgba(250,247,242,0.96)", backdropFilter: "blur(14px)",
        borderBottom: "1px solid #F0EBE1",
        padding: "14px 40px",
        display: "flex", justifyContent: "space-between", alignItems: "center",
      }}>
        {/* Logo */}
        <div
          onClick={() => scrollTo("inicio")}
          style={{ cursor: "pointer" }}
        >
          <div style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "1.15rem", fontWeight: 700, color: "#2E5240", lineHeight: 1.1,
          }}>
            Élifer <span style={{ color: "#C9A84C" }}>Brito</span>
          </div>
          <div style={{
            fontSize: "0.6rem", letterSpacing: "0.14em", color: "#8FB89A",
            fontWeight: 600, textTransform: "uppercase",
          }}>Nutricionista</div>
        </div>

        {/* Desktop links */}
        <div style={{ display: "flex", gap: 28, alignItems: "center" }} className="desktop-nav">
          {NAV_LINKS.map((l) => (
            <span
              key={l.id}
              onClick={() => scrollTo(l.id)}
              style={{
                fontSize: "0.875rem", fontWeight: 500, cursor: "pointer",
                color: activeSection === l.id ? "#4A7C59" : "#6B6B6B",
                borderBottom: activeSection === l.id ? "2px solid #4A7C59" : "2px solid transparent",
                paddingBottom: 2, transition: "color 0.2s, border-color 0.2s",
              }}
            >{l.label}</span>
          ))}
          <a
            href={WA_LINK} target="_blank" rel="noopener noreferrer"
            className="btn-hover"
            style={{
              background: "#4A7C59", color: "#fff", padding: "10px 22px",
              borderRadius: 50, fontSize: "0.85rem", fontWeight: 600,
              textDecoration: "none", boxShadow: "0 4px 16px rgba(74,124,89,0.3)",
            }}
          >Agendar consulta</a>
        </div>

        {/* Hamburger */}
        <button
          onClick={() => setOpen(!open)}
          className="hamburger"
          style={{
            background: "none", border: "none", fontSize: 26,
            cursor: "pointer", color: "#2E5240", display: "none",
          }}
        >{open ? "✕" : "☰"}</button>
      </nav>

      {/* Mobile drawer */}
      {open && (
        <div style={{
          position: "fixed", top: 62, left: 0, right: 0, zIndex: 199,
          background: "#FAF7F2", borderBottom: "1px solid #F0EBE1",
          padding: "20px 28px", display: "flex", flexDirection: "column", gap: 16,
        }}>
          {NAV_LINKS.map((l) => (
            <span
              key={l.id}
              onClick={() => scrollTo(l.id)}
              style={{
                fontSize: "1rem", fontWeight: 500, color: "#2E5240",
                cursor: "pointer", padding: "10px 0", borderBottom: "1px solid #F0EBE1",
              }}
            >{l.label}</span>
          ))}
          <a
            href={WA_LINK} target="_blank" rel="noopener noreferrer"
            style={{
              background: "#4A7C59", color: "#fff", padding: "14px 24px",
              borderRadius: 50, textAlign: "center", fontWeight: 600, textDecoration: "none",
            }}
          >💬 Agendar consulta</a>
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .hamburger { display: block !important; }
        }
      `}</style>
    </>
  );
}
