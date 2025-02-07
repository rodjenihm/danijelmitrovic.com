import React from "react";

interface BlogPostLayoutProps {
  children: React.ReactNode;
  meta: {
    title: string;
    date: string;
    [key: string]: any; // Allow for other metadata
  };
}

const BlogPostLayout: React.FC<BlogPostLayoutProps> = ({ children, meta }) => {
  return (
    <article className="py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-screen-lg mx-auto">
        <h1 className="text-4xl font-bold mb-4">{meta.title}</h1>
        <p className="text-gray-500 text-sm mb-10">
          {new Date(meta.date).toLocaleDateString()}
        </p>
        <div className="prose prose-xl">{children}</div>
      </div>
    </article>
  );
};

export default BlogPostLayout;
