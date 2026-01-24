import fs from "fs";
import path from "path";
import { compileMDX } from "next-mdx-remote/rsc";
import BlogPostLayout from "@/components/blog-post-layout";
import { notFound } from "next/navigation";
import Code from "@/components/code";
import { Metadata } from "next";
import matter from "gray-matter";

interface Params {
  slug: string;
}

interface PageProps {
  params: Promise<Params>;
}

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

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const frontmatter = getPostFrontmatter(slug);

  if (!frontmatter) {
    return {};
  }

  return {
    title: frontmatter.title,
    description: frontmatter.excerpt || `Read ${frontmatter.title} by Danijel Mitrović`,
    alternates: {
      canonical: `/blog/${slug}`,
    },
    openGraph: {
      title: frontmatter.title,
      description: frontmatter.excerpt || `Read ${frontmatter.title} by Danijel Mitrović`,
      type: "article",
      publishedTime: new Date(frontmatter.date).toISOString(),
      authors: ["Danijel Mitrović"],
      tags: frontmatter.tags,
    },
    twitter: {
      card: "summary_large_image",
      title: frontmatter.title,
      description: frontmatter.excerpt || `Read ${frontmatter.title} by Danijel Mitrović`,
    },
  };
}

export async function generateStaticParams() {
  const postsDirectory = path.join(process.cwd(), "posts");
  const filenames = fs.readdirSync(postsDirectory);

  return filenames.map((filename) => ({
    slug: filename.replace(/\.mdx$/, ""),
  }));
}

export default async function Page({ params }: PageProps) {
  const { slug } = await params;

  const postsDirectory = path.join(process.cwd(), "posts");
  const filePath = path.join(postsDirectory, `${slug}.mdx`);

  let fileContents;
  try {
    fileContents = fs.readFileSync(filePath, "utf8");
  } catch {
    notFound();
  }

  const { content, frontmatter } = await compileMDX<Frontmatter>({
    source: fileContents,
    options: { parseFrontmatter: true },
    components: {
      code: (props) => {
        const { children, className, ...rest } = props;
        return (
          <Code {...rest} className={className} inline={!className}>
            {children}
          </Code>
        );
      },
    },
  });

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: frontmatter.title,
    description: frontmatter.excerpt,
    datePublished: new Date(frontmatter.date).toISOString(),
    author: {
      "@type": "Person",
      name: "Danijel Mitrović",
      url: "https://www.danijelmitrovic.com",
    },
    publisher: {
      "@type": "Person",
      name: "Danijel Mitrović",
      url: "https://www.danijelmitrovic.com",
    },
    keywords: frontmatter.tags?.join(", "),
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://www.danijelmitrovic.com/blog/${slug}`,
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <BlogPostLayout meta={frontmatter}>{content}</BlogPostLayout>
    </>
  );
}
