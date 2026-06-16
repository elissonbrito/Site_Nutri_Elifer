import { WA_LINK } from "../data";

export default function FloatWA() {
  return (
    <a
      href={WA_LINK}
      target="_blank"
      rel="noopener noreferrer"
      title="Falar no WhatsApp"
      className="float-anim btn-hover"
      style={{
        position: "fixed", bottom: 28, right: 28, zIndex: 999,
        width: 58, height: 58, borderRadius: "50%",
        background: "#25D366", display: "flex",
        alignItems: "center", justifyContent: "center",
        boxShadow: "0 6px 24px rgba(37,211,102,0.5)",
        fontSize: 26, textDecoration: "none",
      }}
    >💬</a>
  );
}
