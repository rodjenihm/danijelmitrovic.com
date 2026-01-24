import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Danijel Mitrović - Backend Software Engineer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #0a0f14 0%, #1a1f2e 50%, #0a0f14 100%)",
          fontFamily: "Inter, sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "24px",
          }}
        >
          {/* Profile Photo */}
          <img
            src="https://dgblq0ba7cx3huq6.public.blob.vercel-storage.com/profile.jpg"
            alt="Danijel Mitrović"
            width={160}
            height={160}
            style={{
              borderRadius: "50%",
              border: "4px solid #3b82f6",
            }}
          />
          {/* Name */}
          <div
            style={{
              fontSize: "56px",
              fontWeight: 800,
              background: "linear-gradient(90deg, #3b82f6, #a855f7, #ec4899)",
              backgroundClip: "text",
              color: "transparent",
            }}
          >
            Danijel Mitrović
          </div>
          {/* Title */}
          <div
            style={{
              fontSize: "28px",
              color: "#9ca3af",
              fontWeight: 500,
            }}
          >
            Backend Engineer | Java & Spring Developer
          </div>
          {/* Tech Stack */}
          <div
            style={{
              display: "flex",
              gap: "12px",
              marginTop: "16px",
            }}
          >
            {["Java", "Spring", "AWS", "PostgreSQL", "MongoDB", "Redis"].map(
              (tech) => (
                <div
                  key={tech}
                  style={{
                    padding: "8px 16px",
                    background: "rgba(59, 130, 246, 0.2)",
                    borderRadius: "8px",
                    color: "#3b82f6",
                    fontSize: "16px",
                    fontWeight: 500,
                  }}
                >
                  {tech}
                </div>
              )
            )}
          </div>
        </div>
        {/* URL */}
        <div
          style={{
            position: "absolute",
            bottom: "32px",
            fontSize: "18px",
            color: "#6b7280",
          }}
        >
          www.danijelmitrovic.com
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
