// app/blog/page.tsx
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Link from "next/link";
import { Metadata } from "next";
import Tag from "@/components/tag";
import { formatBlogDate, calculateReadingTime } from "@/lib/utils";
import { Clock } from "lucide-react";
import { ScrollReveal } from "@/components/scroll-reveal";

interface Post {
  slug: string;
  readingTime: number;
  meta: {
    title: string;
    date: string;
    excerpt: string;
    tags?: string[];
  };
}

async function getPosts() {
  const postsDirectory = path.join(process.cwd(), "posts");
  const filenames = fs.readdirSync(postsDirectory);

  const posts: Post[] = filenames.map((filename) => {
    const filePath = path.join(postsDirectory, filename);
    const fileContents = fs.readFileSync(filePath, "utf8");
    const { data, content } = matter(fileContents);

    // Extract first paragraph as excerpt
    const excerpt = content.trim().split("\n")[0];

    return {
      slug: filename.replace(/\.mdx$/, ""),
      readingTime: calculateReadingTime(content),
      meta: {
        title: data.title,
        date: data.date,
        excerpt: data.excerpt || excerpt,
        tags: data.tags || [],
      },
    };
  });

  return posts.toSorted(
    (a, b) => new Date(b.meta.date).getTime() - new Date(a.meta.date).getTime()
  );
}

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Explore blog posts by Danijel Mitrović on Java, Spring, cloud technologies, backend development, and more.",
  alternates: {
    canonical: "/blog",
  },
  openGraph: {
    title: "Blog | Danijel Mitrović",
    description:
      "Explore blog posts by Danijel Mitrović on Java, Spring, cloud technologies, backend development, and more.",
    type: "website",
  },
};

export default async function Blog() {
  const posts = await getPosts();
  return (
    <div className="container mx-auto py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">Tech Blog</h1>
        <ul className="space-y-6">
          {posts.map((post, index) => (
            <ScrollReveal key={post.slug} delay={index * 0.1}>
              <li>
                <Link href={`/blog/${post.slug}`} className="block group">
                  <article className="relative overflow-hidden bg-card border border-border rounded-xl p-6 transition-all duration-300 hover:shadow-lg hover:border-primary/50">
                    <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="relative">
                      <div className="flex items-center gap-4 text-sm text-muted-foreground mb-2">
                        <span>{formatBlogDate(post.meta.date)}</span>
                        <span className="flex items-center gap-1">
                          <Clock className="h-4 w-4" />
                          {post.readingTime} min read
                        </span>
                      </div>
                      <h2 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors duration-200">
                        {post.meta.title}
                      </h2>
                      <p className="text-muted-foreground mt-2">
                        {post.meta.excerpt}
                      </p>
                      <div className="flex flex-wrap gap-2 mt-4">
                        {post.meta.tags &&
                          post.meta.tags.length > 0 &&
                          post.meta.tags.map((tag) => (
                            <Tag key={tag} name={tag} />
                          ))}
                      </div>
                    </div>
                  </article>
                </Link>
              </li>
            </ScrollReveal>
          ))}
        </ul>
      </div>
    </div>
  );
}
