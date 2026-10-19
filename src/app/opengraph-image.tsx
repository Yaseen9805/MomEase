import { ImageResponse } from "next/og";

export const alt = "MomEase — your pregnancy & postpartum companion";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #FDE2F3 0%, #D0BFFF 100%)",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            fontSize: 120,
            fontWeight: 700,
            color: "#C27BA0",
            letterSpacing: -2,
          }}
        >
          MomEase
        </div>
        <div
          style={{
            fontSize: 36,
            color: "#4A4A4A",
            marginTop: 16,
          }}
        >
          Your pregnancy &amp; postpartum companion
        </div>
      </div>
    ),
    { ...size }
  );
}
