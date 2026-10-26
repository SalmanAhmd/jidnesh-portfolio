import { ImageResponse } from "next/og";

export const alt =
  "Jidnesh Patil — Lead QA Engineer. Confidence is a release requirement.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          width: "100%",
          height: "100%",
          padding: "62px 68px",
          background: "#070908",
          color: "#f2f5f3",
          fontFamily: "sans-serif",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "-180px",
            right: "-100px",
            width: "560px",
            height: "560px",
            borderRadius: "50%",
            background:
              "linear-gradient(135deg, rgba(139,234,192,0.12), rgba(139,234,192,0.01))",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: "150px",
            right: "-10px",
            display: "flex",
            color: "#101613",
            fontSize: "320px",
            fontWeight: 700,
            letterSpacing: "-22px",
            lineHeight: 1,
          }}
        >
          JP
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            position: "relative",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: "38px",
                height: "38px",
                border: "1px solid #2d5a47",
                borderRadius: "8px",
                background: "#101613",
                color: "#8beac0",
                fontSize: "13px",
                fontWeight: 600,
                letterSpacing: "-0.5px",
              }}
            >
              JP
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "2px",
              }}
            >
              <div style={{ fontSize: "17px", fontWeight: 600 }}>
                Jidnesh Patil
              </div>
              <div
                style={{
                  color: "#85918b",
                  fontSize: "10px",
                  letterSpacing: "1.8px",
                }}
              >
                LEAD QA ENGINEER · INSURTECH
              </div>
            </div>
          </div>

          <div
            style={{
              color: "#85918b",
              fontSize: "10px",
              letterSpacing: "2px",
            }}
          >
            PORTFOLIO / 2026
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", position: "relative" }}>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              width: "920px",
              fontSize: "78px",
              fontWeight: 500,
              letterSpacing: "-4.8px",
              lineHeight: 0.98,
            }}
          >
            <span>Confidence is a&nbsp;</span>
            <span style={{ color: "#8beac0" }}>release</span>
            <span>&nbsp;requirement.</span>
          </div>
          <div
            style={{
              display: "flex",
              width: "610px",
              marginTop: "22px",
              color: "#a2aca7",
              fontSize: "20px",
              lineHeight: 1.5,
            }}
          >
            Quality leadership for Employee Benefits platforms — test strategy,
            regression, API validation, and release readiness.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            position: "relative",
            paddingTop: "24px",
            borderTop: "1px solid #24312b",
          }}
        >
          <div style={{ display: "flex", gap: "8px" }}>
            {["Test strategy", "Regression", "Release readiness"].map((item) => (
              <div
                key={item}
                style={{
                  display: "flex",
                  padding: "7px 12px",
                  border: "1px solid #2a3832",
                  borderRadius: "5px",
                  color: "#a2aca7",
                  fontSize: "12px",
                }}
              >
                {item}
              </div>
            ))}
          </div>
          <div style={{ color: "#85918b", fontSize: "12px" }}>
            jidneshpatil2324@gmail.com
          </div>
        </div>
      </div>
    ),
    size,
  );
}
