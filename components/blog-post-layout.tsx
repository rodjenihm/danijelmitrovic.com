import React from "react";
import type { Metadata } from "next";
import Tag from "@/components/tag";
import { formatBlogDate } from "@/lib/utils";

interface BlogPostLayoutProps {
  children: React.ReactNode;
  meta: {
    title: string;
    date: string;
    excerpt?: string;
    tags?: string[];
    [key: string]: any; // Allow for other metadata
  };
}

export async function generateMetadata({
  meta,
}: BlogPostLayoutProps): Promise<Metadata> {
  return {
    title: meta.title,
    description: meta.excerpt || `Blog post from ${formatBlogDate(meta.date)}`,
  };
}

const BlogPostLayout: React.FC<BlogPostLayoutProps> = ({ children, meta }) => {
  return (
    <article className="py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-(--breakpoint-lg) mx-auto">
        <h1 className="text-4xl font-bold mb-4">{meta.title}</h1>
        <p className="text-gray-500 text-sm mb-2">
          Published: {formatBlogDate(meta.date)}
        </p>

        {meta.tags && (
          <div className="mb-10">
            <div className="flex flex-wrap gap-2">
              {meta.tags.map((tag) => (
                <Tag key={tag} name={tag} />
              ))}
            </div>
          </div>
        )}

        <div className="prose prose-xl">{children}</div>
      </div>
    </article>
  );
};

export default BlogPostLayout;
