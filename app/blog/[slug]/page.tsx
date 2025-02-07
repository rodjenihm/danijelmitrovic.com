// app/blog/[slug]/page.tsx
import fs from "fs";
import path from "path";
import { compileMDX } from "next-mdx-remote/rsc";
import BlogPostLayout from "@/components/blog-post-layout";
import { notFound } from "next/navigation";
import CodeBlock from "@/components/code-block";

interface Params {
  slug: string;
}

interface PageProps {
  params: Params;
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
  } catch (error) {
    notFound();
  }

  const { content, frontmatter } = await compileMDX<{
    title: string;
    date: string;
  }>({
    source: fileContents,
    options: { parseFrontmatter: true },
    components: {
      code: CodeBlock,
    },
  });

  return <BlogPostLayout meta={frontmatter}>{content}</BlogPostLayout>;
}
