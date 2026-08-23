import { ImageResponse } from "next/og";

export const runtime = "edge";

export const alt = "DiegoCodes | sites profissionais para negócios locais";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          height: "100%",
          width: "100%",
          backgroundColor: "#0A0A0A",
          color: "#FFFFFF",
          padding: "56px",
          fontFamily: "sans-serif",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            right: -80,
            top: -80,
            width: 360,
            height: 360,
            borderRadius: 9999,
            backgroundColor: "#7B2FBE",
            opacity: 0.42,
          }}
        />
        <div
          style={{
            position: "absolute",
            right: 56,
            top: 56,
            width: 180,
            height: 180,
            borderRadius: 9999,
            border: "1px solid rgba(255,255,255,0.12)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#7B2FBE",
            fontSize: 88,
            fontWeight: 800,
          }}
        >
          D
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 12,
              fontSize: 24,
              letterSpacing: 4,
              textTransform: "uppercase",
              color: "#A0A0A0",
            }}
          >
            Desenvolvedor Web · Recife/PE
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
            <div
              style={{
                fontSize: 78,
                lineHeight: 0.98,
                fontWeight: 900,
                textTransform: "uppercase",
                maxWidth: 940,
              }}
            >
              Criação de sites em Recife para negócios locais.
            </div>
            <div
              style={{
                maxWidth: 760,
                fontSize: 34,
                lineHeight: 1.3,
                color: "#D0D0D0",
              }}
            >
              Sites profissionais para negócios locais que querem passar mais
              confiança e receber contatos pelo WhatsApp.
            </div>
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 18,
              fontSize: 26,
              color: "#7B2FBE",
              textTransform: "uppercase",
              letterSpacing: 3,
            }}
          >
            DIEGOCODES
            <span style={{ color: "#FFFFFF" }}>Projetos responsivos e integrados ao WhatsApp</span>
          </div>
        </div>
      </div>
    ),
    size
  );
}
