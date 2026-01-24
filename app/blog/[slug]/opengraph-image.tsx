import { ImageResponse } from "next/og";
import fs from "fs";
import path from "path";
import matter from "gray-matter";

export const runtime = "nodejs";
export const alt = "Blog Post";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

interface Frontmatter {
  title: string;
  date: string;
  excerpt?: string;
  tags?: string[];
}

function getPostFrontmatter(slug: string): Frontmatter | null {
  const postsDirectory = path.join(process.cwd(), "posts");
  const filePath = path.join(postsDirectory, `${slug}.mdx`);

  try {
    const fileContents = fs.readFileSync(filePath, "utf8");
    const { data } = matter(fileContents);
    return data as Frontmatter;
  } catch {
    return null;
  }
}

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const frontmatter = getPostFrontmatter(slug);

  if (!frontmatter) {
    return new ImageResponse(
      (
        <div
          style={{
            height: "100%",
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: "#0a0f14",
            color: "#fff",
            fontSize: "48px",
          }}
        >
          Post not found
        </div>
      ),
      { ...size }
    );
  }

  const formattedDate = new Date(frontmatter.date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "60px",
          background: "linear-gradient(135deg, #0a0f14 0%, #1a1f2e 50%, #0a0f14 100%)",
          fontFamily: "Inter, sans-serif",
        }}
      >
        {/* Header */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "16px",
          }}
        >
          <img
            src="https://dgblq0ba7cx3huq6.public.blob.vercel-storage.com/profile.jpg"
            alt="Danijel Mitrović"
            width={64}
            height={64}
            style={{
              borderRadius: "50%",
              border: "2px solid #3b82f6",
            }}
          />
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div
              style={{
                fontSize: "24px",
                fontWeight: 600,
                color: "#fff",
              }}
            >
              Danijel Mitrović
            </div>
            <div
              style={{
                fontSize: "16px",
                color: "#9ca3af",
              }}
            >
              {formattedDate}
            </div>
          </div>
        </div>

        {/* Title */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "24px",
          }}
        >
          <div
            style={{
              fontSize: "52px",
              fontWeight: 800,
              color: "#fff",
              lineHeight: 1.2,
              maxWidth: "900px",
            }}
          >
            {frontmatter.title}
          </div>
          {frontmatter.excerpt && (
            <div
              style={{
                fontSize: "24px",
                color: "#9ca3af",
                lineHeight: 1.4,
                maxWidth: "800px",
              }}
            >
              {frontmatter.excerpt.length > 120
                ? frontmatter.excerpt.substring(0, 120) + "..."
                : frontmatter.excerpt}
            </div>
          )}
        </div>

        {/* Footer */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          {/* Tags */}
          <div style={{ display: "flex", gap: "8px" }}>
            {frontmatter.tags?.slice(0, 4).map((tag) => (
              <div
                key={tag}
                style={{
                  padding: "6px 12px",
                  background: "rgba(59, 130, 246, 0.2)",
                  borderRadius: "6px",
                  color: "#3b82f6",
                  fontSize: "14px",
                  fontWeight: 500,
                }}
              >
                {tag}
              </div>
            ))}
          </div>
          {/* URL */}
          <div
            style={{
              fontSize: "18px",
              color: "#6b7280",
            }}
          >
            www.danijelmitrovic.com/blog
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
